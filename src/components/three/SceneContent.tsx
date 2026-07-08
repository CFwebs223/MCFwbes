'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { scrollStore } from '@/lib/scroll-store';

const BLOCK_COUNT = 28;

function useBlockLayout() {
  return useMemo(() => {
    const scattered: THREE.Vector3[] = [];
    const assembled: THREE.Vector3[] = [];
    const cols = 7;
    const rows = Math.ceil(BLOCK_COUNT / cols);
    for (let i = 0; i < BLOCK_COUNT; i++) {
      scattered.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 14,
          (Math.random() - 0.5) * 10 - 2,
          (Math.random() - 0.5) * 10 - 4
        )
      );
      const col = i % cols;
      const row = Math.floor(i / cols);
      assembled.push(
        new THREE.Vector3((col - (cols - 1) / 2) * 1.15, (row - (rows - 1) / 2) * 1.15, 0)
      );
    }
    return { scattered, assembled };
  }, []);
}

function clamp01(v: number) {
  return Math.min(1, Math.max(0, v));
}

// Remaps global progress [0,1] into a band's local [0,1], clamped outside the band.
function bandProgress(progress: number, start: number, end: number) {
  return clamp01((progress - start) / (end - start));
}

function WireframeGrid() {
  const ref = useRef<THREE.GridHelper>(null);

  useFrame(({ clock }) => {
    const progress = scrollStore.get();
    if (!ref.current) return;
    const fade = 1 - bandProgress(progress, 0, 0.32);
    (ref.current.material as THREE.Material).opacity = 0.35 * fade;
    ref.current.position.y = -3 + Math.sin(clock.elapsedTime * 0.3) * 0.15;
    ref.current.rotation.y = clock.elapsedTime * 0.03;
  });

  return (
    <gridHelper
      ref={ref}
      args={[40, 40, '#eab308', '#eab308']}
      position={[0, -3, 0]}
      material-transparent
      material-opacity={0.35}
    />
  );
}

function StructureBlocks() {
  const groupRef = useRef<THREE.Group>(null);
  const { scattered, assembled } = useBlockLayout();
  const materialsRef = useRef<THREE.MeshStandardMaterial[]>([]);

  useFrame(({ clock }) => {
    const progress = scrollStore.get();
    const assemble = bandProgress(progress, 0.18, 0.5);
    const colorize = bandProgress(progress, 0.45, 0.72);
    const launch = bandProgress(progress, 0.74, 1);

    if (!groupRef.current) return;
    groupRef.current.rotation.y = clock.elapsedTime * 0.06 + progress * Math.PI * 0.5;
    groupRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.2) * 0.05;

    groupRef.current.children.forEach((child, i) => {
      const mesh = child as THREE.Mesh;
      const from = scattered[i];
      const to = assembled[i];
      const eased = assemble * assemble * (3 - 2 * assemble); // smoothstep

      const basePos = from.clone().lerp(to, eased);

      if (launch > 0) {
        const outward = to.clone().normalize().multiplyScalar(1 + launch * 10);
        basePos.add(outward.multiplyScalar(launch));
        mesh.scale.setScalar(Math.max(0.001, 1 - launch));
      } else {
        mesh.scale.setScalar(0.4 + eased * 0.6);
      }

      mesh.position.copy(basePos);
      mesh.rotation.x = (1 - eased) * i * 0.3 + clock.elapsedTime * 0.1;
      mesh.rotation.z = (1 - eased) * i * 0.2;

      const material = materialsRef.current[i];
      if (material) {
        const wireframeColor = new THREE.Color('#eab308');
        const finalColor = new THREE.Color(i % 2 === 0 ? '#22d3ee' : '#eab308');
        material.color.copy(wireframeColor).lerp(finalColor, colorize);
        material.emissive.copy(finalColor).multiplyScalar(colorize * 0.6);
        material.wireframe = colorize < 0.05;
        material.opacity = 1 - launch;
        material.transparent = true;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {scattered.map((_, i) => (
        <mesh key={i}>
          <boxGeometry args={[0.7, 0.7, 0.7]} />
          <meshStandardMaterial
            ref={(m) => {
              if (m) materialsRef.current[i] = m;
            }}
            color="#eab308"
            wireframe
            transparent
          />
        </mesh>
      ))}
    </group>
  );
}

function ParticleBurst() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 400;

  const { positions, directions } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const directions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const dir = new THREE.Vector3(
        Math.random() - 0.5,
        Math.random() - 0.5,
        Math.random() - 0.5
      ).normalize();
      positions[i * 3] = 0;
      positions[i * 3 + 1] = 0;
      positions[i * 3 + 2] = 0;
      directions[i * 3] = dir.x;
      directions[i * 3 + 1] = dir.y;
      directions[i * 3 + 2] = dir.z;
    }
    return { positions, directions };
  }, []);

  useFrame(() => {
    const progress = scrollStore.get();
    const launch = bandProgress(progress, 0.72, 1);
    if (!pointsRef.current) return;
    const geom = pointsRef.current.geometry;
    const posAttr = geom.getAttribute('position') as THREE.BufferAttribute;
    for (let i = 0; i < count; i++) {
      const dist = launch * (4 + (i % 12));
      posAttr.setXYZ(
        i,
        directions[i * 3] * dist,
        directions[i * 3 + 1] * dist,
        directions[i * 3 + 2] * dist
      );
    }
    posAttr.needsUpdate = true;
    const material = pointsRef.current.material as THREE.PointsMaterial;
    material.opacity = launch;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#67e8f9" size={0.06} transparent opacity={0} />
    </points>
  );
}

function IdleCamera() {
  useFrame(({ camera, clock }) => {
    const progress = scrollStore.get();
    camera.position.x = Math.sin(clock.elapsedTime * 0.15) * 0.6;
    camera.position.y = 0.4 + Math.cos(clock.elapsedTime * 0.12) * 0.3 - progress * 1.5;
    camera.position.z = 9 - progress * 3.5;
    camera.lookAt(0, -progress * 1.2, 0);
  });
  return null;
}

export default function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#eab308" />
      <pointLight position={[-5, -3, -5]} intensity={0.8} color="#22d3ee" />
      <IdleCamera />
      <WireframeGrid />
      <StructureBlocks />
      <ParticleBurst />
    </>
  );
}

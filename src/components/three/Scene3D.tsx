'use client';

import { Canvas } from '@react-three/fiber';
import SceneContent from './SceneContent';

export default function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0.4, 9], fov: 50 }}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
        onCreated={({ gl }) => gl.setClearColor('#000000', 1)}
      >
        <SceneContent />
      </Canvas>
    </div>
  );
}

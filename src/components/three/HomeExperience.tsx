'use client';

import dynamic from 'next/dynamic';
import { useSceneCapability } from './useSceneCapability';
import Scene3DStatic from './Scene3DStatic';

const Scene3D = dynamic(() => import('./Scene3D'), { ssr: false });
const HomeScrollController = dynamic(() => import('./HomeScrollController'), { ssr: false });

export default function HomeExperience() {
  const capability = useSceneCapability();

  if (capability === 'checking') {
    return <div className="fixed inset-0 -z-10 bg-black" aria-hidden="true" />;
  }

  if (capability === 'static') {
    return <Scene3DStatic />;
  }

  return (
    <>
      <Scene3D />
      <HomeScrollController />
    </>
  );
}

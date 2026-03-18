'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { RingSculpture } from './ring-sculpture'

export function HeroCanvas() {
  return (
    <Suspense fallback={<div className="h-full w-full" />}>
      <Canvas camera={{ position: [0, 0, 4.5], fov: 42 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 5, 3]} intensity={2.4} />
        <directionalLight position={[-3, -2, 2]} intensity={1.1} />
        <RingSculpture />
        <Environment preset="city" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.45}
        />
      </Canvas>
    </Suspense>
  )
}
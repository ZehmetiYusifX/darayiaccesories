'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

export function RingSculpture() {
  const ref = useRef<THREE.Group | null>(null)

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.45
    ref.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.65) * 0.18
  })

  return (
    <Float speed={1.2} rotationIntensity={0.7} floatIntensity={1.1}>
      <group ref={ref}>
        <mesh castShadow receiveShadow>
          <torusGeometry args={[1.45, 0.22, 32, 200]} />
          <meshStandardMaterial
            metalness={0.95}
            roughness={0.14}
            color="#d8c7a6"
          />
        </mesh>

        <mesh position={[0, 0.14, 0]} rotation={[Math.PI / 2.2, 0.2, 0.3]}>
          <torusGeometry args={[0.58, 0.06, 20, 100]} />
          <meshStandardMaterial
            metalness={1}
            roughness={0.08}
            color="#f2ebe1"
          />
        </mesh>
      </group>
    </Float>
  )
}
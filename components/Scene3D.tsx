'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function FloatingSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[2.5, 64, 64]} scale={1.8}>
      <MeshDistortMaterial
        color="#00f5ff"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0}
        metalness={0.8}
      />
    </Sphere>
  );
}

export default function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 12] }} style={{ height: '100vh' }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <FloatingSphere />
    </Canvas>
  );
}


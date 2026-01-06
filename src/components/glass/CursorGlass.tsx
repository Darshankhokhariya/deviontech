"use client"; // Required for Next.js 13+ app directory

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

export default function CursorGlass() {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
      camera={{ position: [0, 0, 10], fov: 50 }}
      gl={{ alpha: true }}
    >
      <GlassSphere />
    </Canvas>
  );
}

function GlassSphere() {
  const mesh = useRef();
  const { pointer, viewport } = useThree();

  useFrame(() => {
    if (!mesh.current) return;
    const x = (pointer.x * viewport.width) / 2;
    const y = (pointer.y * viewport.height) / 2;
    mesh.current.position.lerp(new THREE.Vector3(x, y, 0), 0.15);
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <MeshTransmissionMaterial
        color="#ffffff"
        thickness={2}
        roughness={0}
        ior={1.2}
        chromaticAberration={0.05}
        anisotropy={0.1}
      />
    </mesh>
  );
}

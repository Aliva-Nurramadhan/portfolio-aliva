"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface MascotModelProps {
  cursorX?: number;
  cursorY?: number;
}

export function MascotModel({ cursorX = 0, cursorY = 0 }: MascotModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const leftEyeRef = useRef<THREE.Mesh>(null);
  const rightEyeRef = useRef<THREE.Mesh>(null);
  const leftLidRef = useRef<THREE.Mesh>(null);
  const rightLidRef = useRef<THREE.Mesh>(null);

  // Blink state
  const blinkState = useRef({ timer: 0, isBlinking: false, nextBlink: 3 });

  // Material (monochrome)
  const bodyMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#e0e0e0", roughness: 0.6, metalness: 0.1 }),
    []
  );
  const eyeMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#1a1a1a", roughness: 0.3 }),
    []
  );
  const lidMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#e0e0e0", roughness: 0.6, metalness: 0.1 }),
    []
  );

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const time = state.clock.getElapsedTime();

    // ─── Breathing (scale pulse) ───
    const breathe = 1 + Math.sin(time * 1.5) * 0.015;
    groupRef.current.scale.set(breathe, breathe, breathe);

    // ─── Floating (subtle y bounce) ───
    groupRef.current.position.y = Math.sin(time * 0.8) * 0.08;

    // ─── Head tilt toward cursor ───
    const targetRotY = cursorX * 0.3;
    const targetRotX = -cursorY * 0.15;
    groupRef.current.rotation.y +=
      (targetRotY - groupRef.current.rotation.y) * 0.05;
    groupRef.current.rotation.x +=
      (targetRotX - groupRef.current.rotation.x) * 0.05;

    // ─── Idle head sway ───
    groupRef.current.rotation.z = Math.sin(time * 0.5) * 0.03;

    // ─── Eyes follow cursor ───
    const eyeOffsetX = cursorX * 0.03;
    const eyeOffsetY = cursorY * 0.02;
    if (leftEyeRef.current) {
      leftEyeRef.current.position.x = -0.22 + eyeOffsetX;
      leftEyeRef.current.position.y = 0.15 + eyeOffsetY;
    }
    if (rightEyeRef.current) {
      rightEyeRef.current.position.x = 0.22 + eyeOffsetX;
      rightEyeRef.current.position.y = 0.15 + eyeOffsetY;
    }

    // ─── Blink animation ───
    blinkState.current.timer += delta;
    if (
      !blinkState.current.isBlinking &&
      blinkState.current.timer > blinkState.current.nextBlink
    ) {
      blinkState.current.isBlinking = true;
      blinkState.current.timer = 0;
    }

    if (blinkState.current.isBlinking) {
      const blinkProgress = blinkState.current.timer / 0.15; // 150ms blink
      const lidScale =
        blinkProgress < 0.5
          ? blinkProgress * 2 // close
          : 2 - blinkProgress * 2; // open

      if (leftLidRef.current) leftLidRef.current.scale.y = Math.max(0.01, lidScale);
      if (rightLidRef.current) rightLidRef.current.scale.y = Math.max(0.01, lidScale);

      if (blinkProgress >= 1) {
        blinkState.current.isBlinking = false;
        blinkState.current.timer = 0;
        blinkState.current.nextBlink = 2 + Math.random() * 4;
        if (leftLidRef.current) leftLidRef.current.scale.y = 0.01;
        if (rightLidRef.current) rightLidRef.current.scale.y = 0.01;
      }
    }
  });

  return (
    <group ref={groupRef}>
      {/* Body — rounded blob shape */}
      <mesh material={bodyMaterial}>
        <sphereGeometry args={[0.7, 32, 32]} />
      </mesh>

      {/* Head bump (slightly larger sphere on top) */}
      <mesh position={[0, 0.55, 0]} material={bodyMaterial}>
        <sphereGeometry args={[0.45, 32, 32]} />
      </mesh>

      {/* Left ear */}
      <mesh position={[-0.35, 0.9, 0]} material={bodyMaterial}>
        <sphereGeometry args={[0.12, 16, 16]} />
      </mesh>

      {/* Right ear */}
      <mesh position={[0.35, 0.9, 0]} material={bodyMaterial}>
        <sphereGeometry args={[0.12, 16, 16]} />
      </mesh>

      {/* Left eye */}
      <mesh
        ref={leftEyeRef}
        position={[-0.22, 0.6, 0.38]}
        material={eyeMaterial}
      >
        <sphereGeometry args={[0.07, 16, 16]} />
      </mesh>

      {/* Right eye */}
      <mesh
        ref={rightEyeRef}
        position={[0.22, 0.6, 0.38]}
        material={eyeMaterial}
      >
        <sphereGeometry args={[0.07, 16, 16]} />
      </mesh>

      {/* Left eyelid (for blink) */}
      <mesh
        ref={leftLidRef}
        position={[-0.22, 0.67, 0.39]}
        material={lidMaterial}
        scale={[1, 0.01, 1]}
      >
        <boxGeometry args={[0.18, 0.14, 0.06]} />
      </mesh>

      {/* Right eyelid (for blink) */}
      <mesh
        ref={rightLidRef}
        position={[0.22, 0.67, 0.39]}
        material={lidMaterial}
        scale={[1, 0.01, 1]}
      >
        <boxGeometry args={[0.18, 0.14, 0.06]} />
      </mesh>

      {/* Mouth — small curved shape */}
      <mesh position={[0, 0.42, 0.42]} rotation={[0.1, 0, 0]}>
        <torusGeometry args={[0.06, 0.015, 8, 16, Math.PI]} />
        <meshStandardMaterial color="#333333" roughness={0.5} />
      </mesh>

      {/* Left arm */}
      <mesh position={[-0.65, -0.1, 0]} rotation={[0, 0, 0.4]} material={bodyMaterial}>
        <capsuleGeometry args={[0.08, 0.25, 8, 16]} />
      </mesh>

      {/* Right arm */}
      <mesh position={[0.65, -0.1, 0]} rotation={[0, 0, -0.4]} material={bodyMaterial}>
        <capsuleGeometry args={[0.08, 0.25, 8, 16]} />
      </mesh>

      {/* Left foot */}
      <mesh position={[-0.25, -0.7, 0.05]} material={bodyMaterial}>
        <sphereGeometry args={[0.15, 16, 16]} />
      </mesh>

      {/* Right foot */}
      <mesh position={[0.25, -0.7, 0.05]} material={bodyMaterial}>
        <sphereGeometry args={[0.15, 16, 16]} />
      </mesh>
    </group>
  );
}

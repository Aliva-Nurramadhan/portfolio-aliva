"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { MascotModel } from "./MascotModel";
import { useCursorPosition } from "@/hooks/useCursorPosition";

interface MascotSceneProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "h-[200px] w-[200px]",
  md: "h-[280px] w-[280px]",
  lg: "h-[320px] w-[320px] md:h-[380px] md:w-[380px]",
};

export function MascotScene({ className, size = "lg" }: MascotSceneProps) {
  const { normalized } = useCursorPosition();

  return (
    <div className={`${sizeMap[size]} ${className ?? ""}`}>
      <Canvas
        camera={{ position: [0, 0.3, 3.5], fov: 40 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight
            position={[3, 4, 5]}
            intensity={0.8}
            castShadow={false}
          />
          <directionalLight
            position={[-2, 2, 3]}
            intensity={0.3}
          />
          <MascotModel cursorX={normalized.x} cursorY={normalized.y} />
          <Environment preset="studio" environmentIntensity={0.3} />
        </Suspense>
      </Canvas>
    </div>
  );
}

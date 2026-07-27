'use client';

import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function NeuralNetwork({ count = 70 }: { count?: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const { viewport, mouse } = useThree();

  const { positions, velocities, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const colorPalette = [
      new THREE.Color('#3b82f6'), // Blue
      new THREE.Color('#60a5fa'), // Light blue
      new THREE.Color('#818cf8'), // Indigo
      new THREE.Color('#38bdf8'), // Sky
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;

      vel[i * 3] = (Math.random() - 0.5) * 0.015;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.015;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.008;

      const c = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return { positions: pos, velocities: vel, colors: col };
  }, [count]);

  const lineGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const maxLines = (count * (count - 1)) / 2;
    const linePos = new Float32Array(maxLines * 6);
    const lineCol = new Float32Array(maxLines * 6);
    geo.setAttribute('position', new THREE.BufferAttribute(linePos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(lineCol, 3));
    return geo;
  }, [count]);

  const pointGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return geo;
  }, [positions, colors]);

  useFrame((state, delta) => {
    if (!groupRef.current || !linesRef.current || !pointsRef.current) return;

    groupRef.current.rotation.y += delta * 0.05;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;

    const targetX = (mouse.x * viewport.width) / 2;
    const targetY = (mouse.y * viewport.height) / 2;

    const posAttr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
    const posArray = posAttr.array as Float32Array;

    const linePosAttr = linesRef.current.geometry.attributes.position as THREE.BufferAttribute;
    const lineColAttr = linesRef.current.geometry.attributes.color as THREE.BufferAttribute;
    const linePosArray = linePosAttr.array as Float32Array;
    const lineColArray = lineColAttr.array as Float32Array;

    let lineIndex = 0;
    const maxDistance = 3.2;

    for (let i = 0; i < count; i++) {
      let x = posArray[i * 3];
      let y = posArray[i * 3 + 1];
      let z = posArray[i * 3 + 2];

      x += velocities[i * 3];
      y += velocities[i * 3 + 1];
      z += velocities[i * 3 + 2];

      const dxMouse = targetX - x;
      const dyMouse = targetY - y;
      const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
      if (distMouse < 4) {
        x += (dxMouse / distMouse) * 0.008;
        y += (dyMouse / distMouse) * 0.008;
      }

      if (x < -8 || x > 8) velocities[i * 3] *= -1;
      if (y < -8 || y > 8) velocities[i * 3 + 1] *= -1;
      if (z < -4 || z > 4) velocities[i * 3 + 2] *= -1;

      posArray[i * 3] = x;
      posArray[i * 3 + 1] = y;
      posArray[i * 3 + 2] = z;

      for (let j = i + 1; j < count; j++) {
        const x2 = posArray[j * 3];
        const y2 = posArray[j * 3 + 1];
        const z2 = posArray[j * 3 + 2];

        const dx = x - x2;
        const dy = y - y2;
        const dz = z - z2;
        const distSq = dx * dx + dy * dy + dz * dz;

        if (distSq < maxDistance * maxDistance) {
          const dist = Math.sqrt(distSq);
          const alpha = 1.0 - dist / maxDistance;

          linePosArray[lineIndex * 6] = x;
          linePosArray[lineIndex * 6 + 1] = y;
          linePosArray[lineIndex * 6 + 2] = z;
          linePosArray[lineIndex * 6 + 3] = x2;
          linePosArray[lineIndex * 6 + 4] = y2;
          linePosArray[lineIndex * 6 + 5] = z2;

          const r = colors[i * 3] * alpha;
          const g = colors[i * 3 + 1] * alpha;
          const b = colors[i * 3 + 2] * alpha;

          lineColArray[lineIndex * 6] = r;
          lineColArray[lineIndex * 6 + 1] = g;
          lineColArray[lineIndex * 6 + 2] = b;
          lineColArray[lineIndex * 6 + 3] = r;
          lineColArray[lineIndex * 6 + 4] = g;
          lineColArray[lineIndex * 6 + 5] = b;

          lineIndex++;
        }
      }
    }

    posAttr.needsUpdate = true;
    linePosAttr.needsUpdate = true;
    lineColAttr.needsUpdate = true;
    linesRef.current.geometry.setDrawRange(0, lineIndex * 2);
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef} geometry={pointGeometry}>
        <pointsMaterial
          size={0.12}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.45}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}

export default function ThreeBackground() {
  const [nodeCount, setNodeCount] = useState(70);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const isMobile = window.innerWidth < 768;
      const isLowEnd = navigator.hardwareConcurrency ? navigator.hardwareConcurrency <= 4 : false;
      if (isMobile || isLowEnd) {
        setNodeCount(35);
      } else {
        setNodeCount(75);
      }
    }
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-90">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.5} />
        <NeuralNetwork count={nodeCount} />
      </Canvas>
    </div>
  );
}

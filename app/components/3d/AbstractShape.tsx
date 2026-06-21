"use client";

import React, { useRef, Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { IMAGE_CARD_BG } from '@/app/lib/imageTheme';

function ImageCard() {
    const meshRef = useRef<THREE.Mesh>(null);
    const texture = useTexture('/images/my-image.svg');

    const { width, height } = useMemo(() => {
        const image = texture.image as { width: number; height: number };
        const aspect = image.width / image.height;
        const cardHeight = 5.5;
        return { width: cardHeight * aspect, height: cardHeight };
    }, [texture]);

    texture.colorSpace = THREE.SRGBColorSpace;

    return (
        <group>
            <mesh position={[0, 0, -0.01]}>
                <planeGeometry args={[width, height]} />
                <meshBasicMaterial color={IMAGE_CARD_BG} toneMapped={false} />
            </mesh>
            <mesh ref={meshRef}>
                <planeGeometry args={[width, height]} />
                <meshBasicMaterial
                    map={texture}
                    toneMapped={false}
                    transparent
                    alphaTest={0.01}
                />
            </mesh>
        </group>
    );
}

export default function ImageCanvas() {
    return (
        <Canvas
            className="w-full h-full"
            style={{ background: IMAGE_CARD_BG }}
            camera={{ position: [0, 0, 7], fov: 45 }}
            gl={{ alpha: false }}
            onCreated={({ gl }) => {
                gl.setClearColor(IMAGE_CARD_BG);
            }}
        >
            <color attach="background" args={[IMAGE_CARD_BG]} />

            <Suspense fallback={null}>
                <ImageCard />
            </Suspense>

            <OrbitControls
                enableZoom={true}
                // autoRotate
                // autoRotateSpeed={1.5}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 3}
            />
        </Canvas>
    );
}
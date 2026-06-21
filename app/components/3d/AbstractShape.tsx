"use client";

import React, { useRef, Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture, Html, Float } from '@react-three/drei';
import * as THREE from 'three';

// ⚠️ VERCEL ERROR ALERT: Ensure folder 'lib' and file 'imageTheme' match EXACT case in your files!
import { IMAGE_CARD_BG } from '@/app/lib/imageTheme'; 

// Professional Loading Spinner while 3D is rendering
function Loader() {
    return (
        <Html center>
            <div className="flex flex-col items-center justify-center">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                <p className="text-primary mt-2 font-semibold text-sm whitespace-nowrap">Loading 3D...</p>
            </div>
        </Html>
    );
}

function ImageCard() {
    const meshRef = useRef<THREE.Mesh>(null);
    
    // Ensure '/images/my-image.svg' exists in your 'public/images/' folder
    const texture = useTexture('/images/my-image.svg');

    const { width, height } = useMemo(() => {
        // Fallback added to prevent WebGL crashes if image delays loading
        if (!texture || !texture.image) return { width: 5.5, height: 5.5 };
        
        const image = texture.image as { width: number; height: number };
        const aspect = (image.width || 1) / (image.height || 1);
        const cardHeight = 5.5;
        return { width: cardHeight * aspect, height: cardHeight };
    }, [texture]);

    texture.colorSpace = THREE.SRGBColorSpace;

    return (
        // Added smooth floating animation for a premium feel
        <Float speed={2} rotationIntensity={0.15} floatIntensity={0.4}>
            <group>
                {/* Background Shadow Plane */}
                <mesh position={[0, 0, -0.01]}>
                    <planeGeometry args={[width, height]} />
                    <meshBasicMaterial color={IMAGE_CARD_BG} toneMapped={false} />
                </mesh>
                
                {/* Main Image Plane */}
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
        </Float>
    );
}

export default function ImageCanvas() {
    return (
        <Canvas
            className="w-full h-full"
            style={{ background: IMAGE_CARD_BG }}
            camera={{ position: [0, 0, 7], fov: 45 }}
            gl={{ alpha: false, antialias: true }}
            onCreated={({ gl }) => {
                gl.setClearColor(IMAGE_CARD_BG);
            }}
        >
            <color attach="background" args={[IMAGE_CARD_BG]} />

            <Suspense fallback={<Loader />}>
                <ImageCard />
            </Suspense>

            <OrbitControls
                enableZoom={false} // Disabled zoom so it doesn't break website scrolling
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.8} // Smooth and slow rotation
                maxPolarAngle={Math.PI / 2 + 0.1}
                minPolarAngle={Math.PI / 2 - 0.1}
            />
        </Canvas>
    );
}
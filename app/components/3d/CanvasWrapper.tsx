"use client";

import dynamic from 'next/dynamic';

const AbstractShape = dynamic(() => import('./AbstractShape'), {
  ssr: false,
  loading: () => (
    <div className="text-center space-y-4 z-10">
      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
      <p className="text-sm text-gray-500 font-mono">Loading 3D Experience...</p>
    </div>
  ),
});

export default function CanvasWrapper() {
  return <AbstractShape />;
}

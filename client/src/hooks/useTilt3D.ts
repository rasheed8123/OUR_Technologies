import { useRef, useState } from 'react';

/**
 * Custom hook for 3D tilt effect on mouse move
 * Calculates rotation based on mouse position relative to element
 * Returns rotation values for Framer Motion transforms
 */

interface TiltValues {
  rotateX: number;
  rotateY: number;
  scale: number;
}

export function useTilt3D() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<TiltValues>({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Calculate rotation angles (max 15 degrees)
    const rotateX = (mouseY / (rect.height / 2)) * 15;
    const rotateY = -(mouseX / (rect.width / 2)) * 15;

    setTilt({
      rotateX,
      rotateY,
      scale: 1.05,
    });
  };

  const handleMouseLeave = () => {
    setTilt({
      rotateX: 0,
      rotateY: 0,
      scale: 1,
    });
  };

  return {
    ref,
    tilt,
    handleMouseMove,
    handleMouseLeave,
  };
}

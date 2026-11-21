"use client";

import {
  useRef,
  useState,
  useEffect,
  PointerEvent as ReactPointerEvent,
  ReactNode,
} from "react";

interface MagneticProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

/**
 * Wraps a button/link and nudges it toward the pointer on hover, snapping
 * back on leave. Pure CSS transform + transition, no extra dependency.
 */
const Magnetic = ({ children, strength = 14, className = "" }: MagneticProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(query.matches);
    const handler = () => setReduceMotion(query.matches);
    query.addEventListener("change", handler);
    return () => query.removeEventListener("change", handler);
  }, []);

  const handleMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    setOffset({ x: relX * strength, y: relY * strength });
  };

  const reset = () => setOffset({ x: 0, y: 0 });

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      className={`inline-block transition-transform duration-200 ease-out will-change-transform ${className}`}
      style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
    >
      {children}
    </div>
  );
};

export default Magnetic;

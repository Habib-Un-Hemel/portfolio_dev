"use client";

import { MotionConfig } from "framer-motion";
import { ReactNode } from "react";

/**
 * Wraps the app so every framer-motion animation automatically respects
 * the user's prefers-reduced-motion setting, without touching each
 * individual component.
 */
const MotionProvider = ({ children }: { children: ReactNode }) => {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
};

export default MotionProvider;

"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";

type FadeInProps = HTMLMotionProps<"div"> & {
  /** Delay in seconds before the animation starts. */
  delay?: number;
  /** Vertical offset (px) the element rises from. */
  y?: number;
};

/**
 * Scroll-triggered fade + rise wrapper.
 * Respects the user's "reduce motion" preference.
 */
export function FadeIn({ delay = 0, y = 16, children, ...rest }: FadeInProps) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduce ? false : { opacity: 0, y }}
      whileInView={shouldReduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

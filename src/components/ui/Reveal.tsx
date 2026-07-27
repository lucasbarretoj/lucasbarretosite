"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

import { motionTokens } from "@/lib/animations";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { y: motionTokens.distance.reveal }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: motionTokens.duration.base, delay, ease: motionTokens.ease }}
    >
      {children}
    </motion.div>
  );
}

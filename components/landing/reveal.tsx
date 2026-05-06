"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

type RevealDirection = "up" | "down" | "left" | "right" | "scale";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
  duration?: number;
};

const getInitialState = (direction: RevealDirection) => {
  if (direction === "left") return { opacity: 0, x: -36 };
  if (direction === "right") return { opacity: 0, x: 36 };
  if (direction === "down") return { opacity: 0, y: -28 };
  if (direction === "scale") return { opacity: 0, scale: 0.96 };

  return { opacity: 0, y: 32 };
};

export const Reveal = ({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.7,
}: RevealProps) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn("will-change-transform", className)}
      initial={getInitialState(direction)}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        delay,
        duration,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

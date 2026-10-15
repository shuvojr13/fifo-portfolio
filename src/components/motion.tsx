"use client";

import {
  motion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

type MotionBaseProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  amount?: number;
  once?: boolean;
  variant?: "fadeUp" | "fadeIn";
};

type MotionDivProps = MotionBaseProps &
  Omit<HTMLMotionProps<"div">, "children" | "className">;

type MotionSectionProps = MotionBaseProps &
  Omit<HTMLMotionProps<"section">, "children" | "className">;

function getTransition(delay: number, duration: number) {
  return { duration, ease, delay };
}

export function MotionDiv({
  children,
  className,
  delay = 0,
  duration = 0.55,
  amount = 0.2,
  once = true,
  variant = "fadeUp",
  ...props
}: MotionDivProps) {
  return (
    <motion.div
      className={className}
      variants={variant === "fadeIn" ? fadeIn : fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={getTransition(delay, duration)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function MotionSection({
  children,
  className,
  delay = 0,
  duration = 0.55,
  amount = 0.15,
  once = true,
  variant = "fadeUp",
  ...props
}: MotionSectionProps) {
  return (
    <motion.section
      className={className}
      variants={variant === "fadeIn" ? fadeIn : fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={getTransition(delay, duration)}
      {...props}
    >
      {children}
    </motion.section>
  );
}

/** Stagger children when they enter the viewport */
export function MotionStagger({
  children,
  className,
  delay = 0,
  stagger = 0.08,
  amount = 0.15,
  once = true,
  ...props
}: MotionDivProps & { stagger?: number }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function MotionItem({
  children,
  className,
  ...props
}: Omit<MotionDivProps, "delay" | "duration" | "amount" | "once" | "variant">) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      transition={{ duration: 0.5, ease }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

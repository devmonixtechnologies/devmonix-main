"use client";

import { motion, useReducedMotion } from 'framer-motion';
import { useMemo } from 'react';

interface AnimationContainerProps {
    children: React.ReactNode;
    delay?: number;
    reverse?: boolean;
    className?: string;
};

const AnimationContainer = ({ children, className, reverse, delay }: AnimationContainerProps) => {
    const shouldReduceMotion = useReducedMotion();

    const variants = useMemo(() => ({
        initial: { opacity: 0, y: shouldReduceMotion ? 0 : (reverse ? -20 : 20) },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                delay: delay || 0,
            },
        },
    }), [shouldReduceMotion, reverse, delay]);

    return (
        <motion.div
            className={className}
            initial={variants.initial}
            animate={variants.animate}
            variants={variants}
        >
            {children}
        </motion.div>
    )
};

export default AnimationContainer

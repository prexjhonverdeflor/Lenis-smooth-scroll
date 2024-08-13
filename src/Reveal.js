// src/components/Reveal.js
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Reveal = ({ children, width = "fit-content", duration = 0.8, initialOpacity = 0, initialY = 50 }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5, // Adjust based on when you want the animation to trigger
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: initialOpacity, y: initialY },
                    visible: { opacity: 1, y: 0, transition: { duration, ease: "easeInOut" } },
                }}
                initial="hidden"
                animate={controls}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Reveal;

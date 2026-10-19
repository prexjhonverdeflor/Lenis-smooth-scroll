// src/components/Reveal.js
import React from 'react';
import { motion } from 'framer-motion';

export const Reveal = ({ children, width = "fit-content", duration = 0.8, initialOpacity = 0, initialY = 50 }) => {
    return (
        <motion.div
            style={{ position: "relative", width, overflow: "hidden" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ hidden: {}, visible: {} }}
        >
            <motion.div
                variants={{
                    hidden: { opacity: initialOpacity, y: initialY },
                    visible: { opacity: 1, y: 0, transition: { duration, ease: "easeInOut" } },
                }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};
export default Reveal;

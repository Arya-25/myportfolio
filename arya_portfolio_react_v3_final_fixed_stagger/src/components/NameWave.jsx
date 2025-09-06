import React from 'react'
import { motion } from 'framer-motion'

export default function NameWave({ name }) {
  const letters = name.split('');
  return (
    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight whitespace-nowrap">
      {letters.map((l, i) => {
        const d = 0.05 * i;
        return (
          <motion.span
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 + d, type: 'spring', stiffness: 120, damping: 14 }}
          >
            <span className={i % 5 === 0 ? 'text-cyber-neon' : ''}>{l}</span>
          </motion.span>
        );
      })}
    </h1>
  );
}

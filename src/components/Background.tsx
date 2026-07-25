import { motion } from 'motion/react';
import React from 'react';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none bg-slate-50 z-0">
      {/* Soft blue blob */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full opacity-30 blur-[120px]"
        style={{ background: '#4F8CFF' }}
      />

      {/* Purple blob */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[40%] -right-[10%] w-[50%] h-[50%] rounded-full opacity-20 blur-[100px]"
        style={{ background: '#7C5CFF' }}
      />
      
      {/* Emerald Green subtle blob for success scenes */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-[20%] left-[20%] w-[40%] h-[40%] rounded-full opacity-10 blur-[100px]"
        style={{ background: '#22C55E' }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 z-0 opacity-50">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.3 + 0.1,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: Math.random() * 40 + 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-2 h-2 rounded-full bg-slate-300"
          />
        ))}
      </div>
      
      {/* Glass overlay */}
      <div className="absolute inset-0 backdrop-blur-[60px] bg-white/20" />
    </div>
  );
};

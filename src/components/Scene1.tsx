import { motion } from 'motion/react';
import React from 'react';

export const Scene1: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 flex flex-col items-center justify-center z-10"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
        className="relative"
      >
        <motion.div 
          animate={{ y: [0, -10, 0] }} 
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <img 
            src="/logo.jpeg" 
            alt="Smart System Club Logo" 
            className="w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-2xl bg-white rounded-full p-2 border-2 border-slate-100"
          />
        </motion.div>
        
        {/* Glowing effect behind logo */}
        <div className="absolute inset-0 bg-[#7C5CFF] rounded-full blur-[60px] opacity-40 -z-10 mix-blend-multiply" />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
        className="mt-12 text-center"
      >
        <h1 className="text-sm md:text-base font-semibold tracking-[0.25em] text-[#4F8CFF] uppercase mb-4">
          Welcome To
        </h1>
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 bg-clip-text">
          Smart System Club
        </h2>
      </motion.div>
      
      {/* Decorative floating UI elements */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute left-[15%] top-[30%] hidden md:block"
      >
        <div className="bg-white/60 backdrop-blur-md border border-white/40 p-4 rounded-2xl shadow-xl">
          <div className="w-24 h-2 bg-slate-200 rounded-full mb-2" />
          <div className="w-16 h-2 bg-[#4F8CFF]/40 rounded-full" />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.7, duration: 1 }}
        className="absolute right-[15%] bottom-[30%] hidden md:block"
      >
        <div className="bg-white/60 backdrop-blur-md border border-white/40 p-4 rounded-2xl shadow-xl flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#7C5CFF] to-[#4F8CFF]" />
          <div>
            <div className="w-20 h-2 bg-slate-800 rounded-full mb-2" />
            <div className="w-12 h-2 bg-slate-300 rounded-full" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

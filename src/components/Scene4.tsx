import { motion } from 'motion/react';
import React, { useEffect, useState } from 'react';
import { Check } from 'lucide-react';

export const Scene4: React.FC = () => {
  const [showBurst, setShowBurst] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBurst(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
      transition={{ duration: 1 }}
      className="absolute inset-0 flex flex-col items-center justify-center z-20"
    >
      <div className="relative flex flex-col items-center">
        {/* Glowing pulse rings */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={`pulse-${i}`}
            initial={{ scale: 0.8, opacity: 0.8 }}
            animate={{ scale: 2.5 + i, opacity: 0 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeOut",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-[#22C55E]/30 bg-[#22C55E]/5 pointer-events-none"
          />
        ))}

        {/* Elegant minimal burst particles */}
        {showBurst && [...Array(12)].map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          return (
            <motion.div
              key={`burst-${i}`}
              initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
              animate={{
                x: Math.cos(angle) * 150,
                y: Math.sin(angle) * 150,
                scale: 1,
                opacity: 0
              }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#22C55E]"
            />
          );
        })}

        {/* Main Success Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
          className="relative z-10 w-32 h-32 rounded-full bg-gradient-to-tr from-[#22C55E] to-emerald-400 flex items-center justify-center shadow-2xl shadow-green-500/40 mb-8"
        >
          <motion.div
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            <Check size={64} color="white" strokeWidth={3} />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          className="text-center relative z-10 px-4"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 uppercase">
            🎉 ASSESSMENT COMPLETED
          </h2>
          <p className="mt-4 text-sm md:text-lg font-medium text-slate-500">
            The shortlisted candidates are ready to be announced.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

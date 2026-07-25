import { motion } from 'motion/react';
import React, { useEffect, useState } from 'react';
import { Terminal, Database, ShieldCheck, FileSearch } from 'lucide-react';

export const Scene2: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  const statuses = [
    { text: "Initializing Recruitment Portal...", icon: Terminal },
    { text: "Loading Applications...", icon: Database },
    { text: "Finalizing Shortlist......", icon: ShieldCheck },
    { text: "Verification Complete...", icon: FileSearch },
  ];

  useEffect(() => {
    const duration = 4000; // total 4 seconds
    const intervalTime = 50;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(newProgress);

      if (newProgress < 25) setStatusIndex(0);
      else if (newProgress < 50) setStatusIndex(1);
      else if (newProgress < 75) setStatusIndex(2);
      else setStatusIndex(3);

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const Icon = statuses[statusIndex].icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4"
    >
      <div className="w-full max-w-3xl bg-white/70 backdrop-blur-xl border border-white rounded-[24px] md:rounded-[32px] p-6 md:p-12 shadow-2xl shadow-blue-900/5 relative overflow-hidden">
        {/* Subtle shimmer over the whole card */}
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8 md:mb-12">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#4F8CFF] flex items-center justify-center shadow-inner border border-blue-100 flex-shrink-0 relative overflow-hidden">
            <motion.div
              key={statusIndex}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <Icon size={24} strokeWidth={2.5} />
            </motion.div>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold text-slate-900">Shortlist Verification</h3>
            <p className="text-xs md:text-sm font-medium text-slate-500">Smart System Club • Developer Recruitment 2026</p>
          </div>
        </div>

        <div className="space-y-4 md:space-y-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2">
            <motion.div 
              key={statuses[statusIndex].text}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-sm md:text-lg font-medium text-slate-700"
            >
              {statuses[statusIndex].text}
            </motion.div>
            <div className="text-xl md:text-2xl font-bold text-[#4F8CFF]">
              {Math.round(progress)}%
            </div>
          </div>
          
          <div className="h-3 md:h-4 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner border border-slate-200/50">
            <motion.div 
              className="h-full bg-gradient-to-r from-[#4F8CFF] to-[#7C5CFF] rounded-full relative"
              style={{ width: `${progress}%` }}
              layout
            >
              <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_1s_infinite] -skew-x-12" />
            </motion.div>
          </div>
        </div>

        {/* Decorative dashboard mock elements */}
        <div className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 opacity-60">
          {[1, 2, 3].map((i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className={`h-20 md:h-24 rounded-2xl bg-slate-50 border border-slate-100 p-3 md:p-4 flex flex-col justify-between ${i === 3 ? 'hidden md:flex' : ''}`}
            >
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-slate-200" />
              <div className="w-full h-1.5 md:h-2 bg-slate-200 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

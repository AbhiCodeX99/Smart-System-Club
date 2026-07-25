import { motion } from 'motion/react';
import React, { useEffect, useState } from 'react';
import { Check, CheckCircle2 } from 'lucide-react';

export const Scene3: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    "Application Review",
"Candidate Verification",
    "Group Discussion",
    "Technical Assessment",
    "Personal Interview",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStage(prev => {
        if (prev < stages.length) return prev + 1;
        return prev;
      });
    }, 800); // Progress every 800ms

    return () => clearInterval(timer);
  }, [stages.length]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -40, filter: 'blur(10px)' }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 flex flex-col items-center justify-start md:justify-center z-10 px-4 py-12 md:py-0 overflow-y-auto no-scrollbar"
    >
      <div className="text-center mb-8 md:mb-12 mt-8 md:mt-0">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 md:mb-4 tracking-tight">
          Candidate Assessment
        </h2>
        <p className="text-slate-500 font-medium text-sm md:text-base">Reviewing applications for the Smart System Club Developer Recruitment.</p>
      </div>

      <div className="w-full max-w-2xl bg-white/50 backdrop-blur-md rounded-[24px] md:rounded-[32px] border border-white p-4 md:p-6 shadow-xl space-y-3 md:space-y-4 relative overflow-hidden pb-12 md:pb-6">
        
        {/* Subtle animated background gradient for the card */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/50 to-purple-50/50 -z-10" />

        {stages.map((stage, index) => {
          const isComplete = index < activeStage;
          const isActive = index === activeStage;
          const isPending = index > activeStage;

          return (
            <motion.div
              key={stage}
              layout
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 300, damping: 30 }}
              className={`flex items-center justify-between p-4 md:p-5 rounded-[16px] md:rounded-2xl border transition-all duration-500 ${
                isComplete 
                  ? 'bg-white border-green-100 shadow-sm' 
                  : isActive 
                    ? 'bg-blue-50 border-blue-200 shadow-md ring-2 ring-blue-500/20' 
                    : 'bg-slate-50/50 border-slate-100 text-slate-400'
              }`}
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-colors duration-500 flex-shrink-0 ${
                  isComplete ? 'bg-green-100 text-green-600' : isActive ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' : 'bg-slate-200 text-slate-400'
                }`}>
                  {isComplete ? (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
                      <Check strokeWidth={3} size={16} className="md:w-5 md:h-5" />
                    </motion.div>
                  ) : isActive ? (
                    <motion.div 
                      animate={{ rotate: 360 }} 
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <span className="font-semibold text-xs md:text-sm">{index + 1}</span>
                  )}
                </div>
                <span className={`font-semibold text-sm md:text-lg transition-colors duration-500 ${
                  isComplete ? 'text-slate-900' : isActive ? 'text-blue-900' : 'text-slate-400'
                }`}>
                  {stage}
                </span>
              </div>
              
              {isComplete && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                   <CheckCircle2 className="text-green-500 w-5 h-5 md:w-6 md:h-6" />
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

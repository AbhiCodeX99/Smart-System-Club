import { AnimatePresence, motion } from 'motion/react';
import React, { useEffect, useState } from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';

export const Scene5: React.FC = () => {
  const candidates = [
    { name: "Preeti Gupta ", role: "Full Stack Developer" },
    { name: "Saumya Sarma", role: "Full Stack Developer" },
    { name: "Arnav Pethkar ", role: "Full Stack Developer" },
    { name: "Harsha Singh ", role: "Frontend Developer" },
    { name: "Pranay Chandra", role: "Frontend Developer" },
    { name: "Shubham Gawas", role: "Frontend Developer" },
    { name: "Srivarun bahurothu ", role: "Full Stack Developer" },
    { name: "Shaikh Ayman Abdul Majeed", role: "Frontend Developer" },
    { name: "Chandrey Biswas", role: "Full Stack Developer" },
    { name: "Ayush Gupta ", role: "Full Stack Developer" },
    { name: "Kaushik Arundathiyar", role: "Full Stack Developer" }
  ];

  const ITEMS_PER_PAGE = 4;
  const [page, setPage] = useState(0);

  useEffect(() => {
    const totalPages = Math.ceil(candidates.length / ITEMS_PER_PAGE);
    const timer = setInterval(() => {
      setPage(p => {
        if (p < totalPages - 1) return p + 1;
        return p; // stop at last page
      });
    }, 5000); // Change page every 5 seconds
    
    return () => clearInterval(timer);
  }, [candidates.length]);

  const currentCandidates = candidates.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 120, 
        damping: 20 
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50, filter: 'blur(10px)' }}
      transition={{ duration: 1 }}
      className="absolute inset-0 flex flex-col items-center justify-start md:justify-center z-20 px-4 py-12 md:py-0 overflow-y-auto overflow-x-hidden no-scrollbar"
    >
      <div className="text-center mb-8 md:mb-16 mt-8 md:mt-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest shadow-sm"
        >
          <Sparkles size={14} />
          <span>SMART SYSTEM CLUB </span>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight"
        >
          Shortlisted Candidates
        </motion.h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="h-1 w-24 bg-gradient-to-r from-[#4F8CFF] to-[#7C5CFF] mx-auto mt-6 rounded-full"
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={page}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
          className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pb-20 md:pb-0"
        >
          {currentCandidates.map((candidate, i) => (
            <motion.div
              key={candidate.name}
              variants={cardVariants}
              className="group relative"
            >
              {/* Glowing aura effect behind card */}
              <div className="absolute -inset-0.5 bg-gradient-to-tr from-[#4F8CFF] to-[#7C5CFF] rounded-[24px] md:rounded-[32px] blur opacity-0 group-hover:opacity-30 transition duration-700" />
              
              <div className="relative flex items-center justify-between p-5 md:p-8 bg-white/80 backdrop-blur-xl border border-white/80 rounded-[24px] md:rounded-[32px] shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-[#4F8CFF]/10 transition-all duration-500 overflow-hidden transform group-hover:-translate-y-1">
                
                {/* Premium shine effect across card */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />

                <div className="flex items-center gap-4 md:gap-6 z-10 w-full">
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-tr from-green-50 to-emerald-100 text-[#22C55E] flex items-center justify-center shadow-inner border border-green-200 relative overflow-hidden">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 + i * 0.2, bounce: 0.5 }}
                    >
                      <CheckCircle2 size={28} strokeWidth={2.5} className="md:w-8 md:h-8" />
                    </motion.div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight truncate">{candidate.name}</h3>
                    <div className="flex flex-wrap items-center mt-1 gap-x-2 gap-y-1">
                      <p className="text-[10px] md:text-sm font-bold tracking-wide text-slate-500 uppercase truncate">{candidate.role}</p>
                      <span className="text-[#4F8CFF] text-[10px] md:text-sm hidden sm:inline-block">•</span>
                      <p className="text-[10px] md:text-sm font-bold tracking-widest text-[#4F8CFF] uppercase bg-blue-50/50 px-2 py-0.5 rounded-full border border-blue-100/50 whitespace-nowrap">Selected</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative background element inside card */}
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-slate-50 to-transparent -z-0 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

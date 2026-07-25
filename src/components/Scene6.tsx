import { motion } from 'motion/react';
import React from 'react';
import { RotateCcw } from 'lucide-react';

interface Scene6Props {
  onRestart: () => void;
}

export const Scene6: React.FC<Scene6Props> = ({ onRestart }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
      className="absolute inset-0 flex flex-col items-center justify-center z-30 px-6 text-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.2, type: 'spring', damping: 25 }}
        className="mb-12"
      >
        <img 
          src="/logo.jpeg" 
          alt="Smart System Club Logo" 
          className="w-28 h-28 md:w-40 md:h-40 mx-auto drop-shadow-xl object-contain bg-white rounded-full p-2 border-2 border-slate-100"
        />
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
      >
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 uppercase leading-tight max-w-4xl mx-auto">
          CONGRATULATIONS! <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F8CFF] to-[#7C5CFF]">
            YOU ARE SHORTLISTED
          </span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 1, ease: 'easeOut' }}
        className="mt-8 max-w-2xl"
      >
        <p className="text-xl md:text-2xl font-medium text-slate-600 leading-relaxed">
<span className="font-bold text-slate-900">You have successfully qualified for the next stage of the
Smart System Club Developer Recruitment.</span>See you at the Personal Interview
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 3, duration: 1, ease: 'easeOut' }}
        className="mt-16"
      >
        <button
          onClick={onRestart}
          className="group relative inline-flex items-center justify-center gap-3 bg-white/70 backdrop-blur-xl border border-white text-slate-900 px-8 py-4 rounded-full font-bold overflow-hidden transition-all hover:scale-105 hover:bg-white hover:shadow-2xl hover:shadow-[#4F8CFF]/20 active:scale-95 z-50"
        >
          <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-[#4F8CFF]/10 to-transparent skew-x-12" />
          <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-200 group-hover:border-blue-200 transition-colors">
            <RotateCcw size={18} className="text-[#4F8CFF] group-hover:-rotate-180 transition-transform duration-700 ease-in-out" />
          </div>
          <span className="tracking-wide">Continue</span>
        </button>
      </motion.div>

      {/* Decorative Final Flares */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 2 }}
        className="absolute inset-0 pointer-events-none -z-10 overflow-hidden"
      >
        <div className="absolute top-[10%] left-[10%] w-[60%] h-[60%] bg-[#4F8CFF]/20 rounded-full blur-[140px] mix-blend-multiply animate-[spin_20s_linear_infinite]" />
        <div className="absolute bottom-[10%] right-[10%] w-[60%] h-[60%] bg-[#7C5CFF]/20 rounded-full blur-[140px] mix-blend-multiply animate-[spin_25s_linear_infinite_reverse]" />
      </motion.div>
    </motion.div>
  );
};

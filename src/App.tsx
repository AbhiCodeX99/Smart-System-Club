import { AnimatePresence, motion } from 'motion/react';
import React, { useEffect, useState, useCallback } from 'react';
import { Background } from './components/Background';
import { Scene1 } from './components/Scene1';
import { Scene2 } from './components/Scene2';
import { Scene3 } from './components/Scene3';
import { Scene4 } from './components/Scene4';
import { Scene5 } from './components/Scene5';
import { Scene6 } from './components/Scene6';
import { Play } from 'lucide-react';

export default function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [scene, setScene] = useState(0);

  const startPresentation = useCallback(() => {
    setHasStarted(true);
    setScene(1);
  }, []);

  const resetPresentation = useCallback(() => {
    setHasStarted(false);
    setScene(0);
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    // Timing in milliseconds for each scene
    const timings = [
      0,      // Scene 0: Not used once started
      5000,   // Scene 1: Logo Reveal (5s)
      4500,   // Scene 2: Loading Dashboard (4.5s)
      5000,   // Scene 3: Workflow (5s)
      4000,   // Scene 4: Success (4s)
      15000,  // Scene 5: Candidates (15s - 3 pages x 5s)
      0       // Scene 6: Final (infinite)
    ];

    const currentDuration = timings[scene];
    
    if (currentDuration > 0) {
      const timer = setTimeout(() => {
        setScene(s => s + 1);
      }, currentDuration);
      return () => clearTimeout(timer);
    }
  }, [hasStarted, scene]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 flex items-center justify-center">
      <Background />
      
      {!hasStarted ? (
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className="relative z-50 text-center px-4"
        >
          <div className="bg-white/80 backdrop-blur-2xl p-6 sm:p-10 md:p-14 rounded-[32px] md:rounded-[48px] shadow-2xl shadow-blue-900/10 border border-white/80 max-w-[90%] sm:max-w-lg mx-auto relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1, type: "spring" }}
              className="mb-8 flex justify-center"
            >
              <img 
                src="/logo.jpeg" 
                alt="Smart System Club Logo" 
                className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-xl bg-white rounded-full p-2 border-2 border-slate-100"
              />
            </motion.div>

            <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-3 tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-slate-900 to-slate-600">Smart System Club</h1>
            <p className="text-slate-500 mb-10 font-semibold md:text-lg">Shortlisted Candidates Announcement</p>
            
            <button
              onClick={startPresentation}
              className="group relative inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-semibold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl hover:shadow-blue-500/30"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#4F8CFF] to-[#7C5CFF] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
              <div className="relative z-10 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                <Play className="ml-1" fill="currentColor" size={20} />
              </div>
              <span className="relative z-10 tracking-wide">View Shortlist</span>
            </button>
          </div>
        </motion.div>
      ) : (
        <AnimatePresence mode="wait">
          {scene === 1 && <Scene1 key="scene1" />}
          {scene === 2 && <Scene2 key="scene2" />}
          {scene === 3 && <Scene3 key="scene3" />}
          {scene === 4 && <Scene4 key="scene4" />}
          {scene === 5 && <Scene5 key="scene5" />}
          {scene === 6 && <Scene6 key="scene6" onRestart={resetPresentation} />}
        </AnimatePresence>
      )}
    </div>
  );
}

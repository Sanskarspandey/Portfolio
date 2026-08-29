import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const duration = 1200; // total duration in ms
    const intervalTime = 16;
    const totalSteps = duration / intervalTime;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      // Non-linear realistic progress curve
      const ratio = step / totalSteps;
      const easedRatio = Math.min(1, Math.pow(ratio, 0.85));
      const currentVal = Math.floor(easedRatio * 100);

      setProgress(currentVal);

      if (step >= totalSteps || currentVal >= 100) {
        clearInterval(interval);
        setProgress(100);
        setTimeout(() => {
          setIsCompleted(true);
          setTimeout(() => {
            if (onFinish) onFinish();
          }, 400);
        }, 200);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onFinish]);

  const activeBars = Math.floor(progress / 10);
  const formattedProgress = String(progress).padStart(3, '0');

  return (
    <AnimatePresence>
      {!isCompleted && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -25, filter: 'blur(10px)', transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#08080A] select-none"
        >
          {/* Subtle radial background glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(201, 168, 118, 0.05) 0%, transparent 100%)'
            }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-6 relative z-10"
          >
            {/* 10-bar segmented indicator */}
            <div className="w-[300px] sm:w-[340px] h-[44px] border-2 border-white/20 rounded-lg p-1.5 flex gap-1.5 relative overflow-hidden bg-black/40 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.8)]">
              {Array.from({ length: 10 }).map((_, index) => {
                const isActive = index < activeBars || (index === activeBars && progress % 10 > 0);
                return (
                  <div
                    key={index}
                    className="h-full flex-1 relative bg-white/[0.05] rounded-[2px] overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-white via-[#F2EFE9] to-[#C9A876] rounded-[2px] shadow-[0_0_8px_rgba(201,168,118,0.4)]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.15 }}
                    />
                  </div>
                );
              })}
            </div>

            {/* Monospace status ticker */}
            <div className="flex justify-between w-[300px] sm:w-[340px] px-1 items-end">
              <div className="flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E8D2A6] animate-pulse"></span>
                <p className="font-mono text-[#E8D2A6]/90 text-[11px] uppercase tracking-[0.4em] font-medium ml-[0.1em]">
                  INITIALIZING...
                </p>
              </div>
              <p className="font-mono text-white text-sm font-semibold tracking-wider">
                {formattedProgress}%
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

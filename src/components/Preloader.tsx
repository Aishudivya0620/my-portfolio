import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
          }}
          className="fixed inset-0 z-[100] bg-[#030712] flex items-center justify-center overflow-hidden"
        >
          <div className="relative">
             <motion.div
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{ opacity: 1, scale: 1 }}
               className="text-6xl md:text-8xl font-black italic tracking-tighter text-white z-10 relative"
             >
               AISH<span className="text-primary-500">WARYA</span>
             </motion.div>
             
             {/* Background Glow */}
             <motion.div 
               animate={{ 
                 scale: [1, 1.2, 1],
                 opacity: [0.3, 0.6, 0.3]
               }}
               transition={{ duration: 2, repeat: Infinity }}
               className="absolute inset-0 bg-primary-500 blur-[100px] rounded-full -z-10"
             />
          </div>
          
          <div className="absolute bottom-10 left-10 overflow-hidden">
             <motion.div
               initial={{ x: "-100%" }}
               animate={{ x: "0%" }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
               className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20"
             >
                Initializing Portfolio
             </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;

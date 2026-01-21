import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { CheckCircle, XCircle, X } from "lucide-react";
import { createPortal } from "react-dom";



const Toast = ({ isOpen, onClose, type, title, description, duration = 5000 }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      onClose();
    }, duration);

    const interval = setInterval(() => {
      setProgress((prev) => Math.max(0, prev - (100 / (duration / 50))));
    }, 50);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [isOpen, duration, onClose]);

  useEffect(() => {
    if (isOpen) {
      setProgress(100);
    }
  }, [isOpen]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className={`fixed top-4 right-4 w-96 max-w-[calc(100vw-2rem)] p-4 rounded-xl shadow-2xl border ${
            type === 'success'
              ? 'bg-emerald-500/95 border-emerald-400'
              : 'bg-red-500/95 border-red-400'
          } backdrop-blur-sm`}
        >
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-0.5">
              {type === 'success' ? (
                <CheckCircle className="w-6 h-6 text-white" />
              ) : (
                <XCircle className="w-6 h-6 text-white" />
              )}
            </div>
            
            <div className="flex-1">
              <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
              <p className="text-white/90 text-sm">{description}</p>
            </div>
            
            <button onClick={onClose} className="flex-shrink-0 text-white/80 hover:text-white transition">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 rounded-b-xl overflow-hidden">
            <div className="h-full bg-white/40 transition-all duration-50 ease-linear" style={{ width: `${progress}%` }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Toast;
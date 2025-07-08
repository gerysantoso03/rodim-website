'use client';

import { CircleCheck, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface SuccessAlertToastProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  autoCloseMs?: number;
  message: string;
}

const SuccessAlertToast = ({
  open,
  onOpenChange,
  autoCloseMs = 3000,
  message,
}: SuccessAlertToastProps) => {
  useEffect(() => {
    if (!open || !autoCloseMs) return;

    const timer = setTimeout(() => {
      onOpenChange(false);
    }, autoCloseMs);

    return () => clearTimeout(timer);
  }, [open, autoCloseMs, onOpenChange]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="flex items-center gap-3 bg-emerald-100 border border-emerald-200 rounded-xl px-4 py-3 shadow-lg min-w-[320px] max-w-md">
            <CircleCheck className="w-5 h-5 text-emerald-600" />
            <p className="flex-1 text-emerald-800 font-medium text-base">
              {message}
            </p>
            <button
              onClick={() => onOpenChange(false)}
              className="p-1 hover:bg-emerald-200 rounded-full transition-colors duration-200"
              aria-label="Close toast"
            >
              <X className="w-4 h-4 text-emerald-600" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessAlertToast;

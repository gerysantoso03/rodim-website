"use client"

import { CircleCheck, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface ToastProps {
  message: string
  onCloseToast: () => void
  visible: boolean
}

const Toast = ({ message, onCloseToast, visible }: ToastProps) => {
  if (!visible) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 bg-emerald-100 border border-emerald-200 rounded-xl px-4 py-3 shadow-lg min-w-[320px] max-w-md">
            <div className="flex-shrink-0">
              <CircleCheck className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="flex-1">
              <p className="text-emerald-800 font-medium text-base">{message}</p>
            </div>
            <button
              onClick={onCloseToast}
              className="flex-shrink-0 p-1 hover:bg-emerald-200 rounded-full transition-colors duration-200"
              aria-label="Close notification"
            >
              <X className="w-4 h-4 text-emerald-600" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Toast

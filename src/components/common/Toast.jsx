import { AnimatePresence, motion } from "framer-motion";
import { Check, X } from "lucide-react";

export default function Toast({ visible, message, onClose }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="app-toast"
          role="status"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.2 }}
        >
          <span className="toast-icon">
            <Check size={15} />
          </span>
          <span>{message}</span>
          <button
            type="button"
            aria-label="Dismiss notification"
            onClick={onClose}
          >
            <X size={15} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SuccessPopup = ({ success, message, onClose }) => {
  // Auto-close after 4 seconds
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000); // 4 seconds
      return () => clearTimeout(timer);
    }
  }, [success, onClose]);

  return (
    <AnimatePresence>
      {success && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
          className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50"
          onClick={onClose} // optional: close on click
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ duration: 0.4 }}
            className="bg-white px-8 py-6 rounded-2xl shadow-2xl text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-5xl mb-3">🎉</div>
            <h4 className="text-2xl font-bold text-green-600">
              {message || "Mail Sent Successfully!"}
            </h4>
            <p className="text-gray-600 mt-1">We’ll get back to you soon.</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessPopup;

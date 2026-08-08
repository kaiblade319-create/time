'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { usePortfolio } from '@/hooks/usePortfolioContext';
import { CheckCircle2, Download, Info, X } from 'lucide-react';

export function NotificationToast() {
  const { toasts, removeToast } = usePortfolio();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-md w-full px-4 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="pointer-events-auto flex items-start gap-3 p-4 rounded-xl bg-[#0F141F]/95 backdrop-blur-md border border-[#232D3F] text-slate-100 shadow-2xl shadow-sky-500/10"
          >
            <div className="mt-0.5 shrink-0">
              {toast.type === 'download' ? (
                <div className="p-2 rounded-lg bg-sky-500/20 text-sky-400">
                  <Download className="w-5 h-5" />
                </div>
              ) : toast.type === 'info' ? (
                <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                  <Info className="w-5 h-5" />
                </div>
              ) : (
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              )}
            </div>

            <div className="flex-1 text-sm">
              <h4 className="font-semibold text-white">{toast.title}</h4>
              <p className="text-slate-300 text-xs mt-0.5">{toast.message}</p>
            </div>

            <button
              onClick={() => removeToast(toast.id)}
              className="text-slate-400 hover:text-white transition-colors p-1"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

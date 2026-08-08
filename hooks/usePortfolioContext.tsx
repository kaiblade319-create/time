'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { TargetRole, PortfolioMode, LanguageCode, ToastMessage } from '@/types';
import { getTranslation, translations } from '@/config/translations';

interface PortfolioContextType {
  portfolioMode: PortfolioMode;
  activeRole: TargetRole;
  activeLanguage: LanguageCode;
  hasSeenPreloader: boolean;
  toasts: ToastMessage[];
  t: typeof translations.en;
  setMode: (mode: PortfolioMode) => void;
  setRole: (role: TargetRole) => void;
  setLanguage: (lang: LanguageCode) => void;
  markPreloaderSeen: () => void;
  showToast: (title: string, message: string, type?: 'success' | 'info' | 'download') => void;
  removeToast: (id: string) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

const validModes: PortfolioMode[] = ['generalist', 'targeted'];
const validRoles: TargetRole[] = ['full-stack', 'ai-ml', 'tech-lead', 'data-scientist'];
const validLangs: LanguageCode[] = ['en', 'hi', 'es', 'fr'];

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [portfolioMode, setPortfolioModeState] = useState<PortfolioMode>('generalist');
  const [activeRole, setActiveRoleState] = useState<TargetRole>('full-stack');
  const [activeLanguage, setActiveLanguageState] = useState<LanguageCode>('en');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);

    const m = (params.get('mode') as PortfolioMode | null) || (localStorage.getItem('portfolio_mode') as PortfolioMode | null);
    const r = (params.get('role') as TargetRole | null) || (localStorage.getItem('portfolio_role') as TargetRole | null);
    const l = (params.get('lang') as LanguageCode | null) || (localStorage.getItem('portfolio_lang') as LanguageCode | null);

    queueMicrotask(() => {
      if (m && validModes.includes(m)) {
        setPortfolioModeState(m);
      }
      if (r && validRoles.includes(r)) {
        setActiveRoleState(r);
      }
      if (l && validLangs.includes(l)) {
        setActiveLanguageState(l);
      }
    });
  }, []);

  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const setMode = useCallback((mode: PortfolioMode) => {
    setPortfolioModeState(mode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio_mode', mode);
      const url = new URL(window.location.href);
      url.searchParams.set('mode', mode);
      window.history.replaceState({}, '', url.toString());
    }
  }, []);

  const setRole = useCallback((role: TargetRole) => {
    setActiveRoleState(role);
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio_role', role);
      const url = new URL(window.location.href);
      url.searchParams.set('role', role);
      window.history.replaceState({}, '', url.toString());
    }
  }, []);

  const setLanguage = useCallback((lang: LanguageCode) => {
    setActiveLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio_lang', lang);
      const url = new URL(window.location.href);
      url.searchParams.set('lang', lang);
      window.history.replaceState({}, '', url.toString());
    }
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback((title: string, message: string, type: 'success' | 'info' | 'download' = 'success') => {
    const id = typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : String(Date.now());
    setToasts((prev) => [...prev, { id, title, message, type }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 4500);
  }, []);

  const t = getTranslation(activeLanguage);

  return (
    <PortfolioContext.Provider
      value={{
        portfolioMode,
        activeRole,
        activeLanguage,
        hasSeenPreloader: true,
        toasts,
        t,
        setMode,
        setRole,
        setLanguage,
        markPreloaderSeen: () => {},
        showToast,
        removeToast,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) throw new Error('usePortfolio must be used within a PortfolioProvider');
  return context;
}

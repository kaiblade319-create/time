'use client';

import React from 'react';
import { PortfolioProvider } from '@/hooks/usePortfolioContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ResumeSection } from '@/components/home/ResumeSection';
import { NotificationToast } from '@/components/shared/NotificationToast';

function ResumePageContent() {
  return (
    <div className="min-h-screen bg-[#05070A] text-slate-100 flex flex-col font-sans selection:bg-sky-500/30">
      <Header />
      <main className="flex-1 py-12">
        <ResumeSection />
      </main>
      <Footer />
      <NotificationToast />
    </div>
  );
}

export default function ResumePage() {
  return (
    <PortfolioProvider>
      <ResumePageContent />
    </PortfolioProvider>
  );
}

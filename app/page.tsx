'use client';

import React from 'react';
import { PortfolioProvider, usePortfolio } from '@/hooks/usePortfolioContext';
import { Preloader } from '@/components/layout/Preloader';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { AboutSection } from '@/components/home/AboutSection';
import { ProjectsSection } from '@/components/home/ProjectsSection';
import { SkillsSection } from '@/components/home/SkillsSection';
import { ExperienceSection } from '@/components/home/ExperienceSection';
import { EducationSection } from '@/components/home/EducationSection';
import { ContactSection } from '@/components/home/ContactSection';
import { NotificationToast } from '@/components/shared/NotificationToast';

function PortfolioMainContent() {
  const { hasSeenPreloader } = usePortfolio();

  return (
    <div className="min-h-screen bg-[#05070A] text-slate-100 flex flex-col font-sans selection:bg-sky-500/30">
      {!hasSeenPreloader && <Preloader />}

      <Header />

      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>

      <Footer />
      <NotificationToast />
    </div>
  );
}

export default function Home() {
  return (
    <PortfolioProvider>
      <PortfolioMainContent />
    </PortfolioProvider>
  );
}

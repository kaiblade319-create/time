'use client';

import React from 'react';
import { PortfolioProvider, usePortfolio } from '@/hooks/usePortfolioContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { NotificationToast } from '@/components/shared/NotificationToast';
import { socialPlatforms, codingPlatforms } from '@/config/profiles';
import { ExternalLink, Globe, Code2 } from 'lucide-react';

function ProfilePageContent() {
  const { t } = usePortfolio();

  return (
    <div className="min-h-screen bg-[#05070A] text-slate-100 flex flex-col font-sans selection:bg-sky-500/30">
      <Header />
      <main className="flex-1 py-12 sm:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <h1 className="text-2xl sm:text-5xl font-extrabold text-white tracking-tight">
              {t.nav.profile}
            </h1>
            <p className="text-sky-400 font-semibold text-xs sm:text-base mt-2">
              Social Media Channels & Coding Profile Hub
            </p>
          </div>

          {/* Coding Platforms Grid */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
              <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400" />
              <span>Competitive Coding & Developer Platforms</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
              {codingPlatforms.map((plat) => (
                <a
                  key={plat.id}
                  href={plat.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 sm:p-5 rounded-xl bg-[#0C1018] border border-[#232D3F] hover:border-sky-500/50 hover:bg-[#111622] transition-all group flex items-center justify-between shadow-md"
                >
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-sky-400 transition-colors">
                    {plat.name}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-sky-400 transition-colors shrink-0" />
                </a>
              ))}
            </div>
          </div>

          {/* Social Platforms Grid */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
              <span>Professional & Social Networks</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
              {socialPlatforms.map((plat) => (
                <a
                  key={plat.id}
                  href={plat.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 sm:p-5 rounded-xl bg-[#0C1018] border border-[#232D3F] hover:border-purple-500/50 hover:bg-[#111622] transition-all group flex items-center justify-between shadow-md"
                >
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    {plat.name}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-purple-300 transition-colors shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <NotificationToast />
    </div>
  );
}

export default function ProfilePage() {
  return (
    <PortfolioProvider>
      <ProfilePageContent />
    </PortfolioProvider>
  );
}

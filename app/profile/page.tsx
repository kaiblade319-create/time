'use client';

import React from 'react';
import { PortfolioProvider, usePortfolio } from '@/hooks/usePortfolioContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { NotificationToast } from '@/components/shared/NotificationToast';
import { socialPlatforms, codingPlatforms } from '@/config/profiles';
import { ExternalLink, Globe, Code2, Sparkles, MessageSquare } from 'lucide-react';

function ProfilePageContent() {
  const { t } = usePortfolio();

  return (
    <div className="min-h-screen bg-[#05070A] text-slate-100 flex flex-col font-sans selection:bg-sky-500/30">
      <Header />
      <main className="flex-1 py-16">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              {t.nav.profile}
            </h1>
            <p className="text-sky-400 font-semibold text-sm sm:text-base mt-2">
              Social Media Channels & Coding Profile Hub
            </p>
          </div>

          {/* Coding Platforms Grid */}
          <div className="mb-16">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-sky-400" />
              <span>Competitive Coding & Developer Platforms</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {codingPlatforms.map((plat) => (
                <a
                  key={plat.id}
                  href={plat.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 rounded-2xl bg-[#0C1018] border border-[#232D3F] hover:border-sky-500/50 hover:shadow-2xl transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-sky-400 px-2.5 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">
                        {plat.handle}
                      </span>
                      <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors mb-2">
                      {plat.name}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {plat.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#232D3F] flex items-center justify-between text-xs font-semibold text-sky-400">
                    <span>View Profile</span>
                    <Sparkles className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Social Platforms Grid */}
          <div>
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Globe className="w-5 h-5 text-purple-400" />
              <span>Professional & Social Networks</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {socialPlatforms.map((plat) => (
                <a
                  key={plat.id}
                  href={plat.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 rounded-2xl bg-[#0C1018] border border-[#232D3F] hover:border-purple-500/50 hover:shadow-2xl transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-purple-300 px-2.5 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">
                        {plat.handle}
                      </span>
                      <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-purple-400 transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
                      {plat.name}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {plat.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#232D3F] flex items-center justify-between text-xs font-semibold text-purple-300">
                    <span>Connect</span>
                    <MessageSquare className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
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

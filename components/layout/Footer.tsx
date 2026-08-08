'use client';

import React from 'react';
import Link from 'next/link';
import { usePortfolio } from '@/hooks/usePortfolioContext';
import { Github, Linkedin, Mail, Twitter, Database, FileText } from 'lucide-react';

export function Footer() {
  const { t } = usePortfolio();

  return (
    <footer className="w-full bg-[#05070A] border-t border-[#1B2330] py-12 text-slate-400">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand Info */}
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-sky-500 to-purple-600 flex items-center justify-center font-bold text-white text-xs">
              KB
            </div>
            <span className="font-bold text-white tracking-tight text-base">Kai Blade</span>
          </div>
          <p className="text-xs text-slate-400 max-w-sm">
            Luxury multi-role engineering portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Motion.
          </p>
        </div>

        {/* Quick Anchors */}
        <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-300">
          <Link href="/#about" className="hover:text-sky-400 transition-colors">
            {t.nav.about}
          </Link>
          <Link href="/#projects" className="hover:text-sky-400 transition-colors">
            {t.nav.projects}
          </Link>
          <Link href="/#experience" className="hover:text-sky-400 transition-colors">
            {t.nav.experience}
          </Link>
          <Link href="/#skills" className="hover:text-sky-400 transition-colors">
            {t.nav.skills}
          </Link>
          <Link href="/#education" className="hover:text-sky-400 transition-colors">
            {t.nav.education}
          </Link>
          <Link href="/#contact" className="hover:text-sky-400 transition-colors">
            {t.nav.contact}
          </Link>
          <Link href="/resume" className="hover:text-purple-400 transition-colors">
            {t.nav.resume}
          </Link>
          <Link href="/profile" className="hover:text-purple-400 transition-colors">
            {t.nav.profile}
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/kaiblade"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-[#0C1018] border border-[#232D3F] text-slate-300 hover:text-white hover:border-sky-500/50 hover:bg-sky-500/10 transition-all"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/kaiblade"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-[#0C1018] border border-[#232D3F] text-slate-300 hover:text-white hover:border-sky-500/50 hover:bg-sky-500/10 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://twitter.com/kaiblade_dev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-[#0C1018] border border-[#232D3F] text-slate-300 hover:text-white hover:border-sky-500/50 hover:bg-sky-500/10 transition-all"
            aria-label="Twitter"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href="https://kaggle.com/kaiblade_ai"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-[#0C1018] border border-[#232D3F] text-slate-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all"
            aria-label="Kaggle"
          >
            <Database className="w-4 h-4" />
          </a>
          <a
            href="mailto:kaiblade319@gmail.com"
            className="p-2.5 rounded-xl bg-[#0C1018] border border-[#232D3F] text-slate-300 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 mt-8 pt-6 border-t border-[#1B2330]/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500">
        <span>&copy; {new Date().getFullYear()} Kai Blade. All rights reserved.</span>
        <span>Config-driven Multi-Role Portfolio System</span>
      </div>
    </footer>
  );
}

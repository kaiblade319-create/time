'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePortfolio } from '@/hooks/usePortfolioContext';
import { TargetRole, LanguageCode } from '@/types';
import { Globe, Menu, X, ChevronDown, FileText, Compass, Target, Users, Check } from 'lucide-react';

export function Header() {
  const { portfolioMode, activeRole, activeLanguage, setMode, setRole, setLanguage, t } = usePortfolio();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [roleMenuOpen, setRoleMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close menus on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setRoleMenuOpen(false);
        setLangMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const rolesList: { id: TargetRole; label: string }[] = [
    { id: 'full-stack', label: t.roles['full-stack'] },
    { id: 'ai-ml', label: t.roles['ai-ml'] },
    { id: 'tech-lead', label: t.roles['tech-lead'] },
    { id: 'data-scientist', label: t.roles['data-scientist'] },
  ];

  const languagesList: { id: LanguageCode; label: string }[] = [
    { id: 'en', label: 'English (EN)' },
    { id: 'hi', label: 'हिन्दी (HI)' },
    { id: 'es', label: 'Español (ES)' },
    { id: 'fr', label: 'Français (FR)' },
  ];

  const handleTargetedClick = () => {
    if (portfolioMode !== 'targeted') {
      setMode('targeted');
    }
    setRoleMenuOpen((prev) => !prev);
    setLangMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#05070A]/90 backdrop-blur-xl border-b border-[#1B2330]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 sm:gap-4 min-w-0">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group shrink-0 min-w-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-600 flex items-center justify-center font-extrabold text-white text-sm shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform shrink-0">
            KB
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-bold text-sm sm:text-base text-white tracking-tight group-hover:text-sky-400 transition-colors leading-tight whitespace-nowrap">
              Kai Blade
            </span>
            <span
              className="text-[10px] text-slate-400 font-mono tracking-wider truncate hidden xs:inline-block max-w-[120px] sm:max-w-[150px] md:max-w-[170px] lg:max-w-[190px]"
              title={portfolioMode === 'generalist' ? 'Software Engineer' : t.roles[activeRole]}
            >
              {portfolioMode === 'generalist' ? 'Software Engineer' : t.roles[activeRole]}
            </span>
          </div>
        </Link>

        {/* Center Nav Links - visible on xl screens and above */}
        <nav className="hidden xl:flex items-center gap-2.5 lg:gap-3.5 xl:gap-5 text-xs xl:text-sm text-slate-300 font-medium shrink min-w-0 mx-2">
          <Link href="/#about" className="hover:text-sky-400 transition-colors whitespace-nowrap shrink-0">
            {t.nav.about}
          </Link>
          <Link href="/#projects" className="hover:text-sky-400 transition-colors whitespace-nowrap shrink-0">
            {t.nav.projects}
          </Link>
          <Link href="/#experience" className="hover:text-sky-400 transition-colors whitespace-nowrap shrink-0">
            {t.nav.experience}
          </Link>
          <Link href="/#skills" className="hover:text-sky-400 transition-colors whitespace-nowrap shrink-0">
            {t.nav.skills}
          </Link>
          <Link href="/#education" className="hover:text-sky-400 transition-colors whitespace-nowrap shrink-0">
            {t.nav.education}
          </Link>
          <Link href="/#contact" className="hover:text-sky-400 transition-colors whitespace-nowrap shrink-0">
            {t.nav.contact}
          </Link>
        </nav>

        {/* Right Controls Bar */}
        <div ref={dropdownRef} className="hidden md:flex items-center gap-1.5 lg:gap-2 shrink-0">
          {/* Integrated Mode & Role Switcher */}
          <div className="relative flex items-center p-1 rounded-xl bg-[#0C1018] border border-[#232D3F] text-xs shadow-inner">
            <button
              onClick={() => {
                setMode('generalist');
                setRoleMenuOpen(false);
                setLangMenuOpen(false);
              }}
              className={`flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-lg font-semibold transition-all whitespace-nowrap ${
                portfolioMode === 'generalist'
                  ? 'bg-gradient-to-r from-sky-500/20 to-indigo-500/20 text-sky-300 border border-sky-500/35 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Generalist Engineering Portfolio"
            >
              <Compass className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>Generalist</span>
            </button>

            <button
              onClick={handleTargetedClick}
              className={`flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-lg font-semibold transition-all whitespace-nowrap ${
                portfolioMode === 'targeted'
                  ? 'bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-purple-300 border border-purple-500/35 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Click to switch role or open role menu"
            >
              <Target className="w-3.5 h-3.5 text-purple-400 shrink-0" />
              <span className="max-w-[70px] sm:max-w-[90px] lg:max-w-[120px] truncate">
                {portfolioMode === 'targeted' ? t.roles[activeRole] : 'Targeted'}
              </span>
              <ChevronDown
                className={`w-3 h-3 text-purple-400 shrink-0 transition-transform ${
                  roleMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Role Dropdown */}
            {roleMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 p-2 rounded-2xl bg-[#0C1018] border border-[#232D3F] shadow-2xl z-50 text-xs">
                <div className="px-2.5 py-1 text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Select Role Focus
                </div>
                {rolesList.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => {
                      setMode('targeted');
                      setRole(r.id);
                      setRoleMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl transition-colors flex items-center justify-between font-medium ${
                      portfolioMode === 'targeted' && activeRole === r.id
                        ? 'bg-purple-500/20 text-purple-200 font-bold border border-purple-500/30'
                        : 'text-slate-300 hover:bg-[#151D2A]'
                    }`}
                  >
                    <span className="truncate pr-2">{r.label}</span>
                    {portfolioMode === 'targeted' && activeRole === r.id && (
                      <Check className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Language Picker */}
          <div className="relative shrink-0">
            <button
              onClick={() => {
                setLangMenuOpen(!langMenuOpen);
                setRoleMenuOpen(false);
              }}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[#0C1018] border border-[#232D3F] text-xs font-semibold text-slate-300 hover:border-sky-500/40 transition-colors whitespace-nowrap"
            >
              <Globe className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span className="uppercase">{activeLanguage}</span>
              <ChevronDown className="w-3 h-3 text-slate-400 shrink-0" />
            </button>

            {langMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-44 p-1.5 rounded-2xl bg-[#0C1018] border border-[#232D3F] shadow-2xl z-50 text-xs">
                {languagesList.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => {
                      setLanguage(l.id);
                      setLangMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl transition-colors font-medium whitespace-nowrap ${
                      activeLanguage === l.id
                        ? 'bg-sky-500/20 text-sky-300 font-bold border border-sky-500/30'
                        : 'text-slate-300 hover:bg-[#151D2A]'
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="h-4 w-px bg-[#232D3F] mx-0.5 shrink-0" />

          {/* Action CTAs */}
          <Link
            href="/resume"
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-sky-500/10 text-sky-300 border border-sky-500/30 text-xs font-bold hover:bg-sky-500/20 hover:border-sky-400 transition-all shadow-sm shrink-0 whitespace-nowrap"
          >
            <FileText className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span className="whitespace-nowrap">{t.nav.resume}</span>
          </Link>

          <Link
            href="/profile"
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-purple-500/10 text-purple-300 border border-purple-500/30 text-xs font-bold hover:bg-purple-500/20 hover:border-purple-400 transition-all shadow-sm shrink-0 whitespace-nowrap"
          >
            <Users className="w-3.5 h-3.5 text-purple-400 shrink-0" />
            <span className="whitespace-nowrap">{t.nav.profile}</span>
          </Link>
        </div>

        {/* Mobile / Tablet Drawer Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden p-2 rounded-xl bg-[#0C1018] border border-[#232D3F] text-slate-300 hover:text-white hover:border-sky-500/40 transition-colors shrink-0"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile / Tablet Full Drawer */}
      {mobileOpen && (
        <div className="xl:hidden p-4 bg-[#0C1018] border-b border-[#232D3F] flex flex-col gap-4 text-sm text-slate-200 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2 pt-1 border-b border-[#232D3F] pb-3">
            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Portfolio Viewing Mode</span>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setMode('generalist')}
                className={`py-2 px-3 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5 whitespace-nowrap ${
                  portfolioMode === 'generalist'
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-sm'
                    : 'bg-[#151D2A] text-slate-300 border border-[#232D3F]'
                }`}
              >
                <Compass className="w-3.5 h-3.5 text-sky-400" />
                <span>Generalist Overview</span>
              </button>
              <button
                onClick={() => setMode('targeted')}
                className={`py-2 px-3 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5 whitespace-nowrap ${
                  portfolioMode === 'targeted'
                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-sm'
                    : 'bg-[#151D2A] text-slate-300 border border-[#232D3F]'
                }`}
              >
                <Target className="w-3.5 h-3.5 text-purple-400" />
                <span>Targeted Role</span>
              </button>
            </div>
          </div>

          {portfolioMode === 'targeted' && (
            <div className="flex flex-col gap-2 border-b border-[#232D3F] pb-3">
              <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Select Job Role Focus</span>
              <div className="grid grid-cols-2 gap-2">
                {rolesList.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => {
                      setRole(r.id);
                    }}
                    className={`text-left px-3 py-2 rounded-xl text-xs font-semibold truncate ${
                      activeRole === r.id
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                        : 'bg-[#151D2A] text-slate-300 border border-[#232D3F]'
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between border-b border-[#232D3F] pb-3">
            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Language</span>
            <div className="flex gap-1.5">
              {languagesList.map((l) => (
                <button
                  key={l.id}
                  onClick={() => setLanguage(l.id)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold whitespace-nowrap ${
                    activeLanguage === l.id
                      ? 'bg-sky-500/25 text-sky-300 border border-sky-500/40'
                      : 'bg-[#151D2A] text-slate-400 border border-[#232D3F]'
                  }`}
                >
                  {l.id.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <nav className="flex flex-col gap-2 pt-1 font-medium" onClick={() => setMobileOpen(false)}>
            <Link href="/#about" className="py-1.5 px-2 rounded-lg hover:bg-[#151D2A] hover:text-sky-400 transition-colors whitespace-nowrap">
              {t.nav.about}
            </Link>
            <Link href="/#projects" className="py-1.5 px-2 rounded-lg hover:bg-[#151D2A] hover:text-sky-400 transition-colors whitespace-nowrap">
              {t.nav.projects}
            </Link>
            <Link href="/#experience" className="py-1.5 px-2 rounded-lg hover:bg-[#151D2A] hover:text-sky-400 transition-colors whitespace-nowrap">
              {t.nav.experience}
            </Link>
            <Link href="/#skills" className="py-1.5 px-2 rounded-lg hover:bg-[#151D2A] hover:text-sky-400 transition-colors whitespace-nowrap">
              {t.nav.skills}
            </Link>
            <Link href="/#education" className="py-1.5 px-2 rounded-lg hover:bg-[#151D2A] hover:text-sky-400 transition-colors whitespace-nowrap">
              {t.nav.education}
            </Link>
            <Link href="/#contact" className="py-1.5 px-2 rounded-lg hover:bg-[#151D2A] hover:text-sky-400 transition-colors whitespace-nowrap">
              {t.nav.contact}
            </Link>
            <div className="flex gap-2 pt-3">
              <Link
                href="/resume"
                className="flex-1 text-center py-2.5 rounded-xl bg-sky-500/20 text-sky-300 border border-sky-500/30 font-bold text-xs flex items-center justify-center gap-1.5 whitespace-nowrap"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </Link>
              <Link
                href="/profile"
                className="flex-1 text-center py-2.5 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30 font-bold text-xs flex items-center justify-center gap-1.5 whitespace-nowrap"
              >
                <Users className="w-3.5 h-3.5" />
                <span>Connect Hub</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

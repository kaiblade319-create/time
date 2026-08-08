'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { usePortfolio } from '@/hooks/usePortfolioContext';
import { socialPlatforms, codingPlatforms } from '@/config/profiles';
import { Mail, Send, CheckCircle2, User, MessageSquare, ExternalLink, Sparkles, Globe } from 'lucide-react';

export function ContactSection() {
  const { showToast, t } = usePortfolio();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      showToast('Missing Fields', 'Please fill in all form fields.', 'info');
      return;
    }

    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      showToast('Message Sent', t.toast.messageSent, 'success');

      // Reset form after 4 seconds
      setTimeout(() => {
        setName('');
        setEmail('');
        setMessage('');
        setIsSent(false);
      }, 4000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-[#070A10] border-t border-[#1B2330] relative">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.contact.title}
          </h2>
          <p className="text-sky-400 font-semibold text-sm mt-2">{t.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#0C1018] border border-[#232D3F] shadow-2xl"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Mail className="w-5 h-5 text-sky-400" />
              <span>Send Direct Message</span>
            </h3>

            {isSent ? (
              <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">{t.contact.successMsg}</h4>
                <p className="text-xs text-slate-400">
                  I will review your inquiry and get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Your Full Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.contact.namePlaceholder}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#070A10] border border-[#232D3F] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Your Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.contact.emailPlaceholder}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#070A10] border border-[#232D3F] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Project Details or Opportunity
                  </label>
                  <div className="relative">
                    <MessageSquare className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={t.contact.messagePlaceholder}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#070A10] border border-[#232D3F] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors resize-none"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-purple-600 text-white font-bold text-sm hover:opacity-95 transition-opacity shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSending ? (
                    <span>{t.contact.sendingBtn}</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t.contact.sendBtn}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Social Profiles & Coding Platforms Hub */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Direct Contact Card */}
            <div className="p-6 rounded-2xl bg-[#0C1018] border border-[#232D3F]">
              <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Direct Inquiries</span>
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Available for full-time engineering roles, technical advisory, and high-impact machine learning projects.
              </p>
              <div className="space-y-2 text-xs font-mono text-slate-300">
                <div className="p-2.5 rounded-lg bg-[#070A10] border border-[#232D3F] flex items-center justify-between">
                  <span>Email</span>
                  <a href="mailto:kaiblade319@gmail.com" className="text-sky-400 hover:underline">
                    kaiblade319@gmail.com
                  </a>
                </div>
                <div className="p-2.5 rounded-lg bg-[#070A10] border border-[#232D3F] flex items-center justify-between">
                  <span>Location</span>
                  <span className="text-slate-200">San Francisco, CA / Remote</span>
                </div>
              </div>
            </div>

            {/* Connect Hub Link Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0C1018] to-[#121824] border border-[#232D3F] shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-sky-400 px-2.5 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">
                    Verified Hub
                  </span>
                  <Globe className="w-4 h-4 text-sky-400" />
                </div>
                <h4 className="text-base font-bold text-white mb-1.5">Connect Hub & Coding Profiles</h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-5">
                  Looking for GitHub, LeetCode, Kaggle, Codeforces, or professional social profiles? Explore the complete Connect Hub with verified activity badges.
                </p>
              </div>

              <Link
                href="/profile"
                className="w-full py-3 rounded-xl bg-[#151D2A] border border-[#232D3F] hover:border-sky-500/50 hover:bg-[#1A2435] text-sky-300 font-semibold text-xs transition-all flex items-center justify-center gap-2 group shadow-sm"
              >
                <span>Visit Dedicated Connect Hub</span>
                <ExternalLink className="w-3.5 h-3.5 text-sky-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

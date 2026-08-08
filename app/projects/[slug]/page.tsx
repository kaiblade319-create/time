'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PortfolioProvider, usePortfolio } from '@/hooks/usePortfolioContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { NotificationToast } from '@/components/shared/NotificationToast';
import { projectsData } from '@/config/projects';
import { downloadFile } from '@/lib/utils';
import { Github, ExternalLink, Download, ArrowLeft, CheckCircle2, Sparkles, Layers, FileText } from 'lucide-react';

function ProjectDetailPageContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { showToast, t } = usePortfolio();

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const { docs, report } = project;

  const handleDownloadData = () => {
    if (project.dataFile) {
      downloadFile(project.dataFile.content, project.dataFile.name, 'text/csv');
      showToast('Data Downloaded', t.toast.dataDownload, 'download');
    }
  };

  return (
    <div className="min-h-screen bg-[#05070A] text-slate-100 flex flex-col font-sans selection:bg-sky-500/30">
      <Header />
      <main className="flex-1 py-12">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
          {/* Back Button */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-sky-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Selected Work</span>
          </Link>

          {/* Banner & Title */}
          <div className="p-8 rounded-3xl bg-[#0C1018] border border-[#232D3F] shadow-2xl relative overflow-hidden">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-sky-500/10 text-sky-400 border border-sky-500/20">
                {project.type}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">
                {project.guidedType}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-white mb-2">{project.title}</h1>
            <p className="text-sm sm:text-base font-semibold text-sky-400 mb-6">{project.tagline}</p>

            <div className="relative aspect-video rounded-2xl bg-slate-900 border border-[#232D3F] overflow-hidden mb-6">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#232D3F]">
              <div className="flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1B2330] text-slate-200 hover:text-white text-xs font-semibold transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1B2330] text-slate-200 hover:text-white text-xs font-semibold transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Application</span>
                </a>
              </div>

              {project.dataFile && (
                <button
                  onClick={handleDownloadData}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold hover:bg-emerald-500/30 transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>{t.projectDocs.downloadData}</span>
                </button>
              )}
            </div>
          </div>

          {/* Overview & Metrics Grid */}
          <div className="p-8 rounded-3xl bg-[#0C1018] border border-[#232D3F] space-y-8">
            <div>
              <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-sky-400" />
                <span>Project Case Study Overview</span>
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">{docs.overview}</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {docs.results.map((r) => (
                <div key={r.label} className="p-4 rounded-xl bg-[#070A10] border border-[#232D3F] text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">
                    {r.metric}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">{r.label}</div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-purple-400" />
                <span>Implementation Steps & Architecture</span>
              </h3>
              <div className="space-y-3">
                {docs.processSteps.map((s, idx) => (
                  <div key={s.title} className="p-4 rounded-xl bg-[#070A10] border border-[#232D3F] flex gap-4">
                    <div className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white mb-1">{s.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{s.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Case Study Report Section */}
            <div className="pt-8 border-t border-[#232D3F]">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-purple-400" />
                <span>Detailed Technical Report Summary</span>
              </h3>
              <div className="p-5 rounded-2xl bg-[#070A10] border border-[#232D3F] text-xs text-slate-300 leading-relaxed space-y-4">
                <p>{report.summary}</p>
                <div>
                  <h4 className="font-bold text-sky-400 mb-2">Environment & Compliance</h4>
                  <p className="text-slate-400">{report.environment}</p>
                </div>
                <div>
                  <h4 className="font-bold text-emerald-400 mb-2">Verified Data Integrity Checks</h4>
                  <div className="space-y-1">
                    {report.dataChecks.map((dc) => (
                      <div key={dc.metric} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="font-semibold text-white">{dc.metric}:</span>
                        <span className="text-slate-400">{dc.detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <NotificationToast />
    </div>
  );
}

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <PortfolioProvider>
      <ProjectDetailPageContent params={params} />
    </PortfolioProvider>
  );
}

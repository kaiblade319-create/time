'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { usePortfolio } from '@/hooks/usePortfolioContext';
import { projectsData } from '@/config/projects';
import { Project, TargetRole } from '@/types';
import { ProjectDocsModal } from '@/components/modals/ProjectDocsModal';
import { ProjectReportModal } from '@/components/modals/ProjectReportModal';
import { downloadFile } from '@/lib/utils';
import { Github, ExternalLink, FileText, BarChart2, Download, Sparkles, Filter, Code2, ChevronRight } from 'lucide-react';

export function ProjectsSection() {
  const { portfolioMode, activeRole, showToast, t } = usePortfolio();
  const [filterRole, setFilterRole] = useState<TargetRole | 'all'>('all');

  const [docsModalProject, setDocsModalProject] = useState<Project | null>(null);
  const [reportModalProject, setReportModalProject] = useState<Project | null>(null);

  const filterOptions: { id: TargetRole | 'all'; label: string }[] = [
    { id: 'all', label: t.projects.allFilter },
    { id: 'full-stack', label: t.roles['full-stack'] },
    { id: 'ai-ml', label: t.roles['ai-ml'] },
    { id: 'tech-lead', label: t.roles['tech-lead'] },
    { id: 'data-scientist', label: t.roles['data-scientist'] },
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (filterRole === 'all') return true;
    return p.roleRelevance.includes(filterRole);
  });

  const handleDownloadSampleData = (project: Project, e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.dataFile) {
      downloadFile(project.dataFile.content, project.dataFile.name, 'text/csv');
      showToast('Data Downloaded', t.toast.dataDownload, 'download');
    } else {
      showToast('Info', 'No sample dataset file for this project.', 'info');
    }
  };

  return (
    <section id="projects" className="py-24 bg-[#05070A] border-t border-[#1B2330] relative">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.projects.title}
          </h2>
          <p className="text-sky-400 font-semibold text-sm mt-2">{t.projects.subtitle}</p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col items-center justify-center mb-8 sm:mb-12 w-full max-w-full px-2 sm:px-0">
          {/* Mobile Swipe Hint Header */}
          <div className="w-full sm:hidden flex items-center justify-between px-1 mb-1.5 text-[11px] font-medium text-slate-400">
            <span className="flex items-center gap-1 font-semibold text-slate-300">
              <Filter className="w-3.5 h-3.5 text-sky-400" />
              Filter by Role
            </span>
            <span className="flex items-center gap-1 text-[10px] font-mono text-sky-300 bg-sky-500/10 px-2 py-0.5 rounded-full border border-sky-500/25">
              <span>Swipe</span>
              <ChevronRight className="w-3 h-3 text-sky-400 animate-pulse" />
            </span>
          </div>

          <div className="relative w-full sm:w-auto max-w-full after:pointer-events-none after:absolute after:right-0 after:top-0 after:bottom-0 after:w-8 after:bg-gradient-to-l after:from-[#05070A] after:to-transparent sm:after:hidden">
            <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-[#0C1018] border border-[#232D3F] max-w-full overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap sm:justify-center pr-6 sm:pr-1.5">
              <span className="text-xs text-slate-500 font-semibold px-2 items-center gap-1 hidden sm:flex shrink-0">
                <Filter className="w-3.5 h-3.5 text-sky-400" />
                Filter:
              </span>
              {filterOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setFilterRole(opt.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap shrink-0 ${
                    filterRole === opt.id
                      ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-[#1B2330]'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const isRelevantToActiveRole = portfolioMode === 'targeted' ? project.roleRelevance.includes(activeRole) : true;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group p-4 sm:p-6 rounded-2xl bg-[#0C1018] border transition-all flex flex-col justify-between relative overflow-hidden ${
                  isRelevantToActiveRole
                    ? 'border-[#232D3F] hover:border-sky-500/50 hover:shadow-2xl hover:shadow-sky-500/10'
                    : 'border-[#1B2330] opacity-80 hover:opacity-100'
                }`}
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-1.5 sm:gap-2 mb-3.5 sm:mb-4">
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 min-w-0">
                      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 sm:px-2.5 py-0.5 rounded-md bg-sky-500/10 text-sky-400 border border-sky-500/20 leading-snug">
                        {project.type}
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 sm:px-2.5 py-0.5 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20 leading-snug">
                        {project.guidedType}
                      </span>
                    </div>

                    {portfolioMode === 'targeted' && isRelevantToActiveRole && (
                      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 flex items-center gap-1 leading-snug">
                        <Sparkles className="w-3 h-3" /> Target Match
                      </span>
                    )}
                  </div>

                  {/* Image Card Container */}
                  <div className="relative aspect-video rounded-xl bg-slate-900 border border-[#232D3F] overflow-hidden mb-4 sm:mb-5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                    <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 right-2.5 sm:right-3 flex items-center justify-between gap-2 text-[10px] sm:text-xs text-slate-300 font-mono">
                      <span className="truncate">{project.techs.slice(0, 3).join(' • ')}</span>
                      {project.dataFile && (
                        <button
                          onClick={(e) => handleDownloadSampleData(project, e)}
                          className="px-2 py-0.5 sm:py-1 rounded bg-emerald-500/30 text-emerald-300 hover:bg-emerald-500/50 flex items-center gap-1 font-sans text-[9px] sm:text-[10px] font-bold transition-colors shrink-0"
                          title="Download Sample Dataset CSV"
                        >
                          <Download className="w-3 h-3" />
                          <span className="hidden xs:inline">CSV Data</span>
                          <span className="xs:hidden">CSV</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2 group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-sky-400 mb-2 sm:mb-3">{project.tagline}</p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4 sm:mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-4 sm:mb-6">
                    {project.techs.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-0.5 rounded-md bg-[#1B2330] text-slate-300 border border-[#232D3F]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-3.5 sm:pt-4 border-t border-[#232D3F] flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[#1B2330] text-slate-300 hover:text-white hover:bg-[#232D3F] transition-colors"
                      title={t.projects.btnGithub}
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[#1B2330] text-slate-300 hover:text-white hover:bg-[#232D3F] transition-colors"
                      title={t.projects.btnLive}
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="flex items-center gap-1.5 sm:gap-2 flex-1 sm:flex-initial justify-end min-w-0">
                    <button
                      onClick={() => setDocsModalProject(project)}
                      className="flex-1 sm:flex-none justify-center flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20 text-[11px] sm:text-xs font-semibold hover:bg-sky-500/20 transition-all whitespace-nowrap min-w-0"
                    >
                      <FileText className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{t.projects.btnDocs}</span>
                    </button>

                    <button
                      onClick={() => setReportModalProject(project)}
                      className="flex-1 sm:flex-none justify-center flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-purple-500/10 text-purple-300 border border-purple-500/20 text-[11px] sm:text-xs font-semibold hover:bg-purple-500/20 transition-all whitespace-nowrap min-w-0"
                    >
                      <BarChart2 className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{t.projects.btnReport}</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Docs Modal */}
      <ProjectDocsModal
        project={docsModalProject}
        onClose={() => setDocsModalProject(null)}
        onOpenReport={(p) => setReportModalProject(p)}
      />

      {/* Report Modal */}
      <ProjectReportModal
        project={reportModalProject}
        onClose={() => setReportModalProject(null)}
        onBackToDocs={(p) => setDocsModalProject(p)}
      />
    </section>
  );
}

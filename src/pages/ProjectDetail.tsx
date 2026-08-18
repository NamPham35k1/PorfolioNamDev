import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, CheckCircle2, AlertCircle, Sparkles, Layers, Code } from 'lucide-react';
import { getProjectById } from '../data/projects';
import { Badge } from '../components/common/Badge';
import { SEO } from '../components/common/SEO';
import { GithubIcon } from '../components/common/SocialIcons';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return (
      <main className="pt-40 pb-20 text-center space-y-4">
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
          Project Not Found
        </h2>
        <p className="text-slate-500 dark:text-slate-400">
          The requested project ID "{id}" does not exist.
        </p>
        <button
          onClick={() => navigate('/projects')}
          className="gradient-bg-emerald px-6 py-2.5 rounded-xl text-sm font-bold inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </button>
      </main>
    );
  }

  return (
    <>
      <SEO title={`${project.title} — Nam.Dev Project Showcase`} description={project.description} />

      <main className="pt-32 pb-20 space-y-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <button
            onClick={() => navigate('/projects')}
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-600 dark:text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </button>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant={project.category === 'Android' ? 'emerald' : 'cyan'} size="md">
                {project.category}
              </Badge>
              {project.featured && (
                <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-mono px-3 py-1 rounded-full">
                  Featured Product
                </span>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {project.title}
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-300">
              {project.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gradient-bg-emerald px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View GitHub Source</span>
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card hover:bg-slate-100 dark:hover:bg-[#1C2433] text-slate-900 dark:text-white px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 border border-slate-300 dark:border-[#212B3B]"
                >
                  <ExternalLink className="w-4 h-4 text-emerald-400" />
                  <span>Live Demo / Release</span>
                </a>
              )}
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden glass-card border border-slate-200 dark:border-[#212B3B] aspect-video w-full shadow-2xl">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-[#212B3B] space-y-3">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                <AlertCircle className="w-5 h-5" />
                <span>The Challenge / Problem</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-[#212B3B] space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5" />
                <span>The Engineered Solution</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-[#212B3B] space-y-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-400" />
              <span>Key Features</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-[#212B3B] space-y-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Code className="w-5 h-5 text-cyan-400" />
              <span>Technologies & Libraries Used</span>
            </h3>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-xl font-mono text-xs font-semibold bg-slate-100 dark:bg-[#161D2B] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-[#263248]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.screenshots.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-indigo-400" />
                <span>Application Screenshots</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.screenshots.map((img, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl overflow-hidden glass-card border border-slate-200 dark:border-[#212B3B] aspect-video group"
                  >
                    <img
                      src={img}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-[#212B3B] space-y-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Results & Key Performance
            </h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {project.results.map((res, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

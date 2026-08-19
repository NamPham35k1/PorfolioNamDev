import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Smartphone, Code2, Server, CheckCircle2, Award } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { GitHubActivity } from '../components/github/GitHubActivity';
import { SEO } from '../components/common/SEO';
import { developerConfig, timelineEvents } from '../data/developer';

export const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEO title="About Nam — Android & Full-stack Web Developer" />

      <main className="pt-32 pb-20 space-y-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="About Me"
            title="Passionate Developer & Problem Solver"
            subtitle="Specializing in Native Android development (Kotlin) and Full-stack Web platforms (React, TypeScript, Node.js)."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-12">
            <div className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-[#212B3B] space-y-6">
              <div className="flex items-center gap-4">
                <img
                  src={developerConfig.avatarUrl}
                  alt={developerConfig.fullName}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-emerald-400/80 shadow-lg"
                />
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Hi, I'm {developerConfig.name} 👋
                  </h3>
                  <p className="text-xs font-mono text-emerald-400 mt-1 font-semibold">
                    {developerConfig.title} • {developerConfig.hometown}
                  </p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                {developerConfig.bio}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Core Technical Focus
                </h4>
                {developerConfig.coreFocus.map((focus, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{focus}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="gradient-bg-emerald px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2"
                >
                  <span>Let's Work Together</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 glass-card p-8 rounded-3xl border border-slate-200/80 dark:border-[#212B3B] space-y-6">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-400" />
                <span>Specialization Stack</span>
              </h4>

              <div className="space-y-4 text-sm">
                <div className="p-4 rounded-2xl bg-slate-100 dark:bg-[#131924] border border-slate-200 dark:border-[#212B3B] space-y-1">
                  <div className="flex items-center gap-2 font-bold text-emerald-400">
                    <Smartphone className="w-4 h-4" />
                    <span>Native Mobile</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Kotlin, Android SDK, MVVM, Room DB, Retrofit, ExoPlayer, Coroutines, Foreground Services.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-100 dark:bg-[#131924] border border-slate-200 dark:border-[#212B3B] space-y-1">
                  <div className="flex items-center gap-2 font-bold text-cyan-400">
                    <Code2 className="w-4 h-4" />
                    <span>Web Engineering</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    ReactJS, TypeScript, Tailwind CSS, Vite, SPA Routing, Framer Motion, Glassmorphism UI.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-100 dark:bg-[#131924] border border-slate-200 dark:border-[#212B3B] space-y-1">
                  <div className="flex items-center gap-2 font-bold text-indigo-400">
                    <Server className="w-4 h-4" />
                    <span>Backend & Database</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Node.js, Express.js, MongoDB, Mongoose, RESTful APIs, Firebase Auth & Firestore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Journey"
            title="Development Timeline"
            subtitle="Key milestones and continuous learning roadmap from 2024 to present."
          />

          <div className="relative border-l-2 border-slate-200 dark:border-[#212B3B] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
            {timelineEvents.map((evt, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-slate-900 border-4 border-emerald-400 flex items-center justify-center shadow-md"></div>

                <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-[#212B3B] space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {evt.year}
                    </span>
                    {evt.highlight && (
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                        {evt.highlight}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {evt.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {evt.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {evt.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-[#161D2B] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-[#242E42]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Live Stats"
            title="GitHub Contributions & Activity"
            subtitle="Real-time code repository statistics and programming languages."
          />
          <GitHubActivity />
        </section>
      </main>
    </>
  );
};

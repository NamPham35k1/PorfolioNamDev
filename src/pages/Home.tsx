import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Hero } from '../components/hero/Hero';
import { QuickStats } from '../components/hero/QuickStats';
import { SectionHeader } from '../components/common/SectionHeader';
import { ProjectCard } from '../components/projects/ProjectCard';
import { SkillCard } from '../components/skills/SkillCard';
import { ServiceCard } from '../components/services/ServiceCard';
import { BlogCard } from '../components/blog/BlogCard';
import { GitHubActivity } from '../components/github/GitHubActivity';
import { AndroidPhoneSimulator } from '../components/home/AndroidPhoneSimulator';
import { MonetizationCalculator } from '../components/home/MonetizationCalculator';
import { HackerTerminal } from '../components/home/HackerTerminal';
import { HologramAchievements } from '../components/home/HologramAchievements';
import { SEO } from '../components/common/SEO';
import { projectsData } from '../data/projects';
import { skillsData } from '../data/skills';
import { servicesData } from '../data/services';
import { blogPostsData } from '../data/blog';
import type { SkillGroup } from '../types';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [activeSkillGroup, setActiveSkillGroup] = useState<SkillGroup>('Mobile');

  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 3);
  const filteredSkills = skillsData.filter((s) => s.category === activeSkillGroup);
  const latestArticles = blogPostsData.slice(0, 3);

  const skillGroups: SkillGroup[] = ['Mobile', 'Web', 'Backend', 'Tools'];

  return (
    <>
      <SEO title="Thành Nam — Android & Web Developer | Portfolio" />

      <main className="space-y-24 pb-20">
        <Hero />

        <QuickStats />

        {/* Feature 1: Android Phone Simulator */}
        <AndroidPhoneSimulator />

        {/* Feature 6: 3D Hologram Achievements & Sports Awards */}
        <HologramAchievements />

        {/* Feature 2: Monetization Calculator */}
        <MonetizationCalculator />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Featured Showcase"
            title="Selected Projects"
            subtitle="Explore production-ready native Android apps, food delivery systems, IPTV streaming, and full-stack web platforms."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/projects')}
              className="gradient-bg-emerald px-8 py-3.5 rounded-xl font-bold text-sm inline-flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
            >
              <span>Explore All Projects ({projectsData.length})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Tech Stack"
            title="Skills & Technologies"
            subtitle="Hands-on experience with native mobile frameworks, web technologies, backend databases, and developer tools."
          />

          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-slate-100 dark:bg-[#131924] p-1.5 rounded-2xl border border-slate-200 dark:border-[#212B3B] gap-1">
              {skillGroups.map((group) => (
                <button
                  key={group}
                  onClick={() => setActiveSkillGroup(group)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    activeSkillGroup === group
                      ? 'bg-emerald-500 text-white shadow-md'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {group}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, idx) => (
              <SkillCard key={idx} skill={skill} />
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Client Solutions"
            title="What I Can Build For You"
            subtitle="Custom development services tailored for businesses, startups, and creative projects."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Open Source"
            title="GitHub Activity & Repositories"
            subtitle="Public code, stars, language distribution, and open-source contributions."
          />

          <GitHubActivity />
        </section>

        {/* Feature 3: Hacker Terminal CLI */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Developer CLI"
            title="Interactive Developer Terminal"
            subtitle="Trải nghiệm CLI mini — gõ lệnh để khám phá kỹ năng, dự án và thông tin liên hệ của Thành Nam như một Developer thực thụ!"
          />
          <div className="mt-10">
            <HackerTerminal />
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Technical Writing"
            title="Latest Blog Posts"
            subtitle="Articles on Android architecture, ExoPlayer streaming, Node.js REST APIs, and web optimization."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestArticles.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/blog')}
              className="glass-card hover:bg-slate-100 dark:hover:bg-[#1C2433] text-slate-900 dark:text-white px-7 py-3 rounded-xl font-bold text-sm inline-flex items-center gap-2 border border-slate-300 dark:border-[#212B3B]"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </button>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-200/80 dark:border-[#212B3B] relative overflow-hidden text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-8 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                  Ready to Start?
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                Have an idea? Let's turn it into a real product.
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                Whether you need a native Android application, web dashboard, or custom API backend, I am ready to collaborate.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <button
                onClick={() => navigate('/contact')}
                className="gradient-bg-emerald px-8 py-4 rounded-xl font-bold text-base flex items-center gap-2 shadow-xl"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

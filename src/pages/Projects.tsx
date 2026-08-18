import React, { useState } from 'react';
import { Search, Layers } from 'lucide-react';
import { ProjectCard } from '../components/projects/ProjectCard';
import { SectionHeader } from '../components/common/SectionHeader';
import { SEO } from '../components/common/SEO';
import { projectsData } from '../data/projects';
import type { ProjectCategory } from '../types';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: ProjectCategory[] = ['All', 'Android', 'Web', 'Fullstack', 'Backend'];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEO title="Projects — Nam.Dev Portfolio" description="Explore native Android streaming applications, desktop pets, React web platforms, and REST API backends." />

      <main className="pt-32 pb-20 space-y-12">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Portfolio Catalog"
            title="Projects & Work Showcase"
            subtitle="Native Android applications, ExoPlayer media streaming, React web platforms, and backend REST APIs."
          />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'gradient-bg-emerald text-white shadow-md'
                      : 'glass-card text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-[#212B3B]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects or tech..."
                className="w-full bg-slate-100 dark:bg-[#131924] text-slate-900 dark:text-white pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm border border-slate-200 dark:border-[#212B3B] focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 glass-card rounded-3xl border border-slate-200 dark:border-[#212B3B] space-y-4">
              <Layers className="w-12 h-12 text-slate-500 mx-auto" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                No matching projects found
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                Try searching for a different technology like "Kotlin", "React", or "ExoPlayer".
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="text-xs font-bold text-emerald-400 hover:underline"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </section>
      </main>
    </>
  );
};

import React, { useState } from 'react';
import { Search, BookOpen } from 'lucide-react';
import { BlogCard } from '../components/blog/BlogCard';
import { SectionHeader } from '../components/common/SectionHeader';
import { SEO } from '../components/common/SEO';
import { blogPostsData } from '../data/blog';
import type { BlogCategory } from '../types';

export const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: BlogCategory[] = ['All', 'Android', 'React', 'Backend', 'Dev Tips'];

  const filteredPosts = blogPostsData.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEO title="Technical Blog & Articles — Nam.Dev" description="Insights and tutorials on Kotlin Android development, ExoPlayer streaming, Node.js REST APIs, and React web architecture." />

      <main className="pt-32 pb-20 space-y-12">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Technical Writing"
            title="Blog & Tutorials"
            subtitle="Deep-dive articles on native Android architecture, ExoPlayer media streaming, Node.js REST APIs, and React web apps."
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
                placeholder="Search articles..."
                className="w-full bg-slate-100 dark:bg-[#131924] text-slate-900 dark:text-white pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm border border-slate-200 dark:border-[#212B3B] focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 glass-card rounded-3xl border border-slate-200 dark:border-[#212B3B] space-y-4">
              <BookOpen className="w-12 h-12 text-slate-500 mx-auto" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                No matching articles found
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                Try clearing your search query or choosing another category.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="text-xs font-bold text-emerald-400 hover:underline"
              >
                Reset Article Filters
              </button>
            </div>
          )}
        </section>
      </main>
    </>
  );
};

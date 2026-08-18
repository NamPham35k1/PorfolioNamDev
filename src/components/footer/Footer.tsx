import React from 'react';
import { NavLink } from 'react-router-dom';
import { Terminal, Heart } from 'lucide-react';
import { developerConfig } from '../../data/developer';
import { GithubIcon, LinkedinIcon, FacebookIcon } from '../common/SocialIcons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 dark:bg-[#080B11] border-t border-slate-200 dark:border-[#1A2232] pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-200 dark:border-[#1E2638]">
          <div className="md:col-span-2 space-y-4">
            <NavLink to="/" className="flex items-center gap-2 font-mono font-extrabold text-2xl text-slate-900 dark:text-white">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center text-white">
                <Terminal className="w-4 h-4" />
              </div>
              <span>NAM<span className="text-emerald-400">.DEV</span></span>
            </NavLink>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-sm leading-relaxed">
              {developerConfig.tagline}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={developerConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-200/70 dark:bg-[#131924] flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-emerald-400 hover:border hover:border-emerald-500/40 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={developerConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-200/70 dark:bg-[#131924] flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-cyan-400 hover:border hover:border-cyan-500/40 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={developerConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-200/70 dark:bg-[#131924] flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-indigo-400 hover:border hover:border-indigo-500/40 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/projects" className="text-slate-600 dark:text-slate-400 hover:text-emerald-400 transition-colors">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-slate-600 dark:text-slate-400 hover:text-emerald-400 transition-colors">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className="text-slate-600 dark:text-slate-400 hover:text-emerald-400 transition-colors">
                  Blog & Articles
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-slate-600 dark:text-slate-400 hover:text-emerald-400 transition-colors">
                  Contact Me
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Specialization
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>Android Native (Kotlin)</li>
              <li>ExoPlayer & Media Streaming</li>
              <li>ReactJS & TypeScript Web</li>
              <li>Node.js & MongoDB REST APIs</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© 2026 Nam. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>using React, TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

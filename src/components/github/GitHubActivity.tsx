import React, { useEffect, useState } from 'react';
import { Star, GitFork, BookOpen, Users, ExternalLink, Code2 } from 'lucide-react';
import { fetchGitHubProfile } from '../../services/github';
import type { GitHubUser } from '../../types';
import { GithubIcon } from '../common/SocialIcons';

export const GitHubActivity: React.FC = () => {
  const [profile, setProfile] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    fetchGitHubProfile('namdev').then((data) => {
      if (isMounted) {
        setProfile(data);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  if (loading || !profile) {
    return (
      <div className="glass-card rounded-2xl p-8 border border-slate-200 dark:border-[#212B3B] animate-pulse space-y-4">
        <div className="h-6 bg-slate-700/30 rounded w-1/3"></div>
        <div className="h-20 bg-slate-700/20 rounded"></div>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-[#212B3B] space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/80 dark:border-[#1E2638]">
        <div className="flex items-center gap-4">
          <img
            src={profile.avatarUrl}
            alt={profile.name}
            className="w-14 h-14 rounded-2xl object-cover border-2 border-emerald-500/40 shadow-lg shadow-emerald-500/10"
          />
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                @{profile.username}
              </h3>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                GitHub Live
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
              {profile.bio}
            </p>
          </div>
        </div>

        <a
          href={`https://github.com/${profile.username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="gradient-bg-emerald px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 self-stretch sm:self-auto justify-center"
        >
          <GithubIcon className="w-4 h-4" />
          <span>Follow on GitHub</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="p-4 rounded-2xl bg-slate-100 dark:bg-[#131924] border border-slate-200 dark:border-[#212B3B]">
          <div className="flex items-center justify-center gap-1.5 text-emerald-400 text-sm font-semibold mb-1">
            <BookOpen className="w-4 h-4" />
            <span>Repos</span>
          </div>
          <span className="text-2xl font-extrabold text-slate-900 dark:text-white">{profile.publicRepos}</span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-100 dark:bg-[#131924] border border-slate-200 dark:border-[#212B3B]">
          <div className="flex items-center justify-center gap-1.5 text-amber-400 text-sm font-semibold mb-1">
            <Star className="w-4 h-4" />
            <span>Stars</span>
          </div>
          <span className="text-2xl font-extrabold text-slate-900 dark:text-white">{profile.totalStars}</span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-100 dark:bg-[#131924] border border-slate-200 dark:border-[#212B3B]">
          <div className="flex items-center justify-center gap-1.5 text-cyan-400 text-sm font-semibold mb-1">
            <Users className="w-4 h-4" />
            <span>Followers</span>
          </div>
          <span className="text-2xl font-extrabold text-slate-900 dark:text-white">{profile.followers}</span>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
          <Code2 className="w-4 h-4 text-emerald-400" />
          Primary Code Languages
        </h4>

        <div className="h-3 rounded-full bg-slate-200 dark:bg-[#161D2B] overflow-hidden flex">
          {profile.topLanguages.map((lang, idx) => (
            <div
              key={idx}
              className="h-full"
              style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
              title={`${lang.name}: ${lang.percentage}%`}
            ></div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 pt-1 text-xs">
          {profile.topLanguages.map((lang, idx) => (
            <div key={idx} className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lang.color }}></span>
              <span className="font-semibold text-slate-700 dark:text-slate-300">{lang.name}</span>
              <span className="text-slate-400 font-mono">({lang.percentage}%)</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4 pt-2">
        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Featured Repositories
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {profile.recentRepos.map((repo, idx) => (
            <a
              key={idx}
              href={repo.htmlUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-slate-100/70 dark:bg-[#131924] border border-slate-200 dark:border-[#212B3B] hover:border-emerald-500/40 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h5 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-emerald-400 transition-colors truncate">
                    {repo.name}
                  </h5>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-[#1A2333] text-emerald-400">
                    {repo.language}
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200/60 dark:border-[#1E2638] font-mono">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5 text-cyan-400" />
                    {repo.forks}
                  </span>
                </div>
                <span>Updated {repo.updatedAt}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

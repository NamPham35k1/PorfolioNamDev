import React, { useState } from 'react';
import { Copy, Check, Circle } from 'lucide-react';

export const TerminalCard: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'terminal' | 'config'>('terminal');

  const copyToClipboard = () => {
    const text = `whoami: Nam\nroles: Android & Web Developer\nstatus: Available for freelance`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl glass-card border border-slate-200 dark:border-[#212B3B] overflow-hidden shadow-2xl shadow-emerald-500/10 font-mono text-sm">
      <div className="bg-slate-100 dark:bg-[#161C28] px-4 py-3 border-b border-slate-200 dark:border-[#212B3B] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Circle className="w-3 h-3 text-rose-500 fill-rose-500" />
          <Circle className="w-3 h-3 text-amber-500 fill-amber-500" />
          <Circle className="w-3 h-3 text-emerald-500 fill-emerald-500" />
          <span className="ml-2 text-xs font-sans text-slate-500 dark:text-slate-400 font-medium">nam@dev-station:~</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex bg-slate-200 dark:bg-[#0E131F] p-0.5 rounded-md text-xs">
            <button
              onClick={() => setActiveTab('terminal')}
              className={`px-2.5 py-1 rounded transition-colors ${
                activeTab === 'terminal' ? 'bg-emerald-500 text-white font-semibold' : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              zsh
            </button>
            <button
              onClick={() => setActiveTab('config')}
              className={`px-2.5 py-1 rounded transition-colors ${
                activeTab === 'config' ? 'bg-emerald-500 text-white font-semibold' : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              env.json
            </button>
          </div>

          <button
            onClick={copyToClipboard}
            className="p-1.5 rounded text-slate-400 hover:text-slate-200 transition-colors"
            title="Copy terminal summary"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <div className="p-5 sm:p-6 bg-slate-900 text-slate-200 leading-relaxed min-h-[280px]">
        {activeTab === 'terminal' ? (
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <span className="text-cyan-400">nam@macbook</span>
                <span className="text-slate-500">:~#</span>
                <span>$ whoami</span>
              </div>
              <div className="pl-4 mt-1 space-y-0.5 text-slate-300">
                <p className="text-white font-bold">Nam</p>
                <p className="text-emerald-400">⚡ Native Android Developer (Kotlin)</p>
                <p className="text-cyan-400">⚡ Full-stack Web Developer (React + Node.js)</p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <span className="text-cyan-400">nam@macbook</span>
                <span className="text-slate-500">:~#</span>
                <span>$ currently_working_on</span>
              </div>
              <div className="pl-4 mt-1 space-y-0.5 text-slate-300">
                <p>• Android Apps (ExoPlayer, Room, Overlay Services)</p>
                <p>• React & TypeScript SaaS Web Apps</p>
                <p>• Scalable Express & MongoDB REST APIs</p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <span className="text-cyan-400">nam@macbook</span>
                <span className="text-slate-500">:~#</span>
                <span>$ status</span>
              </div>
              <div className="pl-4 mt-1 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="text-emerald-400 font-semibold">Available for freelance & contracts</span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1 text-emerald-400">
              <span className="text-cyan-400">nam@macbook</span>
              <span className="text-slate-500">:~#</span>
              <span className="inline-block w-2.5 h-5 bg-emerald-400 animate-pulse"></span>
            </div>
          </div>
        ) : (
          <pre className="text-xs text-slate-300 overflow-x-auto leading-relaxed">
{`{
  "developer": "Nam",
  "roles": ["Android Native", "React Web", "Backend REST API"],
  "primary_languages": ["Kotlin", "TypeScript", "JavaScript"],
  "mobile_tech": ["Android SDK", "Room", "Retrofit", "ExoPlayer"],
  "web_tech": ["ReactJS", "Vite", "Tailwind CSS", "Node.js"],
  "database": ["MongoDB", "Room DB", "Firebase"],
  "open_for_hire": true,
  "timezone": "UTC+7"
}`}
          </pre>
        )}
      </div>
    </div>
  );
};

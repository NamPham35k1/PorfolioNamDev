import React, { useState } from 'react';
import { Copy, Check, Code } from 'lucide-react';

interface CodeBlockProps {
  language: string;
  filename?: string;
  code: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ language, filename, code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 rounded-2xl overflow-hidden border border-slate-700/80 bg-[#0D1117] font-mono text-xs shadow-xl">
      {/* Code Header */}
      <div className="bg-[#161B22] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2 text-slate-400">
          <Code className="w-4 h-4 text-emerald-400" />
          <span className="text-slate-300 font-semibold">{filename || `${language} snippet`}</span>
          <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
            {language}
          </span>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 text-xs transition-colors"
          title="Copy code"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Body */}
      <div className="p-4 sm:p-5 overflow-x-auto text-slate-200 leading-relaxed font-mono">
        <pre className="text-sm">
          <code>{code.trim()}</code>
        </pre>
      </div>
    </div>
  );
};

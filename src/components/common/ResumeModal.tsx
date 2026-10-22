import React from 'react';
import confetti from 'canvas-confetti';
import { X, Download, CheckCircle2, Award, Briefcase, GraduationCap, FileText } from 'lucide-react';
import { developerConfig } from '../../data/developer';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 }
    });
    alert('📄 Hệ thống đang tải xuống CV của Phạm Thành Nam...');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-3xl glass-card rounded-3xl border border-slate-700 p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 border-b border-slate-800 pb-6">
          <img
            src={developerConfig.avatarUrl}
            alt={developerConfig.fullName}
            className="w-16 h-16 rounded-2xl object-cover border-2 border-emerald-400"
          />
          <div>
            <h3 className="text-2xl font-extrabold text-white">
              {developerConfig.fullName} — CV / Resume
            </h3>
            <p className="text-xs font-mono text-emerald-400 mt-1">
              {developerConfig.title} • {developerConfig.hometown}
            </p>
          </div>
        </div>

        {/* CV Details */}
        <div className="space-y-6 text-sm">
          {/* Summary */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold uppercase text-slate-400 flex items-center gap-2">
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>Tóm tắt mục tiêu & Thế mạnh</span>
            </h4>
            <p className="text-slate-300 text-xs leading-relaxed bg-[#131924] p-4 rounded-2xl border border-slate-800">
              {developerConfig.bio}
            </p>
          </div>

          {/* Education & Achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2 bg-[#131924] p-4 rounded-2xl border border-slate-800">
              <h4 className="text-xs font-mono font-bold uppercase text-emerald-400 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                <span>Học vấn & Bằng cấp</span>
              </h4>
              <div className="text-xs text-slate-200 font-bold">{developerConfig.university}</div>
              <div className="text-xs text-slate-400">Chuyên ngành: {developerConfig.major}</div>
              <div className="text-xs text-slate-400">Sinh năm: {developerConfig.dob}</div>
            </div>

            <div className="space-y-2 bg-[#131924] p-4 rounded-2xl border border-slate-800">
              <h4 className="text-xs font-mono font-bold uppercase text-cyan-400 flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Thành tích nổi bật</span>
              </h4>
              {developerConfig.achievements.map((ach, i) => (
                <div key={i} className="text-xs text-slate-300 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{ach}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold uppercase text-slate-400 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-emerald-400" />
              <span>Kỹ năng lập trình chuyên sâu</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 font-semibold text-emerald-400">Kotlin & Android SDK</div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 font-semibold text-cyan-400">AdMob & IAP</div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 font-semibold text-indigo-400">ReactJS & TypeScript</div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 font-semibold text-amber-400">Node.js & Express API</div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 flex flex-col sm:flex-row gap-3 border-t border-slate-800">
          <button
            onClick={handleDownload}
            className="flex-1 gradient-bg-emerald py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-xl"
          >
            <Download className="w-4 h-4" />
            <span>Tải xuống CV (PDF)</span>
          </button>
          <button
            onClick={onClose}
            className="px-6 py-3.5 rounded-xl bg-slate-800 text-slate-300 font-semibold text-sm hover:bg-slate-700 transition-colors"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};

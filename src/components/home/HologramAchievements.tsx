import React from 'react';
import { Trophy, Medal, ShieldCheck, Flame } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';

export const HologramAchievements: React.FC = () => {
  const achievementsList = [
    {
      id: 'champion',
      icon: Trophy,
      badge: 'Bóng đá UTT',
      title: 'Vô địch giải bóng đá Khoa CNTT',
      subtitle: 'Trường Đại học Công nghệ Giao thông Vận tải',
      desc: 'Xuất sắc cùng đồng đội giành vị trí Quán quân giải đấu Khoa Công nghệ Thông tin.',
      color: 'from-amber-500/20 via-yellow-500/10 to-amber-600/20',
      borderColor: 'border-amber-500/50',
      iconColor: 'text-amber-400'
    },
    {
      id: 'runnerup',
      icon: Medal,
      badge: 'Bóng đá UTT',
      title: 'Á quân (Nhì) giải bóng đá Trường UTT',
      subtitle: 'Giải đấu thể thao cấp Trường UTT',
      desc: 'Đạt danh hiệu Á quân toàn trường, thể hiện tinh thần đồng đội & thể thao xuất sắc.',
      color: 'from-slate-400/20 via-cyan-500/10 to-slate-500/20',
      borderColor: 'border-cyan-400/50',
      iconColor: 'text-cyan-300'
    },
    {
      id: 'android-monetization',
      icon: Flame,
      badge: 'Chuyên môn Android',
      title: 'Chuyên gia Android Monetization & AdMob',
      subtitle: 'Google AdMob Ads & In-App Purchase (IAP)',
      desc: 'Phát triển & maintain ứng dụng Android thực tế, tối ưu eCPM, Banner, Interstitial, Native, App Open Ads & IAP Subscriptions.',
      color: 'from-emerald-500/20 via-teal-500/10 to-emerald-600/20',
      borderColor: 'border-emerald-500/50',
      iconColor: 'text-emerald-400'
    },
    {
      id: 'fullstack-web',
      icon: ShieldCheck,
      badge: 'Chuyên môn Web',
      title: 'Full-stack Web & RESTful API Engine',
      subtitle: 'ReactJS, TypeScript, Tailwind & Node.js',
      desc: 'Thiết kế giao diện Web SPA chuẩn SaaS, hiệu ứng Glassmorphism mượt mà kết hợp Backend Node.js & MongoDB.',
      color: 'from-indigo-500/20 via-purple-500/10 to-indigo-600/20',
      borderColor: 'border-indigo-500/50',
      iconColor: 'text-indigo-400'
    }
  ];

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        badge="Achievements & Milestones"
        title="Thành tích Nổi bật & Chứng nhận Chuyên môn"
        subtitle="Dấu ấn thi đấu thể thao ngoại khóa cùng chuyên môn lập trình ứng dụng Android & Web của Phạm Thành Nam."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {achievementsList.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className={`group relative glass-card p-6 rounded-3xl border ${item.borderColor} bg-gradient-to-br ${item.color} space-y-4 hover:scale-[1.03] transition-all duration-300 shadow-xl overflow-hidden`}
            >
              {/* Holographic Shiny Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>

              <div className="flex justify-between items-start">
                <div className={`p-3.5 rounded-2xl bg-slate-900/80 ${item.iconColor} border border-slate-800 shadow-inner`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-slate-900/80 text-slate-300 border border-slate-700">
                  {item.badge}
                </span>
              </div>

              <div className="space-y-1">
                <h4 className="text-base font-bold text-white leading-snug group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h4>
                <div className="text-xs font-mono text-slate-400">
                  {item.subtitle}
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed pt-1">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

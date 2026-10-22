import React, { useState } from 'react';
import { TrendingUp, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SectionHeader } from '../common/SectionHeader';

export const MonetizationCalculator: React.FC = () => {
  const navigate = useNavigate();

  const [dau, setDau] = useState<number>(10000);
  const [appType, setAppType] = useState<'utility' | 'entertainment' | 'food' | 'media'>('utility');

  // Ad Formats State
  const [useBanner, setUseBanner] = useState(true);
  const [useInterstitial, setUseInterstitial] = useState(true);
  const [useNative, setUseNative] = useState(true);
  const [useAppOpen, setUseAppOpen] = useState(true);
  const [useIap, setUseIap] = useState(true);

  // ECPM Multipliers based on app category
  const ecpmMultiplier = {
    utility: 1.2,
    entertainment: 1.5,
    food: 1.8,
    media: 2.0
  }[appType];

  // Ad Revenue Calculation Logic
  let dailyAdRev = 0;
  if (useBanner) dailyAdRev += (dau * 3 * 0.4 * ecpmMultiplier) / 1000;
  if (useInterstitial) dailyAdRev += (dau * 1.5 * 2.5 * ecpmMultiplier) / 1000;
  if (useNative) dailyAdRev += (dau * 2.0 * 1.8 * ecpmMultiplier) / 1000;
  if (useAppOpen) dailyAdRev += (dau * 1.0 * 3.2 * ecpmMultiplier) / 1000;

  // IAP Revenue Logic (Assuming 1.5% conversion at $1.99 average item price)
  let dailyIapRev = 0;
  if (useIap) {
    dailyIapRev = (dau * 0.012 * 1.99 * ecpmMultiplier);
  }

  const monthlyTotalUsd = Math.round((dailyAdRev + dailyIapRev) * 30);
  const monthlyTotalVnd = Math.round(monthlyTotalUsd * 25400);

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        badge="Monetization ROI Tool"
        title="Công cụ Tính Doanh thu Dự kiến (AdMob & IAP)"
        subtitle="Mô phỏng doanh thu hàng tháng cho ứng dụng Android của bạn dựa trên quy mô người dùng thực tế và các dạng quảng cáo tối ưu."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-12">
        {/* Left Form Inputs */}
        <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-[#212B3B] space-y-6">
          <div className="space-y-3">
            <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              1. Chọn Loại hình Ứng dụng:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'utility', label: 'Công cụ / Utility' },
                { id: 'entertainment', label: 'Giải trí / Game' },
                { id: 'food', label: 'Đặt đồ ăn / F&B' },
                { id: 'media', label: 'Streaming / IPTV' }
              ].map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setAppType(type.id as any)}
                  className={`p-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                    appType === type.id
                      ? 'bg-emerald-500 text-white border-emerald-400 font-bold shadow-md'
                      : 'bg-slate-100 dark:bg-[#131924] text-slate-600 dark:text-slate-400 border-slate-200 dark:border-[#212B3B]'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              <span>2. Số người dùng hoạt động hàng ngày (DAU):</span>
              <span className="text-emerald-400 text-sm font-extrabold">{dau.toLocaleString()} Users / ngày</span>
            </div>
            <input
              type="range"
              min={1000}
              max={100000}
              step={1000}
              value={dau}
              onChange={(e) => setDau(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 dark:bg-[#131924] rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <div className="flex justify-between text-[11px] font-mono text-slate-400">
              <span>1,000 Users</span>
              <span>50,000 Users</span>
              <span>100,000+ Users</span>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              3. Tích hợp định dạng Quảng cáo & Monetization:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-100 dark:bg-[#131924] border border-slate-200 dark:border-[#212B3B] cursor-pointer">
                <input
                  type="checkbox"
                  checked={useBanner}
                  onChange={(e) => setUseBanner(e.target.checked)}
                  className="rounded text-emerald-500 focus:ring-emerald-500 w-4 h-4 accent-emerald-500"
                />
                <span className="font-semibold text-slate-800 dark:text-slate-200">Banner Ads (Quảng cáo chân trang)</span>
              </label>

              <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-100 dark:bg-[#131924] border border-slate-200 dark:border-[#212B3B] cursor-pointer">
                <input
                  type="checkbox"
                  checked={useInterstitial}
                  onChange={(e) => setUseInterstitial(e.target.checked)}
                  className="rounded text-emerald-500 focus:ring-emerald-500 w-4 h-4 accent-emerald-500"
                />
                <span className="font-semibold text-slate-800 dark:text-slate-200">Interstitial Ads (Quảng cáo xen kẽ)</span>
              </label>

              <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-100 dark:bg-[#131924] border border-slate-200 dark:border-[#212B3B] cursor-pointer">
                <input
                  type="checkbox"
                  checked={useNative}
                  onChange={(e) => setUseNative(e.target.checked)}
                  className="rounded text-emerald-500 focus:ring-emerald-500 w-4 h-4 accent-emerald-500"
                />
                <span className="font-semibold text-slate-800 dark:text-slate-200">Native Ads (Quảng cáo tự nhiên)</span>
              </label>

              <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-100 dark:bg-[#131924] border border-slate-200 dark:border-[#212B3B] cursor-pointer">
                <input
                  type="checkbox"
                  checked={useAppOpen}
                  onChange={(e) => setUseAppOpen(e.target.checked)}
                  className="rounded text-emerald-500 focus:ring-emerald-500 w-4 h-4 accent-emerald-500"
                />
                <span className="font-semibold text-slate-800 dark:text-slate-200">App Open Ads (Mở app xem quảng cáo)</span>
              </label>

              <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-100 dark:bg-[#131924] border border-slate-200 dark:border-[#212B3B] cursor-pointer sm:col-span-2">
                <input
                  type="checkbox"
                  checked={useIap}
                  onChange={(e) => setUseIap(e.target.checked)}
                  className="rounded text-emerald-500 focus:ring-emerald-500 w-4 h-4 accent-emerald-500"
                />
                <span className="font-semibold text-emerald-400">In-App Purchases / Gói đăng ký (IAP Subscriptions)</span>
              </label>
            </div>
          </div>
        </div>

        {/* Right Result Card */}
        <div className="lg:col-span-5 glass-card p-8 rounded-3xl border border-emerald-500/30 space-y-6 bg-gradient-to-br from-emerald-950/20 via-slate-900 to-cyan-950/20 shadow-2xl">
          <div className="flex items-center gap-2 text-sm font-bold text-emerald-400 font-mono uppercase">
            <TrendingUp className="w-5 h-5" />
            <span>Ước tính Doanh thu Hàng tháng</span>
          </div>

          <div className="space-y-1">
            <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              ${monthlyTotalUsd.toLocaleString()} <span className="text-xs font-normal text-slate-400">USD/tháng</span>
            </div>
            <div className="text-sm font-bold text-emerald-400 font-mono">
              ≈ {monthlyTotalVnd.toLocaleString('vi-VN')} VNĐ / tháng
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-300">
            <div className="flex justify-between">
              <span>Doanh thu AdMob Quảng cáo:</span>
              <span className="font-bold text-white">${Math.round(dailyAdRev * 30).toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Doanh thu IAP Mua trong app:</span>
              <span className="font-bold text-emerald-400">${Math.round(dailyIapRev * 30).toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Chỉ số eCPM dự kiến:</span>
              <span className="font-bold text-cyan-400">${(1.8 * ecpmMultiplier).toFixed(2)} USD</span>
            </div>
          </div>

          <button
            onClick={() => navigate('/contact')}
            className="w-full gradient-bg-emerald py-4 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-xl transform active:scale-95 transition-all"
          >
            <Send className="w-4 h-4" />
            <span>Thuê Thành Nam làm App Monetization</span>
          </button>
        </div>
      </div>
    </section>
  );
};

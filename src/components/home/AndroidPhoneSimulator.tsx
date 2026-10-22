import React, { useState } from 'react';
import { Play, ShoppingBag, Tv, Sparkles, Check, Wifi, Battery, Volume2 } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';

export const AndroidPhoneSimulator: React.FC = () => {
  const [activeApp, setActiveApp] = useState<'appfood' | 'iptv' | 'pet'>('appfood');
  const [cartCount, setCartCount] = useState(1);
  const [isPlayingStream, setIsPlayingStream] = useState(true);
  const [petAction, setPetAction] = useState('Happy 😸');

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        badge="Interactive Showcase"
        title="Trải nghiệm App Android Thực tế trên Điện thoại"
        subtitle="Click chuyển đổi giữa các ứng dụng Android Native do Thành Nam lập trình trực tiếp trên khung giả lập di động!"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-12">
        {/* Left App Controls */}
        <div className="lg:col-span-5 space-y-4">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Chọn ứng dụng trải nghiệm:
          </div>

          <button
            onClick={() => setActiveApp('appfood')}
            className={`w-full p-5 rounded-2xl border text-left transition-all flex items-start gap-4 ${
              activeApp === 'appfood'
                ? 'bg-emerald-500/10 border-emerald-500/50 shadow-lg scale-[1.02]'
                : 'glass-card border-slate-200 dark:border-[#212B3B] hover:border-emerald-500/30'
            }`}
          >
            <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400 shrink-0">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-slate-900 dark:text-white text-base">
                AppFood — Đặt Đồ Ăn Smart
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                Đồ án Android Native với giỏ hàng, đặt món, theo dõi đơn hàng realtime & thanh toán.
              </p>
            </div>
          </button>

          <button
            onClick={() => setActiveApp('iptv')}
            className={`w-full p-5 rounded-2xl border text-left transition-all flex items-start gap-4 ${
              activeApp === 'iptv'
                ? 'bg-cyan-500/10 border-cyan-500/50 shadow-lg scale-[1.02]'
                : 'glass-card border-slate-200 dark:border-[#212B3B] hover:border-cyan-500/30'
            }`}
          >
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
              <Tv className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-slate-900 dark:text-white text-base">
                IPTV Player — Streaming HLS
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                App phát video trực tiếp ExoPlayer, đọc Playlist M3U/M3U8 tốc độ cao.
              </p>
            </div>
          </button>

          <button
            onClick={() => setActiveApp('pet')}
            className={`w-full p-5 rounded-2xl border text-left transition-all flex items-start gap-4 ${
              activeApp === 'pet'
                ? 'bg-indigo-500/10 border-indigo-500/50 shadow-lg scale-[1.02]'
                : 'glass-card border-slate-200 dark:border-[#212B3B] hover:border-indigo-500/30'
            }`}
          >
            <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-slate-900 dark:text-white text-base">
                Kawaii ScreenPet — Floating Overlay
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                Thú cưng nổi trên màn hình Android bằng WindowManager Service.
              </p>
            </div>
          </button>
        </div>

        {/* Right Phone Mockup Container */}
        <div className="lg:col-span-7 flex justify-center">
          <div className="relative w-[300px] sm:w-[320px] h-[600px] bg-slate-900 rounded-[45px] p-3 border-4 border-slate-700/80 shadow-2xl shadow-emerald-500/10 ring-1 ring-slate-800">
            {/* Phone Camera Punch Hole Notch */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-30 flex items-center justify-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-blue-900"></div>
            </div>

            {/* Screen Inner */}
            <div className="w-full h-full bg-[#0B0F17] rounded-[36px] overflow-hidden relative flex flex-col pt-8">
              {/* Android Status Bar */}
              <div className="px-5 py-1.5 flex items-center justify-between text-[11px] font-mono text-slate-400 select-none z-20">
                <span>09:41</span>
                <div className="flex items-center gap-1.5">
                  <Wifi className="w-3 h-3 text-emerald-400" />
                  <Volume2 className="w-3 h-3 text-slate-300" />
                  <Battery className="w-3.5 h-3.5 text-emerald-400" />
                </div>
              </div>

              {/* App Screen Content */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {activeApp === 'appfood' && (
                  <div className="space-y-3 animate-in fade-in">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[10px] font-mono text-orange-400 font-bold uppercase">AppFood Express</div>
                        <div className="text-sm font-extrabold text-white">Combo Gà Rán & Pepsi 🍗</div>
                      </div>
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">4.9 ★</span>
                    </div>

                    <div className="w-full h-36 rounded-2xl overflow-hidden relative group">
                      <img
                        src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600&auto=format&fit=crop"
                        alt="Food"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-3">
                        <span className="text-xs font-bold text-white">Giảm 20k đơn từ 99k</span>
                      </div>
                    </div>

                    <div className="bg-[#131924] p-3 rounded-xl border border-slate-800 space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-300 font-semibold">Giá combo đặc biệt:</span>
                        <span className="text-emerald-400 font-extrabold">89.000 VNĐ</span>
                      </div>
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[11px] text-slate-400">Số lượng: {cartCount}</span>
                        <div className="flex gap-2">
                          <button
                            onClick={() => setCartCount(Math.max(1, cartCount - 1))}
                            className="w-6 h-6 rounded-lg bg-slate-800 text-white font-bold text-xs"
                          >-</button>
                          <button
                            onClick={() => setCartCount(cartCount + 1)}
                            className="w-6 h-6 rounded-lg bg-emerald-500 text-white font-bold text-xs"
                          >+</button>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => alert('🛒 Đã thêm Combo Gà Rán vào giỏ hàng thành công!')}
                      className="w-full py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>Đặt món ngay ({cartCount})</span>
                    </button>
                  </div>
                )}

                {activeApp === 'iptv' && (
                  <div className="space-y-3 animate-in fade-in">
                    <div className="text-[10px] font-mono text-cyan-400 font-bold uppercase">IPTV Player Live</div>
                    <div className="w-full h-40 rounded-2xl overflow-hidden bg-slate-950 relative border border-cyan-500/30 flex items-center justify-center">
                      <img
                        src="https://images.unsplash.com/photo-1593789198777-f29bc259780e?q=80&w=600&auto=format&fit=crop"
                        alt="IPTV"
                        className="w-full h-full object-cover opacity-60"
                      />
                      <button
                        onClick={() => setIsPlayingStream(!isPlayingStream)}
                        className="absolute w-12 h-12 rounded-full bg-cyan-500/90 text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
                      >
                        <Play className="w-6 h-6 fill-white ml-0.5" />
                      </button>
                      <div className="absolute top-2 left-2 bg-rose-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                        <span>LIVE HLS 1080P</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-xs font-bold text-white">Danh sách kênh nổi bật:</div>
                      {['VTV1 HD — Thời Sự', 'VTV3 HD — Giải Trí', 'K+ SPORT 1 — Ngoại Hạng Anh'].map((ch, i) => (
                        <div key={i} className="p-2.5 rounded-xl bg-[#131924] border border-slate-800 text-xs flex items-center justify-between">
                          <span className="text-slate-200 font-semibold">{ch}</span>
                          <span className="text-[10px] text-emerald-400 font-mono">60fps</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeApp === 'pet' && (
                  <div className="space-y-3 animate-in fade-in">
                    <div className="text-[10px] font-mono text-indigo-400 font-bold uppercase">Kawaii ScreenPet Overlay</div>
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-indigo-500/30 text-center space-y-3">
                      <div className="text-4xl animate-bounce">🐱</div>
                      <div className="text-xs font-bold text-white">Trạng thái pet: <span className="text-indigo-400">{petAction}</span></div>
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => setPetAction('Cho ăn 🍕')}
                          className="px-3 py-1.5 bg-indigo-600 rounded-lg text-white text-[11px] font-bold"
                        >Cho ăn</button>
                        <button
                          onClick={() => setPetAction('Đang ngủ 💤')}
                          className="px-3 py-1.5 bg-slate-800 rounded-lg text-slate-300 text-[11px] font-bold"
                        >Đi ngủ</button>
                        <button
                          onClick={() => setPetAction('Vui vẻ 😸')}
                          className="px-3 py-1.5 bg-emerald-600 rounded-lg text-white text-[11px] font-bold"
                        >Chơi đùa</button>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#131924] border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                      <span>WindowManager Overlay:</span>
                      <span className="text-emerald-400 font-bold flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Bật
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Android Gesture Home Bar */}
              <div className="py-2 flex justify-center">
                <div className="w-28 h-1 bg-slate-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

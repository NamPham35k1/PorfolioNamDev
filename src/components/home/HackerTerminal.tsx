import React, { useState, useRef, useEffect } from 'react';
import { CornerDownLeft } from 'lucide-react';

interface CommandOutput {
  command: string;
  response: React.ReactNode;
}

export const HackerTerminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'welcome',
      response: (
        <div className="space-y-1 text-xs">
          <div className="text-emerald-400 font-bold">🚀 Antigravity CLI v2.4.0 — Welcome to Phạm Thành Nam Environment</div>
          <div className="text-slate-400">Gõ <span className="text-cyan-400 font-bold">help</span> để xem danh sách lệnh có sẵn.</div>
        </div>
      )
    }
  ]);
  const [matrixActive, setMatrixActive] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let response: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        response = (
          <div className="space-y-1 text-xs text-slate-300">
            <div className="text-cyan-400 font-bold">Danh sách câu lệnh có sẵn:</div>
            <div>• <span className="text-emerald-400 font-bold">bio</span> — Xem thông tin cá nhân Thành Nam</div>
            <div>• <span className="text-emerald-400 font-bold">skills</span> — Xem danh sách kỹ năng Kotlin, AdMob, React...</div>
            <div>• <span className="text-emerald-400 font-bold">projects</span> — Liệt kê các dự án tiêu biểu (AppFood, IPTV Player...)</div>
            <div>• <span className="text-emerald-400 font-bold">contact</span> — Lấy thông tin liên hệ email & Telegram</div>
            <div>• <span className="text-emerald-400 font-bold">matrix</span> — Bật hiệu ứng Mưa Ma Trận Matrix</div>
            <div>• <span className="text-emerald-400 font-bold">clear</span> — Xóa màn hình Terminal</div>
          </div>
        );
        break;

      case 'bio':
      case 'whoami':
        response = (
          <div className="text-xs text-slate-300 space-y-1">
            <div className="text-emerald-400 font-bold">👤 Phạm Thành Nam (Sinh 15/10/2004)</div>
            <div>• Quê quán: Ninh Bình</div>
            <div>• Học vấn: Đại học Công nghệ Giao thông Vận tải (UTT) - Ngành CNTT</div>
            <div>• Vị trí: Android & Full-stack Web Developer tại công ty công nghệ (Gần 1 năm kinh nghiệm)</div>
            <div>• Thành tích: Vô địch bóng đá Khoa CNTT & Nhì toàn trường UTT</div>
          </div>
        );
        break;

      case 'skills':
        response = (
          <div className="text-xs space-y-1 text-slate-300">
            <div className="text-emerald-400 font-bold">📱 Mobile: Kotlin, Android SDK, MVVM, Room DB, Retrofit, ExoPlayer</div>
            <div className="text-cyan-400 font-bold">💰 Monetization: Google AdMob (Banner, Interstitial, Native, App Open), In-App Purchases (IAP)</div>
            <div className="text-indigo-400 font-bold">💻 Web & Backend: ReactJS, TypeScript, Tailwind CSS, Node.js, Express, MongoDB, Firebase</div>
          </div>
        );
        break;

      case 'projects':
        response = (
          <div className="text-xs space-y-1 text-slate-300">
            <div>🍔 <span className="text-emerald-400 font-bold">AppFood</span> — Ứng dụng Đặt đồ ăn & Giao hàng (Đồ án UTT)</div>
            <div>📺 <span className="text-cyan-400 font-bold">IPTV Player</span> — Ứng dụng phát trực tuyến HLS ExoPlayer</div>
            <div>🐱 <span className="text-indigo-400 font-bold">Kawaii ScreenPet</span> — Thú cưng màn hình nổi WindowManager</div>
          </div>
        );
        break;

      case 'contact':
        response = (
          <div className="text-xs text-slate-300 space-y-1">
            <div>📧 Email: <span className="text-emerald-400 font-bold">thanhnamnb1004@gmail.com</span></div>
            <div>📍 Địa chỉ: 112 P. Chùa Láng, Láng, Hà Nội</div>
            <div>💬 Telegram: Nhận thông báo trực tiếp qua Bot Telegram</div>
          </div>
        );
        break;

      case 'matrix':
        setMatrixActive(!matrixActive);
        response = (
          <div className="text-xs text-emerald-400 font-bold animate-pulse">
            🟢 Matrix Rain effect toggled: {matrixActive ? 'OFF' : 'ON'}!
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'sudo':
      case 'sudo su':
        response = (
          <div className="text-xs text-rose-400 font-bold">
            ⚠️ Permission denied: Chỉ có Phạm Thành Nam mới có quyền Root Access! 😄
          </div>
        );
        break;

      default:
        response = (
          <div className="text-xs text-rose-400">
            Lệnh <span className="font-mono font-bold">"{cmd}"</span> không tồn tại. Gõ <span className="text-cyan-400 font-bold">help</span> để xem danh sách lệnh.
          </div>
        );
    }

    setHistory((prev) => [...prev, { command: input, response }]);
    setInput('');
  };

  return (
    <div className={`w-full glass-card rounded-3xl border border-slate-700/80 p-5 font-mono text-xs shadow-2xl relative overflow-hidden ${
      matrixActive ? 'bg-black text-emerald-400 border-emerald-500' : 'bg-slate-950 text-slate-200'
    }`}>
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
          <span className="text-xs font-bold text-slate-400 ml-2">thanhnam@dev-terminal:~</span>
        </div>
        <div className="text-[10px] text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
          CLI ACTIVE
        </div>
      </div>

      {/* Terminal History */}
      <div className="max-h-60 overflow-y-auto space-y-3 pr-2 scrollbar-thin">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-emerald-400 font-bold">namdev@utt:~$</span>
              <span className="text-white font-bold">{item.command}</span>
            </div>
            <div className="pl-4">{item.response}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Command Input Form */}
      <form onSubmit={handleCommand} className="mt-3 pt-3 border-t border-slate-800 flex items-center gap-2">
        <span className="text-emerald-400 font-bold shrink-0">namdev@utt:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Gõ 'help' hoặc 'bio'..."
          className="flex-1 bg-transparent text-white focus:outline-none text-xs font-mono"
        />
        <button type="submit" className="p-1 rounded bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-colors">
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
};

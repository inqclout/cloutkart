import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(() => setVisible(false), 300);
          return 100;
        }
        return p + Math.random() * 15 + 5;
      });
    }, 100);
    return () => clearInterval(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`loading-screen ${progress >= 100 ? 'hidden' : ''}`}
      style={{ transition: 'opacity 0.6s ease, visibility 0.6s ease' }}
    >
      {/* Background orbs */}
      <div className="absolute w-64 h-64 rounded-full top-1/4 left-1/4 opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #8B2FE0, transparent)' }} />
      <div className="absolute w-48 h-48 rounded-full bottom-1/4 right-1/4 opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(circle, #06B6D4, transparent)' }} />

      <div className="relative z-10 flex flex-col items-center gap-8">
        <img
          src="/IMG_4598_(2)_(1).png"
          alt="CloutKart"
          className="h-16 w-auto object-contain animate-pulse"
          style={{ filter: 'drop-shadow(0 0 16px rgba(139,47,224,0.5))' }}
        />

        {/* Progress bar */}
        <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#8B2FE0] via-[#2563EB] to-[#06B6D4] rounded-full transition-all duration-300"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        <div className="text-xs text-white/20 font-medium tracking-widest uppercase">
          Loading Experience
        </div>
      </div>
    </div>
  );
}

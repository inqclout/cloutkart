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
      <div className="relative z-10 flex flex-col items-center gap-8">
        <img
          src="/879c983a-71d2-4cb9-b61e-238f9398be59_(1)_(1).png"
          alt="CloutKart"
          className="h-16 w-auto object-contain opacity-90"
        />

        {/* Progress bar */}
        <div className="w-40 h-px bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-white/60 rounded-full transition-all duration-300"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        <div className="text-[10px] text-white/20 font-medium tracking-[0.3em] uppercase">
          Loading
        </div>
      </div>
    </div>
  );
}

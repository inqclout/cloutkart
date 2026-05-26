import { useEffect, useRef, useState } from 'react';
import { Sparkles, Cpu, ShoppingCart, Rocket } from 'lucide-react';

const phases = [
  {
    icon: Sparkles,
    phase: '01',
    title: 'The Idea Emerges',
    desc: 'Abstract concepts crystallize into clear, powerful messaging. Brand DNA analyzed. Market decoded.',
  },
  {
    icon: Cpu,
    phase: '02',
    title: 'The Creative Lab',
    desc: 'AI processes, refines, and optimizes. Multiple variations tested. The winning angle surfaces.',
  },
  {
    icon: ShoppingCart,
    phase: '03',
    title: 'The Cart Moment',
    desc: 'The winning message locks in. Production-ready. Polished. Primed for maximum impact.',
  },
  {
    icon: Rocket,
    phase: '04',
    title: 'Launch & Scale',
    desc: 'One message. Infinite formats. Instagram, TikTok, video, landing pages — all from the same foundation.',
  },
];

export default function ScrollStory() {
  const outerRef = useRef<HTMLDivElement>(null);
  const [activePhase, setActivePhase] = useState(0);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const [showFinal, setShowFinal] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.02 }
    );
    if (outerRef.current) obs.observe(outerRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!outerRef.current) return;
      const rect = outerRef.current.getBoundingClientRect();
      const scrollable = outerRef.current.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const earlyTrigger = window.innerHeight * 0.3;
      const scrolled = -rect.top + earlyTrigger;
      const pct = Math.max(0, Math.min(1, scrolled / scrollable));
      setProgress(pct);

      if (pct < 0.80) {
        setShowFinal(false);
        const phasePct = pct / 0.80;
        setActivePhase(Math.min(phases.length - 1, Math.floor(phasePct * phases.length)));
      } else {
        setShowFinal(true);
        setActivePhase(phases.length - 1);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const activeP = phases[activePhase];

  return (
    <section id="story" className="relative bg-[#0d0d0d]">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="orb w-[700px] h-[700px] -left-64 top-1/3 opacity-[0.035]"
          style={{ background: 'radial-gradient(circle, #ffffff, transparent)' }} />
      </div>

      <div ref={outerRef} className="h-[140vh]">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          {/* Phase cards */}
          <div
            className="transition-all duration-700"
            style={{ opacity: showFinal ? 0 : 1, transform: showFinal ? 'scale(0.95) translateY(-20px)' : 'scale(1) translateY(0)', position: showFinal ? 'absolute' : 'relative', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <div className={`text-center mb-6 md:mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-flex items-center gap-2 glass border border-white/[0.08] rounded-full px-4 py-1.5 text-[11px] font-medium text-white/35 mb-4 tracking-wide uppercase">
                The CloutKart Story
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                Watch Creativity
                <br />
                <span className="text-white/35">Come to Life</span>
              </h2>
              <p className="text-white/25 text-xs sm:text-sm mt-3 font-medium tracking-wide">Scroll to walk through the journey</p>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              {/* Desktop: 4 cards */}
              <div className="hidden md:grid md:grid-cols-4 gap-3 lg:gap-4 mb-6">
                {phases.map((phase, i) => (
                  <div
                    key={phase.phase}
                    className="relative rounded-2xl transition-all duration-500 border"
                    style={{
                      background: i === activePhase ? '#161616' : '#111111',
                      borderColor: i <= activePhase ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.06)',
                      transform: i === activePhase ? 'scale(1.04)' : 'scale(1)',
                      boxShadow: i === activePhase ? '0 8px 32px rgba(0,0,0,0.5)' : 'none',
                    }}
                  >
                    <div className="p-4 lg:p-5 h-full">
                      <div
                        className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mb-3 transition-all duration-500"
                        style={{ opacity: i <= activePhase ? 1 : 0.3 }}
                      >
                        <phase.icon size={15} className="text-white/55" />
                      </div>
                      <div className="text-[10px] font-bold text-white/22 mb-1 tracking-widest uppercase">Phase {phase.phase}</div>
                      <h3
                        className="text-xs lg:text-sm font-semibold mb-1.5 transition-colors duration-500"
                        style={{ color: i === activePhase ? '#ffffff' : 'rgba(255,255,255,0.28)' }}
                      >
                        {phase.title}
                      </h3>
                      <p
                        className="text-[11px] leading-relaxed transition-colors duration-500"
                        style={{ color: i === activePhase ? 'rgba(255,255,255,0.48)' : 'rgba(255,255,255,0.14)' }}
                      >
                        {phase.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile: active card + dots */}
              <div className="md:hidden mb-5">
                <div
                  className="rounded-xl p-5 mb-3 border border-white/[0.12]"
                  style={{ background: '#161616' }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center">
                      <activeP.icon size={18} className="text-white/55" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-white/22 uppercase tracking-widest">Phase {activeP.phase}</div>
                      <h3 className="text-sm font-semibold text-white">{activeP.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-white/42 leading-relaxed">{activeP.desc}</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  {phases.map((_, i) => (
                    <div
                      key={i}
                      className="rounded-full transition-all duration-500"
                      style={{
                        width: i === activePhase ? '20px' : '4px',
                        height: '4px',
                        background: i <= activePhase ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.12)',
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full h-px bg-white/[0.07] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-150 bg-white/45"
                  style={{ width: `${Math.min(progress / 0.65, 1) * 100}%` }}
                />
              </div>
              <div className="flex justify-between mt-2.5 text-[11px] font-medium">
                <span className="text-white/25 tracking-wide">Start</span>
                <span className="text-white/45 tracking-wide">Phase {activeP.phase} / 04</span>
                <span className="text-white/25 tracking-wide">Launch</span>
              </div>
            </div>
          </div>

          {/* Final statement */}
          <div
            className="absolute inset-0 flex items-center justify-center px-4 transition-all duration-600"
            style={{ opacity: showFinal ? 1 : 0, transform: showFinal ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(30px)', pointerEvents: showFinal ? 'auto' : 'none' }}
          >
            <div
              className="text-center rounded-3xl p-6 sm:p-10 lg:p-16 border border-white/[0.08] relative overflow-hidden max-w-3xl w-full"
              style={{ background: '#111111' }}
            >
              <div className="absolute inset-0 bg-white/[0.01]" />
              <div className="relative z-10">
                <p className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 leading-tight tracking-tight">
                  "IT'S NOT ABOUT THE AD."
                </p>
                <p className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white/38 mb-4 sm:mb-6 leading-tight tracking-tight">
                  "IT'S ABOUT THE MESSAGE."
                </p>
                <p className="text-white/32 text-sm sm:text-base max-w-sm mx-auto leading-relaxed">
                  CloutKart builds the message first. Everything else scales from there.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

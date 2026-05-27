import { useEffect, useRef, useState } from 'react';
import { Sparkles, Cpu, ShoppingCart, Rocket } from 'lucide-react';

const phases = [
  { icon: Sparkles, phase: '01', title: 'The Idea Emerges', desc: 'Abstract concepts crystallize into clear, powerful messaging. Brand DNA analyzed. Market decoded.' },
  { icon: Cpu, phase: '02', title: 'The Creative Lab', desc: 'AI processes, refines, and optimizes. Multiple variations tested. The winning angle surfaces.' },
  { icon: ShoppingCart, phase: '03', title: 'The Cart Moment', desc: 'The winning message locks in. Production-ready. Polished. Primed for maximum impact.' },
  { icon: Rocket, phase: '04', title: 'Launch & Scale', desc: 'One message. Infinite formats. Instagram, TikTok, video, landing pages — all from the same foundation.' },
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
    <section id="story" className="relative bg-transparent -my-16 md:-my-24">
      <div ref={outerRef} className="h-[100vh]">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          <div
            className="transition-all duration-700"
            style={{ opacity: showFinal ? 0 : 1, transform: showFinal ? 'scale(0.95) translateY(-20px)' : 'scale(1) translateY(0)', position: showFinal ? 'absolute' : 'relative', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <div className={`text-center mb-6 md:mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="eyebrow-pill mb-4">The CloutKart Story</div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-[-0.02em] font-heading">
                Watch Creativity
                <br />
                <span className="gradient-text">Come to Life</span>
              </h2>
              <p className="text-[#9CA3AF] text-xs sm:text-sm mt-3 font-medium tracking-wide">Scroll to walk through the journey</p>
            </div>

            <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 w-full">
              <div className="hidden md:grid md:grid-cols-4 gap-3 lg:gap-4 mb-6">
                {phases.map((phase, i) => (
                  <div
                    key={phase.phase}
                    className={`glass-card p-4 lg:p-5 transition-all duration-500 ${i === activePhase ? '!border-brand-purple/30' : ''}`}
                    style={{
                      transform: i === activePhase ? 'scale(1.04)' : 'scale(1)',
                    }}
                  >
                    <div className="relative z-10 h-full">
                      <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mb-3 transition-all duration-500"
                        style={{ opacity: i <= activePhase ? 1 : 0.3 }}
                      >
                        <phase.icon size={15} className="text-brand-purple" />
                      </div>
                      <div className="text-[10px] font-bold text-[#6B7280] mb-1 tracking-widest uppercase font-heading">Phase {phase.phase}</div>
                      <h3 className="text-xs lg:text-sm font-semibold mb-1.5 transition-colors duration-500 font-heading"
                        style={{ color: i === activePhase ? '#ffffff' : '#9CA3AF' }}
                      >
                        {phase.title}
                      </h3>
                      <p className="text-[11px] leading-relaxed transition-colors duration-500"
                        style={{ color: i === activePhase ? '#D1D5DB' : 'rgba(156,163,175,0.5)' }}
                      >
                        {phase.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="md:hidden mb-5">
                <div className="glass-card p-5 mb-3 !border-brand-purple/30">
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center">
                        <activeP.icon size={18} className="text-brand-purple" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-[#6B7280] uppercase tracking-widest font-heading">Phase {activeP.phase}</div>
                        <h3 className="text-sm font-semibold text-white font-heading">{activeP.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-[#D1D5DB] leading-relaxed">{activeP.desc}</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2">
                  {phases.map((_, i) => (
                    <div key={i} className="rounded-full transition-all duration-500"
                      style={{
                        width: i === activePhase ? '20px' : '4px',
                        height: '4px',
                        background: i <= activePhase ? 'linear-gradient(135deg, #A855F7, #06B6D4)' : 'rgba(255,255,255,0.12)',
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="w-full h-px bg-white/[0.07] rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all duration-150 bg-gradient-to-r from-brand-purple to-brand-cyan"
                  style={{ width: `${Math.min(progress / 0.65, 1) * 100}%` }}
                />
              </div>
              <div className="flex justify-between mt-2.5 text-[11px] font-medium">
                <span className="text-[#6B7280] tracking-wide">Start</span>
                <span className="stat-number tracking-wide">Phase {activeP.phase} / 04</span>
                <span className="text-[#6B7280] tracking-wide">Launch</span>
              </div>
            </div>
          </div>

          <div
            className="absolute inset-0 flex items-center justify-center px-5 transition-all duration-600"
            style={{ opacity: showFinal ? 1 : 0, transform: showFinal ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(30px)', pointerEvents: showFinal ? 'auto' : 'none' }}
          >
            <div className="gradient-border max-w-3xl w-full">
              <div className="glass-card p-6 sm:p-10 lg:p-16 !border-0 text-center" style={{ background: 'rgba(255,255,255,0.04)' }}>
                <div className="relative z-10">
                  <p className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 leading-tight tracking-[-0.02em] font-heading">
                    "IT'S NOT ABOUT THE AD."
                  </p>
                  <p className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight tracking-[-0.02em] font-heading gradient-text">
                    "IT'S ABOUT THE MESSAGE."
                  </p>
                  <p className="text-[#9CA3AF] text-sm sm:text-base max-w-sm mx-auto leading-relaxed">
                    CloutKart builds the message first. Everything else scales from there.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

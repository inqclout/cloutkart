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
    <section id="story" className="relative bg-[#0a0a0a]">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="orb w-[600px] h-[600px] -left-64 top-1/3 opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #ffffff, transparent)' }} />
      </div>

      <div ref={outerRef} className="h-[140vh]">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          {/* Phase cards view */}
          <div
            className="transition-all duration-700"
            style={{ opacity: showFinal ? 0 : 1, transform: showFinal ? 'scale(0.95) translateY(-20px)' : 'scale(1) translateY(0)', position: showFinal ? 'absolute' : 'relative', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <div className={`text-center mb-5 md:mb-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-block glass border border-white/[0.08] rounded-full px-4 py-1.5 text-xs font-medium text-white/40 mb-3 md:mb-4">
                The CloutKart Story
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                Watch Creativity
                <br />
                <span className="text-white/40">Come to Life</span>
              </h2>
              <p className="text-white/30 text-xs sm:text-sm mt-2 sm:mt-3">Scroll to walk through the journey.</p>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              {/* Desktop: 4 cards */}
              <div className="hidden md:grid md:grid-cols-4 gap-3 lg:gap-4 mb-5">
                {phases.map((phase, i) => (
                  <div
                    key={phase.phase}
                    className="relative rounded-2xl transition-all duration-500"
                    style={{
                      transform: i === activePhase ? 'scale(1.04)' : 'scale(1)',
                    }}
                  >
                    <div
                      className="glass-card rounded-xl p-4 lg:p-5 h-full transition-all duration-500"
                      style={{
                        borderColor: i <= activePhase ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.06)',
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        background: i === activePhase ? 'rgba(255,255,255,0.06)' : undefined,
                      }}
                    >
                      <div
                        className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-white/[0.07] border border-white/[0.09] flex items-center justify-center mb-3 transition-all duration-500"
                        style={{ opacity: i <= activePhase ? 1 : 0.3 }}
                      >
                        <phase.icon size={16} className="text-white/60" />
                      </div>
                      <div className="text-xs font-bold text-white/25 mb-1">PHASE {phase.phase}</div>
                      <h3
                        className="text-xs lg:text-sm font-bold mb-1.5 transition-colors duration-500"
                        style={{ color: i === activePhase ? '#ffffff' : 'rgba(255,255,255,0.3)' }}
                      >
                        {phase.title}
                      </h3>
                      <p
                        className="text-xs leading-relaxed transition-colors duration-500"
                        style={{ color: i === activePhase ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.15)' }}
                      >
                        {phase.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile: big active card + dots */}
              <div className="md:hidden mb-4">
                <div className="glass-card rounded-xl p-5 mb-3 border border-white/[0.12]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-white/[0.07] border border-white/[0.09] flex items-center justify-center">
                      <activeP.icon size={20} className="text-white/60" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white/25">PHASE {activeP.phase}</div>
                      <h3 className="text-base font-bold text-white">{activeP.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-white/45 leading-relaxed">{activeP.desc}</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  {phases.map((_, i) => (
                    <div
                      key={i}
                      className="rounded-full transition-all duration-500"
                      style={{
                        width: i === activePhase ? '20px' : '5px',
                        height: '5px',
                        background: i <= activePhase ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.15)',
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full h-px bg-white/[0.08] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-150 bg-white/50"
                  style={{ width: `${Math.min(progress / 0.65, 1) * 100}%` }}
                />
              </div>
              <div className="flex justify-between mt-2 text-xs font-bold">
                <span className="text-white/30">Start</span>
                <span className="text-white/60">Phase {activeP.phase} / 04</span>
                <span className="text-white/30">Launch</span>
              </div>
            </div>
          </div>

          {/* Final statement */}
          <div
            className="absolute inset-0 flex items-center justify-center px-4 transition-all duration-600"
            style={{ opacity: showFinal ? 1 : 0, transform: showFinal ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(30px)', pointerEvents: showFinal ? 'auto' : 'none' }}
          >
            <div className="text-center glass-card rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/[0.08] relative overflow-hidden max-w-3xl w-full">
              <div className="relative z-10">
                <p className="text-lg sm:text-2xl lg:text-4xl font-black text-white mb-1 sm:mb-2 leading-tight">
                  "IT'S NOT ABOUT THE AD."
                </p>
                <p className="text-lg sm:text-2xl lg:text-4xl font-black text-white/40 mb-3 sm:mb-5 leading-tight">
                  "IT'S ABOUT THE MESSAGE."
                </p>
                <p className="text-white/35 text-xs sm:text-base max-w-md mx-auto">
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

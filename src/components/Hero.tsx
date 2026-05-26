import { useEffect, useRef } from 'react';
import { ArrowRight, Play, Zap, Target, TrendingUp } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current || !heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      glowRef.current.style.left = `${x}px`;
      glowRef.current.style.top = `${y}px`;
    };
    const el = heroRef.current;
    el?.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => el?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#080808]"
      id="hero"
    >
      {/* Mouse glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute w-[500px] h-[500px] rounded-full hidden md:block"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Background orbs */}
      <div className="orb w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] -top-48 -left-32 sm:-left-64 opacity-[0.055]"
        style={{ background: 'radial-gradient(circle, #ffffff, transparent)', animationDelay: '0s' }} />
      <div className="orb w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] -bottom-32 -right-24 sm:-right-48 opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #ffffff, transparent)', animationDelay: '5s' }} />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '72px 72px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-10 sm:pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left */}
          <div className="text-left">
            <div className="inline-flex items-center gap-2 glass border border-white/[0.08] rounded-full px-4 py-2 text-xs font-medium text-white/45 mb-6 sm:mb-8 animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full bg-white/35 animate-pulse" />
              AI Creatives That Drive Results
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-[5rem] font-bold leading-[1.04] tracking-tight mb-5 sm:mb-7 animate-fade-up delay-100">
              <span className="text-white">AI-Powered Ads</span>
              <br />
              <span className="text-white/25">That Actually</span>
              <br />
              <span className="text-white">Convert.</span>
            </h1>

            <p className="text-white/45 text-sm sm:text-lg leading-[1.7] mb-7 sm:mb-10 max-w-lg animate-fade-up delay-200">
              CloutKart helps brands create high-converting creative using AI, strategic messaging, and direct-response thinking.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-up delay-300">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 text-sm font-semibold text-black bg-white rounded-full hover:bg-white/90 transition-all duration-200 touch-manipulation shadow-lg shadow-white/10"
              >
                Contact Us
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </a>
              <a
                href="#portfolio"
                className="group inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 text-sm font-medium text-white/55 hover:text-white rounded-full border border-white/10 hover:border-white/20 hover:bg-white/[0.03] transition-all duration-200 touch-manipulation"
              >
                <Play size={13} className="group-hover:scale-110 transition-transform" />
                See Our Work
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-14 pt-8 sm:pt-10 border-t border-white/[0.07] animate-fade-up delay-400">
              {[
                { value: '500+', label: 'Creatives Delivered' },
                { value: '10x', label: 'Average ROAS Boost' },
                { value: '48h', label: 'Turnaround Time' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 tracking-tight">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-white/30 font-medium leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual cards — desktop */}
          <div className="relative h-[580px] hidden lg:block">
            {/* Central card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 card-elevated rounded-3xl p-6 animate-float">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.09] flex items-center justify-center">
                  <Target size={17} className="text-white/60" />
                </div>
                <div>
                  <div className="text-[11px] text-white/30 font-medium">Campaign</div>
                  <div className="text-sm font-semibold text-white">Winning Message</div>
                </div>
              </div>
              <div className="w-full h-28 rounded-xl bg-white/[0.04] border border-white/[0.06] mb-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white tracking-tight">50% OFF</div>
                  <div className="text-xs text-white/35 mt-1">Limited Time Offer</div>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-white/30 font-medium">CTR</span>
                <span className="text-white font-semibold">8.4%</span>
              </div>
              <div className="w-full bg-white/[0.07] rounded-full h-1">
                <div className="bg-white/50 h-1 rounded-full w-4/5" />
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute top-8 right-8 card-elevated rounded-2xl p-4 w-48 animate-float-delayed">
              <div className="flex items-center gap-2 mb-3">
                <Zap size={13} className="text-white/40" />
                <span className="text-xs font-semibold text-white/60">AI Processing</span>
              </div>
              <div className="space-y-2">
                {[80, 55, 90].map((w, i) => (
                  <div key={i} className="h-1 bg-white/[0.07] rounded-full overflow-hidden">
                    <div className="h-full bg-white/30 rounded-full animate-pulse" style={{ width: `${w}%`, animationDelay: `${i * 0.3}s` }} />
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-16 right-0 card-elevated rounded-2xl p-4 w-44 animate-float-slow">
              <TrendingUp size={15} className="text-white/35 mb-2" />
              <div className="text-2xl font-bold text-white tracking-tight mb-0.5">+284%</div>
              <div className="text-xs text-white/30 font-medium">ROAS increase</div>
            </div>

            <div className="absolute top-24 left-0 card-elevated rounded-2xl p-4 w-40 animate-float">
              <div className="text-[11px] text-white/30 font-medium mb-2">Formats</div>
              <div className="space-y-1.5">
                {['Image Ad', 'TikTok', 'Landing Page'].map((f) => (
                  <div key={f} className="text-xs font-medium text-white/55 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-white/35" />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-4 left-8 card-elevated rounded-2xl p-3 w-52 animate-float-delayed">
              <div className="text-[11px] text-white/30 font-medium mb-2">Message Performance</div>
              <div className="flex items-end gap-1 h-10">
                {[4, 6, 5, 8, 7, 10, 9].map((h, i) => (
                  <div key={i} className="flex-1 rounded-sm bg-white/20" style={{ height: `${h * 10}%`, opacity: 0.25 + i * 0.09 }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <div className="absolute bottom-3 left-0 right-0 flex flex-col items-center gap-2">
        <div className="text-[9px] text-white/18 font-medium tracking-[0.25em] uppercase animate-bounce">Scroll</div>
        <div className="w-px h-5 bg-gradient-to-b from-white/18 to-transparent" />
      </div>
    </section>
  );
}

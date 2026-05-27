import { useEffect, useRef } from 'react';
import { ArrowRight, Play, Target, Zap, TrendingUp } from 'lucide-react';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.querySelectorAll('.section-reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 150);
          });
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen grid items-center justify-center overflow-hidden bg-transparent" id="hero">
      {/* Dot grid overlay */}
      <div className="hero-grid-overlay" />

      <div className="relative z-10 w-full pt-24 sm:pt-32 pb-16 sm:pb-24 px-6 md:px-8 lg:px-10">
        <div className="section-grid max-w-7xl mx-auto">
          <div className="grid-cols-1 lg:col-span-6 col-span-12 grid content-center text-center lg:text-left">
            <div className="section-reveal eyebrow-pill mb-6 sm:mb-8 justify-self-center lg:justify-self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse" />
              AI Creative Agency
            </div>

            <h1 className="section-reveal text-[44px] sm:text-6xl lg:text-[72px] font-bold leading-[1.08] tracking-[-0.03em] mb-5 sm:mb-7 font-heading">
              <span className="text-white">AI-Powered Ads</span>
              <br />
              <span className="text-white">That Actually</span>
              <br />
              <span className="gradient-text">Convert.</span>
            </h1>

            <p className="section-reveal text-[#D1D5DB] text-base sm:text-[18px] leading-[1.75] mb-7 sm:mb-10 max-w-lg mx-auto lg:mx-0">
              We build the winning message first — then transform it into creatives that actually perform.
            </p>

            <div className="section-reveal grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 justify-items-center lg:justify-items-start max-w-sm mx-auto lg:mx-0 sm:max-w-none">
              <a href="#contact" className="btn-primary w-full sm:w-auto">
                Get Started <ArrowRight size={15} />
              </a>
              <a href="#portfolio" className="btn-secondary w-full sm:w-auto">
                <Play size={14} /> View Our Work
              </a>
            </div>

            <div className="section-reveal grid grid-cols-3 gap-4 sm:gap-8 mt-10 sm:mt-14 pt-8 sm:pt-10 border-t border-white/[0.06]">
              {[
                { value: '500+', label: 'Brands Scaled' },
                { value: '10x', label: 'Avg ROAS' },
                { value: '48h', label: 'Turnaround' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="stat-number text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 tracking-tight">{stat.value}</div>
                  <div className="text-[#9CA3AF] text-[11px] sm:text-xs font-medium leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:grid lg:col-span-6 col-span-12 relative h-[520px] items-center justify-center">
            <div className="glass-card w-[320px] p-6" style={{ animation: 'floatY 5s ease-in-out infinite' }}>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.09] flex items-center justify-center">
                    <Target size={17} className="text-brand-purple" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#9CA3AF] font-medium font-heading">Campaign</div>
                    <div className="text-sm font-semibold text-white font-heading">Winning Message</div>
                  </div>
                </div>
                <div className="w-full h-28 rounded-xl bg-white/[0.03] border border-white/[0.06] mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text tracking-tight font-mono">50% OFF</div>
                    <div className="text-xs text-[#9CA3AF] mt-1">Limited Time Offer</div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-[#9CA3AF] font-medium">CTR</span>
                  <span className="text-white font-semibold font-mono">8.4%</span>
                </div>
                <div className="w-full bg-white/[0.06] rounded-full h-1.5">
                  <div className="h-full rounded-full bg-gradient-to-r from-brand-purple to-brand-cyan w-4/5" />
                </div>
              </div>
            </div>

            <div className="glass-card absolute top-4 right-4 p-4 w-44" style={{ animation: 'floatY 6s ease-in-out infinite 1s' }}>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <Zap size={13} className="text-brand-cyan" />
                  <span className="text-xs font-semibold text-[#D1D5DB] font-heading">AI Processing</span>
                </div>
                <div className="space-y-2">
                  {[80, 55, 90].map((w, i) => (
                    <div key={i} className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-brand-purple to-brand-cyan rounded-full animate-pulse" style={{ width: `${w}%`, animationDelay: `${i * 0.3}s` }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="glass-card absolute bottom-12 right-0 p-4 w-40" style={{ animation: 'floatY 7s ease-in-out infinite 2s' }}>
              <div className="relative z-10">
                <TrendingUp size={15} className="text-brand-blue mb-2" />
                <div className="stat-number text-2xl font-bold mb-0.5">+284%</div>
                <div className="text-[#9CA3AF] text-xs font-medium">ROAS increase</div>
              </div>
            </div>

            <div className="glass-card absolute top-20 left-0 p-4 w-36" style={{ animation: 'floatY 8s ease-in-out infinite 0.5s' }}>
              <div className="relative z-10">
                <div className="text-[11px] text-[#9CA3AF] font-medium mb-2 font-heading">Formats</div>
                {['Image Ad', 'TikTok', 'Landing Page'].map((f) => (
                  <div key={f} className="text-xs font-medium text-[#D1D5DB] flex items-center gap-2 mb-1.5">
                    <span className="w-1 h-1 rounded-full bg-brand-purple" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-2">
        <div className="text-[9px] text-[#6B7280] font-medium tracking-[0.25em] uppercase animate-bounce font-heading">Scroll</div>
        <div className="w-px h-5 bg-gradient-to-b from-brand-purple/40 to-transparent" />
      </div>
    </section>
  );
}

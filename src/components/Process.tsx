import { useEffect, useRef } from 'react';
import { Search, MessageSquare, Layers, Cpu, Sparkles, Rocket } from 'lucide-react';

const steps = [
  { num: '01', icon: Search, title: 'Research', desc: 'We analyze winning ad styles, market trends, and your competitors to find the patterns that convert.' },
  { num: '02', icon: MessageSquare, title: 'Winning Message', desc: 'We identify the core message that resonates with your audience — the one that makes them stop scrolling.' },
  { num: '03', icon: Layers, title: 'Map to Formats', desc: 'We translate the winning message into multiple creative formats: images, videos, reels, and landing pages.' },
  { num: '04', icon: Cpu, title: 'AI Concepts', desc: 'Our AI pipeline generates premium visual concepts at scale, refined by human creative direction.' },
  { num: '05', icon: Sparkles, title: 'Polish & Refine', desc: 'Every concept goes through rigorous quality control to ensure it meets our premium production standards.' },
  { num: '06', icon: Rocket, title: 'Deliver & Launch', desc: 'You receive production-ready creatives, export-ready for every platform. Plug in and launch.' },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.querySelectorAll('.section-reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 90);
          });
        }
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-10 md:py-24 bg-transparent [overflow-x:clip] -mt-[50vh]" id="process">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center mb-8 md:mb-14">
          <div className="section-reveal eyebrow-pill mb-7">How We Work</div>
          <h2 className="section-reveal text-3xl sm:text-5xl lg:text-[52px] font-bold text-white leading-[1.06] tracking-[-0.02em] mb-3 sm:mb-4 font-heading">
            The Creative
            <br />
            <span className="gradient-text">Engineering Process</span>
          </h2>
          <p className="section-reveal text-[#D1D5DB] text-sm sm:text-lg max-w-xl mx-auto leading-relaxed">
            Every CloutKart project follows a proven six-step process that consistently produces high-converting creative.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[48px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {steps.map((step) => (
              <div key={step.num} className="section-reveal glass-card p-4 sm:p-7 group">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
                      <step.icon size={15} className="text-brand-purple" />
                    </div>
                    <span className="stat-number text-2xl sm:text-4xl font-bold tracking-tight">{step.num}</span>
                  </div>
                  <h3 className="text-xs sm:text-base font-semibold text-white mb-1.5 sm:mb-2.5 font-heading">{step.title}</h3>
                  <p className="text-[11px] sm:text-sm text-[#9CA3AF] leading-relaxed hidden sm:block">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from 'react';
import { Search, MessageSquare, Layers, Cpu, Sparkles, Rocket } from 'lucide-react';

const steps = [
  { num: '01', icon: Search, title: 'Research', desc: 'We analyze winning ad styles, market trends, and your competitors to find the patterns that convert.' },
  { num: '02', icon: MessageSquare, title: 'Find the Winning Message', desc: 'We identify the core message that resonates with your audience — the one that makes them stop scrolling.' },
  { num: '03', icon: Layers, title: 'Map to Formats', desc: 'We translate the winning message into multiple creative formats: images, videos, reels, and landing pages.' },
  { num: '04', icon: Cpu, title: 'Generate AI Concepts', desc: 'Our AI pipeline generates premium visual concepts at scale, refined by human creative direction.' },
  { num: '05', icon: Sparkles, title: 'Polish & Refine', desc: 'Every concept goes through rigorous quality control to ensure it meets our premium production standards.' },
  { num: '06', icon: Rocket, title: 'Deliver Ready-to-Run', desc: 'You receive production-ready creatives, export-ready for every platform. Plug in and launch.' },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-scale').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 90);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-10 md:py-14 bg-[#080808] [overflow-x:clip]" id="process">
      <div className="orb w-[500px] h-[500px] -left-32 top-1/2 opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #ffffff, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-14">
          <div className="reveal inline-flex items-center gap-2 glass border border-white/[0.08] rounded-full px-4 py-1.5 text-[11px] font-medium text-white/35 mb-7 tracking-wide uppercase">
            How We Work
          </div>
          <h2 className="reveal delay-100 text-3xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.06] tracking-tight mb-3 sm:mb-4">
            The Creative
            <br />
            <span className="text-white/35">Engineering Process</span>
          </h2>
          <p className="reveal delay-200 text-white/35 text-sm sm:text-lg max-w-xl mx-auto leading-relaxed">
            Every CloutKart project follows a proven six-step process that consistently produces high-converting creative.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[52px] left-0 right-0 h-px bg-white/[0.05]" />

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`reveal delay-${(i + 1) * 90} rounded-2xl p-4 sm:p-7 group hover-lift relative overflow-hidden border border-white/[0.07]`}
                data-cursor="card"
                style={{ background: '#111111' }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/[0.015] rounded-2xl" />

                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
                    <step.icon size={15} className="text-white/48" />
                  </div>
                  <span className="text-3xl sm:text-5xl font-bold text-white/[0.07] tracking-tight">{step.num}</span>
                </div>

                <h3 className="relative z-10 text-xs sm:text-base font-semibold text-white mb-1.5 sm:mb-2.5">{step.title}</h3>
                <p className="relative z-10 text-[11px] sm:text-sm text-white/30 leading-relaxed hidden sm:block">{step.desc}</p>

                <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-white/15 animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

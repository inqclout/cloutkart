import { useEffect, useRef } from 'react';
import { Brain, Zap, Target, BarChart3 } from 'lucide-react';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-scale').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const highlights = [
    { icon: Brain, label: 'AI-Powered', desc: 'Cutting-edge AI tools for concept generation' },
    { icon: Target, label: 'Message-First', desc: 'Strategy before pixels, always' },
    { icon: Zap, label: 'Fast Delivery', desc: 'Production-ready in 48 hours' },
    { icon: BarChart3, label: 'Data-Driven', desc: 'Creatives built on performance data' },
  ];

  return (
    <section ref={sectionRef} className="relative py-16 md:py-36 bg-[#080808] [overflow-x:clip]" id="about">
      <div className="orb w-[500px] h-[500px] -right-32 top-1/2 opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #ffffff, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <div className="reveal inline-flex items-center gap-2 glass border border-white/[0.08] rounded-full px-4 py-1.5 text-[11px] font-medium text-white/35 mb-7 tracking-wide uppercase">
              What is CloutKart?
            </div>
            <h2 className="reveal delay-100 text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-5 sm:mb-7">
              A Creative Studio Built for{' '}
              <span className="text-white/40">Modern Brands</span>
            </h2>
            <p className="reveal delay-200 text-white/42 text-sm sm:text-lg leading-[1.75] mb-5 sm:mb-7">
              CloutKart is a creative advertising studio that helps brands sell more with scroll-stopping ads, strategic messaging, AI-powered design, and high-conversion creative systems.
            </p>
            <p className="reveal delay-300 text-white/28 text-sm sm:text-base leading-[1.75] mb-8 sm:mb-10">
              We don't just make ads look good — we engineer them to convert. Every creative is built on a winning message, tested across formats, and delivered production-ready.
            </p>
            <div className="reveal delay-400">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 sm:px-8 py-3.5 text-sm font-semibold text-black bg-white rounded-full hover:bg-white/90 transition-colors duration-200 touch-manipulation shadow-lg shadow-white/10"
              >
                Work With Us
              </a>
            </div>
          </div>

          {/* Right: Highlights grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {highlights.map((item, i) => (
              <div
                key={item.label}
                className={`reveal-scale delay-${(i + 1) * 100} rounded-2xl p-5 sm:p-6 hover-lift card-glow-border relative overflow-hidden group border border-white/[0.07]`}
                style={{ background: '#111111' }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/[0.015]" />
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center mb-4">
                  <item.icon size={19} className="text-white/50" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-white mb-1.5">{item.label}</h3>
                <p className="text-xs sm:text-sm text-white/32 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

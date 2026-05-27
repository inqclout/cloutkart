import { useEffect, useRef } from 'react';
import { Brain, Target, Zap, BarChart3, Check } from 'lucide-react';

export default function About() {
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

  const checklist = [
    'High-converting ad creatives',
    'Cinematic video campaigns',
    'Platform-specific formats',
    'Rapid iteration cycles',
  ];

  return (
    <section ref={sectionRef} className="relative py-16 md:py-36 bg-transparent [overflow-x:clip]" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        <div className="section-grid">
          <div className="col-span-12 lg:col-span-6">
            <div className="section-reveal eyebrow-pill mb-7">The Studio</div>
            <h2 className="section-reveal text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-[-0.02em] mb-5 sm:mb-7 font-heading">
              A Creative Studio Built for{' '}
              <span className="gradient-text">Modern</span>
            </h2>
            <p className="section-reveal text-[#D1D5DB] text-base sm:text-[17px] leading-[1.75] mb-5 sm:mb-7">
              CloutKart is a creative advertising studio that helps brands sell more with scroll-stopping ads, strategic messaging, AI-powered design, and high-conversion creative systems.
            </p>
            <p className="section-reveal text-[#9CA3AF] text-sm sm:text-base leading-[1.75] mb-8 sm:mb-10">
              We don't just make ads look good — we engineer them to convert. Every creative is built on a winning message, tested across formats, and delivered production-ready.
            </p>
            <div className="section-reveal grid gap-3 mb-8">
              {checklist.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-brand-purple to-brand-cyan flex items-center justify-center flex-shrink-0">
                    <Check size={10} className="text-white" />
                  </div>
                  <span className="text-[#D1D5DB] text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>
            <div className="section-reveal">
              <a href="#contact" className="btn-primary">
                Work With Us <Zap size={15} />
              </a>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 section-reveal">
            <div className="glass-card p-8 sm:p-10">
              <div className="relative z-10">
                <div className="text-xs text-[#9CA3AF] font-semibold tracking-widest uppercase mb-6 font-heading">Creative Workflow</div>
                <div className="grid gap-4">
                  {[
                    { icon: Brain, label: 'Creative Brief', desc: 'Brand DNA & goals analyzed' },
                    { icon: Target, label: 'Winning Message', desc: 'Core message identified' },
                    { icon: BarChart3, label: 'Format Mapping', desc: 'Message to Multiple formats' },
                    { icon: Zap, label: 'AI Generation', desc: 'Premium concepts at scale' },
                  ].map((step, i) => (
                    <div key={step.label} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center flex-shrink-0">
                        <step.icon size={16} className="text-brand-purple" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-white font-heading">{step.label}</div>
                        <div className="text-xs text-[#9CA3AF]">{step.desc}</div>
                      </div>
                      {i < 3 && (
                        <div className="hidden sm:block w-8 h-px bg-gradient-to-r from-brand-purple/40 to-transparent" />
                      )}
                    </div>
                  ))}
                </div>
                <div className="absolute left-[35px] top-[52px] bottom-[52px] w-px border-l border-dashed border-white/[0.10] pointer-events-none hidden sm:block" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

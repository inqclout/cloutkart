import { useEffect, useRef } from 'react';
import { ArrowRight, Phone } from 'lucide-react';

export default function CTABanner() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.querySelectorAll('.section-reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 120);
          });
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 bg-transparent [overflow-x:clip]">
      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-10">
        <div className="section-reveal gradient-border">
          <div className="glass-card p-8 sm:p-12 lg:p-16 !border-0 !bg-[rgba(12,12,12,0.6)] text-center">
            <div className="absolute inset-0 pointer-events-none rounded-[20px]" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-bold text-white leading-[1.06] tracking-[-0.02em] mb-3 sm:mb-4 font-heading">
                Ready to Build Ads That
                <br />
                <span className="gradient-text">Actually Convert?</span>
              </h2>
              <p className="text-[#D1D5DB] text-sm sm:text-lg max-w-xl mx-auto leading-relaxed mb-8 sm:mb-10">
                Start with 3 free creatives and see the CloutKart difference for yourself.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a href="#contact" className="btn-primary">
                  Start Your Project <ArrowRight size={15} />
                </a>
                <a href="#contact" className="btn-secondary">
                  <Phone size={14} /> Book a Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

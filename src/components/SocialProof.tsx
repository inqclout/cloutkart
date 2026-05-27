import { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "CloutKart found our winning message in 48 hours. Our ROAS went from 2x to 8x in the first month.",
    name: 'Sarah Chen',
    role: 'CMO, NovaBrand',
  },
  {
    quote: "The message-first approach changed everything. We stopped guessing and started converting.",
    name: 'Marcus Williams',
    role: 'Founder, FitScale',
  },
  {
    quote: "They delivered 3 free creatives that outperformed our entire existing library. Immediate ROI.",
    name: 'Priya Sharma',
    role: 'Head of Growth, TechFlow',
  },
];

export default function SocialProof() {
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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 md:py-36 bg-transparent [overflow-x:clip]" id="results">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        <div className="text-center mb-10 md:mb-16">
          <div className="section-reveal eyebrow-pill mb-7">Results</div>
          <h2 className="section-reveal text-3xl sm:text-5xl lg:text-[52px] font-bold text-white leading-[1.06] tracking-[-0.02em] mb-3 sm:mb-4 font-heading">
            Results That
            <br />
            <span className="gradient-text">Speak For Themselves.</span>
          </h2>
        </div>

        <div className="section-reveal card-grid mb-10 md:mb-16">
          {[
            { value: '500+', label: 'Brands Scaled' },
            { value: '$50M+', label: 'Ad Spend Managed' },
            { value: '48h', label: 'Avg Delivery' },
          ].map((stat) => (
            <div key={stat.label} className="glass-card p-5 sm:p-8 text-center">
              <div className="relative z-10">
                <div className="stat-number text-3xl sm:text-5xl font-bold mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-[#9CA3AF] text-xs sm:text-sm font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="card-grid">
          {testimonials.map((t) => (
            <div key={t.name} className="section-reveal glass-card p-6 sm:p-8">
              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={13} className="text-brand-purple fill-brand-purple" />
                  ))}
                </div>
                <p className="text-[#F3F4F6] text-sm sm:text-base leading-relaxed italic mb-5">"{t.quote}"</p>
                <div>
                  <div className="text-white font-semibold text-sm font-heading">{t.name}</div>
                  <div className="text-[#9CA3AF] text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

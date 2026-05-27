import { useEffect, useRef } from 'react';
import { Image as ImageIcon, Video, Smartphone, Users, Mail, LayoutGrid as Layout } from 'lucide-react';

const services = [
  { icon: ImageIcon, title: 'Static Ads', desc: 'Scroll-stopping static visuals engineered for conversion.' },
  { icon: Video, title: 'Video Ads', desc: 'Fast, punchy, conversion-focused video content.' },
  { icon: Users, title: 'UGC Style', desc: 'Authentic-feeling content that converts like organic.' },
  { icon: Smartphone, title: 'Story Format', desc: 'Platform-native content for Instagram and TikTok.' },
  { icon: Mail, title: 'Email Creatives', desc: 'High-converting email visuals and copy.' },
  { icon: Layout, title: 'Landing Pages', desc: 'Performance-driven landing page creative.' },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.querySelectorAll('.section-reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 100);
          });
        }
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-12 md:py-24 bg-transparent [overflow-x:clip]" id="services">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        <div className="text-center mb-10 md:mb-16">
          <div className="section-reveal eyebrow-pill mb-7">What We Create</div>
          <h2 className="section-reveal text-3xl sm:text-5xl lg:text-[52px] font-bold text-white leading-[1.06] tracking-[-0.02em] mb-3 sm:mb-4 font-heading">
            Every Format.
            <br />
            <span className="gradient-text">One Winning Message.</span>
          </h2>
          <p className="section-reveal text-[#D1D5DB] text-sm sm:text-lg max-w-xl mx-auto leading-relaxed">
            We translate your core message into every format that converts — across every platform that matters.
          </p>
        </div>

        <div className="card-grid">
          {services.map((service) => (
            <div key={service.title} className="section-reveal glass-card p-5 sm:p-6 group">
              <div className="relative z-10">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <service.icon size={18} className="text-brand-purple" />
                </div>
                <h3 className="text-sm sm:text-[18px] font-semibold text-white mb-2 leading-snug font-heading">{service.title}</h3>
                <p className="text-[#D1D5DB] text-xs sm:text-sm leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

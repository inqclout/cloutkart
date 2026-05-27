import { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const portfolioItems = [
  {
    title: 'E-commerce Product Launch',
    category: 'Image Ad',
    image: 'https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Fashion Brand TikTok',
    category: 'Short-form Video',
    image: 'https://images.pexels.com/photos/2218786/pexels-photo-2218786.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'SaaS Performance Ad',
    category: 'Performance Creative',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Luxury Brand Campaign',
    category: 'Brand Campaign',
    image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    title: 'Skincare UGC Concept',
    category: 'UGC-Style',
    image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Tech Product Ad',
    category: 'Product Ad',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.querySelectorAll('.section-reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 80);
          });
        }
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 md:py-36 bg-transparent [overflow-x:clip]" id="portfolio">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center mb-8 md:mb-16">
          <div className="section-reveal eyebrow-pill mb-7">Our Work</div>
          <h2 className="section-reveal text-3xl sm:text-5xl lg:text-[52px] font-bold text-white leading-[1.06] tracking-[-0.02em] mb-3 sm:mb-4 font-heading">
            Creatives That
            <br />
            <span className="gradient-text">Actually Convert</span>
          </h2>
          <p className="section-reveal text-[#D1D5DB] text-sm sm:text-lg max-w-xl mx-auto leading-relaxed">
            A showcase of premium ad creatives, campaign visuals, and performance-focused content.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {portfolioItems.map((item, i) => (
            <div
              key={item.title}
              className={`section-reveal relative group overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer aspect-square ${i === 3 ? 'md:col-span-2 md:aspect-[2/1]' : ''}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-400" />

              <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <div className="inline-flex items-center bg-white/[0.06] backdrop-blur-sm border border-white/[0.15] rounded-full px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-white/75 w-fit mb-1.5 sm:mb-2">
                  {item.category}
                </div>
                <h3 className="text-white font-semibold text-xs sm:text-sm lg:text-[15px] leading-snug font-heading">{item.title}</h3>
              </div>

              <div className="absolute top-3 right-3 w-7 h-7 sm:w-8 sm:h-8 bg-white/[0.06] backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 border border-white/[0.15]">
                <ExternalLink size={11} className="text-white/75" />
              </div>

              <div className="absolute inset-0 rounded-xl sm:rounded-2xl border border-transparent group-hover:border-brand-purple/20 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

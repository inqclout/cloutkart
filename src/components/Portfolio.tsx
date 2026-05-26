import { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const portfolioItems = [
  {
    title: 'E-commerce Product Launch',
    category: 'Image Ad',
    image: 'https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=800',
    spanDesktop: 'lg:col-span-1 lg:row-span-2',
  },
  {
    title: 'Fashion Brand TikTok',
    category: 'Short-form Video',
    image: 'https://images.pexels.com/photos/2218786/pexels-photo-2218786.jpeg?auto=compress&cs=tinysrgb&w=600',
    spanDesktop: '',
  },
  {
    title: 'SaaS Performance Ad',
    category: 'Performance Creative',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
    spanDesktop: '',
  },
  {
    title: 'Luxury Brand Campaign',
    category: 'Brand Campaign',
    image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=900',
    spanDesktop: 'lg:col-span-2',
  },
  {
    title: 'Skincare UGC Concept',
    category: 'UGC-Style',
    image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=600',
    spanDesktop: '',
  },
  {
    title: 'Tech Product Ad',
    category: 'Product Ad',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600',
    spanDesktop: '',
  },
  {
    title: 'Fitness Brand Creative',
    category: 'Instagram Creative',
    image: 'https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=600',
    spanDesktop: '',
  },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-scale').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80);
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
    <section ref={sectionRef} className="relative py-16 md:py-36 bg-[#0d0d0d] [overflow-x:clip]" id="portfolio">
      <div className="orb w-[600px] h-[600px] -right-32 top-1/4 opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #ffffff, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <div className="reveal inline-flex items-center gap-2 glass border border-white/[0.08] rounded-full px-4 py-1.5 text-[11px] font-medium text-white/35 mb-7 tracking-wide uppercase">
            Our Work
          </div>
          <h2 className="reveal delay-100 text-3xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.06] tracking-tight mb-3 sm:mb-4">
            Creatives That
            <br />
            <span className="text-white/35">Actually Convert</span>
          </h2>
          <p className="reveal delay-200 text-white/35 text-sm sm:text-lg max-w-xl mx-auto leading-relaxed">
            A showcase of premium ad creatives, campaign visuals, and performance-focused content.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3.5 lg:auto-rows-[210px]">
          {portfolioItems.map((item, i) => (
            <div
              key={item.title}
              className={`reveal-scale delay-${Math.min((i + 1) * 80, 600)} ${item.spanDesktop} relative group overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer aspect-square lg:aspect-auto`}
              data-cursor="card"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Cinematic overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-400" />

              <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <div className="inline-flex items-center glass border border-white/[0.15] rounded-full px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-white/65 w-fit mb-1.5 sm:mb-2">
                  {item.category}
                </div>
                <h3 className="text-white font-semibold text-xs sm:text-sm lg:text-[15px] leading-snug">{item.title}</h3>
              </div>

              <div className="absolute top-3 right-3 w-7 h-7 sm:w-8 sm:h-8 glass rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 border border-white/[0.15]">
                <ExternalLink size={11} className="text-white/75" />
              </div>

              <div className="absolute inset-0 rounded-xl sm:rounded-2xl border border-transparent group-hover:border-white/[0.12] transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
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
    '3 premium ad creatives, yours to keep',
    'Zero commitment required',
    'Built around your winning message',
    'Production-ready, export-ready files',
    'Then we talk about scaling',
  ];

  return (
    <section ref={sectionRef} className="relative py-16 md:py-36 bg-[#080808] [overflow-x:clip]" id="pricing">
      <div className="orb w-[800px] h-[800px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #ffffff, transparent)' }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <div className="reveal inline-flex items-center gap-2 glass border border-white/[0.08] rounded-full px-4 py-1.5 text-[11px] font-medium text-white/35 mb-7 tracking-wide uppercase">
            Our Offer
          </div>
          <h2 className="reveal delay-100 text-3xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.06] tracking-tight mb-3 sm:mb-4">
            Start With
            <br />
            <span className="text-white/35">3 Free Creatives</span>
          </h2>
          <p className="reveal delay-200 text-white/35 text-sm sm:text-lg max-w-xl mx-auto leading-relaxed">
            See the quality before committing. We'll build 3 real ad creatives for your brand — no strings attached.
          </p>
        </div>

        {/* Main card */}
        <div className="reveal-scale delay-300 relative">
          <div className="absolute -inset-px rounded-3xl bg-white/[0.07] blur-sm" />

          <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden border border-white/[0.09]" style={{ background: '#111111' }}>
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-64 h-64 bg-white/[0.025] blur-3xl rounded-full pointer-events-none" />

            <div className="relative z-10 text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-2 glass border border-white/[0.08] rounded-full px-4 sm:px-5 py-2 text-[11px] sm:text-xs font-medium text-white/38 mb-5 sm:mb-6 tracking-wide uppercase">
                Limited Availability
              </div>
              <div className="text-6xl sm:text-8xl lg:text-[9rem] font-bold text-white mb-2 tracking-tight leading-none">
                FREE
              </div>
              <div className="text-white/30 text-sm sm:text-base font-medium">No credit card. No commitment.</div>
            </div>

            <div className="relative z-10 grid sm:grid-cols-2 gap-3 sm:gap-4 mb-10 sm:mb-12 max-w-xl mx-auto">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/[0.08] border border-white/[0.12] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={9} className="text-white/65" />
                  </div>
                  <span className="text-white/50 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="relative z-10 text-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 sm:px-12 py-4 sm:py-5 text-sm sm:text-base font-semibold text-black bg-white rounded-full hover:bg-white/90 hover:shadow-2xl hover:shadow-black/50 transition-all duration-200 hover:scale-[1.02] active:scale-[0.99] touch-manipulation"
              >
                Claim Your Free Creatives
              </a>
              <p className="text-white/18 text-xs mt-5 max-w-sm mx-auto leading-relaxed">After you see the quality, we can talk about scaling, strategy, and ongoing creative production.</p>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="reveal delay-400 mt-6 sm:mt-8 grid grid-cols-3 gap-3 sm:gap-4 text-center">
          {[
            { value: 'Premium', label: 'Production Quality' },
            { value: '48hrs', label: 'Delivery Time' },
            { value: '100%', label: 'Built on Strategy' },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-white/[0.06]"
              style={{ background: '#111111' }}
            >
              <div className="text-sm sm:text-lg font-semibold text-white mb-1 tracking-tight">{item.value}</div>
              <div className="text-[10px] sm:text-xs text-white/28 leading-tight font-medium">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

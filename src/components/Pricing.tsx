import { useEffect, useRef } from 'react';
import { Check, Sparkles } from 'lucide-react';

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
    <section ref={sectionRef} className="relative py-20 md:py-32 bg-[#080C14] overflow-hidden" id="pricing">
      <div className="orb w-[700px] h-[700px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-8"
        style={{ background: 'radial-gradient(circle, #8B2FE0, transparent)' }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <div className="reveal inline-block glass border border-[#06B6D4]/30 rounded-full px-4 py-1.5 text-xs font-semibold text-[#67e8f9] mb-6">
            Our Offer
          </div>
          <h2 className="reveal delay-100 text-3xl sm:text-4xl lg:text-6xl font-black text-white leading-tight mb-4">
            Start With
            <br />
            <span className="text-gradient">3 Free Creatives</span>
          </h2>
          <p className="reveal delay-200 text-white/40 text-base sm:text-lg max-w-xl mx-auto">
            See the quality before committing. We'll build 3 real ad creatives for your brand — no strings attached.
          </p>
        </div>

        {/* Main card */}
        <div className="reveal-scale delay-300 relative group">
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-[#8B2FE0] via-[#2563EB] to-[#06B6D4] opacity-60 blur-sm" />

          <div className="relative glass-card rounded-3xl p-8 sm:p-10 lg:p-14 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#8B2FE0]/8 via-transparent to-[#06B6D4]/8 pointer-events-none" />
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-48 bg-gradient-to-b from-[#8B2FE0]/15 to-transparent blur-3xl pointer-events-none" />

            <div className="relative z-10 text-center mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-2 glass border border-[#06B6D4]/30 rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold text-[#06B6D4] mb-5 sm:mb-6">
                <Sparkles size={13} />
                Limited Availability
              </div>
              <div className="text-6xl sm:text-7xl lg:text-9xl font-black text-white mb-2">
                FREE
              </div>
              <div className="text-white/40 text-base sm:text-lg">No credit card. No commitment.</div>
            </div>

            <div className="relative z-10 grid sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#8B2FE0] to-[#06B6D4] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={10} className="text-white" />
                  </div>
                  <span className="text-white/70 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="relative z-10 text-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 sm:px-10 py-4 sm:py-5 text-sm sm:text-base font-bold text-white rounded-full bg-gradient-to-r from-[#8B2FE0] via-[#2563EB] to-[#06B6D4] hover:shadow-2xl hover:shadow-[#8B2FE0]/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.99] touch-manipulation"
              >
                <Sparkles size={15} />
                Claim Your Free Creatives
              </a>
              <p className="text-white/25 text-xs mt-4">After you see the quality, we can talk about scaling, strategy, and ongoing creative production.</p>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="reveal delay-400 mt-8 sm:mt-10 grid grid-cols-3 gap-3 sm:gap-6 text-center">
          {[
            { value: 'Premium', label: 'Production Quality' },
            { value: '48hrs', label: 'Delivery Time' },
            { value: '100%', label: 'Built on Strategy' },
          ].map((item) => (
            <div key={item.label} className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-white/[0.05]">
              <div className="text-base sm:text-xl font-black text-gradient mb-0.5 sm:mb-1">{item.value}</div>
              <div className="text-[10px] sm:text-xs text-white/35 leading-tight">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

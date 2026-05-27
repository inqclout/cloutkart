import { useEffect, useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '0',
    period: 'Free trial',
    desc: 'See the quality before committing.',
    features: [
      '3 premium ad creatives',
      'Built around your winning message',
      'Production-ready files',
      'Zero commitment required',
    ],
    cta: 'Claim Free Creatives',
    popular: false,
  },
  {
    name: 'Growth',
    price: '1,500',
    period: '/month',
    desc: 'Ongoing creative production for scaling brands.',
    features: [
      '20 ad creatives per month',
      'Message strategy included',
      'Multiple format outputs',
      '2 revision rounds',
      'Dedicated creative director',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Scale',
    price: '3,500',
    period: '/month',
    desc: 'Full creative engine for high-spend brands.',
    features: [
      'Unlimited ad creatives',
      'Full messaging strategy',
      'All format outputs',
      'Unlimited revisions',
      'Dedicated creative team',
      'Priority 24h delivery',
    ],
    cta: 'Contact Us',
    popular: false,
  },
];

export default function Pricing() {
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
    <section ref={sectionRef} className="relative py-16 md:py-36 bg-transparent [overflow-x:clip]" id="pricing">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10">
        <div className="text-center mb-10 md:mb-14">
          <div className="section-reveal eyebrow-pill mb-7">Pricing</div>
          <h2 className="section-reveal text-3xl sm:text-5xl lg:text-[52px] font-bold text-white leading-[1.06] tracking-[-0.02em] mb-3 sm:mb-4 font-heading">
            Simple Pricing.
            <br />
            <span className="gradient-text">Serious Results.</span>
          </h2>
          <p className="section-reveal text-[#D1D5DB] text-sm sm:text-lg max-w-xl mx-auto leading-relaxed">
            Start free. Scale when you see the results.
          </p>
        </div>

        <div className="card-grid">
          {plans.map((plan) => (
            <div key={plan.name} className={`section-reveal ${plan.popular ? 'gradient-border' : ''}`}>
              <div className={`glass-card p-7 sm:p-9 h-full grid grid-rows-[auto_1fr_auto] ${plan.popular ? '!border-0' : ''}`}
                style={plan.popular ? { background: 'rgba(255,255,255,0.06)' } : undefined}
              >
                <div className="relative z-10">
                  {plan.popular && (
                    <div className="eyebrow-pill mb-5 w-fit">Most Popular</div>
                  )}
                  <div className="mb-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-white font-heading">{plan.name}</h3>
                  </div>
                  <div className="mb-3">
                    <span className="stat-number text-[40px] sm:text-[52px] font-bold leading-none">${plan.price}</span>
                    <span className="text-[#9CA3AF] text-sm ml-1">{plan.period}</span>
                  </div>
                  <p className="text-[#9CA3AF] text-sm mb-6">{plan.desc}</p>
                </div>

                <div className="relative z-10 grid gap-3 content-start mb-8">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-brand-purple to-brand-cyan flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={10} className="text-white" />
                      </div>
                      <span className="text-[#D1D5DB] text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="relative z-10">
                  <a
                    href="#contact"
                    className={plan.popular ? 'btn-primary w-full text-center' : 'btn-secondary w-full text-center'}
                  >
                    {plan.cta} <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

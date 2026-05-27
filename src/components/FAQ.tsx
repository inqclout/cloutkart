import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What exactly do I get with the free creatives offer?',
    a: 'You get 3 production-ready ad creatives built around your winning message. No credit card required, no strings attached. We use this to prove our quality before you commit.',
  },
  {
    q: 'How fast can you deliver?',
    a: 'Our standard turnaround is 48 hours for the initial batch. Scale plan clients get priority 24-hour delivery.',
  },
  {
    q: 'What platforms do your creatives work on?',
    a: 'We create for every platform that matters: Instagram, TikTok, Facebook, YouTube, email, and landing pages. The winning message translates into every format.',
  },
  {
    q: 'What does "message-first" actually mean?',
    a: 'Before we touch any design, we identify the core message that will make your audience stop scrolling and take action. That message becomes the foundation for every creative we produce.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. All plans are month-to-month with no long-term contracts. The Starter plan is completely free.',
  },
  {
    q: 'Do you use AI to generate the creatives?',
    a: 'Yes, our AI pipeline generates premium visual concepts at scale, but every piece is refined by human creative direction. AI handles volume; humans handle quality.',
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
    <section ref={sectionRef} className="relative py-16 md:py-36 bg-transparent [overflow-x:clip]" id="faq">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center mb-10 md:mb-14">
          <div className="section-reveal eyebrow-pill mb-7">FAQ</div>
          <h2 className="section-reveal text-3xl sm:text-5xl lg:text-[52px] font-bold text-white leading-[1.06] tracking-[-0.02em] mb-3 sm:mb-4 font-heading">
            Common <span className="gradient-text">Questions.</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`section-reveal glass-card overflow-hidden transition-all duration-300 ${openIndex === i ? '!border-brand-purple/30' : ''}`}
            >
              <button
                className="relative z-10 w-full flex items-center justify-between p-5 sm:p-6 text-left touch-manipulation"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-white text-sm sm:text-[17px] font-medium pr-4 font-heading">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-brand-purple flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className="relative z-10 grid overflow-hidden transition-all duration-300"
                style={{
                  gridTemplateRows: openIndex === i ? '1fr' : '0fr',
                }}
              >
                <div className="overflow-hidden">
                  <p className="text-[#D1D5DB] text-sm sm:text-base leading-relaxed px-5 sm:px-6 pb-5 sm:pb-6">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

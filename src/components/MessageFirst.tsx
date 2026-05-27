import { useEffect, useRef } from 'react';
import { MessageSquare, Layers, Repeat } from 'lucide-react';

export default function MessageFirst() {
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

  const pillars = [
    { icon: MessageSquare, title: 'The Message-Led Flow', desc: "You're not trying to find a winning ad. You're trying to find the winning message." },
    { icon: Layers, title: 'One Message, Infinite Formats', desc: 'Image ad. Video ad. Short-form. Long-form. Landing page. Same message, different container.' },
    { icon: Repeat, title: 'Foundation That Scales', desc: 'Build once. Deploy everywhere. The message powers your store, your ads, your content — all of it.' },
  ];

  return (
    <section ref={sectionRef} className="relative py-16 md:py-36 bg-transparent [overflow-x:clip]" id="message">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center mb-12 md:mb-24">
          <div className="section-reveal eyebrow-pill mb-8">The Philosophy</div>
          <div className="section-reveal space-y-1 sm:space-y-2">
            <h2 className="text-4xl sm:text-6xl lg:text-[6.5rem] font-bold tracking-[-0.03em] leading-[1.03] font-heading text-white">
              It's Not About
            </h2>
            <h2 className="text-4xl sm:text-6xl lg:text-[6.5rem] font-bold tracking-[-0.03em] leading-[1.03] font-heading text-white">
              The Ad.
            </h2>
            <h2 className="text-4xl sm:text-6xl lg:text-[6.5rem] font-bold tracking-[-0.03em] leading-[1.03] font-heading">
              <span className="text-[#9CA3AF]">It's About </span>
              <span className="gradient-text">The Message.</span>
            </h2>
          </div>
        </div>

        <div className="section-reveal gradient-border mb-8 md:mb-14">
          <div className="glass-card p-8 sm:p-12 lg:p-16 !border-0 text-center" style={{ background: 'rgba(255,255,255,0.04)' }}>
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-brand-purple via-brand-blue to-brand-cyan rounded-l-3xl" />
            <div className="relative z-10">
              <p className="text-xl sm:text-3xl lg:text-[2.6rem] font-semibold text-[#F3F4F6] leading-[1.45] max-w-4xl mx-auto italic">
                "A winning message can be translated into <span className="gradient-text not-italic">anything.</span>"
              </p>
              <p className="text-sm sm:text-lg text-[#9CA3AF] mt-6 max-w-2xl mx-auto leading-relaxed">
                The message is the foundation. The format is just the container. CloutKart builds the message first — everything else scales from there.
              </p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {pillars.map((pillar, i) => (
            <div key={pillar.title} className="section-reveal glass-card p-6 sm:p-8 group">
              <div className="relative z-10">
                <div className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mb-5">
                  <pillar.icon size={19} className="text-brand-purple" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-3 leading-snug font-heading">{pillar.title}</h3>
                <p className="text-[#D1D5DB] text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from 'react';
import { MessageSquare, Layers, Repeat } from 'lucide-react';

export default function MessageFirst() {
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

  const pillars = [
    {
      icon: MessageSquare,
      title: 'The Message Comes First',
      desc: "You're not trying to find a winning ad. You're trying to find the winning message.",
    },
    {
      icon: Layers,
      title: 'One Message, Infinite Formats',
      desc: 'Image ad. Video ad. Short-form. Long-form. Landing page. Same message, different container.',
    },
    {
      icon: Repeat,
      title: 'Foundation That Scales',
      desc: 'Foundational docs do not just inform your store — they inform your ads too. Build once. Deploy everywhere.',
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-14 md:py-32 bg-[#0a0a0a] [overflow-x:clip]" id="message">
      <div className="orb w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #ffffff, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Big statement */}
        <div className="text-center mb-10 md:mb-20">
          <div className="reveal inline-block glass border border-white/[0.08] rounded-full px-4 py-1.5 text-xs font-medium text-white/40 mb-6">
            Our Philosophy
          </div>

          <div className="reveal delay-100">
            <h2 className="text-3xl sm:text-5xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-1 sm:mb-2">
              <span className="text-white/15">It's Not About</span>
            </h2>
            <h2 className="text-3xl sm:text-5xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-1 sm:mb-2">
              <span className="text-white">The Ad.</span>
            </h2>
            <h2 className="text-3xl sm:text-5xl lg:text-8xl font-black tracking-tight leading-[1.05]">
              <span className="text-white/60">It's About The Message.</span>
            </h2>
          </div>
        </div>

        {/* Big card */}
        <div className="reveal delay-200 glass-card rounded-3xl p-6 sm:p-10 lg:p-16 border border-white/[0.07] mb-8 md:mb-16 relative overflow-hidden">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-40 bg-white/[0.02] blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <p className="text-lg sm:text-2xl lg:text-4xl font-semibold text-white leading-relaxed text-center max-w-4xl mx-auto">
              "A winning message can be translated into{' '}
              <span className="text-white/50">anything.</span>"
            </p>
            <p className="text-base sm:text-lg text-white/30 text-center mt-6 max-w-2xl mx-auto leading-relaxed">
              The message is the foundation. The format is just the container. CloutKart builds the message first — everything else scales from there.
            </p>
          </div>
        </div>

        {/* Three pillars */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`reveal delay-${(i + 3) * 100} glass-card rounded-2xl p-6 sm:p-8 hover-lift card-glow-border border border-white/[0.07] relative overflow-hidden group`}
            >
              <div className="absolute inset-0 bg-white/[0.015] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mb-5 sm:mb-6">
                <pillar.icon size={20} className="text-white/60" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{pillar.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

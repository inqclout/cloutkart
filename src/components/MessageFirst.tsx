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
      color: 'from-[#8B2FE0] to-[#6D28D9]',
    },
    {
      icon: Layers,
      title: 'One Message, Infinite Formats',
      desc: 'Image ad. Video ad. Short-form. Long-form. Landing page. Same message, different container.',
      color: 'from-[#2563EB] to-[#1D4ED8]',
    },
    {
      icon: Repeat,
      title: 'Foundation That Scales',
      desc: 'Foundational docs do not just inform your store — they inform your ads too. Build once. Deploy everywhere.',
      color: 'from-[#06B6D4] to-[#0891B2]',
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden bg-[#080C14]" id="message">
      <div className="orb w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"
        style={{ background: 'radial-gradient(circle, #8B2FE0, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Big statement */}
        <div className="text-center mb-14 md:mb-20">
          <div className="reveal inline-block glass border border-[#8B2FE0]/30 rounded-full px-4 py-1.5 text-xs font-semibold text-[#a78bfa] mb-6">
            Our Philosophy
          </div>

          <div className="reveal delay-100">
            <h2 className="text-4xl sm:text-5xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-2">
              <span className="text-white/20">It's Not About</span>
            </h2>
            <h2 className="text-4xl sm:text-5xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-2">
              <span className="text-white">The Ad.</span>
            </h2>
            <h2 className="text-4xl sm:text-5xl lg:text-8xl font-black tracking-tight leading-[1.05]">
              <span className="text-gradient">It's About The Message.</span>
            </h2>
          </div>
        </div>

        {/* Big glass card */}
        <div className="reveal delay-200 glass-card rounded-3xl p-8 sm:p-10 lg:p-16 border border-white/[0.06] mb-10 md:mb-16 relative overflow-hidden">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-40 bg-gradient-to-b from-[#8B2FE0]/20 to-transparent blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <p className="text-xl sm:text-2xl lg:text-4xl font-semibold text-white leading-relaxed text-center max-w-4xl mx-auto">
              "A winning message can be translated into{' '}
              <span className="text-gradient">anything.</span>"
            </p>
            <p className="text-base sm:text-lg text-white/40 text-center mt-6 max-w-2xl mx-auto leading-relaxed">
              The message is the foundation. The format is just the container. CloutKart builds the message first — everything else scales from there.
            </p>
          </div>
        </div>

        {/* Three pillars */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`reveal delay-${(i + 3) * 100} glass-card rounded-2xl p-6 sm:p-8 hover-lift card-glow-border border border-white/[0.06] relative overflow-hidden group`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-5 sm:mb-6 shadow-lg`}>
                <pillar.icon size={20} className="text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{pillar.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

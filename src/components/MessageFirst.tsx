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
      desc: 'Build once. Deploy everywhere. The message powers your store, your ads, your content — all of it.',
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-16 md:py-36 bg-[#0d0d0d] [overflow-x:clip]" id="message">
      <div className="orb w-[700px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.035]"
        style={{ background: 'radial-gradient(circle, #ffffff, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Big statement */}
        <div className="text-center mb-12 md:mb-24">
          <div className="reveal inline-flex items-center gap-2 glass border border-white/[0.08] rounded-full px-4 py-1.5 text-[11px] font-medium text-white/35 mb-8 tracking-wide uppercase">
            Our Philosophy
          </div>

          <div className="reveal delay-100 space-y-1 sm:space-y-2">
            <h2 className="text-4xl sm:text-6xl lg:text-[6.5rem] font-bold tracking-tight leading-[1.03]">
              <span className="text-white/15">It's Not About</span>
            </h2>
            <h2 className="text-4xl sm:text-6xl lg:text-[6.5rem] font-bold tracking-tight leading-[1.03]">
              <span className="text-white">The Ad.</span>
            </h2>
            <h2 className="text-4xl sm:text-6xl lg:text-[6.5rem] font-bold tracking-tight leading-[1.03]">
              <span className="text-white/50">It's About The Message.</span>
            </h2>
          </div>
        </div>

        {/* Big card */}
        <div className="reveal delay-200 rounded-3xl p-8 sm:p-12 lg:p-16 mb-8 md:mb-14 relative overflow-hidden border border-white/[0.07]" style={{ background: '#111111' }}>
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-white/[0.015] blur-3xl pointer-events-none" />
          <div className="relative z-10 text-center">
            <p className="text-xl sm:text-3xl lg:text-[2.6rem] font-semibold text-white leading-[1.45] max-w-4xl mx-auto">
              "A winning message can be translated into{' '}
              <em className="not-italic text-white/45">anything.</em>"
            </p>
            <p className="text-sm sm:text-lg text-white/30 mt-6 max-w-2xl mx-auto leading-relaxed">
              The message is the foundation. The format is just the container. CloutKart builds the message first — everything else scales from there.
            </p>
          </div>
        </div>

        {/* Three pillars */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`reveal delay-${(i + 3) * 100} rounded-2xl p-6 sm:p-8 hover-lift card-glow-border relative overflow-hidden group border border-white/[0.07]`}
              style={{ background: '#111111' }}
            >
              <div className="absolute inset-0 bg-white/[0.015] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center mb-5">
                <pillar.icon size={19} className="text-white/55" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3 leading-snug">{pillar.title}</h3>
              <p className="text-white/38 text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

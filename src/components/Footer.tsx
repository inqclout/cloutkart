import { Instagram, Twitter, Linkedin, Youtube, Mail, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const links = {
    Agency: [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'How We Work', href: '#process' },
      { label: 'Portfolio', href: '#portfolio' },
    ],
    Services: [
      { label: 'AI Image Ads', href: '#services' },
      { label: 'TikTok Creatives', href: '#services' },
      { label: 'Video Ads', href: '#services' },
      { label: 'UGC Concepts', href: '#services' },
    ],
    Contact: [
      { label: 'Free Creatives', href: '#pricing' },
      { label: 'Send Inquiry', href: '#contact' },
      { label: 'shivam@clout-kart.com', href: 'mailto:shivam@clout-kart.com' },
    ],
  };

  const socials = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Mail, href: 'mailto:shivam@clout-kart.com', label: 'Email' },
  ];

  return (
    <footer className="relative bg-[#080C14] border-t border-white/[0.05] overflow-hidden">
      <div className="orb w-[600px] h-[600px] left-1/2 -translate-x-1/2 -bottom-64 opacity-8"
        style={{ background: 'radial-gradient(circle, #8B2FE0, transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8 sm:pb-10">
        {/* Top row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-12 mb-12 sm:mb-14">
          {/* Brand col */}
          <div className="sm:col-span-2 lg:col-span-2">
            <img
              src="/IMG_4598_(2)_(1).png"
              alt="CloutKart"
              className="h-10 sm:h-12 w-auto object-contain mb-4 sm:mb-5"
              style={{ filter: 'drop-shadow(0 0 8px rgba(139,47,224,0.4))' }}
            />
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-5 sm:mb-6">
              Modern advertising for modern brands. We build the winning message first — everything else scales from there.
            </p>
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 glass border border-white/10 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:border-[#8B2FE0]/40 transition-all duration-200 group touch-manipulation"
                >
                  <s.icon size={15} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-3 sm:grid-cols-3 lg:contents gap-8">
            {Object.entries(links).map(([group, items]) => (
              <div key={group}>
                <h4 className="text-xs font-bold text-white/30 uppercase tracking-widest mb-4 sm:mb-5">{group}</h4>
                <ul className="space-y-2.5 sm:space-y-3">
                  {items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-xs sm:text-sm text-white/50 hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                      >
                        <span className="break-all">{item.label}</span>
                        {item.href.startsWith('mailto') && (
                          <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6 sm:mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} CloutKart. All rights reserved.
          </p>
          <p className="text-white/25 text-xs">
            AI Creatives That Drive Results
          </p>
        </div>
      </div>
    </footer>
  );
}

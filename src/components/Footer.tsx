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
    <footer className="relative bg-[#0a0a0a] border-t border-white/[0.05] [overflow-x:clip]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-6 sm:pb-10">
        {/* Top row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 mb-10 sm:mb-14">
          {/* Brand col */}
          <div className="sm:col-span-2 lg:col-span-2">
            <img
              src="/879c983a-71d2-4cb9-b61e-238f9398be59_(1)_(1).png"
              alt="CloutKart"
              className="h-10 sm:h-12 w-auto object-contain mb-4 sm:mb-5 opacity-80"
            />
            <p className="text-white/30 text-sm leading-relaxed max-w-xs mb-5 sm:mb-6">
              Modern advertising for modern brands. We build the winning message first — everything else scales from there.
            </p>
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 glass border border-white/[0.08] rounded-lg flex items-center justify-center text-white/30 hover:text-white hover:border-white/20 transition-all duration-200 group touch-manipulation"
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
                <h4 className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-4 sm:mb-5">{group}</h4>
                <ul className="space-y-2.5 sm:space-y-3">
                  {items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-xs sm:text-sm text-white/35 hover:text-white/80 transition-colors duration-200 flex items-center gap-1 group"
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

        <div className="w-full h-px bg-white/[0.06] mb-6 sm:mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} CloutKart. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            AI Creatives That Drive Results
          </p>
        </div>
      </div>
    </footer>
  );
}

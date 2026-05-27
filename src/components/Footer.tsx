import { Instagram, Twitter, Linkedin, Youtube, Mail, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const links = {
    Agency: [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Process', href: '#process' },
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
    <div className="relative bg-transparent border-t border-white/[0.06] [overflow-x:clip]">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-10 pt-10 sm:pt-16 pb-6 sm:pb-10">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 mb-10 sm:mb-14">
          <div className="col-span-12 lg:col-span-4">
            <img src="/logo.png" alt="CloutKart" className="h-10 sm:h-12 w-auto object-contain mb-4 sm:mb-5 opacity-80" />
            <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-xs mb-5 sm:mb-6">
              Modern advertising for modern brands. We build the winning message first — everything else scales from there.
            </p>
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 bg-white/[0.04] border border-white/[0.08] rounded-lg flex items-center justify-center text-[#9CA3AF] hover:text-white hover:border-brand-purple/30 transition-all duration-200 group touch-manipulation"
                >
                  <s.icon size={15} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([group, items]) => (
            <div key={group} className="col-span-4 sm:col-span-4 lg:col-span-2 lg:col-start-auto">
              <h4 className="text-[10px] font-bold text-[#6B7280] uppercase tracking-widest mb-4 sm:mb-5 font-heading">{group}</h4>
              <ul className="grid gap-2.5 sm:gap-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-xs sm:text-sm text-[#9CA3AF] hover:text-white transition-colors duration-200 flex items-center gap-1 group"
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

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-6 sm:mb-8" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 items-center">
          <p className="text-[#6B7280] text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} CloutKart. All rights reserved.
          </p>
          <p className="text-[#6B7280] text-xs font-heading text-center sm:text-right">
            AI Creatives That Drive Results
          </p>
        </div>
      </div>
    </div>
  );
}

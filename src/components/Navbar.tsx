import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'How We Work', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Work', href: '#portfolio' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#080C14]/85 backdrop-blur-2xl border-b border-white/[0.06] shadow-2xl shadow-black/40'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group flex-shrink-0">
              <img
                src="/IMG_4598_(2)_(1).png"
                alt="CloutKart"
                className="h-8 sm:h-10 w-auto object-contain"
                style={{ filter: 'drop-shadow(0 0 8px rgba(139,47,224,0.45))' }}
              />
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-purple-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#contact"
                className="relative px-5 py-2.5 text-sm font-semibold text-white rounded-full overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#8B2FE0] via-[#2563EB] to-[#06B6D4] opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute inset-0 bg-gradient-to-r from-[#8B2FE0] via-[#2563EB] to-[#06B6D4] opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />
                <span className="relative">Contact Us</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white/70 hover:text-white transition-colors p-2 -mr-2 touch-manipulation"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)' }}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Drawer Panel */}
      <div
        className={`md:hidden fixed top-0 right-0 z-50 h-full w-[78vw] max-w-[320px] flex flex-col transition-transform duration-300 ease-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          background: 'rgba(10,14,26,0.97)',
          backdropFilter: 'blur(32px)',
          WebkitBackdropFilter: 'blur(32px)',
          borderLeft: '1px solid rgba(139,47,224,0.18)',
          borderTopLeftRadius: '24px',
          borderBottomLeftRadius: '24px',
          boxShadow: '-8px 0 60px rgba(0,0,0,0.6), -2px 0 20px rgba(139,47,224,0.08)',
        }}
      >
        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-px rounded-tl-3xl"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(139,47,224,0.5), rgba(6,182,212,0.5), transparent)' }}
        />

        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          <img
            src="/IMG_4598_(2)_(1).png"
            alt="CloutKart"
            className="h-7 w-auto object-contain"
            style={{ filter: 'drop-shadow(0 0 6px rgba(139,47,224,0.5))' }}
          />
          <button
            onClick={() => setMenuOpen(false)}
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors touch-manipulation"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
            aria-label="Close menu"
          >
            <X size={18} className="text-white/70" />
          </button>
        </div>

        {/* Divider */}
        <div className="mx-6 h-px mb-4" style={{ background: 'rgba(255,255,255,0.06)' }} />

        {/* Nav Links */}
        <nav className="flex-1 px-4 flex flex-col gap-1 overflow-y-auto">
          {links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className="group flex items-center gap-3 px-4 py-3.5 rounded-2xl text-base font-medium text-white/60 hover:text-white transition-all duration-200 touch-manipulation"
              style={{
                animationDelay: `${i * 50}ms`,
                background: 'transparent',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
              }}
              onClick={() => setMenuOpen(false)}
            >
              <span
                className="w-1 h-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200"
                style={{ background: 'linear-gradient(to bottom, #8B2FE0, #06B6D4)' }}
              />
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="px-5 pb-10 pt-4">
          <div className="h-px mb-5" style={{ background: 'rgba(255,255,255,0.06)' }} />
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block text-center px-6 py-4 text-sm font-bold text-white rounded-2xl touch-manipulation relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #8B2FE0, #2563EB, #06B6D4)' }}
          >
            <span
              className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'linear-gradient(135deg, #a855f7, #3b82f6, #22d3ee)', filter: 'blur(8px)' }}
            />
            <span className="relative">Get in Touch</span>
          </a>
          <p className="text-center text-white/20 text-xs mt-4">clout-kart.com</p>
        </div>

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px rounded-bl-3xl"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.4), rgba(139,47,224,0.4), transparent)' }}
        />
      </div>
    </>
  );
}

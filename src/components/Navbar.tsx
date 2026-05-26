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
            ? 'bg-[#0a0a0a]/90 backdrop-blur-2xl border-b border-white/[0.06] shadow-2xl shadow-black/60'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group flex-shrink-0">
              <img
                src="/879c983a-71d2-4cb9-b61e-238f9398be59_(1)_(1).png"
                alt="CloutKart"
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-white/50 hover:text-white transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white/60 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#contact"
                className="relative px-5 py-2.5 text-sm font-semibold text-black rounded-full overflow-hidden bg-white hover:bg-white/90 transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white/60 hover:text-white transition-colors p-2 -mr-2 touch-manipulation"
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
        style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Drawer Panel */}
      <div
        className={`md:hidden fixed top-0 right-0 z-50 h-full w-[78vw] max-w-[300px] flex flex-col transition-transform duration-300 ease-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          background: '#0f0f0f',
          borderLeft: '1px solid rgba(255,255,255,0.07)',
          borderTopLeftRadius: '20px',
          borderBottomLeftRadius: '20px',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          <img
            src="/879c983a-71d2-4cb9-b61e-238f9398be59_(1)_(1).png"
            alt="CloutKart"
            className="h-7 w-auto object-contain"
          />
          <button
            onClick={() => setMenuOpen(false)}
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors touch-manipulation border border-white/10 hover:border-white/20"
            aria-label="Close menu"
          >
            <X size={16} className="text-white/60" />
          </button>
        </div>

        {/* Divider */}
        <div className="mx-6 h-px mb-4 bg-white/[0.06]" />

        {/* Nav Links */}
        <nav className="flex-1 px-4 flex flex-col gap-1 overflow-y-auto">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-medium text-white/55 hover:text-white hover:bg-white/[0.04] transition-all duration-200 touch-manipulation"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="px-5 pb-10 pt-4">
          <div className="h-px mb-5 bg-white/[0.06]" />
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block text-center px-6 py-4 text-sm font-bold text-black bg-white rounded-xl touch-manipulation hover:bg-white/90 transition-colors duration-200"
          >
            Get in Touch
          </a>
          <p className="text-center text-white/20 text-xs mt-4">clout-kart.com</p>
        </div>
      </div>
    </>
  );
}

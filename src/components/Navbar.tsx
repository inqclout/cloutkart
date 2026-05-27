import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

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
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Work', href: '#portfolio' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-nav shadow-2xl shadow-black/50' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-[68px]">
            <a href="#" className="flex items-center gap-3 flex-shrink-0">
              <img src="/logo.png" alt="CloutKart" className="h-8 sm:h-9 w-auto object-contain" />
            </a>

            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-[#D1D5DB] hover:text-white transition-colors duration-200 relative group font-heading"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-brand-purple to-brand-cyan group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <a href="#contact" className="btn-primary text-sm !py-2.5 !px-6">
                Get Started <ArrowRight size={14} />
              </a>
            </div>

            <button
              className="md:hidden text-[#D1D5DB] hover:text-white transition-colors p-2 -mr-2 touch-manipulation"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
        onClick={() => setMenuOpen(false)}
      />

      <div
        className={`md:hidden fixed top-0 right-0 z-50 h-full w-[78vw] max-w-[300px] flex flex-col transition-transform duration-300 ease-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          background: 'rgba(8,8,8,0.92)',
          backdropFilter: 'blur(24px) saturate(180%)',
          borderLeft: '1px solid rgba(255,255,255,0.08)',
          borderTopLeftRadius: '20px',
          borderBottomLeftRadius: '20px',
        }}
      >
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          <img src="/logo.png" alt="CloutKart" className="h-7 w-auto object-contain" />
          <button
            onClick={() => setMenuOpen(false)}
            className="w-8 h-8 rounded-lg flex items-center justify-center touch-manipulation border border-white/10 hover:border-white/20 text-[#D1D5DB]"
            aria-label="Close menu"
          >
            <X size={16} />
          </button>
        </div>
        <div className="mx-6 h-px mb-4 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <nav className="flex-1 px-4 flex flex-col gap-1 overflow-y-auto">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-medium text-[#D1D5DB] hover:text-white hover:bg-white/[0.04] transition-all duration-200 touch-manipulation font-heading"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="px-5 pb-10 pt-4">
          <div className="h-px mb-5 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="btn-primary w-full text-center !rounded-xl !py-4 text-sm"
          >
            Get Started <ArrowRight size={14} />
          </a>
          <p className="text-center text-[#6B7280] text-xs mt-4 font-heading">clout-kart.com</p>
        </div>
      </div>
    </>
  );
}

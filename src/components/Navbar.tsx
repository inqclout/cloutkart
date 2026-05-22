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

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass-strong border-t border-white/[0.06] px-4 py-5 flex flex-col gap-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/70 hover:text-white text-base font-medium transition-colors duration-200 py-3 px-2 rounded-lg hover:bg-white/[0.04] touch-manipulation"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-3 text-center px-6 py-3.5 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-[#8B2FE0] via-[#2563EB] to-[#06B6D4] touch-manipulation"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}

import { useState, useEffect } from 'react';
import { Menu, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onMenuToggle: () => void;
}

export default function Navbar({ onMenuToggle }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

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
    <nav
      className={`site-nav ${scrolled ? 'glass-nav shadow-2xl shadow-black/50' : 'bg-transparent'}`}
    >
      <div className="site-nav-inner">
        <a href="#" className="flex items-center gap-3 flex-shrink-0">
          <img src="/logo.png" alt="CloutKart" className="h-8 sm:h-9 w-auto object-contain" />
        </a>

        <div className="hidden lg:flex items-center gap-8">
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

        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden lg:inline-flex btn-primary text-sm !py-2.5 !px-6">
            Get Started <ArrowRight size={14} />
          </a>
          <button
            className="lg:hidden text-[#D1D5DB] hover:text-white transition-colors p-2 -mr-2 touch-manipulation"
            onClick={onMenuToggle}
            aria-label="Toggle menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>
    </nav>
  );
}

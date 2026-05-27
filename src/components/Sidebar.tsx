import { X, ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`site-sidebar-overlay ${open ? 'active' : ''}`}
        onClick={onClose}
      />

      <aside className={`site-sidebar ${open ? 'open' : ''}`}>
        <div className="site-sidebar-inner">
          <div className="flex items-center gap-3 px-6 pt-6 pb-5">
            <img src="/logo.png" alt="CloutKart" className="h-7 w-auto object-contain" />
          </div>

          <div className="mx-5 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />

          <nav className="flex-1 px-3 flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={onClose}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-[#9CA3AF] hover:text-white hover:bg-white/[0.04] transition-all duration-200 font-heading"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="px-5 pb-6 pt-4">
            <div className="h-px mb-5 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <a
              href="#contact"
              onClick={onClose}
              className="btn-primary w-full text-center !rounded-xl !py-3 text-sm"
            >
              Get Started <ArrowRight size={13} />
            </a>
          </div>
        </div>

        {/* Close button for mobile */}
        <button
          onClick={onClose}
          className="site-sidebar-close lg:hidden"
          aria-label="Close sidebar"
        >
          <X size={18} />
        </button>
      </aside>
    </>
  );
}

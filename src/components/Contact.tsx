import { useEffect, useRef, useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface FormData {
  fullName: string;
  company: string;
  email: string;
  website: string;
  message: string;
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState<FormData>({
    fullName: '',
    company: '',
    email: '',
    website: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-scale').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.message) {
      setErrorMsg('Please fill in all required fields.');
      setStatus('error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setErrorMsg('Please enter a valid email address.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([{
          full_name: form.fullName,
          company_name: form.company,
          email: form.email,
          website: form.website,
          message: form.message,
        }]);

      if (error) throw error;

      await supabase.functions.invoke('send-contact-email', {
        body: {
          fullName: form.fullName,
          company: form.company,
          email: form.email,
          website: form.website,
          message: form.message,
        },
      });

      setStatus('success');
      setForm({ fullName: '', company: '', email: '', website: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or email us directly.');
    }
  };

  const inputClass = "w-full bg-[#0e0e0e] border border-white/[0.08] rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/18 focus:outline-none focus:border-white/22 focus:bg-[#121212] transition-all duration-200 font-medium";
  const labelClass = "block text-[11px] font-semibold text-white/30 mb-2 uppercase tracking-[0.08em]";

  return (
    <section ref={sectionRef} className="relative py-16 md:py-36 bg-[#080808] [overflow-x:clip]" id="contact">
      <div className="orb w-[700px] h-[700px] left-1/2 -translate-x-1/2 -top-32 opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #ffffff, transparent)' }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <div className="reveal inline-flex items-center gap-2 glass border border-white/[0.08] rounded-full px-4 py-1.5 text-[11px] font-medium text-white/35 mb-7 tracking-wide uppercase">
            Get Started
          </div>
          <h2 className="reveal delay-100 text-3xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.06] tracking-tight mb-3 sm:mb-4">
            Let's Build Your
            <br />
            <span className="text-white/35">Winning Message</span>
          </h2>
          <p className="reveal delay-200 text-white/35 text-sm md:text-lg max-w-xl mx-auto leading-relaxed">
            Tell us about your brand. We'll reach out within 24 hours to start building.
          </p>
        </div>

        <div className="reveal-scale delay-300 relative">
          <div className="absolute -inset-px rounded-3xl bg-white/[0.055] blur-sm" />

          <form
            onSubmit={handleSubmit}
            className="relative rounded-3xl p-6 sm:p-10 lg:p-12 overflow-hidden border border-white/[0.08]"
            style={{ background: '#111111' }}
          >
            <div className="relative z-10 grid sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className={labelClass}>Full Name <span className="text-white/40">*</span></label>
                <input type="text" name="fullName" value={form.fullName} onChange={handleChange} placeholder="John Smith" className={inputClass} />
              </div>

              <div>
                <label className={labelClass}>Company Name</label>
                <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Acme Inc." className={inputClass} />
              </div>

              <div>
                <label className={labelClass}>Email Address <span className="text-white/40">*</span></label>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@company.com" className={inputClass} />
              </div>

              <div>
                <label className={labelClass}>Website</label>
                <input type="url" name="website" value={form.website} onChange={handleChange} placeholder="https://yourwebsite.com" className={inputClass} />
              </div>

              <div className="sm:col-span-2">
                <label className={labelClass}>Tell Us About Your Brand <span className="text-white/40">*</span></label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="What do you sell? Who's your audience? What have you tried? What do you need?"
                  className={`${inputClass} resize-none`}
                />
              </div>

              {status === 'error' && (
                <div className="sm:col-span-2 flex items-center gap-3 bg-white/[0.03] border border-white/[0.09] rounded-xl p-4">
                  <AlertCircle size={15} className="text-white/45 flex-shrink-0" />
                  <span className="text-white/55 text-sm">{errorMsg}</span>
                </div>
              )}

              <div className="sm:col-span-2">
                {status === 'success' ? (
                  <div className="flex items-center justify-center gap-3 py-4 bg-white/[0.04] border border-white/[0.10] rounded-2xl">
                    <CheckCircle size={18} className="text-white/55" />
                    <div>
                      <div className="text-white font-semibold text-sm">Message Received!</div>
                      <div className="text-white/32 text-xs mt-0.5">We'll be in touch within 24 hours.</div>
                    </div>
                  </div>
                ) : (
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="group w-full inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold text-black bg-white rounded-2xl hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 active:scale-[0.99] hover:scale-[1.01] shadow-lg shadow-white/[0.08]"
                  >
                    {status === 'loading' ? (
                      <Loader size={15} className="animate-spin" />
                    ) : (
                      <Send size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                    )}
                    {status === 'loading' ? 'Sending...' : 'Send Inquiry'}
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>

        <p className="reveal delay-500 text-center text-white/22 text-sm mt-7">
          Prefer email?{' '}
          <a href="mailto:inquiry@clout-kart.com" className="text-white/42 hover:text-white/70 transition-colors underline underline-offset-2">
            inquiry@clout-kart.com
          </a>
        </p>
      </div>
    </section>
  );
}

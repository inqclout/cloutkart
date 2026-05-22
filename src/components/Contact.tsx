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

  const inputClass = "w-full glass border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#8B2FE0]/60 focus:ring-1 focus:ring-[#8B2FE0]/30 transition-all duration-200 bg-transparent";
  const labelClass = "block text-xs font-semibold text-white/50 mb-2 uppercase tracking-wider";

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 bg-[#080C14] overflow-hidden" id="contact">
      <div className="orb w-[700px] h-[700px] left-1/2 -translate-x-1/2 -top-32 opacity-10"
        style={{ background: 'radial-gradient(circle, #8B2FE0, transparent)' }} />
      <div className="orb w-[500px] h-[500px] -right-32 bottom-0 opacity-8"
        style={{ background: 'radial-gradient(circle, #06B6D4, transparent)' }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <div className="reveal inline-block glass border border-[#8B2FE0]/30 rounded-full px-4 py-1.5 text-xs font-semibold text-[#a78bfa] mb-6">
            Get Started
          </div>
          <h2 className="reveal delay-100 text-3xl sm:text-4xl lg:text-6xl font-black text-white leading-tight mb-4">
            Let's Build Your
            <br />
            <span className="text-gradient">Winning Message</span>
          </h2>
          <p className="reveal delay-200 text-white/40 text-base md:text-lg max-w-xl mx-auto">
            Tell us about your brand. We'll reach out within 24 hours to start building.
          </p>
        </div>

        <div className="reveal-scale delay-300 relative">
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-[#8B2FE0]/40 via-[#2563EB]/40 to-[#06B6D4]/40 blur-sm" />

          <form
            onSubmit={handleSubmit}
            className="relative glass-card rounded-3xl p-6 sm:p-8 lg:p-12 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#8B2FE0]/5 via-transparent to-[#06B6D4]/5 pointer-events-none" />

            <div className="relative z-10 grid sm:grid-cols-2 gap-4 sm:gap-5">
              {/* Full Name */}
              <div>
                <label className={labelClass}>
                  Full Name <span className="text-[#8B2FE0]">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="John Smith"
                  className={inputClass}
                />
              </div>

              {/* Company */}
              <div>
                <label className={labelClass}>Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Acme Inc."
                  className={inputClass}
                />
              </div>

              {/* Email */}
              <div>
                <label className={labelClass}>
                  Email Address <span className="text-[#8B2FE0]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className={inputClass}
                />
              </div>

              {/* Website */}
              <div>
                <label className={labelClass}>Website</label>
                <input
                  type="url"
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  placeholder="https://yourwebsite.com"
                  className={inputClass}
                />
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label className={labelClass}>
                  Tell Us About Your Brand <span className="text-[#8B2FE0]">*</span>
                </label>
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
                <div className="sm:col-span-2 flex items-center gap-3 glass border border-red-500/30 rounded-xl p-4">
                  <AlertCircle size={16} className="text-red-400 flex-shrink-0" />
                  <span className="text-red-400 text-sm">{errorMsg}</span>
                </div>
              )}

              <div className="sm:col-span-2">
                {status === 'success' ? (
                  <div className="flex items-center justify-center gap-3 py-4 glass border border-[#06B6D4]/30 rounded-2xl">
                    <CheckCircle size={20} className="text-[#06B6D4]" />
                    <div>
                      <div className="text-white font-semibold text-sm">Message Received!</div>
                      <div className="text-white/40 text-xs mt-0.5">We'll be in touch within 24 hours.</div>
                    </div>
                  </div>
                ) : (
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="group w-full relative inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold text-white rounded-2xl overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 active:scale-[0.99] hover:scale-[1.01]"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[#8B2FE0] via-[#2563EB] to-[#06B6D4]" />
                    <span className="absolute inset-0 bg-gradient-to-r from-[#8B2FE0] via-[#2563EB] to-[#06B6D4] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                    {status === 'loading' ? (
                      <Loader size={16} className="relative animate-spin" />
                    ) : (
                      <Send size={16} className="relative group-hover:translate-x-0.5 transition-transform duration-200" />
                    )}
                    <span className="relative">
                      {status === 'loading' ? 'Sending...' : 'Send Inquiry'}
                    </span>
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>

        <p className="reveal delay-500 text-center text-white/30 text-sm mt-6">
          Prefer email?{' '}
          <a href="mailto:shivam@clout-kart.com" className="text-[#8B2FE0] hover:text-[#a855f7] transition-colors">
            shivam@clout-kart.com
          </a>
        </p>
      </div>
    </section>
  );
}

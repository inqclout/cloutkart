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
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.querySelectorAll('.section-reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 100);
          });
        }
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

  const inputClass = "w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-sm text-white placeholder-[#6B7280] focus:outline-none focus:border-brand-purple/40 focus:bg-white/[0.05] transition-all duration-200 font-sans";
  const labelClass = "block text-[11px] font-semibold text-[#9CA3AF] mb-2 uppercase tracking-[0.08em] font-heading";

  return (
    <section ref={sectionRef} className="relative py-16 md:py-36 bg-transparent [overflow-x:clip]" id="contact">
      <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-10">
        <div className="text-center mb-10 md:mb-14">
          <div className="section-reveal eyebrow-pill mb-7">Get Started</div>
          <h2 className="section-reveal text-3xl sm:text-5xl lg:text-[52px] font-bold text-white leading-[1.06] tracking-[-0.02em] mb-3 sm:mb-4 font-heading">
            Let's Build Your
            <br />
            <span className="gradient-text">Winning Message</span>
          </h2>
          <p className="section-reveal text-[#D1D5DB] text-sm md:text-lg max-w-xl mx-auto leading-relaxed">
            Tell us about your brand. We'll reach out within 24 hours to start building.
          </p>
        </div>

        <div className="section-reveal">
          <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-10 lg:p-12">
            <div className="relative z-10 grid sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className={labelClass}>Full Name <span className="text-brand-purple">*</span></label>
                <input type="text" name="fullName" value={form.fullName} onChange={handleChange} placeholder="John Smith" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Company Name</label>
                <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Acme Inc." className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Email Address <span className="text-brand-purple">*</span></label>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@company.com" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Website</label>
                <input type="url" name="website" value={form.website} onChange={handleChange} placeholder="https://yourwebsite.com" className={inputClass} />
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass}>Tell Us About Your Brand <span className="text-brand-purple">*</span></label>
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
                  <AlertCircle size={15} className="text-brand-purple flex-shrink-0" />
                  <span className="text-[#D1D5DB] text-sm">{errorMsg}</span>
                </div>
              )}

              <div className="sm:col-span-2">
                {status === 'success' ? (
                  <div className="flex items-center justify-center gap-3 py-4 bg-white/[0.04] border border-brand-purple/20 rounded-2xl">
                    <CheckCircle size={18} className="text-brand-purple" />
                    <div>
                      <div className="text-white font-semibold text-sm font-heading">Message Received!</div>
                      <div className="text-[#9CA3AF] text-xs mt-0.5">We'll be in touch within 24 hours.</div>
                    </div>
                  </div>
                ) : (
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full !rounded-2xl !py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <Loader size={15} className="animate-spin" />
                    ) : (
                      <Send size={14} />
                    )}
                    {status === 'loading' ? 'Sending...' : 'Send Inquiry'}
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>

        <p className="section-reveal text-center text-[#6B7280] text-sm mt-7">
          Prefer email?{' '}
          <a href="mailto:inquiry@clout-kart.com" className="text-brand-purple hover:text-brand-cyan transition-colors underline underline-offset-2">
            inquiry@clout-kart.com
          </a>
        </p>
      </div>
    </section>
  );
}

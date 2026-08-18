import React, { useState } from 'react';
import { Mail, Phone, Check, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Navbar';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [copied, setCopied] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('adithyajb2020@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validateForm = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Your name is required';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email';
    }
    
    if (!formData.subject.trim()) tempErrors.subject = 'A subject is required';
    if (!formData.message.trim()) tempErrors.message = 'Message payload cannot be empty';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setFormSubmitted(true);
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-20 md:py-24 relative overflow-hidden bg-transparent">
      {/* Background Radial Glow */}
      <div className="absolute bottom-1/4 left-1/4 w-[30rem] h-[30rem] bg-emerald-500/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        {/* Section Heading */}
        <div className="mb-16 reveal-on-scroll">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-heading">
            Let's build something.
          </h2>
        </div>

        {/* Form and info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct contact info */}
          <div className="lg:col-span-5 space-y-8 reveal-on-scroll">
            <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-md">
              Whether it's an AI model build, research collaboration, internship opportunity, or a software engineering project, feel free to reach out.
            </p>

            <div className="space-y-4 pt-4">
              {/* Copyable Email item */}
              <div
                onClick={handleCopyEmail}
                className="flex items-center gap-4 p-5 rounded-2xl border border-emerald-500/20 bg-slate-900/40 backdrop-blur-xl hover:border-emerald-400/50 transition-all duration-300 cursor-pointer group relative shadow-2xl hover:shadow-[0_15px_30px_rgba(16,185,129,0.08)]"
              >
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 group-hover:bg-emerald-500/20 transition-all duration-300">
                  <Mail className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-[9px] font-mono text-slate-400 tracking-widest uppercase font-bold">
                    Direct Email
                  </div>
                  <div className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    adithyajb2020@gmail.com
                  </div>
                </div>
                {/* Micro-interaction toast */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#090c12] border border-emerald-500/30 text-[9px] font-mono text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copied</span>
                    </>
                  ) : (
                    <span>Copy email</span>
                  )}
                </div>
              </div>

              {/* Phone item */}
              <a
                href="tel:+918714408712"
                className="flex items-center gap-4 p-5 rounded-2xl border border-emerald-500/20 bg-slate-900/40 backdrop-blur-xl hover:border-emerald-400/50 transition-all duration-300 group shadow-2xl hover:shadow-[0_15px_30px_rgba(16,185,129,0.08)]"
              >
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 group-hover:bg-emerald-500/20 transition-all duration-300">
                  <Phone className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-[9px] font-mono text-slate-400 tracking-widest uppercase font-bold">
                    Call / WhatsApp
                  </div>
                  <div className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    +91 8714408712
                  </div>
                </div>
              </a>
            </div>

            {/* Social Grid */}
            <div className="space-y-4 pt-6 border-t border-emerald-500/15">
              <h4 className="text-xs font-mono text-slate-400 tracking-widest uppercase font-bold">
                Digital Presence
              </h4>
              <div className="flex gap-3">
                <a
                  href="https://github.com/adithyajb07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl border border-emerald-500/20 bg-slate-900/60 hover:border-emerald-400 hover:text-emerald-400 text-slate-300 transition-all duration-300 shadow-md"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/adithya-jisha-biju"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl border border-emerald-500/20 bg-slate-900/60 hover:border-emerald-400 hover:text-emerald-400 text-slate-300 transition-all duration-300 shadow-md"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href="mailto:adithyajb2020@gmail.com"
                  className="p-3.5 rounded-xl border border-emerald-500/20 bg-slate-900/60 hover:border-emerald-400 hover:text-emerald-400 text-slate-300 transition-all duration-300 shadow-md"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/adithyaajb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl border border-emerald-500/20 bg-slate-900/60 hover:border-emerald-400 hover:text-emerald-400 text-slate-300 transition-all duration-300 shadow-md"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 reveal-on-scroll delay-200">
            <div className="p-6 md:p-8 rounded-3xl border border-emerald-500/20 bg-slate-900/40 backdrop-blur-xl hover:border-emerald-400/30 shadow-2xl transition-all duration-300">
              {formSubmitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                    <Check className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-sans">
                    Message Sent!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
                    Thank you for reaching out, Adithya has received your message and will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-xs font-mono text-slate-400 tracking-widest uppercase font-bold">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4.5 py-3.5 rounded-xl bg-slate-950/60 border text-sm text-white focus:outline-none transition-all duration-300 ${
                        errors.name ? 'border-rose-500/80 shadow-[0_0_15px_rgba(244,63,94,0.15)]' : 'border-slate-800 focus:border-emerald-500 focus:shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-xs text-rose-500 font-mono mt-1">{errors.name}</p>}
                  </div>

                  {/* Email & Subject Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-mono text-slate-400 tracking-widest uppercase font-bold">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4.5 py-3.5 rounded-xl bg-slate-950/60 border text-sm text-white focus:outline-none transition-all duration-300 ${
                          errors.email ? 'border-rose-500/80 shadow-[0_0_15px_rgba(244,63,94,0.15)]' : 'border-slate-800 focus:border-emerald-500 focus:shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-xs text-rose-500 font-mono mt-1">{errors.email}</p>}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="block text-xs font-mono text-slate-400 tracking-widest uppercase font-bold">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`w-full px-4.5 py-3.5 rounded-xl bg-slate-950/60 border text-sm text-white focus:outline-none transition-all duration-300 ${
                          errors.subject ? 'border-rose-500/80 shadow-[0_0_15px_rgba(244,63,94,0.15)]' : 'border-slate-800 focus:border-emerald-500 focus:shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                        }`}
                        placeholder="Partnership, Project..."
                      />
                      {errors.subject && <p className="text-xs text-rose-500 font-mono mt-1">{errors.subject}</p>}
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-xs font-mono text-slate-400 tracking-widest uppercase font-bold">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full px-4.5 py-3.5 rounded-xl bg-slate-950/60 border text-sm text-white focus:outline-none transition-all duration-300 resize-none ${
                        errors.message ? 'border-rose-500/80 shadow-[0_0_15px_rgba(244,63,94,0.15)]' : 'border-slate-800 focus:border-emerald-500 focus:shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                      }`}
                      placeholder="Hi Adithya, I'd like to collaborate on..."
                    />
                    {errors.message && <p className="text-xs text-rose-500 font-mono mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm tracking-widest uppercase rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.3)] cursor-pointer group"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Mail, Phone, Send, Check } from 'lucide-react';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('adithyajb2020@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    if (!valid) {
      setErrors(newErrors);
      return;
    }

    // Client-side form simulation (To hook up Formspree or EmailJS, replace logic below)
    console.log('Sending message:', formData);
    setFormSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-bg-dark">
      {/* Background Radial Glow */}
      <div className="absolute bottom-1/4 left-1/4 w-[30rem] h-[30rem] bg-accent-violet/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        {/* Section Heading */}
        <div className="flex items-center space-x-4 mb-16 reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-sans">
            Let's build something.
          </h2>
          <div className="h-[1px] flex-grow bg-border-subtle" />
        </div>

        {/* Form and info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct contact info */}
          <div className="lg:col-span-5 space-y-8 reveal-on-scroll">
            <p className="text-sm md:text-base text-text-secondary leading-relaxed max-w-md">
              Whether it's an interesting project, collaboration, internship opportunity, or simply a conversation about technology, feel free to reach out.
            </p>

            <div className="space-y-4 pt-4">
              {/* Copyable Email item */}
              <div
                onClick={handleCopyEmail}
                className="flex items-center gap-4 p-4 rounded-xl border border-border-subtle bg-bg-card/40 hover:bg-bg-card-hover hover:border-accent-cyan/30 transition-all cursor-pointer group relative"
              >
                <div className="p-3 rounded-lg bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
                  <Mail className="w-5 h-5 text-accent-cyan" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-text-secondary tracking-widest uppercase">
                    Direct Email
                  </div>
                  <div className="text-sm font-semibold text-white group-hover:text-accent-cyan transition-colors">
                    adithyajb2020@gmail.com
                  </div>
                </div>
                {/* Micro-interaction toast */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#181818] border border-border-subtle text-[10px] font-mono text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500 font-bold">Copied</span>
                    </>
                  ) : (
                    <span>Copy email</span>
                  )}
                </div>
              </div>

              {/* Phone item */}
              <a
                href="tel:+918714408712"
                className="flex items-center gap-4 p-4 rounded-xl border border-border-subtle bg-bg-card/40 hover:bg-bg-card-hover hover:border-accent-cyan/30 transition-all group"
              >
                <div className="p-3 rounded-lg bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
                  <Phone className="w-5 h-5 text-accent-cyan" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-text-secondary tracking-widest uppercase">
                    Call / WhatsApp
                  </div>
                  <div className="text-sm font-semibold text-white group-hover:text-accent-cyan transition-colors">
                    +91 8714408712
                  </div>
                </div>
              </a>
            </div>

            {/* Social Grid */}
            <div className="space-y-3 pt-6 border-t border-border-subtle">
              <h4 className="text-xs font-mono text-text-secondary tracking-widest uppercase">
                Digital Presence
              </h4>
              <div className="flex gap-3">
                <a
                  href="https://github.com/adithyajb07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-border-subtle bg-bg-card/40 hover:border-accent-cyan/40 hover:text-accent-cyan text-text-secondary transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/adithya-jisha-biju"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-border-subtle bg-bg-card/40 hover:border-accent-cyan/40 hover:text-accent-cyan text-text-secondary transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href="mailto:adithyajb2020@gmail.com"
                  className="p-3 rounded-xl border border-border-subtle bg-bg-card/40 hover:border-accent-cyan/40 hover:text-accent-cyan text-text-secondary transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/adithyaajb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-border-subtle bg-bg-card/40 hover:border-accent-cyan/40 hover:text-accent-cyan text-text-secondary transition-all"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 reveal-on-scroll delay-200">
            <div className="p-6 md:p-8 rounded-2xl border border-border-subtle bg-bg-card/30 backdrop-blur-sm shadow-xl">
              {formSubmitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <Check className="w-6 h-6 text-emerald-500" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-sans">
                    Message Sent!
                  </h3>
                  <p className="text-sm text-text-secondary max-w-sm leading-relaxed">
                    Thank you for reaching out, Adithya. I have received your message simulation and will respond shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-xs font-mono text-text-secondary tracking-widest uppercase">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg bg-black border text-sm text-white focus:outline-none transition-colors ${
                        errors.name ? 'border-rose-500' : 'border-border-subtle focus:border-accent-cyan'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-xs text-rose-500 font-mono mt-1">{errors.name}</p>}
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs font-mono text-text-secondary tracking-widest uppercase">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg bg-black border text-sm text-white focus:outline-none transition-colors ${
                        errors.email ? 'border-rose-500' : 'border-border-subtle focus:border-accent-cyan'
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-xs text-rose-500 font-mono mt-1">{errors.email}</p>}
                  </div>

                  {/* Message field */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-xs font-mono text-text-secondary tracking-widest uppercase">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg bg-black border text-sm text-white focus:outline-none transition-colors resize-none ${
                        errors.message ? 'border-rose-500' : 'border-border-subtle focus:border-accent-cyan'
                      }`}
                      placeholder="Hi Adithya, I would love to collaborate on a computer vision project..."
                    />
                    {errors.message && <p className="text-xs text-rose-500 font-mono mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-accent-cyan to-blue-600 text-black font-bold text-sm tracking-wide rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all cursor-pointer shadow-lg shadow-cyan-500/10"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
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

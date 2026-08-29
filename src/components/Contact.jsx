import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import {
  Mail,
  Phone,
  Send,
  Sparkles,
  CheckCircle2,
  FileDown,
  ArrowRight,
  Copy,
  Check
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const [copiedEmail, setCopiedEmail] = useState(false);

  const resumeUrl = `${import.meta.env.BASE_URL}resume/Sanskar_Pandey_Resume.pdf`;

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ submitting: false, submitted: false, error: 'Please fill in all required fields.' });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    // Construct mailto link with entered subject and body for immediate client email fallback
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || `Portfolio Contact from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Simulate sending dispatch with UX and fire confetti
    setTimeout(() => {
      setStatus({ submitting: false, submitted: true, error: null });
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#E8D2A6', '#C9A876', '#FFFFFF', '#38BDF8']
        });
      } catch (err) {
        // Safe fallback
      }

      // Also trigger mailto so user's client is primed
      window.location.href = mailtoUrl;

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 900);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-black overflow-hidden w-full max-w-full">
      {/* Background ambient lighting and grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)'
        }}
      />
      <div className="absolute top-0 right-0 w-[450px] max-w-full h-[450px] bg-[#C9A876]/[0.04] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] max-w-full h-[450px] bg-white/[0.015] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 md:mb-16 max-w-full"
        >
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-[#E8D2A6]" />
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/40">
              Let's Connect
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold tracking-tight text-white mb-4">
            Contact.
          </h2>
          <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-2xl">
            Open to AI/ML engineering internships, full-stack software developer opportunities, and research collaborations.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto w-full">
          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mb-10 w-full">
            {/* Email Card */}
            <motion.a
              href={`mailto:${personalInfo.email}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative flex items-center p-4 sm:p-5 rounded-2xl bg-[#0A0A0C] border border-white/[0.08] hover:border-[#C9A876]/40 transition-all duration-300 gap-3.5 sm:gap-4 cursor-pointer overflow-hidden w-full"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 group-hover:text-[#E8D2A6] group-hover:bg-[#C9A876]/15 group-hover:border-[#C9A876]/30 transition-all duration-300 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-grow min-w-0">
                <div className="text-[9.5px] sm:text-[10px] uppercase tracking-[0.25em] text-white/40 font-mono mb-0.5">
                  Direct Email
                </div>
                <div className="text-white font-medium text-xs sm:text-sm md:text-[15px] truncate font-mono">
                  {personalInfo.email}
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                title="Copy Email Address"
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/40 hover:text-white hover:bg-white/10 transition-colors shrink-0"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </motion.a>

            {/* Phone Card */}
            <motion.a
              href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative flex items-center p-4 sm:p-5 rounded-2xl bg-[#0A0A0C] border border-white/[0.08] hover:border-[#C9A876]/40 transition-all duration-300 gap-3.5 sm:gap-4 cursor-pointer overflow-hidden w-full"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 group-hover:text-[#E8D2A6] group-hover:bg-[#C9A876]/15 group-hover:border-[#C9A876]/30 transition-all duration-300 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-grow min-w-0">
                <div className="text-[9.5px] sm:text-[10px] uppercase tracking-[0.25em] text-white/40 font-mono mb-0.5">
                  Phone / WhatsApp
                </div>
                <div className="text-white font-medium text-xs sm:text-sm md:text-[15px] truncate font-mono">
                  {personalInfo.phone}
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-[#E8D2A6] group-hover:translate-x-1 transition-all shrink-0" />
            </motion.a>
          </div>

          {/* Social Links Bar */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/[0.08]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-mono px-2">
              Social Links
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/[0.08]" />
          </div>

          <div className="flex justify-center gap-5 mb-12">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
            >
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center bg-white/[0.02] border border-white/[0.08] text-white/50 group-hover:text-white group-hover:border-[#C9A876]/40 group-hover:bg-[#C9A876]/10 transition-all duration-300">
                <GithubIcon className="w-5 h-5" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-mono group-hover:text-white/70 transition-colors">
                GitHub
              </span>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
            >
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center bg-white/[0.02] border border-white/[0.08] text-white/50 group-hover:text-white group-hover:border-[#C9A876]/40 group-hover:bg-[#C9A876]/10 transition-all duration-300">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-mono group-hover:text-white/70 transition-colors">
                LinkedIn
              </span>
            </a>
          </div>

          {/* Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-5 sm:p-8 md:p-10 rounded-3xl bg-[#09090B] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.7)] relative mb-12 w-full"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 flex-wrap gap-2">
              <div className="flex items-center gap-2 font-mono text-xs text-white/70">
                <Send className="w-4 h-4 text-[#E8D2A6]" />
                <span>send_message.sh</span>
              </div>
              <div className="text-[10px] font-mono text-white/40 uppercase">
                sanskar.p.work@gmail.com
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-white/50 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Alex Turing"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-[#C9A876] focus:ring-1 focus:ring-[#C9A876] transition-all font-sans"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-white/50 mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="e.g. alex@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-[#C9A876] focus:ring-1 focus:ring-[#C9A876] transition-all font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-white/50 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. AI Internship / Full-Stack Project Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-[#C9A876] focus:ring-1 focus:ring-[#C9A876] transition-all font-sans"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-white/50 mb-1.5">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-[#C9A876] focus:ring-1 focus:ring-[#C9A876] transition-all font-sans resize-none"
                />
              </div>

              {/* Status alerts */}
              {status.error && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono">
                  {status.error}
                </div>
              )}

              {status.submitted && (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Message dispatched successfully! Preparing email routing to sanskar.p.work@gmail.com</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status.submitting}
                className="w-full py-3.5 px-6 rounded-xl bg-[#F2EFE9] text-[#0A0A0C] font-semibold text-sm flex items-center justify-center gap-2 hover:bg-white transition-all duration-300 active:scale-[0.99] disabled:opacity-50"
              >
                {status.submitting ? (
                  <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Resume / CV CTA Button */}
          <div className="flex justify-center mb-10 w-full">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Sanskar_Pandey_Resume.pdf"
              className="group relative inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full overflow-hidden cursor-pointer max-w-full"
              style={{
                background: 'linear-gradient(135deg, rgba(201,168,118,0.12) 0%, rgba(201,168,118,0.04) 100%)',
                border: '1px solid rgba(201,168,118,0.35)'
              }}
            >
              <div className="relative z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center bg-[#C9A876]/15 border border-[#C9A876]/30 group-hover:bg-[#C9A876]/25 transition-colors shrink-0">
                <FileDown className="w-4 h-4 text-[#E8D2A6]" />
              </div>
              <div className="relative z-10 text-left">
                <div className="text-[9.5px] sm:text-[10px] uppercase tracking-[0.24em] text-[#C9A876] font-mono">
                  Official Document
                </div>
                <div className="text-white font-display font-semibold text-xs sm:text-sm tracking-tight leading-none mt-0.5">
                  Download Official Resume / CV
                </div>
              </div>
              <ArrowRight className="relative z-10 w-4 h-4 text-[#C9A876] group-hover:translate-x-1 transition-all duration-300 ml-1 sm:ml-2 shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

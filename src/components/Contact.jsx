import { useState } from "react";
import emailjs from "@emailjs/browser";
import AnimatedSection from "./AnimatedSection";
import { 
  Mail, 
  Send, 
  Sparkles, 
  Copy, 
  Check, 
  ArrowUpRight,
  MessageSquare
} from "lucide-react";
import { Github, Linkedin } from "./Icons";

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [copied, setCopied] = useState(false);

  const emailAddress = "vishu31103@gmail.com";

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    onShowToast?.("Email address copied to clipboard!", "success");
    setTimeout(() => setCopied(false), 2500);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      onShowToast?.("Please fix the errors in the form", "error");
      return;
    }

    setIsSubmitting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

      if (serviceId === "YOUR_SERVICE_ID" || templateId === "YOUR_TEMPLATE_ID" || publicKey === "YOUR_PUBLIC_KEY") {
        console.warn("EmailJS not configured in environment variables.");
        onShowToast?.("Email service not configured. Please email directly at " + emailAddress, "error");
        setIsSubmitting(false);
        return;
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: emailAddress,
        reply_to: formData.email,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      onShowToast?.("Thank you for your message! I'll get back to you soon.", "success");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error("Email sending error:", error);
      onShowToast?.("Something went wrong. Please reach out directly at " + emailAddress, "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="scroll-mt-24 px-4 sm:px-6 md:px-16 py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection direction="up" delay={50}>
            <div className="section-tag">
              <Mail className="w-3.5 h-3.5" />
              <span>GET IN TOUCH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Let's Build Something Together
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              Available for full-time software engineering roles, high-impact backend contracts, and technical discussions.
            </p>
          </AnimatedSection>
        </div>

        {/* Contact Method Quick Cards */}
        <AnimatedSection direction="up" delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12">
            
            {/* Email Card with 1-click copy */}
            <div className="linear-card p-6 flex flex-col justify-between group hover:border-indigo-500/40">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-indigo-500/40 transition cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <h3 className="text-base font-bold text-[var(--text-primary)]">Email</h3>
                <p className="text-xs font-mono-code text-[var(--text-secondary)] truncate mt-1">
                  {emailAddress}
                </p>
              </div>

              <a
                href={`mailto:${emailAddress}`}
                className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition"
              >
                Send Direct Mail
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/vishwajit-sutar-03324b2b0/"
              target="_blank"
              rel="noopener noreferrer"
              className="linear-card p-6 flex flex-col justify-between group hover:border-indigo-500/40 cursor-pointer"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-all mb-4">
                  <Linkedin className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[var(--text-primary)]">LinkedIn</h3>
                <p className="text-xs text-[var(--text-secondary)] mt-1">
                  Professional Network &amp; Posts
                </p>
              </div>

              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 group-hover:text-indigo-300 transition">
                Connect on LinkedIn
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/VishwajitS7"
              target="_blank"
              rel="noopener noreferrer"
              className="linear-card p-6 flex flex-col justify-between group hover:border-indigo-500/40 cursor-pointer"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-all mb-4">
                  <Github className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[var(--text-primary)]">GitHub</h3>
                <p className="text-xs text-[var(--text-secondary)] mt-1">
                  Open Source &amp; Repositories
                </p>
              </div>

              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 group-hover:text-indigo-300 transition">
                Explore Codebase
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </a>

          </div>
        </AnimatedSection>

        {/* Message Form Card */}
        <AnimatedSection direction="up" delay={200}>
          <div className="linear-card linear-card-accent p-8 sm:p-10">
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">
                    Send a Message
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Leave your contact details and project requirements below.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono-code font-semibold uppercase text-[var(--text-secondary)] mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-[var(--bg-surface)] border text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm transition focus:outline-none focus:ring-2 focus:ring-indigo-500/40 ${
                        errors.name
                          ? "border-red-500/60 focus:border-red-500"
                          : "border-[var(--border-subtle)] focus:border-indigo-500"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono-code font-semibold uppercase text-[var(--text-secondary)] mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[var(--bg-surface)] border text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm transition focus:outline-none focus:ring-2 focus:ring-indigo-500/40 ${
                        errors.email
                          ? "border-red-500/60 focus:border-red-500"
                          : "border-[var(--border-subtle)] focus:border-indigo-500"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono-code font-semibold uppercase text-[var(--text-secondary)] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about the engineering problem, timeline, or team role..."
                    className={`w-full px-4 py-3 rounded-xl bg-[var(--bg-surface)] border text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm transition resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500/40 ${
                      errors.message
                        ? "border-red-500/60 focus:border-red-500"
                        : "border-[var(--border-subtle)] focus:border-indigo-500"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>
                  )}
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-electric w-full py-3.5 text-sm cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending Message...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}

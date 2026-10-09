import { useState } from "react";
import emailjs from "@emailjs/browser";
import AnimatedSection from "./AnimatedSection";
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  ArrowUpRight,
  MessageSquare,
  Terminal
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

      onShowToast?.("Message transmitted successfully! I will respond promptly.", "success");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error("Email sending error:", error);
      onShowToast?.("Transmission failed. Please reach out directly at " + emailAddress, "error");
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
    <section id="contact" className="scroll-mt-20 px-4 sm:px-6 md:px-16 py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-14">
          <AnimatedSection direction="up" delay={40}>
            <div className="section-marker">
              <span>[ 06 // DISPATCH CENTER ]</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-[var(--text-main)] mt-2">
              Initialize Direct Transmission
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)] max-w-2xl font-sans">
              Open for full-time engineering roles, backend systems architecture, and technical discussions.
            </p>
          </AnimatedSection>
        </div>

        {/* Quick Contact Cards */}
        <AnimatedSection direction="up" delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10 font-mono-code">
            
            {/* Email Card with 1-click copy */}
            <div className="brutal-card p-5 flex flex-col justify-between border-2 border-[var(--border-color)]">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b-2 border-[var(--border-color)]">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[var(--accent-lime)]" />
                    <span className="text-xs font-bold text-[var(--text-main)]">DIRECT MAIL</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1 border border-[var(--border-color)] hover:border-[var(--accent-lime)] text-[var(--text-muted)] hover:text-[var(--text-main)] transition cursor-pointer"
                    title="Copy email address"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-[var(--accent-lime)]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <p className="text-xs text-[var(--text-main)] font-bold truncate">
                  {emailAddress}
                </p>
                <p className="text-[11px] text-[var(--text-dim)] mt-1">
                  Primary Developer Inbox
                </p>
              </div>

              <a
                href={`mailto:${emailAddress}`}
                className="mt-4 pt-3 border-t border-[var(--border-color)] text-xs font-bold text-[var(--accent-lime)] hover:underline inline-flex items-center gap-1"
              >
                <span>[ OPEN_MAILTO_CLIENT ]</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/vishwajit-sutar-03324b2b0/"
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-card p-5 flex flex-col justify-between border-2 border-[var(--border-color)] cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b-2 border-[var(--border-color)]">
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-[var(--accent-lime)]" />
                    <span className="text-xs font-bold text-[var(--text-main)]">LINKEDIN</span>
                  </div>
                  <span className="text-[10px] text-[var(--text-dim)]">[NET]</span>
                </div>
                <p className="text-xs text-[var(--text-main)] font-bold truncate">
                  vishwajit-sutar
                </p>
                <p className="text-[11px] text-[var(--text-dim)] mt-1">
                  Professional Network
                </p>
              </div>

              <span className="mt-4 pt-3 border-t border-[var(--border-color)] text-xs font-bold text-[var(--accent-lime)] inline-flex items-center gap-1">
                <span>[ VIEW_PROFILE ]</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/VishwajitS7"
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-card p-5 flex flex-col justify-between border-2 border-[var(--border-color)] cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b-2 border-[var(--border-color)]">
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-[var(--accent-lime)]" />
                    <span className="text-xs font-bold text-[var(--text-main)]">GITHUB</span>
                  </div>
                  <span className="text-[10px] text-[var(--text-dim)]">[SRC]</span>
                </div>
                <p className="text-xs text-[var(--text-main)] font-bold truncate">
                  @VishwajitS7
                </p>
                <p className="text-[11px] text-[var(--text-dim)] mt-1">
                  Public Repositories &amp; Commits
                </p>
              </div>

              <span className="mt-4 pt-3 border-t border-[var(--border-color)] text-xs font-bold text-[var(--accent-lime)] inline-flex items-center gap-1">
                <span>[ VIEW_REPOSITORIES ]</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </a>

          </div>
        </AnimatedSection>

        {/* Message Form Terminal */}
        <AnimatedSection direction="up" delay={180}>
          <div className="brutal-card p-6 sm:p-10 border-2 border-[var(--border-color)]">
            <div className="max-w-2xl mx-auto">
              
              {/* Form Terminal Bar */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-[var(--border-color)] font-mono-code text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[var(--accent-lime)] border border-black inline-block" />
                  <span className="font-bold text-[var(--text-main)]">DISPATCH TERMINAL // PAYLOAD_FORM</span>
                </div>
                <span className="text-[var(--text-muted)]">[ENCRYPTED]</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 font-mono-code">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase text-[var(--text-main)] mb-2">
                      [ SENDER_NAME ]
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className={`w-full px-4 py-3 bg-[var(--bg-surface)] border-2 text-[var(--text-main)] placeholder-[var(--text-dim)] text-xs font-mono-code transition focus:outline-none focus:border-[var(--accent-lime)] ${
                        errors.name
                          ? "border-red-500"
                          : "border-[var(--border-color)]"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-[11px] mt-1.5">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase text-[var(--text-main)] mb-2">
                      [ SENDER_EMAIL ]
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className={`w-full px-4 py-3 bg-[var(--bg-surface)] border-2 text-[var(--text-main)] placeholder-[var(--text-dim)] text-xs font-mono-code transition focus:outline-none focus:border-[var(--accent-lime)] ${
                        errors.email
                          ? "border-red-500"
                          : "border-[var(--border-color)]"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-[11px] mt-1.5">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase text-[var(--text-main)] mb-2">
                    [ MESSAGE_PAYLOAD ]
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Specify project requirements, team role, or engineering discussion topic..."
                    className={`w-full px-4 py-3 bg-[var(--bg-surface)] border-2 text-[var(--text-main)] placeholder-[var(--text-dim)] text-xs font-mono-code transition resize-none focus:outline-none focus:border-[var(--accent-lime)] ${
                      errors.message
                        ? "border-red-500"
                        : "border-[var(--border-color)]"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-[11px] mt-1.5">{errors.message}</p>
                  )}
                </div>

                {/* Transmit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-brutal-lime w-full py-4 text-xs tracking-wider cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      TRANSMITTING PAYLOAD...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      [ TRANSMIT MESSAGE &rarr; ]
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

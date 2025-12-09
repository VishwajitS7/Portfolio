import { useState } from "react";
import emailjs from "@emailjs/browser";
import AnimatedSection from "./AnimatedSection";

export default function Contact({ isLight = false, onShowToast }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

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
      // EmailJS configuration
      // Get these values from your EmailJS dashboard: https://dashboard.emailjs.com/
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

      // Debug: Check if env variables are loaded (only log first few chars for security)
      console.log("EmailJS Config Check:", {
        serviceId: serviceId ? `${serviceId.substring(0, 10)}...` : "NOT LOADED",
        templateId: templateId ? `${templateId.substring(0, 10)}...` : "NOT LOADED",
        publicKey: publicKey ? `${publicKey.substring(0, 5)}...` : "NOT LOADED"
      });

      // Check if EmailJS is configured
      if (serviceId === "YOUR_SERVICE_ID" || templateId === "YOUR_TEMPLATE_ID" || publicKey === "YOUR_PUBLIC_KEY") {
        console.warn("EmailJS not configured. Please set up your environment variables.");
        console.warn("Make sure you restarted the dev server after creating .env file!");
        // Fallback: You can still log the form data or use mailto as backup
        onShowToast?.("Email service not configured. Please contact directly at vishu31103@gmail.com", "error");
        setIsSubmitting(false);
        return;
      }

      // Prepare email template parameters
      // These variable names should match your EmailJS template
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "vishu31103@gmail.com", // Your email address
        reply_to: formData.email, // So you can reply directly
      };

      console.log("Sending email with params:", { serviceId, templateId, templateParams });

      // Send email using EmailJS
      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      console.log("Email sent successfully!", response);
      onShowToast?.("Thank you for your message! I'll get back to you soon.", "success");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error("Email sending error:", error);
      console.error("Error details:", {
        text: error.text,
        status: error.status,
        message: error.message
      });
      
      // Show more specific error message
      let errorMessage = "Something went wrong. Please try again later or email me directly at vishu31103@gmail.com";
      
      if (error.text) {
        errorMessage = `Error: ${error.text}`;
      } else if (error.message) {
        errorMessage = `Error: ${error.message}`;
      }
      
      onShowToast?.(errorMessage, "error");
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
    <section
      id="contact"
      className={`scroll-mt-20 min-h-screen px-4 sm:px-6 md:px-16 py-16 md:py-20 relative overflow-hidden ${
        isLight ? "border-t border-[#D9DEEA]" : "border-t border-white/5"
      }`}
    >
      {/* Background gradient highlight */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div
          className={`absolute inset-0 ${
            isLight
              ? "bg-gradient-to-br from-[#4C6FFF]/5 via-transparent to-[#00C7AC]/5"
              : "bg-gradient-to-br from-[#4C6FFF]/10 via-transparent to-[#00E8C6]/10"
          } blur-3xl`}
        />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.4em] copy-muted mb-3">Connect</p>
          <h2 className="section-heading text-4xl md:text-5xl font-bold gradient-text accent-divider">
            <span className="heading-icon text-sm">✉</span>
            Let's Connect
          </h2>
          <p className="copy-muted max-w-2xl mx-auto mt-8 text-lg">
            Feel free to reach out for collaborations, projects, or opportunities. I respond quickly!
          </p>
        </div>

        {/* Contact Methods */}
        <AnimatedSection direction="up" delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Email Button */}
          <a
            href="mailto:vishu31103@gmail.com"
            className="contact-button-outline group sheen-card rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/5 border border-primary/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 group-hover:border-primary/50 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-7 h-7 text-primary"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-sm copy-muted">vishu31103@gmail.com</p>
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/vishwajit-sutar-03324b2b0/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button-outline group sheen-card rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/5 border border-primary/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 group-hover:border-primary/50 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7 text-primary"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
            <p className="text-sm copy-muted">Connect with me</p>
          </a>

          {/* GitHub Button */}
          <a
            href="https://github.com/VishwajitS7"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button-outline group sheen-card rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/5 border border-primary/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 group-hover:border-primary/50 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7 text-primary"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">GitHub</h3>
            <p className="text-sm copy-muted">View my work</p>
          </a>
          </div>
        </AnimatedSection>

        {/* Contact Form */}
        <AnimatedSection direction="up" delay={200}>
          <div className="sheen-card rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-2 text-center">Send a Message</h3>
          <p className="text-center copy-muted mb-8">Or fill out the form below</p>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`contact-input w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2 ${
                  errors.name ? "border-red-500/50 focus:border-red-500" : ""
                }`}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`contact-input w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2 ${
                  errors.email ? "border-red-500/50 focus:border-red-500" : ""
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className={`contact-input w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2 resize-none ${
                  errors.message ? "border-red-500/50 focus:border-red-500" : ""
                }`}
                placeholder="Tell me about your project or idea..."
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="contact-submit w-full px-8 py-4 rounded-lg text-base font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <span className="flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                    Send Message
                  </>
                )}
              </span>
            </button>
          </form>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}


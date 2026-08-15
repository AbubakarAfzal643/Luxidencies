import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Camera,
  CheckCircle2,
  LoaderCircle,
  Mail,
  MapPin,
  MessageCircleMore,
  MessageSquareText,
  Phone,
  Send,
} from "lucide-react";
import { EMAILJS_CONFIG } from "../config/emailjs";
import { buildWhatsAppUrl, siteConfig } from "../config/siteConfig";
import Button from "./Button";

const EMPTY_FORM = {
  user_name: "",
  user_email: "",
  user_subject: "",
  user_message: "",
};

const initialTouched = {
  user_name: false,
  user_email: false,
  user_subject: false,
  user_message: false,
};

function ContactSection({ className = "", compact = false }) {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [touched, setTouched] = useState(initialTouched);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const contactDetails = [
    {
      label: "Phone",
      value: siteConfig.phoneNumber,
      href: `tel:${siteConfig.phoneNumber.replace(/\s+/g, "")}`,
      icon: Phone,
    },
    {
      label: "Second Phone",
      value: siteConfig.alternatePhoneNumber,
      href: `tel:${siteConfig.alternatePhoneNumber.replace(/\s+/g, "")}`,
      icon: Phone,
    },
    {
      label: "Email",
      value: siteConfig.emailAddress,
      href: `mailto:${siteConfig.emailAddress}`,
      icon: Mail,
    },
    {
      label: "Location",
      value: siteConfig.address,
      href: "#",
      icon: MapPin,
    },
  ];

  const socialLinks = [
    {
      label: "Instagram",
      href: siteConfig.socialLinks.instagram || "#",
      hidden: false,
      icon: Camera,
    },
    {
      label: "Facebook",
      href: siteConfig.socialLinks.facebook || "#",
      hidden: false,
      icon: MessageSquareText,
    },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setTouched((current) => ({ ...current, [name]: true }));

    if (status !== "idle") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const validateForm = () => {
    const nextErrors = {
      user_name: !form.user_name.trim() ? "Please enter your name." : "",
      user_email:
        form.user_email && !/^\S+@\S+\.\S+$/.test(form.user_email)
          ? "Please enter a valid email address."
          : "",
      user_subject: !form.user_subject.trim() ? "Please enter a subject." : "",
      user_message: !form.user_message.trim()
        ? "Please enter your message."
        : "",
    };

    const hasError = Object.values(nextErrors).some(Boolean);
    return { nextErrors, hasError };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { nextErrors, hasError } = validateForm();
    setTouched({
      user_name: true,
      user_email: true,
      user_subject: true,
      user_message: true,
    });

    if (hasError) {
      const firstError = Object.values(nextErrors).find(Boolean);
      setStatus("error");
      setErrorMessage(firstError);
      return;
    }

    const isConfigured =
      EMAILJS_CONFIG.serviceId &&
      EMAILJS_CONFIG.templateId &&
      EMAILJS_CONFIG.publicKey &&
      !EMAILJS_CONFIG.serviceId.includes("YOUR_") &&
      !EMAILJS_CONFIG.templateId.includes("YOUR_") &&
      !EMAILJS_CONFIG.publicKey.includes("YOUR_");

    if (!isConfigured) {
      setStatus("error");
      setErrorMessage(
        "EmailJS is not configured yet. Add your service ID, template ID, and public key in the config file.",
      );
      return;
    }

    try {
      setStatus("sending");
      setErrorMessage("");

      await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        formRef.current,
        {
          publicKey: EMAILJS_CONFIG.publicKey,
        },
      );

      setStatus("success");
      setErrorMessage("");
      setForm(EMPTY_FORM);
      setTouched(initialTouched);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        "Something went wrong while sending your message. Please try again or use WhatsApp.",
      );
      console.error("EmailJS error:", error);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`contact-section relative flex h-full flex-col justify-center overflow-hidden rounded-4xl bg-[#111111] px-6 py-8 text-white md:px-8 ${className}`}
    >
      {compact ? (
        <div className="flex items-center justify-center">
          <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.32em] text-white [writing-mode:horizontal-tb]">
            Contact
          </span>
        </div>
      ) : (
        <div className="transition-opacity duration-300">
          <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-200">
                Contact Details
              </p>

              <div className="mt-4 space-y-3">
                {contactDetails.map(({ label, value, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href === "#" ? undefined : href}
                    className={`flex items-start gap-3 rounded-2xl border border-white/10 bg-[#181818] p-3 text-left transition hover:border-amber-500/60 ${href !== "#" ? "hover:bg-white/8" : "cursor-default"}`}
                    onClick={(event) => {
                      if (href === "#") event.preventDefault();
                    }}
                  >
                    <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/10 text-amber-300">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-400">
                        {label}
                      </span>
                      <span className="mt-1 block text-sm text-white">
                        {value}
                      </span>
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className={`contact-cta contact-social-link whatsapp-link ${isVisible ? "is-visible" : ""}`}
                  aria-label="Open WhatsApp chat"
                >
                  <span className="inline-flex items-center gap-2">
                    <MessageCircleMore className="h-4 w-4" />
                    WhatsApp
                  </span>
                </a>

                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href === "#" ? undefined : href}
                    target={href === "#" ? undefined : "_blank"}
                    rel={href === "#" ? undefined : "noreferrer"}
                    onClick={(event) => {
                      if (href === "#") event.preventDefault();
                    }}
                    className="contact-social-link"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Icon className="h-4 w-4" />
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/10 bg-[#171717] p-4 shadow-[0_20px_45px_rgba(0,0,0,0.18)]"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <label className="form-field text-white">
                  Name
                  <input
                    type="text"
                    name="user_name"
                    value={form.user_name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="input"
                  />
                  {touched.user_name && !form.user_name.trim() ? (
                    <span className="error-text">Please enter your name.</span>
                  ) : null}
                </label>

                <label className="form-field text-white">
                  Email
                  <input
                    type="email"
                    name="user_email"
                    value={form.user_email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="input"
                  />
                  {touched.user_email &&
                  form.user_email &&
                  !/^\S+@\S+\.\S+$/.test(form.user_email) ? (
                    <span className="error-text">
                      Please enter a valid email address.
                    </span>
                  ) : null}
                </label>
              </div>

              <label className="form-field mt-4 text-white">
                Subject
                <input
                  type="text"
                  name="user_subject"
                  value={form.user_subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="input"
                />
                {touched.user_subject && !form.user_subject.trim() ? (
                  <span className="error-text">Please enter a subject.</span>
                ) : null}
              </label>

              <label className="form-field mt-4 text-white">
                Message
                <textarea
                  name="user_message"
                  value={form.user_message}
                  onChange={handleChange}
                  placeholder="Tell us about your stay or question..."
                  className="input min-h-32 resize-y"
                />
                {touched.user_message && !form.user_message.trim() ? (
                  <span className="error-text">Please enter your message.</span>
                ) : null}
              </label>

              <div className="mt-5 flex justify-center">
                <Button
                  type="submit"
                  variant="accent"
                  className="contact-submit-button w-full sm:w-auto"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    <>
                      <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />{" "}
                      Sending
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </>
                  )}
                </Button>

                {status === "success" ? (
                  <p className="inline-flex items-center gap-2 text-sm font-medium text-emerald-300">
                    <CheckCircle2 className="h-4 w-4" /> Message sent
                    successfully.
                  </p>
                ) : null}
              </div>

              {status === "error" ? (
                <p className="mt-3 rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-200">
                  {errorMessage}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default ContactSection;

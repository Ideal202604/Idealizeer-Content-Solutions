import React, { useState } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { motion } from 'framer-motion';
import { ChevronRight, MapPin, Phone, Mail, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ContactFormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

type ContactFormErrors = Partial<Record<keyof ContactFormState, string>>;

const EMAILJS_SERVICE_ID =
  (import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined) ?? 'service_k85wgdk';
const EMAILJS_TEMPLATE_ID =
  (import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined) ?? 'template_mg5ejla';
const EMAILJS_PUBLIC_KEY =
  (import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined) ?? '27pR3_1auuGhegHBL';

if (EMAILJS_PUBLIC_KEY) {
  emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
}

function validateContactForm(form: ContactFormState): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!form.firstName.trim()) {
    errors.firstName = 'First Name is required.';
  }

  if (!form.email.trim()) {
    errors.email = 'Email Address is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!form.message.trim()) {
    errors.message = 'Message is required.';
  }

  if (form.phone.trim().length > 30) {
    errors.phone = 'Phone Number is too long.';
  }

  return errors;
}

export function Contact() {
  const [form, setForm] = useState<ContactFormState>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [fieldErrors, setFieldErrors] = useState<ContactFormErrors>({});

  const handleChange =
    (field: keyof ContactFormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = event.target.value;
      setForm((prev) => ({ ...prev, [field]: value }));
      setFieldErrors((prev) => {
        if (!prev[field]) {
          return prev;
        }
        return { ...prev, [field]: undefined };
      });
    };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) {
      return;
    }

    const validationErrors = validateContactForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setFieldErrors(validationErrors);
      setFeedback({ type: 'error', text: 'Please fix the highlighted fields.' });
      return;
    }

    if (!EMAILJS_PUBLIC_KEY) {
      setFeedback({ type: 'error', text: 'EmailJS public key is missing.' });
      window.alert('Unable to send your message.');
      return;
    }

    const firstName = form.firstName.trim();
    const lastName = form.lastName.trim();
    const email = form.email.trim();
    const phone = form.phone.trim();
    const message = form.message.trim();

    if (!firstName || !email || !message) {
      window.alert('Please fill required fields');
      return;
    }

    const templateParams = {
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      message
    };

    setIsSubmitting(true);
    setFeedback(null);
    setFieldErrors({});

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setFeedback({
        type: 'success',
        text: 'Message Sent Successfully.'
      });
      window.alert('Message Sent Successfully');

      setForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      if (error instanceof EmailJSResponseStatus) {
        setFeedback({
          type: 'error',
          text: `Unable to send your message (EmailJS ${error.status}: ${error.text}).`
        });
        console.error('FULL ERROR:', {
          status: error.status,
          text: error.text,
          serviceId: EMAILJS_SERVICE_ID,
          templateId: EMAILJS_TEMPLATE_ID,
          publicKeySet: Boolean(EMAILJS_PUBLIC_KEY)
        });
      } else {
        setFeedback({ type: 'error', text: 'Unable to send your message.' });
        console.error('FULL ERROR:', error);
      }
      window.alert('Unable to send your message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full pt-24 pb-12">
      {/* Hero Banner */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-950 z-0" />
        <div className="layout-container relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 text-sm font-medium text-electric-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-400">Contact</span>
          </div>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="text-5xl md:text-7xl font-heading font-extrabold text-white mb-6">
            
            Get In <span className="text-electric-500">Touch</span>
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.1
            }}
            className="text-xl text-slate-400 max-w-2xl mx-auto">
            
            Have a project in mind? Let's discuss how we can help your business
            grow.
          </motion.p>
        </div>
      </section>

      <section className="py-12">
        <div className="layout-container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{
                opacity: 0,
                x: -30
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                delay: 0.2
              }}
              className="bg-navy-800 p-8 md:p-10 rounded-3xl border border-white/5">
              
              <h3 className="text-2xl font-heading font-bold text-white mb-6">
                Send us a message
              </h3>
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={form.firstName}
                      onChange={handleChange('firstName')}
                      required
                      className={`w-full bg-navy-900 border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-all ${fieldErrors.firstName ? 'border-rose-500/80' : 'border-white/10'}`}
                      placeholder="John" />
                    {fieldErrors.firstName &&
                    <p className="text-sm text-rose-300">{fieldErrors.firstName}</p>
                    }
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={form.lastName}
                      onChange={handleChange('lastName')}
                      className="w-full bg-navy-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-all"
                      placeholder="Doe" />
                    
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    required
                    className={`w-full bg-navy-900 border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-all ${fieldErrors.email ? 'border-rose-500/80' : 'border-white/10'}`}
                    placeholder="john@example.com" />
                  {fieldErrors.email &&
                  <p className="text-sm text-rose-300">{fieldErrors.email}</p>
                  }
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={handleChange('phone')}
                    className={`w-full bg-navy-900 border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-all ${fieldErrors.phone ? 'border-rose-500/80' : 'border-white/10'}`}
                    placeholder="+1 (555) 000-0000" />
                  {fieldErrors.phone &&
                  <p className="text-sm text-rose-300">{fieldErrors.phone}</p>
                  }
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={handleChange('message')}
                    required
                    className={`w-full bg-navy-900 border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-all resize-none ${fieldErrors.message ? 'border-rose-500/80' : 'border-white/10'}`}
                    placeholder="Tell us about your project..." />
                  {fieldErrors.message &&
                  <p className="text-sm text-rose-300">{fieldErrors.message}</p>
                  }
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-electric-500 hover:bg-electric-600 disabled:opacity-70 disabled:cursor-not-allowed text-navy-900 font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2">
                  
                  {isSubmitting ? 'Sending...' : 'Send Message'} <Send className="w-4 h-4" />
                </button>

                {feedback &&
                <div
                  className={`rounded-xl px-4 py-3 text-sm ${feedback.type === 'success' ? 'bg-emerald-500/10 border border-emerald-500/40 text-emerald-300' : 'bg-rose-500/10 border border-rose-500/40 text-rose-300'}`}>

                    {feedback.text}
                  </div>
                }
              </form>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div
              initial={{
                opacity: 0,
                x: 30
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                delay: 0.3
              }}
              className="space-y-10">
              
              <div>
                <h3 className="text-2xl font-heading font-bold text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-electric-500/10 flex items-center justify-center text-electric-500 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">
                        Official HQ
                      </h4>
                      <p className="text-slate-400">
                        S. No. 138/1, City Centre, Office No. 211,
                        <br />
                        Hinjawadi, Phase 1, Pune,
                        <br />
                        Maharashtra 411057
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-electric-500/10 flex items-center justify-center text-electric-500 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">
                        Expansion Spot
                      </h4>
                      <p className="text-slate-400">
                        004, Dempo Trade Center,
                        <br />
                        MeWo Biznest Ground Floor,
                        <br />
                        Patto Center, Panjim, Goa - 403 001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-electric-500/10 flex items-center justify-center text-electric-500 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Phone</h4>
                      <p className="text-slate-400">
                        +91 9922999389
                        <br />
                        Mon-Sat 9am-7pm IST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-electric-500/10 flex items-center justify-center text-electric-500 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">WhatsApp</h4>
                      <p className="text-slate-400">
                        <a href="https://wa.me/919922999389" target="_blank" rel="noopener noreferrer" className="hover:text-electric-400 transition-colors">
                          Chat on WhatsApp: +91 9922999389
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-electric-500/10 flex items-center justify-center text-electric-500 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Email</h4>
                      <p className="text-slate-400">
                        info@idealizeer.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="w-full min-h-[220px] h-[260px] lg:min-h-[320px] lg:h-[320px] rounded-2xl shadow-md overflow-hidden border border-neutral-200 dark:border-neutral-700 flex bg-navy-900">
                <iframe
                  src="https://www.google.com/maps?q=Idealizeer+Content+Solutions+Private+Limited&output=embed"
                  className="w-full h-full min-h-[220px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  title="Idealizeer Content Solutions Map"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>);

}
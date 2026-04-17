import React, { useMemo, useState } from 'react';
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



export function Contact() {
  const [form, setForm] = useState<ContactFormState>({

    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const isFormInvalid = useMemo(() => {
    return (
      form.firstName.trim().length < 2 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ||
      form.message.trim().length < 2
    );
  }, [form]);

  const handleChange =
    (field: keyof ContactFormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isFormInvalid || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setFeedback(null);

    try {
      // WhatsApp integration (client-side only)
      const whatsappMessage =
        `Hello, I would like to connect.\n\nFirst Name: ${form.firstName}\nLast Name: ${form.lastName}\nEmail: ${form.email}\nPhone: ${form.phone}\nMessage: ${form.message}`;
      const encoded = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/919922999389?text=${encoded}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setFeedback({ type: 'success', text: 'Redirecting to WhatsApp...' });
      setForm({ firstName: '', lastName: '', email: '', phone: '', message: '' });
    } catch (error) {
      setFeedback({ type: 'error', text: 'Something went wrong.' });
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-navy-800 p-8 md:p-10 rounded-3xl border border-white/5 w-full h-full flex flex-col justify-between"
            >
              <h3 className="text-2xl font-heading font-bold text-white mb-6">Send us a message</h3>
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">First Name</label>
                    <input
                      type="text"
                      value={form.firstName}
                      onChange={handleChange('firstName')}
                      required
                      className="w-full bg-navy-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Last Name</label>
                    <input
                      type="text"
                      value={form.lastName}
                      onChange={handleChange('lastName')}
                      className="w-full bg-navy-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Email Address</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    required
                    className="w-full bg-navy-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={handleChange('phone')}
                    className="w-full bg-navy-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-all"
                    placeholder="+91 9922999389"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Message</label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={handleChange('message')}
                    required
                    className="w-full bg-navy-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting || isFormInvalid}
                  className="w-full bg-electric-500 hover:bg-electric-600 text-navy-900 font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} <Send className="w-4 h-4" />
                </button>
                {feedback && (
                  <div
                    className={`rounded-xl px-4 py-3 text-sm ${feedback.type === 'success' ? 'bg-emerald-500/10 border border-emerald-500/40 text-emerald-300' : 'bg-rose-500/10 border border-rose-500/40 text-rose-300'}`}
                  >
                    {feedback.text}
                  </div>
                )}
              </form>
            </motion.div>
            {/* Google Map Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full h-[400px] lg:h-full flex flex-col"
            >
              <div className="flex-1 rounded-2xl shadow-md overflow-hidden border border-neutral-200 dark:border-neutral-700">
                <iframe
                  src="https://www.google.com/maps?q=Idealizeer+Content+Solutions+Private+Limited&output=embed"
                  className="w-full h-[400px] lg:h-full min-h-[350px] rounded-2xl border-none"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  title="Idealizeer Content Solutions Map"
                ></iframe>
              </div>
              {/* Contact Info below map for mobile, side for desktop */}
              <div className="mt-8 lg:mt-10">
                <h3 className="text-2xl font-heading font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-electric-500/10 flex items-center justify-center text-electric-500 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Official HQ</h4>
                      <p className="text-slate-400">
                        S. No. 138/1, City Centre, Office No. 211,<br />
                        Hinjawadi, Phase 1, Pune,<br />
                        Maharashtra 411057
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-electric-500/10 flex items-center justify-center text-electric-500 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Expansion Spot</h4>
                      <p className="text-slate-400">
                        004, Dempo Trade Center,<br />
                        MeWo Biznest Ground Floor,<br />
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
                        +91 9922999389<br />
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
                      <p className="text-slate-400">info@idealizeer.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>);

}
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
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const isFormInvalid = useMemo(() => {
    return (
      form.firstName.trim().length < 2 ||
      form.lastName.trim().length < 2 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ||
      form.message.trim().length < 10
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });

      const data = await response.json();
      if (!response.ok || !data.ok) {
        const message = Array.isArray(data.errors) ? data.errors[0] : 'Unable to send your message.';
        throw new Error(message);
      }

      setFeedback({
        type: 'success',
        text: data.message || 'Thank you! Your message was sent successfully.'
      });

      if (data.whatsappUrl) {
        window.open(data.whatsappUrl, '_blank', 'noopener,noreferrer');
      }

      setForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Something went wrong.';
      setFeedback({ type: 'error', text: errorMessage });
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
                      className="w-full bg-navy-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-all"
                      placeholder="John" />
                    
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={form.lastName}
                      onChange={handleChange('lastName')}
                      required
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
                    className="w-full bg-navy-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-all"
                    placeholder="john@example.com" />
                  
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={handleChange('phone')}
                    className="w-full bg-navy-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-all"
                    placeholder="+1 (555) 000-0000" />
                  
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
                    className="w-full bg-navy-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-all resize-none"
                    placeholder="Tell us about your project..." />
                  
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isFormInvalid}
                  className="w-full bg-electric-500 hover:bg-electric-600 text-navy-900 font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2">
                  
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
                        Our Office
                      </h4>
                      <p className="text-slate-400">
                        Baner, Pune, Maharashtra
                        <br />
                        India - 411045
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
                        +91 9922021699
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
                        <a href="https://wa.me/919922021699" target="_blank" rel="noreferrer" className="hover:text-electric-400 transition-colors">
                          Chat on WhatsApp: +91 9922021699
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
                        hello@idealizeer.com
                        <br />
                        support@idealizeer.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-64 bg-navy-800 rounded-3xl border border-white/5 overflow-hidden relative group">
                {/* Abstract map representation */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
                <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-900" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-12 h-12 bg-electric-500 rounded-full flex items-center justify-center text-navy-900 shadow-[0_0_20px_rgba(250,193,17,0.5)] animate-bounce">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-1 bg-black/30 rounded-full blur-sm" />
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-navy-900/60 backdrop-blur-sm">
                  <a
                    href="https://maps.google.com/?q=Pune+Maharashtra+India"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-white text-navy-900 font-medium rounded-full text-sm">
                    View on Google Maps
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>);

}
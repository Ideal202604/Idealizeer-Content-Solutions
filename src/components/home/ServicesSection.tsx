import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Layout,
  Code2,
  Palette,
  Megaphone,
  Smartphone,
  Search,
  ArrowRight } from
'lucide-react';
const SERVICES = [
{
  icon: Layout,
  title: 'UI/UX Design',
  description:
  'Intuitive, user-centric interfaces that engage and convert visitors into customers.',
  color: 'text-blue-500',
  bg: 'bg-blue-500/10'
},
{
  icon: Code2,
  title: 'Web Development',
  description:
  'High-performance, scalable web applications built with modern technologies.',
  color: 'text-emerald-500',
  bg: 'bg-emerald-500/10'
},
{
  icon: Palette,
  title: 'Branding',
  description:
  'Distinctive brand identities that resonate with your target audience.',
  color: 'text-purple-500',
  bg: 'bg-purple-500/10'
},
{
  icon: Megaphone,
  title: 'Digital Marketing',
  description:
  'Data-driven campaigns to increase visibility and drive qualified traffic.',
  color: 'text-pink-500',
  bg: 'bg-pink-500/10'
},
{
  icon: Smartphone,
  title: 'Mobile Apps',
  description:
  'Native and cross-platform mobile experiences for iOS and Android.',
  color: 'text-orange-500',
  bg: 'bg-orange-500/10'
},
{
  icon: Search,
  title: 'SEO Optimization',
  description:
  'Strategic search engine optimization to rank higher and grow organically.',
  color: 'text-cyan-500',
  bg: 'bg-cyan-500/10'
}];

export function ServicesSection() {
  return (
    <section className="py-24 relative">
      <div className="layout-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="text-3xl md:text-5xl font-heading font-bold mb-6">
            
            Our <span className="text-electric-500">Services</span>
          </motion.h2>
          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.1
            }}
            className="text-slate-400 text-lg">
            
            Comprehensive digital solutions tailored to elevate your brand and
            accelerate your business growth.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{
                  opacity: 0,
                  y: 30
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5
                }}
                className="group p-8 rounded-2xl bg-navy-800 border border-white/5 hover:border-electric-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(250,193,17,0.2)]">
                
                <div
                  className={`w-14 h-14 rounded-xl ${service.bg} ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-400 mb-6 line-clamp-2">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-sm font-medium text-electric-400 group-hover:text-electric-300 transition-colors">
                  
                  Learn More{' '}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}
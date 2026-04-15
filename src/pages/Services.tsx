import React from 'react';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  Layout,
  Code2,
  Palette,
  CheckCircle2,
  ArrowRight } from
'lucide-react';
import { Link } from 'react-router-dom';
const DETAILED_SERVICES = [
{
  id: 'ui-ux',
  icon: Layout,
  title: 'UI/UX Design',
  desc: 'We create intuitive, engaging, and aesthetically pleasing interfaces that provide seamless user experiences. Our design process is rooted in user research and psychological principles to ensure maximum conversion and satisfaction.',
  tools: ['Figma', 'Framer', 'Adobe CC', 'Protopie'],
  process: [
  'User Research',
  'Wireframing',
  'Prototyping',
  'Usability Testing'],

  color: 'text-blue-500',
  bg: 'bg-blue-500/10'
},
{
  id: 'web-dev',
  icon: Code2,
  title: 'Web Development',
  desc: 'From corporate websites to complex web applications, we build robust, scalable, and high-performance solutions. We use modern tech stacks to ensure your digital product is fast, secure, and future-proof.',
  tools: ['React', 'Next.js', 'Node.js', 'TypeScript'],
  process: ['Architecture', 'Frontend Dev', 'Backend Dev', 'QA Testing'],
  color: 'text-emerald-500',
  bg: 'bg-emerald-500/10'
},
{
  id: 'branding',
  icon: Palette,
  title: 'Branding & Identity',
  desc: 'Your brand is more than just a logo. We develop comprehensive brand identities that tell your story, resonate with your audience, and differentiate you from competitors in a crowded market.',
  tools: ['Illustrator', 'Photoshop', 'InDesign'],
  process: ['Brand Strategy', 'Visual Identity', 'Guidelines', 'Collateral'],
  color: 'text-purple-500',
  bg: 'bg-purple-500/10'
}];

export function Services() {
  return (
    <div className="w-full pt-24 pb-12">
      {/* Hero Banner */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-950 z-0" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-electric-600/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/3" />

        <div className="layout-container relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 text-sm font-medium text-electric-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-400">Services</span>
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
            
            Our <span className="text-electric-500">Services</span>
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
            
            Comprehensive digital solutions designed to elevate your brand,
            engage your audience, and drive measurable business growth.
          </motion.p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24">
        <div className="layout-container space-y-16 md:space-y-24 xl:space-y-28">
          {DETAILED_SERVICES.map((service, idx) => {
            const Icon = service.icon;
            const isEven = idx % 2 === 0;
            return (
              <div
                key={service.id}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
                
                {/* Visual Side */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: isEven ? -50 : 50
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0
                  }}
                  viewport={{
                    once: true
                  }}
                  className="w-full lg:w-1/2">
                  
                  <div className="relative aspect-[4/3] rounded-3xl bg-navy-800 border border-white/5 overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-900" />
                    {/* Abstract representation of service */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className={`w-32 h-32 rounded-2xl ${service.bg} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        
                        <Icon className={`w-16 h-16 ${service.color}`} />
                      </div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute top-8 left-8 w-24 h-24 border border-white/10 rounded-full" />
                    <div className="absolute bottom-8 right-8 w-32 h-32 border border-white/10 rounded-full" />
                  </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: isEven ? 50 : -50
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0
                  }}
                  viewport={{
                    once: true
                  }}
                  className="w-full lg:w-1/2">
                  
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-800 border border-white/10 mb-6">
                    <span
                      className={`w-2 h-2 rounded-full ${service.color.replace('text-', 'bg-')}`} />
                    
                    <span className="text-xs font-medium text-slate-300 uppercase tracking-wider">
                      Service {idx + 1}
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                    {service.title}
                  </h2>
                  <p className="text-lg text-slate-400 leading-relaxed mb-8">
                    {service.desc}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-8 mb-10">
                    <div>
                      <h4 className="text-white font-heading font-bold mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-electric-500" />{' '}
                        Our Process
                      </h4>
                      <ul className="space-y-2">
                        {service.process.map((step) =>
                        <li
                          key={step}
                          className="text-slate-400 text-sm flex items-center gap-2">
                          
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />{' '}
                            {step}
                          </li>
                        )}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white font-heading font-bold mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-electric-500" />{' '}
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.tools.map((tool) =>
                        <span
                          key={tool}
                          className="px-3 py-1 rounded-md bg-navy-800 border border-white/5 text-xs text-slate-300">
                          
                            {tool}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-electric-500 hover:bg-electric-600 text-navy-900 font-bold rounded-full transition-all duration-300">
                    
                    Discuss Your Project <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>);

          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-electric-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
        <div className="layout-container relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy-900 mb-6">
            Need a custom solution?
          </h2>
          <p className="text-navy-900/70 text-lg mb-10 max-w-2xl mx-auto">
            Don't see exactly what you're looking for? We offer tailored
            services to meet your specific business requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-navy-900 text-electric-500 hover:bg-navy-800 font-bold rounded-full transition-all duration-300 shadow-xl">
            
            Get a Custom Quote
          </Link>
        </div>
      </section>
    </div>);

}
import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Layout, Code, Rocket } from 'lucide-react';
const PROCESS_STEPS = [
{
  icon: Search,
  title: 'Research',
  description:
  'We dive deep into your industry, competitors, and target audience to uncover valuable insights.'
},
{
  icon: PenTool,
  title: 'Planning',
  description:
  'Creating a strategic roadmap, wireframes, and defining the technical architecture.'
},
{
  icon: Layout,
  title: 'Design',
  description:
  'Crafting beautiful, intuitive interfaces that align with your brand identity.'
},
{
  icon: Code,
  title: 'Development',
  description:
  'Writing clean, scalable code to bring the designs to life with modern technologies.'
},
{
  icon: Rocket,
  title: 'Launch',
  description:
  'Rigorous testing, deployment, and ongoing support to ensure long-term success.'
}];

export function ProcessSection() {
  return (
    <section className="py-24 bg-navy-950 relative">
      <div className="layout-container">
        <div className="text-center max-w-3xl mx-auto mb-20">
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
            
            Our Proven <span className="text-electric-500">Process</span>
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
            
            A systematic approach to delivering exceptional digital products,
            from initial concept to final launch.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-navy-800 -translate-y-1/2 z-0">
            <motion.div
              initial={{
                width: 0
              }}
              whileInView={{
                width: '100%'
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 1.5,
                ease: 'easeInOut'
              }}
              className="h-full bg-gradient-to-r from-electric-600 via-electric-400 to-electric-600" />
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
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
                    delay: index * 0.2
                  }}
                  className="relative flex flex-col items-center text-center group">
                  
                  {/* Connecting Line (Mobile) */}
                  {index !== PROCESS_STEPS.length - 1 &&
                  <div className="md:hidden absolute top-24 bottom-[-2rem] left-1/2 w-0.5 bg-navy-800 -translate-x-1/2 z-0" />
                  }

                  <div className="w-16 h-16 rounded-2xl bg-navy-900 border-2 border-navy-700 group-hover:border-electric-500 flex items-center justify-center mb-6 relative z-10 transition-colors duration-300 shadow-xl group-hover:shadow-[0_0_20px_rgba(250,193,17,0.3)]">
                    <Icon className="w-8 h-8 text-slate-400 group-hover:text-electric-400 transition-colors" />
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-electric-500 text-navy-900 text-sm font-bold flex items-center justify-center border-4 border-navy-950">
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>);

            })}
          </div>
        </div>
      </div>
    </section>);

}
import React from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  Users,
  PiggyBank,
  Sparkles,
  LineChart,
  HeadphonesIcon } from
'lucide-react';
const REASONS = [
{
  icon: Zap,
  title: 'Fast Delivery',
  description:
  'Agile methodologies ensure we deliver high-quality projects on time, every time.'
},
{
  icon: Users,
  title: 'Expert Team',
  description:
  'Senior-level designers and developers dedicated to your success.'
},
{
  icon: PiggyBank,
  title: 'Affordable Pricing',
  description:
  'Transparent, competitive pricing without compromising on quality.'
},
{
  icon: Sparkles,
  title: 'Modern Design',
  description:
  'Cutting-edge aesthetics that make your brand stand out from the crowd.'
},
{
  icon: LineChart,
  title: 'SEO Ready',
  description:
  'Built from the ground up with search engine visibility in mind.'
},
{
  icon: HeadphonesIcon,
  title: '24/7 Support',
  description:
  'Ongoing maintenance and support to keep your digital assets running smoothly.'
}];

export function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-electric-600/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />

      <div className="layout-container relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1">
            <motion.div
              initial={{
                opacity: 0,
                x: -30
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}>
              
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                Why Choose <br />
                <span className="text-electric-500">Nexus</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8">
                We don't just build websites; we build digital businesses. Our
                holistic approach ensures every aspect of your digital presence
                is optimized for success.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-heading font-bold text-white">
                    10+
                  </div>
                  <div className="text-sm text-slate-400">
                    Years of
                    <br />
                    Experience
                  </div>
                </div>
                <div className="w-full h-px bg-white/10" />
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-heading font-bold text-white">
                    250+
                  </div>
                  <div className="text-sm text-slate-400">
                    Projects
                    <br />
                    Completed
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-6">
              {REASONS.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={reason.title}
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
                      delay: index * 0.1
                    }}
                    className="flex gap-4 p-6 rounded-2xl bg-navy-900/50 border border-white/5 hover:bg-navy-800 transition-colors">
                    
                    <div className="shrink-0 w-12 h-12 rounded-full bg-electric-500/10 flex items-center justify-center text-electric-500">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-heading font-bold text-white mb-2">
                        {reason.title}
                      </h4>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </motion.div>);

              })}
            </div>
          </div>
        </div>
      </div>
    </section>);

}
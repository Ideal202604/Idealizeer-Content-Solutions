import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Layout,
  Clapperboard,
  Palette,
  Megaphone,
  Smartphone,
  Search,
  FileText,
  TrendingUp,
  Globe,
  ArrowRight } from
'lucide-react';
const SERVICES = [
{
  icon: Palette,
  title: 'Brand Strategy & Communication',
  description:
  'Crafting compelling brand narratives, messaging frameworks, and communication strategies tailored to your audience.',
  color: 'text-blue-600',
  bg: 'bg-blue-500/10'
},
{
  icon: TrendingUp,
  title: 'Digital Advertising & Performance',
  description:
  'Google Ads, Meta, LinkedIn and YouTube campaigns with ROI tracking, A/B testing, and conversion optimization.',
  color: 'text-violet-600',
  bg: 'bg-violet-500/10'
},
{
  icon: Globe,
  title: 'Website Design & Development',
  description:
  'Fast, secure, and scalable websites including corporate, e-commerce, and CMS solutions with UI/UX and ongoing support.',
  color: 'text-lime-700',
  bg: 'bg-lime-500/10'
},
{
  icon: Layout,
  title: 'Influencer & Celebrity Marketing',
  description:
  'Micro and macro influencer campaigns, ambassador programs, celebrity endorsements, and event-based coverage.',
  color: 'text-amber-700',
  bg: 'bg-amber-500/10'
},
{
  icon: Clapperboard,
  title: 'Video & Film Production',
  description:
  'TVCs, ad films, corporate films, explainer videos, animated ads, reels, and motion graphics for all platforms.',
  color: 'text-emerald-700',
  bg: 'bg-emerald-500/10'
},
{
  icon: Megaphone,
  title: 'PR & Brand Visibility',
  description:
  'Press releases, media outreach, reputation management, interview placements, and launch coverage.',
  color: 'text-rose-700',
  bg: 'bg-rose-500/10'
},
{
  icon: FileText,
  title: 'Academic Development',
  description:
  'Course design, LMS setup, certification programs, curriculum development, and online learning platform launch via iCS Global.',
  color: 'text-orange-700',
  bg: 'bg-orange-500/10'
},
{
  icon: Search,
  title: 'Research Solutions',
  description:
  'Research writing support, journal selection, SCOPUS compliance, IP and copyright consultation, and conference management.',
  color: 'text-green-700',
  bg: 'bg-green-500/10'
},
{
  icon: Smartphone,
  title: 'Mobile App Development',
  description:
  'Android and iOS apps, cross-platform development, e-commerce apps, and App Store Optimization (ASO).',
  color: 'text-indigo-600',
  bg: 'bg-indigo-500/10'
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
                className="group p-8 rounded-2xl bg-navy-800 border border-white/5 hover:border-electric-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(250,193,17,0.2)] flex h-full flex-col">
                
                <div
                  className={`w-14 h-14 rounded-xl ${service.bg} ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-electric-400 group-hover:text-electric-300 transition-colors">
                  
                  Learn More{' '}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}
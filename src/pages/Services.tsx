import { motion } from 'framer-motion';
import {
  ChevronRight,
  Layout,
  Palette,
  TrendingUp,
  Globe,
  Clapperboard,
  Megaphone,
  FileText,
  Search,
  Smartphone,
  CheckCircle2,
  ArrowRight } from
'lucide-react';
import { Link } from 'react-router-dom';
const DETAILED_SERVICES = [
{
  id: 'brand-strategy-communication',
  icon: Palette,
  emoji: '🎯',
  title: 'Brand Strategy & Communication',
  desc: 'Crafting compelling brand narratives, messaging frameworks, and communication strategies tailored to your audience.',
  tools: ['Brand Audit', 'Messaging', 'Positioning', 'Communication Plan'],
  process: [
  'Discovery Workshop',
  'Brand Research',
  'Messaging Architecture',
  'Communication Rollout'],

  color: 'text-blue-500',
  bg: 'bg-blue-500/10'
},
{
  id: 'digital-advertising-performance',
  icon: TrendingUp,
  emoji: '📈',
  title: 'Digital Advertising & Performance',
  desc: 'Google Ads, Meta, LinkedIn and YouTube campaigns with ROI tracking, A/B testing, and conversion optimization.',
  tools: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'YouTube Ads'],
  process: ['Campaign Planning', 'Creative Testing', 'Audience Scaling', 'Performance Optimization'],
  color: 'text-emerald-500',
  bg: 'bg-emerald-500/10'
},
{
  id: 'website-design-development',
  icon: Globe,
  emoji: '🌐',
  title: 'Website Design & Development',
  desc: 'Fast, secure, and scalable websites including corporate, e-commerce, and CMS solutions with UI/UX and ongoing support.',
  tools: ['React', 'Next.js', 'WordPress/CMS', 'E-commerce Stack'],
  process: ['UX Planning', 'UI Design', 'Development', 'Launch & Support'],
  color: 'text-purple-500',
  bg: 'bg-purple-500/10'
},
{
  id: 'influencer-celebrity-marketing',
  icon: Layout,
  emoji: '⭐',
  title: 'Influencer & Celebrity Marketing',
  desc: 'Micro and macro influencer campaigns, ambassador programs, celebrity endorsements, and event-based coverage.',
  tools: ['Creator Mapping', 'Influencer Platforms', 'Content Planning', 'Performance Reports'],
  process: ['Creator Shortlisting', 'Campaign Strategy', 'Activation', 'Impact Analysis'],
  color: 'text-amber-500',
  bg: 'bg-amber-500/10'
},
{
  id: 'video-film-production',
  icon: Clapperboard,
  emoji: '🎬',
  title: 'Video & Film Production',
  desc: 'TVCs, ad films, corporate films, explainer videos, animated ads, reels, and motion graphics for all platforms.',
  tools: ['Pre-production', 'Direction', 'Editing', 'Motion Graphics'],
  process: ['Concept Development', 'Scripting', 'Production', 'Post Production'],
  color: 'text-rose-500',
  bg: 'bg-rose-500/10'
},
{
  id: 'pr-brand-visibility',
  icon: Megaphone,
  emoji: '📣',
  title: 'PR & Brand Visibility',
  desc: 'Press releases, media outreach, reputation management, interview placements, and launch coverage.',
  tools: ['Press Kits', 'Media Outreach', 'PR Strategy', 'Brand Monitoring'],
  process: ['Narrative Building', 'Media Planning', 'Coverage Execution', 'Sentiment Tracking'],
  color: 'text-fuchsia-500',
  bg: 'bg-fuchsia-500/10'
},
{
  id: 'academic-development',
  icon: FileText,
  emoji: '🎓',
  title: 'Academic Development',
  desc: 'Course design, LMS setup, certification programs, curriculum development, and online learning platform launch via iCS Global.',
  tools: ['LMS Platforms', 'Curriculum Design', 'Certification Setup', 'Learning Analytics'],
  process: ['Requirement Mapping', 'Curriculum Structuring', 'Platform Setup', 'Program Rollout'],
  color: 'text-orange-500',
  bg: 'bg-orange-500/10'
},
{
  id: 'research-solutions',
  icon: Search,
  emoji: '🔬',
  title: 'Research Solutions',
  desc: 'Research writing support, journal selection, SCOPUS compliance, IP and copyright consultation, and conference management.',
  tools: ['Research Support', 'Journal Mapping', 'Compliance Review', 'IP Guidance'],
  process: ['Topic Validation', 'Publication Planning', 'Compliance Check', 'Submission Support'],
  color: 'text-lime-500',
  bg: 'bg-lime-500/10'
},
{
  id: 'mobile-app-development',
  icon: Smartphone,
  emoji: '📱',
  title: 'Mobile App Development',
  desc: 'Android and iOS apps, cross-platform development, e-commerce apps, and App Store Optimization (ASO).',
  tools: ['Android', 'iOS', 'React Native/Flutter', 'ASO'],
  process: ['Product Planning', 'UI/UX Design', 'App Development', 'Store Launch'],
  color: 'text-indigo-500',
  bg: 'bg-indigo-500/10'
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
                id={service.id}
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
                      {service.emoji} Service {idx + 1}
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
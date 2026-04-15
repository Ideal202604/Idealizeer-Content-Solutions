import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
export function CaseStudy() {
  return (
    <div className="w-full pt-24 pb-12">
      {/* Hero Banner */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-950 z-0" />
        <div className="layout-container relative z-10">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-electric-400 transition-colors mb-8">
            
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3 py-1 rounded-full bg-electric-500/10 text-electric-500 text-sm font-medium">
              UI/UX Design
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-sm font-medium">
              Web Development
            </span>
            <span className="text-slate-500 text-sm">2023</span>
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
            className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-6 max-w-4xl">
            
            Fintech Dashboard: Revolutionizing Personal Finance Management
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
            className="text-xl text-slate-400 max-w-2xl">
            
            A comprehensive redesign and rebuild of a leading personal finance
            application, resulting in a 200% increase in user engagement.
          </motion.p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-10">
        <div className="layout-container">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.2
            }}
            className="w-full aspect-[21/9] rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-900 overflow-hidden relative shadow-2xl">
            
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent mix-blend-overlay" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white/50 font-heading font-bold text-4xl tracking-widest uppercase">
                Hero Image Placeholder
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="layout-container">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              <div>
                <h2 className="text-3xl font-heading font-bold text-white mb-6">
                  The Challenge
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-4">
                  The client, a prominent fintech startup, approached us with a
                  significant problem: their existing dashboard was cluttered,
                  confusing, and suffering from high user churn rates. Users
                  found it difficult to track their expenses, set budgets, and
                  understand their overall financial health.
                </p>
                <p className="text-slate-400 text-lg leading-relaxed">
                  They needed a complete overhaul of the user interface and
                  experience, along with a more robust frontend architecture to
                  handle real-time data updates without performance bottlenecks.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold text-white mb-6">
                  Our Solution
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                  We initiated the project with an extensive research phase,
                  conducting user interviews and analyzing behavior flows. This
                  led to a simplified, modular design system that prioritized
                  the most critical financial metrics.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                  'Simplified navigation structure',
                  'Custom data visualization components',
                  'Dark mode implementation',
                  'Real-time transaction updates'].
                  map((item, idx) =>
                  <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-electric-500 shrink-0" />
                      <span className="text-slate-300">{item}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Mid-content Image Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="aspect-square rounded-2xl bg-navy-800 border border-white/5 flex items-center justify-center">
                  <span className="text-slate-500 font-medium">
                    Mobile View
                  </span>
                </div>
                <div className="aspect-square rounded-2xl bg-navy-800 border border-white/5 flex items-center justify-center">
                  <span className="text-slate-500 font-medium">
                    Analytics View
                  </span>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold text-white mb-6">
                  The Results
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  The new dashboard was launched to overwhelming positive
                  feedback from the user base. The streamlined interface and
                  improved performance metrics led to significant business
                  growth for the client.
                </p>
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="p-6 rounded-2xl bg-navy-800 border border-white/5 text-center">
                    <div className="text-4xl font-heading font-bold text-electric-500 mb-2">
                      +200%
                    </div>
                    <div className="text-sm text-slate-400">
                      User Engagement
                    </div>
                  </div>
                  <div className="p-6 rounded-2xl bg-navy-800 border border-white/5 text-center">
                    <div className="text-4xl font-heading font-bold text-emerald-500 mb-2">
                      -45%
                    </div>
                    <div className="text-sm text-slate-400">Bounce Rate</div>
                  </div>
                  <div className="p-6 rounded-2xl bg-navy-800 border border-white/5 text-center">
                    <div className="text-4xl font-heading font-bold text-purple-500 mb-2">
                      4.9/5
                    </div>
                    <div className="text-sm text-slate-400">
                      App Store Rating
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 p-8 rounded-3xl bg-navy-800 border border-white/5 space-y-8">
                <div>
                  <h4 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">
                    Client
                  </h4>
                  <p className="text-white font-medium text-lg">
                    FinTrack Inc.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">
                    Services
                  </h4>
                  <ul className="space-y-2 text-white">
                    <li>UI/UX Design</li>
                    <li>Frontend Development</li>
                    <li>Design System</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {[
                    'React',
                    'TypeScript',
                    'Tailwind CSS',
                    'Framer Motion',
                    'Recharts'].
                    map((tech) =>
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-md bg-navy-900 border border-white/5 text-xs text-slate-300">
                      
                        {tech}
                      </span>
                    )}
                  </div>
                </div>
                <div className="pt-6 border-t border-white/10">
                  <a
                    href="https://www.behance.net/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-4 bg-electric-500 hover:bg-electric-600 text-navy-900 font-bold rounded-xl transition-colors">
                    
                    Visit Live Site <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-20 border-t border-white/5">
        <div className="layout-container text-center">
          <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-4">
            Next Project
          </p>
          <Link to="/portfolio" className="group inline-block">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white group-hover:text-electric-400 transition-colors mb-6">
              E-Commerce Platform Redesign
            </h2>
            <div className="inline-flex items-center gap-2 text-electric-500 font-medium group-hover:translate-x-2 transition-transform">
              View Case Study <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </section>
    </div>);

}
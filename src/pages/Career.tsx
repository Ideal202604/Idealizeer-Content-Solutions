import { motion } from 'framer-motion';
import {
  ChevronRight,
  MapPin,
  Clock,
  Briefcase,
  Heart,
  Coffee,
  Laptop,
  Zap } from
'lucide-react';
import { Link } from 'react-router-dom';
const JOBS = [
{
  id: 1,
  title: 'Senior UI/UX Designer',
  type: 'Full-time',
  location: 'Remote / Tech City',
  exp: '2+ Years',
  desc: 'We are looking for an experienced designer to lead our product design initiatives. Must have a strong portfolio demonstrating complex problem-solving.'
},
{
  id: 2,
  title: 'Frontend Developer (React)',
  type: 'Full-time',
  location: 'Remote',
  exp: '3+ Years',
  desc: 'Join our engineering team to build high-performance web applications using React, TypeScript, and modern CSS frameworks.'
},
{
  id: 3,
  title: 'Digital Marketing Specialist',
  type: 'Full-time',
  location: 'Tech City',
  exp: '1-3 Years',
  desc: 'Help our clients grow their online presence through data-driven SEO, SEM, and content strategies.'
}];

const PERKS = [
{
  icon: Heart,
  title: 'Health & Wellness',
  desc: 'Comprehensive health insurance and wellness stipends.'
},
{
  icon: Laptop,
  title: 'Remote First',
  desc: 'Work from anywhere or join us in our modern office.'
},
{
  icon: Coffee,
  title: 'Unlimited PTO',
  desc: 'Take the time you need to recharge and relax.'
},
{
  icon: Zap,
  title: 'Learning Budget',
  desc: 'Annual stipend for courses, conferences, and books.'
}];

export function Career() {
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
            <span className="text-slate-400">Careers</span>
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
            
            Join Our <span className="text-electric-500">Team</span>
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
            
            Build the future of digital experiences with a team that values
            creativity, innovation, and continuous learning.
          </motion.p>
        </div>
      </section>

      {/* Culture Images */}
      <section className="py-12">
        <div className="layout-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2 rounded-3xl bg-navy-800 aspect-square md:aspect-auto border border-white/5 flex items-center justify-center overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:scale-105 transition-transform duration-500" />
              <span className="text-slate-500 font-medium relative z-10">
                Office Culture
              </span>
            </div>
            <div className="rounded-3xl bg-navy-800 aspect-square border border-white/5 flex items-center justify-center overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 group-hover:scale-105 transition-transform duration-500" />
              <span className="text-slate-500 font-medium relative z-10">
                Team Retreat
              </span>
            </div>
            <div className="rounded-3xl bg-navy-800 aspect-square border border-white/5 flex items-center justify-center overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-rose-500/20 group-hover:scale-105 transition-transform duration-500" />
              <span className="text-slate-500 font-medium relative z-10">
                Brainstorming
              </span>
            </div>
            <div className="col-span-2 rounded-3xl bg-navy-800 aspect-[2/1] border border-white/5 flex items-center justify-center overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 group-hover:scale-105 transition-transform duration-500" />
              <span className="text-slate-500 font-medium relative z-10">
                Workspace
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-20 bg-navy-950">
        <div className="layout-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Why Work With Us?
            </h2>
            <p className="text-slate-400">
              We take care of our team so they can take care of our clients.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PERKS.map((perk, idx) => {
              const Icon = perk.icon;
              return (
                <motion.div
                  key={idx}
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
                    delay: idx * 0.1
                  }}
                  className="p-6 rounded-2xl bg-navy-900 border border-white/5 text-center">
                  
                  <div className="w-12 h-12 rounded-full bg-electric-500/10 text-electric-500 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-heading font-bold text-white mb-2">
                    {perk.title}
                  </h4>
                  <p className="text-sm text-slate-400">{perk.desc}</p>
                </motion.div>);

            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24">
        <div className="layout-container">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Open Positions
            </h2>
            <p className="text-slate-400">
              Don't see a perfect fit? Send us an open application.
            </p>
          </div>

          <div className="space-y-6">
            {JOBS.map((job, idx) =>
            <motion.div
              key={job.id}
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
                delay: idx * 0.1
              }}
              className="p-8 rounded-3xl bg-navy-800 border border-white/5 hover:border-electric-500/30 transition-colors group flex flex-col md:flex-row md:items-center justify-between gap-6">
              
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-electric-400 transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" /> {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {job.exp}
                    </span>
                  </div>
                  <p className="text-slate-400 max-w-2xl">{job.desc}</p>
                </div>
                <div>
                  <button className="px-8 py-3 bg-electric-500 hover:bg-electric-600 text-navy-900 font-bold rounded-full transition-colors whitespace-nowrap">
                    Apply Now
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>);

}
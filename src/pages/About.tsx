import React from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  Lightbulb,
  Users,
  Trophy,
  ChevronRight,
  Twitter,
  Linkedin } from
'lucide-react';
import { Link } from 'react-router-dom';
const TEAM = [
{
  name: 'Alex Rivera',
  role: 'Founder & CEO',
  image: 'bg-blue-500'
},
{
  name: 'Samantha Lee',
  role: 'Head of Design',
  image: 'bg-pink-500'
},
{
  name: 'Marcus Johnson',
  role: 'Lead Developer',
  image: 'bg-emerald-500'
},
{
  name: 'Elena Rodriguez',
  role: 'Marketing Director',
  image: 'bg-purple-500'
}];

const TIMELINE = [
{
  year: '2018',
  title: 'The Beginning',
  desc: 'Idealizeer Content Solutions was founded with a mission to blend strategy, creativity, and technology.'
},
{
  year: '2020',
  title: 'Rapid Growth',
  desc: 'Expanded our team to 15 members and moved to our new headquarters in Tech City.'
},
{
  year: '2022',
  title: 'Award Winning',
  desc: 'Recognized as one of the top emerging digital agencies by industry leaders.'
},
{
  year: '2024',
  title: 'Global Reach',
  desc: 'Opened our second office and started serving enterprise clients worldwide.'
}];

export function About() {
  return (
    <div className="w-full pt-24 pb-12">
      {/* Hero Banner */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-950 z-0" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />

        <div className="layout-container relative z-10">
          <div className="flex items-center gap-2 text-sm font-medium text-electric-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-400">About Us</span>
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
            
            About <span className="text-electric-500">Idealizeer</span>
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
            
            We are a team of passionate creators, strategic thinkers, and
            technical experts dedicated to building extraordinary digital
            experiences.
          </motion.p>
        </div>
      </section>

      {/* Intro & Stats */}
      <section className="py-20">
        <div className="layout-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
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
              
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                We blend creativity with technology to drive results.
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Since our inception, we've been driven by a single purpose: to
                help businesses thrive in the digital age. We don't just deliver
                projects; we build long-term partnerships based on trust,
                transparency, and tangible results.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                Our approach is holistic. We look at the big picture,
                understanding your business goals, target audience, and market
                landscape before writing a single line of code or designing a
                single pixel.
              </p>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 30
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              className="grid grid-cols-2 gap-6">
              
              {[
              {
                icon: Trophy,
                value: '150+',
                label: 'Projects Completed'
              },
              {
                icon: Users,
                value: '100+',
                label: 'Happy Clients'
              },
              {
                icon: Target,
                value: '25+',
                label: 'Team Members'
              },
              {
                icon: Lightbulb,
                value: '5+',
                label: 'Years Experience'
              }].
              map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="p-8 rounded-2xl bg-navy-800 border border-white/5 text-center">
                    
                    <Icon className="w-8 h-8 text-electric-500 mx-auto mb-4" />
                    <div className="text-4xl font-heading font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>);

              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-navy-950">
        <div className="layout-container">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
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
              className="p-10 rounded-3xl bg-gradient-to-br from-navy-800 to-navy-900 border border-white/5 relative overflow-hidden">
              
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Target className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-electric-500/20 text-electric-500 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  To empower businesses with innovative digital solutions that
                  drive growth, enhance user engagement, and create lasting
                  competitive advantages in an ever-evolving digital landscape.
                </p>
              </div>
            </motion.div>

            <motion.div
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
                delay: 0.2
              }}
              className="p-10 rounded-3xl bg-gradient-to-br from-navy-800 to-navy-900 border border-white/5 relative overflow-hidden">
              
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Lightbulb className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-purple-500/20 text-purple-500 flex items-center justify-center mb-6">
                  <Lightbulb className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  To be the globally recognized leader in digital innovation,
                  setting new standards for design excellence and technical
                  brilliance while fostering a culture of continuous learning.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="layout-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Our <span className="text-electric-500">Journey</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-0.5 bg-navy-800 md:-translate-x-1/2" />

            <div className="space-y-12">
              {TIMELINE.map((item, idx) =>
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
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                  {/* Timeline Dot */}
                  <div className="absolute left-[28px] md:left-1/2 w-4 h-4 rounded-full bg-electric-500 border-4 border-navy-900 -translate-x-1/2 mt-1.5 md:mt-0 md:top-1/2 md:-translate-y-1/2 z-10 shadow-[0_0_15px_rgba(250,193,17,0.5)]" />

                  <div
                  className={`pl-16 md:pl-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                  
                    <div className="text-electric-500 font-bold text-xl mb-2">
                      {item.year}
                    </div>
                    <h4 className="text-2xl font-heading font-bold text-white mb-3">
                      {item.title}
                    </h4>
                    <p className="text-slate-400">{item.desc}</p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-navy-950">
        <div className="layout-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Meet The <span className="text-electric-500">Team</span>
            </h2>
            <p className="text-slate-400 text-lg">
              The brilliant minds behind our successful projects.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member, idx) =>
            <motion.div
              key={idx}
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
                delay: idx * 0.1
              }}
              className="group">
              
                <div
                className={`w-full aspect-square rounded-3xl ${member.image} mb-6 relative overflow-hidden`}>
                
                  <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-transparent transition-colors duration-300" />
                  {/* Social Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-navy-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center gap-4 translate-y-4 group-hover:translate-y-0">
                    <a
                    href="https://x.com/idealizeer"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-electric-500 transition-colors">
                    
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a
                    href="https://www.linkedin.com/company/idealizeer"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-electric-500 transition-colors">
                    
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-heading font-bold text-white mb-1">
                    {member.name}
                  </h4>
                  <p className="text-electric-400 text-sm font-medium">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>);

}
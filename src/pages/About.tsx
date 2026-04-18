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
  name: 'Pankaj Kathane',
  role: 'Founder & Managing Director',
  image:
  'https://c.animaapp.com/8QzYMMFv/img/chatgpt-image-apr-8--2026--02-32-45-pm-2@2x.png'
},
{
  name: 'Dr. Arpita Kathane',
  role: 'Director & Chief Operating Officer',
  image: 'https://c.animaapp.com/8QzYMMFv/img/image@2x.png',
  imageClass: 'object-top'
},
{
  name: 'Dr. M.C. Dileep Kumar',
  role: 'Advisor',
  image:
  'https://c.animaapp.com/8QzYMMFv/img/chatgpt-image-apr-8--2026--02-32-45-pm-2-1@2x.png'
},
{
  name: 'Dr. Gajanan Gulhane',
  role: 'Advisor',
  image:
  'https://c.animaapp.com/8QzYMMFv/img/chatgpt-image-apr-8--2026--02-32-45-pm-2-2@2x.png'
},
{
  name: 'Dr. Sanjayan T. S.',
  role: 'Director, Global Alliance',
  image:
  'https://c.animaapp.com/8QzYMMFv/img/chatgpt-image-apr-8--2026--02-32-45-pm-2-3@2x.png'
},
{
  name: 'Dr. Chandrani Singh',
  role: 'Director, Academics and Research',
  image:
  'https://c.animaapp.com/8QzYMMFv/img/chatgpt-image-apr-8--2026--02-32-45-pm-2-4@2x.png'
},
{
  name: 'Sumit Dorle',
  role: 'Senior Manager & Business Development',
  image: 'https://c.animaapp.com/8QzYMMFv/img/image-1@2x.png'
},
{
  name: 'Mrunal Ghadgre',
  role: 'Client Relations & Delivery Manager',
  image:
  'https://c.animaapp.com/8QzYMMFv/img/chatgpt-image-apr-8--2026--02-32-45-pm-2-5@2x.png'
},
{
  name: 'Amol Ghadge',
  role: 'Team Lead, Course Development and Marketing',
  image:
  'https://c.animaapp.com/8QzYMMFv/img/chatgpt-image-apr-8--2026--02-32-45-pm-2-6@2x.png'
},
{
  name: 'Madhuri Sheth',
  role: 'Academic Content Writer',
  image:
  'https://c.animaapp.com/8QzYMMFv/img/chatgpt-image-apr-8--2026--02-32-45-pm-2-7@2x.png'
},
{
  name: 'Vaishnavi Havale',
  role: 'Team Lead, Digital Marketing',
  image:
  'https://c.animaapp.com/8QzYMMFv/img/chatgpt-image-apr-8--2026--02-32-45-pm-2-8@2x.png'
},
{
  name: 'Janbaj Jadhav',
  role: 'Team Lead, UI/UX and Tech Development',
  image:
  'https://c.animaapp.com/8QzYMMFv/img/chatgpt-image-apr-8--2026--02-32-45-pm-2-9@2x.png'
},
{
  name: 'Rutuja Nare',
  role: 'UI UX Design and Graphic Design',
  image:
  'https://c.animaapp.com/8QzYMMFv/img/chatgpt-image-apr-8--2026--02-32-45-pm-2-10@2x.png'
},
{
  name: 'Wajid Tamboli',
  role: 'Software Developer',
  image:
  'https://c.animaapp.com/8QzYMMFv/img/chatgpt-image-apr-8--2026--02-32-45-pm-2-11@2x.png'
}];

const TIMELINE = [
{
  year: '2017',
  title: 'Vision Drafted',
  desc: 'The core idea for Idealizeer was shaped around combining strategy, storytelling, and digital execution for modern brands.'
},
{
  year: '2018',
  title: 'Official Launch',
  desc: 'Idealizeer Content Solutions launched operations with a focused team delivering branding, content, and web projects for early clients.'
},
{
  year: '2019',
  title: 'Service Expansion',
  desc: 'We expanded into digital campaigns and creative production, helping businesses build stronger online visibility and engagement.'
},
{
  year: '2020',
  title: 'Rapid Growth',
  desc: 'Our team scaled quickly, remote workflows matured, and we delivered high-impact campaigns for clients adapting to digital-first markets.'
},
{
  year: '2021',
  title: 'Process Maturity',
  desc: 'We introduced structured delivery frameworks for design, development, and marketing to improve speed, quality, and consistency.'
},
{
  year: '2022',
  title: 'Award Winning',
  desc: 'Our work received industry recognition, highlighting our performance in integrated digital strategy and creative execution.'
},
{
  year: '2023',
  title: 'Enterprise Partnerships',
  desc: 'Idealizeer began working with larger organizations, delivering multi-channel campaigns and scalable digital platforms.'
},
{
  year: '2024',
  title: 'Global Reach',
  desc: 'We broadened our international footprint, supported global brands, and strengthened collaboration across multiple markets.'
},
{
  year: '2025',
  title: 'Innovation Acceleration',
  desc: 'New capabilities in video-led content, performance optimization, and automation helped clients grow faster across platforms.'
},
{
  year: '2026',
  title: 'Future-Ready Growth',
  desc: 'We are scaling with an innovation-first mindset, building measurable, brand-safe, and conversion-driven digital ecosystems.'
}];

export function About() {
  return (
    <div className="w-full pt-24 pb-8 mb-0">
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
                <h3 className="text-2xl font-heading font-bold !text-black dark:!text-white mb-4">
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
                <h3 className="text-2xl font-heading font-bold !text-black dark:!text-white mb-4">
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
      <section className="pt-24 pb-8 mt-0 bg-navy-950">
        <div className="layout-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Meet The <span className="text-electric-500">Team</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {TEAM.map((member, idx) => {
                const isLastRowPair = idx === TEAM.length - 2;
                return (
                <motion.div
                  key={`${member.name}-${idx}`}
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
                    delay: idx * 0.05
                  }}
                  className={`group rounded-3xl bg-navy-800 border border-white/5 overflow-hidden hover:border-electric-500/35 hover:shadow-[0_12px_40px_-14px_rgba(250,193,17,0.3)] hover:scale-105 transition-all duration-300 ${isLastRowPair ? 'xl:col-start-2' : ''}`}>

                  <div className="relative aspect-[266/252] overflow-hidden bg-gradient-to-b from-[#facc15] via-[#eab308] to-[#ca8a04]">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className={`w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110 ${member.imageClass ?? ''}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="absolute inset-x-0 bottom-0 p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center gap-4">
                      <a
                        href="https://x.com/idealizeer"
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-electric-500 transition-colors"
                        aria-label={`${member.name} on X`}
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/idealizeer"
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-electric-500 transition-colors"
                        aria-label={`${member.name} on LinkedIn`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <div className="p-5 text-center">
                    <h4 className="text-lg font-heading font-bold text-white mb-2 leading-snug">
                      {member.name}
                    </h4>
                    <p className="text-slate-300 dark:text-electric-400 text-sm font-medium leading-relaxed">
                      {member.role}
                    </p>
                  </div>
                </motion.div>
            );
            })}
          </div>
        </div>
      </section>
    </div>);

}
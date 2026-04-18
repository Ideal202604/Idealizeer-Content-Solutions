import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
const CATEGORIES = ['All', 'UI Design', 'Development', 'Branding'];
const PROJECTS = [
{
  id: 1,
  title: 'Whiteline',
  category: 'UI Design',
  image: 'bg-gradient-to-br from-blue-600 to-indigo-900'
},
{
  id: 2,
  title: 'Whiteline',
  category: 'Development',
  image: 'bg-gradient-to-br from-emerald-500 to-teal-900'
},
{
  id: 3,
  title: 'Health App',
  category: 'UI Design',
  image: 'bg-gradient-to-br from-rose-500 to-pink-900'
},
{
  id: 4,
  title: 'SaaS Landing Page',
  category: 'Development',
  image: 'bg-gradient-to-br from-amber-500 to-orange-900'
},
{
  id: 5,
  title: 'Brand Identity',
  category: 'Branding',
  image: 'bg-gradient-to-br from-purple-500 to-violet-900'
},
{
  id: 6,
  title: 'Crypto Exchange',
  category: 'Development',
  image: 'bg-gradient-to-br from-cyan-500 to-blue-900'
},
{
  id: 7,
  title: 'Restaurant Rebrand',
  category: 'Branding',
  image: 'bg-gradient-to-br from-red-500 to-rose-900'
},
{
  id: 8,
  title: 'Travel Booking App',
  category: 'UI Design',
  image: 'bg-gradient-to-br from-sky-500 to-blue-900'
},
{
  id: 9,
  title: 'Real Estate Portal',
  category: 'Development',
  image: 'bg-gradient-to-br from-slate-500 to-slate-900'
}];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filteredProjects = PROJECTS.filter((project) =>
  activeFilter === 'All' ? true : project.category === activeFilter
  );
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
            <span className="text-slate-400">Portfolio</span>
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
            
            Our <span className="text-electric-500">Work</span>
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
            
            Explore our latest projects and see how we've helped businesses
            transform their digital presence.
          </motion.p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12">
        <div className="layout-container">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {CATEGORIES.map((category) =>
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === category ? 'bg-electric-500 text-navy-900 font-bold shadow-[0_0_15px_rgba(250,193,17,0.4)]' : 'bg-navy-800 text-slate-400 hover:text-white hover:bg-navy-700'}`}>
              
                {category}
              </button>
            )}
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <AnimatePresence>
              {filteredProjects.map((project) =>
              <motion.div
                key={project.id}
                layout
                initial={{
                  opacity: 0,
                  scale: 0.9
                }}
                animate={{
                  opacity: 1,
                  scale: 1
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9
                }}
                transition={{
                  duration: 0.3
                }}
                className="group relative rounded-2xl overflow-hidden bg-navy-800 border border-white/5">
                
                  <div
                  className={`w-full h-72 ${project.image} relative overflow-hidden`}>
                  
                    <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-transparent transition-colors duration-500" />
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent mix-blend-overlay" />

                    <div className="absolute inset-0 bg-navy-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center backdrop-blur-sm p-6 text-center">
                      <h3 className="text-2xl font-heading font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                        {project.title}
                      </h3>
                      <p className="text-electric-400 mb-6 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                        {project.category}
                      </p>
                      <Link
                      to="/case-study"
                      className="w-12 h-12 rounded-full bg-electric-500 text-navy-900 flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150 hover:bg-electric-600 hover:scale-110">
                      
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>);

}
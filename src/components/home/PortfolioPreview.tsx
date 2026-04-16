import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
const PROJECTS = [
{
  id: 1,
  title: 'Fintech Dashboard',
  category: 'UI/UX Design',
  image: 'bg-gradient-to-br from-blue-600 to-indigo-900'
},
{
  id: 2,
  title: 'E-Commerce Platform',
  category: 'Web Development',
  image: 'bg-gradient-to-br from-emerald-500 to-teal-900'
},
{
  id: 3,
  title: 'Health App',
  category: 'Mobile App',
  image: 'bg-gradient-to-br from-rose-500 to-pink-900'
},
{
  id: 4,
  title: 'SaaS Landing Page',
  category: 'Web Design',
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
  category: 'Full Stack',
  image: 'bg-gradient-to-br from-cyan-500 to-blue-900'
}];

export function PortfolioPreview() {
  return (
    <section className="py-24">
      <div className="layout-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
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
              
              Selected <span className="text-electric-500">Works</span>
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
              
              A glimpse into our recent projects. We transform complex problems
              into elegant, user-friendly solutions.
            </motion.p>
          </div>
          <motion.div
            initial={{
              opacity: 0,
              x: 20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}>
            
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy-800 hover:bg-navy-700 text-white rounded-full transition-colors border border-white/10">
              
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) =>
          <motion.div
            key={project.id}
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
              delay: index * 0.1
            }}
            className="group relative rounded-2xl overflow-hidden bg-navy-800 border border-white/5">
            
              {/* Image Placeholder */}
              <div
              className={`w-full h-64 ${project.image} relative overflow-hidden`}>
              
                <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-transparent transition-colors duration-500" />
                {/* Abstract pattern overlay */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent mix-blend-overlay" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-navy-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <Link
                  to="/case-study"
                  className="px-6 py-3 bg-electric-500 text-navy-900 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  
                    View Case Study <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="p-6">
                <div className="text-xs font-medium text-electric-400 mb-2 uppercase tracking-wider">
                  {project.category}
                </div>
                <h3 className="text-xl font-heading font-bold text-white group-hover:text-electric-400 transition-colors">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
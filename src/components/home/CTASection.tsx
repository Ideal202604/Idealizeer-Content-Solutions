import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden theme-keep-light-text">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-600 to-navy-900 z-0" />

      {/* Animated Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 100,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] border border-white/10 rounded-full" />
        
        <motion.div
          animate={{
            rotate: -360
          }}
          transition={{
            duration: 150,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] border border-white/10 rounded-full" />
        
      </div>

      <div className="layout-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
            
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span className="text-sm font-medium text-white">
              Ready to start your project?
            </span>
          </motion.div>

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
            transition={{
              delay: 0.1
            }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white mb-8 leading-tight">
            
            Let's Build Something <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
              Amazing Together
            </span>
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
              delay: 0.2
            }}
            className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            
            Whether you need a new website, a complex web application, or a
            complete brand overhaul, our team is ready to bring your vision to
            life.
          </motion.p>

          <motion.div
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
              delay: 0.3
            }}>
            
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-navy-900 hover:bg-slate-100 font-bold text-lg rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] hover:-translate-y-1">
              
              Contact Now <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>);

}
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, PenTool, Smartphone, Monitor } from 'lucide-react';
export function HeroSection() {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  return (
    <section className="relative min-h-screen lg:min-h-[78vh] flex items-center pt-20 lg:pt-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-electric-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="layout-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl">
            
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-800 border border-white/10 mb-6">
              
              <span className="w-2 h-2 rounded-full bg-electric-500 animate-pulse" />
              <span className="text-xs font-medium text-slate-300 uppercase tracking-wider">
                Award Winning Agency
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-[1.1] mb-6 text-white">
              
              We Build Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-400 to-electric-600">
                Experiences
              </span>
              <br />
              That Grow Your Business
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed">
              
              UI/UX <span className="text-electric-500 mx-2">•</span>
              Development <span className="text-electric-500 mx-2">•</span>
              Branding <span className="text-electric-500 mx-2">•</span>
              Marketing
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4">
              
              <Link
                to="/contact"
                className="px-8 py-4 bg-electric-500 hover:bg-electric-600 text-navy-900 font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(250,193,17,0.3)] hover:shadow-[0_0_30px_rgba(250,193,17,0.5)] hover:-translate-y-1 flex items-center gap-2">
                
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/portfolio"
                className="px-8 py-4 bg-transparent border border-white/20 hover:border-white/50 text-white font-medium rounded-full transition-all duration-300 hover:bg-white/5">
                
                View Portfolio
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 1,
              delay: 0.5
            }}
            className="relative h-[340px] w-full sm:h-[420px] lg:h-[500px]">
            
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Central Element */}
              <motion.div
                animate={{
                  y: [-10, 10, -10]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="relative h-44 w-44 rounded-3xl border border-white/10 bg-gradient-to-br from-navy-800 to-navy-900 shadow-2xl flex items-center justify-center z-20 overflow-hidden sm:h-56 sm:w-56 lg:h-64 lg:w-64">
                
                <div className="absolute inset-0 bg-electric-500/5" />
                <Code className="h-14 w-14 text-electric-500 opacity-80 sm:h-20 sm:w-20 lg:h-24 lg:w-24" />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [15, -15, 15],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1
                }}
                className="absolute left-2 top-2 h-16 w-16 rounded-2xl border border-white/10 bg-navy-800 shadow-xl flex items-center justify-center z-30 sm:left-6 sm:top-6 sm:h-20 sm:w-20 lg:left-10 lg:top-10 lg:h-24 lg:w-24">
                
                <PenTool className="h-7 w-7 text-pink-500 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
              </motion.div>

              <motion.div
                animate={{
                  y: [-20, 20, -20],
                  rotate: [0, -10, 0]
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5
                }}
                className="absolute bottom-2 right-3 h-20 w-20 rounded-full border border-white/10 bg-navy-800 shadow-xl flex items-center justify-center z-30 sm:bottom-8 sm:right-6 sm:h-24 sm:w-24 lg:bottom-20 lg:right-10 lg:h-28 lg:w-28">
                
                <Smartphone className="h-8 w-8 text-purple-500 sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
              </motion.div>

              <motion.div
                animate={{
                  x: [-15, 15, -15],
                  y: [-10, 10, -10]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 2
                }}
                className="absolute right-1 top-12 h-14 w-14 rounded-xl border border-white/10 bg-navy-800 shadow-xl flex items-center justify-center z-10 sm:right-3 sm:top-20 sm:h-16 sm:w-16 lg:right-0 lg:top-32 lg:h-20 lg:w-20">
                
                <Monitor className="h-5 w-5 text-emerald-500 sm:h-6 sm:w-6 lg:h-8 lg:w-8" />
              </motion.div>

              <motion.div
                animate={{
                  y: [12, -12, 12],
                  rotate: [0, 6, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1.5
                }}
                whileHover={{
                  scale: 1.1
                }}
                className="absolute inset-0 flex items-center justify-center z-20">
                <div className="h-16 w-16 rounded-2xl border border-white/10 bg-navy-800 shadow-xl flex items-center justify-center transition-all duration-300 ease-in-out hover:shadow-2xl -translate-x-20 translate-y-24 sm:h-20 sm:w-20 sm:-translate-x-28 sm:translate-y-32 lg:h-24 lg:w-24 lg:-translate-x-36 lg:translate-y-40">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="relative z-10 h-7 w-7 text-orange-400 sm:h-8 sm:w-8 lg:h-10 lg:w-10"
                    aria-hidden="true">
                    <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                  </svg>
                </div>
              </motion.div>

              {/* Decorative Rings */}
              <motion.div
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: 'linear'
                }}
                className="absolute h-[280px] w-[280px] rounded-full border border-white/5 border-dashed z-0 sm:h-[340px] sm:w-[340px] lg:h-[400px] lg:w-[400px]" />
              
              <motion.div
                animate={{
                  rotate: -360
                }}
                transition={{
                  duration: 50,
                  repeat: Infinity,
                  ease: 'linear'
                }}
                className="absolute h-[360px] w-[360px] rounded-full border border-white/5 z-0 sm:h-[430px] sm:w-[430px] lg:h-[500px] lg:w-[500px]" />
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}
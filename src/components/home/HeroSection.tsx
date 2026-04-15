import React from 'react';
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
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
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
            className="relative h-[500px] hidden lg:block">
            
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
                className="relative w-64 h-64 bg-gradient-to-br from-navy-800 to-navy-900 rounded-3xl border border-white/10 shadow-2xl flex items-center justify-center z-20 overflow-hidden">
                
                <div className="absolute inset-0 bg-electric-500/5" />
                <Code className="w-24 h-24 text-electric-500 opacity-80" />
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
                className="absolute top-10 left-10 w-24 h-24 bg-navy-800 rounded-2xl border border-white/10 shadow-xl flex items-center justify-center z-30">
                
                <PenTool className="w-10 h-10 text-pink-500" />
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
                className="absolute bottom-20 right-10 w-28 h-28 bg-navy-800 rounded-full border border-white/10 shadow-xl flex items-center justify-center z-30">
                
                <Smartphone className="w-12 h-12 text-purple-500" />
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
                className="absolute top-32 right-0 w-20 h-20 bg-navy-800 rounded-xl border border-white/10 shadow-xl flex items-center justify-center z-10">
                
                <Monitor className="w-8 h-8 text-emerald-500" />
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
                className="absolute w-[400px] h-[400px] rounded-full border border-white/5 border-dashed z-0" />
              
              <motion.div
                animate={{
                  rotate: -360
                }}
                transition={{
                  duration: 50,
                  repeat: Infinity,
                  ease: 'linear'
                }}
                className="absolute w-[500px] h-[500px] rounded-full border border-white/5 z-0" />
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}
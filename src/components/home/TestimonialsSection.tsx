import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
const TESTIMONIALS = [
{
  id: 1,
  name: 'Sarah Johnson',
  role: 'CMO, TechFlow',
  content:
  'Idealizeer Content Solutions completely transformed our online presence. Their design team is world-class, and the development process was smooth from start to finish. Our conversion rates have doubled since the launch.',
  avatar: 'bg-pink-500',
  initials: 'SJ'
},
{
  id: 2,
  name: 'Michael Chen',
  role: 'Founder, StartupX',
  content:
  'Working with this agency was a game-changer for our startup. They understood our vision perfectly and delivered a product that exceeded our expectations. Highly recommend their UI/UX expertise.',
  avatar: 'bg-blue-500',
  initials: 'MC'
},
{
  id: 3,
  name: 'Emma Williams',
  role: 'Director, Global Retail',
  content:
  "The level of professionalism and attention to detail is unmatched. They didn't just build a website; they built a scalable platform that handles our massive traffic with ease. Truly exceptional work.",
  avatar: 'bg-emerald-500',
  initials: 'EW'
}];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    setIsAutoPlaying(false);
  };
  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
    setIsAutoPlaying(false);
  };
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="layout-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
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
            
            Client <span className="text-electric-500">Testimonials</span>
          </motion.h2>
        </div>

        <div
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}>
          
          <div className="absolute top-0 left-0 text-electric-500/10 -translate-x-8 -translate-y-8 z-0">
            <Quote className="w-32 h-32 rotate-180" />
          </div>

          <div className="relative z-10 bg-navy-800/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 md:p-12 min-h-[300px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{
                  opacity: 0,
                  x: 20
                }}
                animate={{
                  opacity: 1,
                  x: 0
                }}
                exit={{
                  opacity: 0,
                  x: -20
                }}
                transition={{
                  duration: 0.3
                }}
                className="text-center">
                
                <div className="flex justify-center gap-1 mb-8">
                  {[...Array(5)].map((_, i) =>
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-500 text-amber-500" />

                  )}
                </div>

                <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-10 font-medium">
                  "{TESTIMONIALS[currentIndex].content}"
                </p>

                <div className="flex items-center justify-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full ${TESTIMONIALS[currentIndex].avatar} flex items-center justify-center text-white font-bold text-lg`}>
                    
                    {TESTIMONIALS[currentIndex].initials}
                  </div>
                  <div className="text-left">
                    <h4 className="font-heading font-bold text-white">
                      {TESTIMONIALS[currentIndex].name}
                    </h4>
                    <p className="text-sm text-slate-400">
                      {TESTIMONIALS[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-navy-800 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-electric-500 hover:border-electric-500 transition-all">
              
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) =>
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  setIsAutoPlaying(false);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentIndex ? 'bg-electric-500 w-8' : 'bg-white/20 hover:bg-white/40'}`} />

              )}
            </div>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-navy-800 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-electric-500 hover:border-electric-500 transition-all">
              
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>);

}
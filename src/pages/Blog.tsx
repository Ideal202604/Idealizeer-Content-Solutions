import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blogPosts';

export function Blog() {
  const [visibleCount, setVisibleCount] = useState(3);
  const visiblePosts = useMemo(() => BLOG_POSTS.slice(0, visibleCount), [visibleCount]);
  const canLoadMore = visibleCount < BLOG_POSTS.length;

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
            <span className="text-slate-400">Blog</span>
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
            
            Insights & <span className="text-electric-500">News</span>
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
            
            Thoughts, tutorials, and trends from our team of designers and
            developers.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="layout-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visiblePosts.map((post, idx) =>
            <motion.article
              key={post.id}
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
              className="group bg-navy-800 rounded-3xl border border-white/5 overflow-hidden hover:border-electric-500/30 transition-colors flex flex-col">
              
                <div
                className={`w-full h-56 ${post.image} relative overflow-hidden`}>
                
                  <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-navy-900/80 backdrop-blur-md rounded-full text-xs font-medium text-white">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" /> {post.author}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-electric-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-slate-400 text-sm mb-6 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-electric-500 group-hover:text-electric-400 transition-colors mt-auto">
                  
                    Read Article{' '}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            )}
          </div>

          {canLoadMore &&
          <div className="mt-16 text-center">
              <button
              type="button"
              onClick={() => setVisibleCount((count) => Math.min(count + 3, BLOG_POSTS.length))}
              className="px-8 py-3 bg-navy-800 hover:bg-navy-700 text-white font-medium rounded-full transition-colors border border-white/10">
                Load More Articles
              </button>
            </div>
          }
        </div>
      </section>
    </div>);

}
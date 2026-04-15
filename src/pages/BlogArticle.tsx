import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogPosts';

export function BlogArticle() {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find((item) => item.id === Number(id));

  if (!post) {
    return (
      <div className="w-full pt-24 pb-12">
        <section className="py-20">
          <div className="layout-container text-center">
            <h1 className="text-4xl font-heading font-bold text-white mb-4">Article not found</h1>
            <p className="text-slate-400 mb-8">The article you are looking for does not exist.</p>
            <Link to="/blog" className="inline-flex items-center gap-2 px-6 py-3 bg-electric-500 text-navy-900 rounded-full font-bold">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="w-full pt-24 pb-12">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-950 z-0" />
        <div className="layout-container relative z-10">
          <div className="flex items-center gap-2 text-sm font-medium text-electric-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-400">Article</span>
          </div>

          <p className="text-electric-400 font-medium mb-3">{post.category}</p>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-6 max-w-4xl">{post.title}</h1>
          <p className="text-slate-400 text-lg">{post.date} • {post.author}</p>
        </div>
      </section>

      <section className="py-14">
        <div className="layout-container max-w-3xl">
          <div className={`w-full h-72 rounded-3xl ${post.image} mb-10`} />
          <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
            {post.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12">
            <Link to="/blog" className="inline-flex items-center gap-2 px-6 py-3 bg-navy-800 border border-white/10 hover:bg-navy-700 rounded-full text-white font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to all articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

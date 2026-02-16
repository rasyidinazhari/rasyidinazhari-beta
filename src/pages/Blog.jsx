import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { Search, BookOpen, Clock, Calendar, ArrowRight, Hash } from 'lucide-react';
import { blogs } from '../data'; 
// 1. Import FadeIn
import { FadeIn } from '../components/FadeIn';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (blog.tags && blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#0C0C0C] text-slate-300">
      <div className="max-w-6xl px-4 mx-auto">
        
        {/* --- HEADER SECTION --- */}
        {/* Bungkus Header dengan FadeIn */}
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 border-b border-neutral-900 pb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-blue-900/20 border border-blue-900/30">
                  <BookOpen className="text-blue-400" size={20} />
                </div>
                <h1 className="text-3xl font-bold text-slate-100">Writing</h1>
              </div>
              <p className="text-slate-400 mt-2 max-w-lg">
                Pemikiran, tutorial, dan catatan perjalanan saya dalam mempelajari teknologi baru.
              </p>
            </div>

            <div className="relative w-full md:w-64">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                <Search size={16} />
              </span>
              <input 
                type="text" 
                placeholder="Cari artikel..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#151515] text-slate-200 text-sm border border-neutral-800 rounded-full py-2.5 pl-10 pr-4 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition placeholder:text-slate-600"
              />
            </div>
          </div>
        </FadeIn>

        {/* --- BLOG LIST SECTION --- */}
        <div className="space-y-8">
          {filteredBlogs.length === 0 && (
            <FadeIn>
              <div className="text-center py-20 bg-[#111] rounded-xl border border-dashed border-neutral-800">
                <p className="text-slate-500">Tidak ada artikel yang cocok dengan "{searchQuery}"</p>
                <button 
                  onClick={() => setSearchQuery('')}
                  className="mt-2 text-blue-400 hover:underline text-sm"
                >
                  Reset pencarian
                </button>
              </div>
            </FadeIn>
          )}

          {filteredBlogs.map((blog, index) => (
            // Bungkus setiap item dengan FadeIn, berikan delay bertahap
            <FadeIn key={blog.id} delay={index * 0.1}>
              <article 
                className="group relative flex flex-col md:flex-row gap-6 p-6 rounded-2xl border border-neutral-900 bg-gradient-to-b from-neutral-900/30 to-transparent hover:border-neutral-700 transition-all duration-300"
              >
                {/* Left: Date & Meta */}
                <div className="md:w-32 flex-shrink-0 flex flex-row md:flex-col gap-4 md:gap-2 text-xs font-mono text-slate-500 pt-1">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    <span>{blog.date}</span>
                  </div>
                  {blog.readTime && (
                    <div className="flex items-center gap-1.5">
                      <Clock size={12} />
                      <span>{blog.readTime}</span>
                    </div>
                  )}
                </div>

                {/* Right: Content */}
                <div className="flex-1 space-y-3">
                  <h2 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                    <Link to={`/blog/${blog.id}`} className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {blog.title}
                    </Link>
                  </h2>
                  
                  <p className="text-slate-400 leading-relaxed line-clamp-2 md:line-clamp-none">
                    {blog.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex gap-2">
                      {blog.tags && blog.tags.map((tag, idx) => (
                        <span key={idx} className="flex items-center gap-1 text-xs font-medium text-slate-500 bg-neutral-900 px-2 py-1 rounded border border-neutral-800 z-10 relative">
                          <Hash size={10} /> {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-1 text-sm font-medium text-blue-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      Read Article <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Blog;
import React from 'react';
import { Clock, Eye } from 'lucide-react';

const BlogCard = ({ title, date, excerpt, readTime, views, tags, image }) => {
  return (
    <div className="group flex flex-col md:flex-row items-start gap-6 p-4 -mx-4 rounded-2xl hover:bg-white/5 transition-all duration-300">
      
      {/* --- KIRI: Teks & Meta --- */}
      <div className="flex-1 flex flex-col h-full">
        
        {/* Date */}
        <span className="text-sm text-slate-500 font-medium mb-3">
          {date}
        </span>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-3 group-hover:text-blue-400 transition-colors leading-tight">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-slate-400 leading-relaxed mb-6 line-clamp-2 md:line-clamp-none">
          {excerpt}
        </p>

        {/* Footer Meta (Read Time, Views, Tags) */}
        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 w-full">
          
          {/* Left Stats */}
          <div className="flex items-center gap-4 text-sm text-slate-500 font-medium">
            <div className="flex items-center gap-1.5">
              <Clock size={16} />
              <span>{readTime || '5 min read'}</span>
            </div>
            {views && (
              <div className="flex items-center gap-1.5">
                <Eye size={16} />
                <span>{views} views</span>
              </div>
            )}
          </div>

          {/* Right Tags */}
          <div className="flex gap-2">
            {tags && tags.map((tag, idx) => (
              <span key={idx} className="px-3 py-1 text-xs font-medium text-slate-400 bg-white/5 rounded-full border border-white/5 group-hover:border-white/10 transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* --- KANAN: Gambar (Opsional jika ada) --- */}
      {image && (
        <div className="w-full md:w-48 aspect-video md:aspect-[4/3] rounded-xl overflow-hidden flex-shrink-0 border border-white/10 group-hover:border-blue-500/30 transition-all">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
          />
        </div>
      )}
    </div>
  );
};

export default BlogCard;
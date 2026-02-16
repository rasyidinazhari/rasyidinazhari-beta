import React from 'react';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, desc, tech, image }) => {
  return (
    <div className="group flex flex-col md:flex-row items-start gap-6 p-4 -mx-4 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/5">
      
      {/* --- KIRI: Content Info --- */}
      <div className="flex-1 flex flex-col h-full">
        
        {/* Title & Arrow Icon */}
        <div className="flex items-center gap-2 mb-3">
          <h3 className="text-xl md:text-2xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <ArrowUpRight size={20} className="text-slate-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        </div>

        {/* Description */}
        <p className="text-slate-400 leading-relaxed mb-6 line-clamp-2 md:line-clamp-none">
          {desc}
        </p>

        {/* Footer: Tech Stack Pills */}
        <div className="mt-auto flex flex-wrap items-center gap-2">
          {tech.map((item, index) => (
            <span key={index} className="px-3 py-1 text-xs font-medium text-slate-400 bg-white/5 rounded-full border border-white/5 group-hover:border-white/10 transition-colors">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* --- KANAN: Image Thumbnail --- */}
      <div className="w-full md:w-64 aspect-video md:aspect-[16/10] rounded-xl overflow-hidden flex-shrink-0 border border-white/10 group-hover:border-blue-500/30 transition-all relative">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
          />
        ) : (
          /* Fallback jika tidak ada gambar: Gradient Placeholder */
          <div className="w-full h-full bg-gradient-to-br from-neutral-900 to-neutral-800 flex items-center justify-center group-hover:from-blue-900/20 group-hover:to-purple-900/20 transition-all duration-500">
             <span className="font-bold text-slate-700 text-4xl select-none">Project</span>
          </div>
        )}
      </div>

    </div>
  );
};

export default ProjectCard;
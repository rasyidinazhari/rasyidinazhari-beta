import React from 'react';
import { Link } from 'react-router-dom';
import { FolderGit2, ArrowUpRight } from 'lucide-react';
import { projects } from '../data';
// Pastikan path import ini sesuai dengan lokasi file FadeIn Anda
import { FadeIn } from '../components/FadeIn'; 

const Projects = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#0C0C0C] text-slate-300">
      <div className="max-w-6xl px-4 mx-auto">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 border-b border-neutral-900 pb-8">
          {/* Bungkus Header dengan FadeIn */}
          <FadeIn>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-blue-900/20 border border-blue-900/30">
                  <FolderGit2 className="text-blue-400" size={20} />
                </div>
                <h1 className="text-3xl font-bold text-slate-100">Projects</h1>
              </div>
              <p className="text-slate-400 mt-2 max-w-lg">
                A collection of code explorations, apps, and digital solutions I've built.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* --- PROJECT LIST --- */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            // Bungkus setiap item dengan FadeIn & berikan delay berdasarkan index
            // index * 0.1 artinya: item 1 (0s), item 2 (0.1s), item 3 (0.2s), dst.
            <FadeIn key={project.id} delay={index * 0.1}>
              <Link to={`/projects/${project.id}`} className="block group">
                <div className="relative p-6 rounded-3xl bg-neutral-900/30 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/50 transition-all duration-300">
                  
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    
                    {/* KIRI: Image Thumbnail */}
                    <div className="w-full md:w-72 aspect-video rounded-xl overflow-hidden bg-neutral-800 border border-neutral-700/50 group-hover:border-blue-500/30 transition-all relative">
                      {project.image ? (
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                        />
                      ) : (
                        /* Fallback Gradient */
                        <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
                           <FolderGit2 className="text-neutral-700" size={48} />
                        </div>
                      )}
                    </div>

                    {/* KANAN: Content Info */}
                    <div className="flex-1 flex flex-col justify-between h-full">
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <h2 className="text-2xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                            {project.title}
                          </h2>
                          <ArrowUpRight className="text-slate-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        </div>
                        
                        <p className="text-slate-400 leading-relaxed mb-6">
                          {project.desc}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.map((item, index) => (
                          <span key={index} className="px-3 py-1 text-xs font-medium text-slate-400 bg-neutral-800 rounded-full border border-neutral-700 group-hover:border-neutral-600 transition-colors">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Calendar, Layers, Activity, Hash, List } from 'lucide-react';
import { projects } from '../data';
// 1. Import FadeIn
import { FadeIn } from '../components/FadeIn';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  const generateSlug = (text) => {
    return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
  };

  if (!project) {
    return (
      <div className="min-h-screen pt-32 text-center bg-[#0C0C0C] text-slate-300">
        <h2 className="text-2xl">Project not found</h2>
        <Link to="/projects" className="text-blue-500 hover:underline mt-4 block">Kembali ke Projects</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#0C0C0C] text-slate-300">
      <div className="max-w-7xl px-4 mx-auto">
        
        {/* --- NAVIGATION --- */}
        <FadeIn>
          <Link to="/projects" className="flex items-center gap-2 mb-8 text-slate-500 hover:text-blue-400 transition w-fit group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </Link>
        </FadeIn>
        
        {/* --- HERO HEADER --- */}
        <FadeIn delay={0.1}>
          <div className="mb-12 border-b border-neutral-800 pb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
              {project.desc}
            </p>
          </div>
        </FadeIn>
        
        {/* --- MAIN LAYOUT (2 Columns) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* ================= KIRI: KONTEN UTAMA (8 Cols) ================= */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Main Image */}
            <FadeIn delay={0.2}>
              <div className="w-full aspect-video rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 relative group">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="flex items-center justify-center h-full text-slate-700 font-bold">No Preview</div>
                )}
              </div>
            </FadeIn>

            {/* Render Sections (Looping) */}
            <div className="space-y-16">
              {project.sections?.map((section, index) => (
                // Bungkus setiap section dengan FadeIn, delay bertahap
                <FadeIn key={index} delay={0.3 + (index * 0.1)}>
                  <div id={generateSlug(section.title)} className="scroll-mt-32">
                    <h2 className="text-2xl font-bold text-slate-100 mb-4 flex items-center gap-3">
                      <span className="text-blue-500/50 text-xl">#</span>
                      {section.title}
                    </h2>
                    <p className="text-slate-400 leading-8 text-lg">
                      {section.content}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

          </div>

          {/* ================= KANAN: STICKY SIDEBAR (4 Cols) ================= */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-8">
              
              {/* BOX 1: Project Metadata & Links */}
              <FadeIn delay={0.3}>
                <div className="p-6 rounded-2xl bg-[#111] border border-neutral-800 shadow-xl">
                  <h3 className="text-slate-100 font-bold mb-6 flex items-center gap-2">
                    <Activity size={18} className="text-blue-500" /> Project Info
                  </h3>

                  {/* Meta List */}
                  <div className="space-y-4 text-sm mb-8">
                    <div className="flex justify-between border-b border-neutral-800 pb-2">
                      <span className="text-slate-500">Status</span>
                      <span className={`px-2 py-0.5 rounded text-xs font-medium border ${
                        project.status === 'Development' 
                          ? 'bg-yellow-900/20 text-yellow-500 border-yellow-800' 
                          : 'bg-emerald-900/20 text-emerald-500 border-emerald-800'
                      }`}>{project.status}</span>
                    </div>
                    <div className="flex justify-between border-b border-neutral-800 pb-2">
                      <span className="text-slate-500">Type</span>
                      <span className="text-slate-300">{project.type}</span>
                    </div>
                    <div className="flex justify-between border-b border-neutral-800 pb-2">
                      <span className="text-slate-500">Year</span>
                      <span className="text-slate-300">{project.year}</span>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-8">
                     <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Tech Stack</h4>
                     <div className="flex flex-wrap gap-2">
                       {project.tech.map((tech, i) => (
                         <span key={i} className="px-2 py-1 bg-neutral-800 text-slate-400 text-xs rounded border border-neutral-700">
                           {tech}
                         </span>
                       ))}
                     </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <a href={project.githubLink} className="flex items-center justify-center gap-2 w-full py-2.5 bg-neutral-800 hover:bg-neutral-700 text-slate-200 text-sm font-medium rounded-lg transition border border-neutral-700">
                      <Github size={16} /> Repository
                    </a>
                    <a href={project.liveLink} className="flex items-center justify-center gap-2 w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition shadow-lg shadow-blue-500/20">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  </div>
                </div>
              </FadeIn>

              {/* BOX 2: Table of Contents (Hanya muncul jika ada sections) */}
              {project.sections && project.sections.length > 0 && (
                <FadeIn delay={0.4}>
                  <div className="p-6 rounded-2xl border border-neutral-800/50 bg-gradient-to-b from-neutral-900/30 to-transparent">
                    <h3 className="text-slate-100 font-bold mb-4 flex items-center gap-2 text-sm">
                      <List size={16} className="text-slate-500" /> On this page
                    </h3>
                    <nav className="flex flex-col space-y-1">
                      {project.sections.map((section, index) => (
                        <a 
                          key={index}
                          href={`#${generateSlug(section.title)}`}
                          className="text-sm text-slate-500 hover:text-blue-400 hover:pl-2 transition-all duration-300 border-l-2 border-transparent hover:border-blue-500 py-1"
                        >
                          {section.title}
                        </a>
                      ))}
                    </nav>
                  </div>
                </FadeIn>
              )}

            </div>
          </div>
          {/* END SIDEBAR */}

        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
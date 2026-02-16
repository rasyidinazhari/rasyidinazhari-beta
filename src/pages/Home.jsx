import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { projects, blogs } from '../data';
import ProjectCard from '../components/ProjectCard';
import BlogCard from '../components/BlogCard';
import { FadeIn, ScaleIn } from '../components/FadeIn';
import CardSwap, { Card } from '../components/CardSwap';
import PixelCard from '../components/PixelCard';

const Home = () => {
  return (
    <div className="min-h-screen pt-20 bg-[#0C0C0C] text-slate-300 overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <br />
      <br />
      <section className="flex flex-col-reverse items-center max-w-6xl gap-10 px-4 py-20 mx-auto md:flex-row">
        
        {/* Text Content */}
        <div className="space-y-6 md:w-1/2">
          
          <FadeIn delay={0.1}>
            <div className="flex items-center gap-3 w-fit px-4 py-1.5 rounded-full border border-blue-900/50 bg-gradient-to-r from-blue-950/80 to-transparent">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full bg-blue-400 rounded-full opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
              </span>
              <span className="text-sm font-medium tracking-wide text-blue-50/90">
                Crafting Excellence at{" "}
                <a href="#" className="text-white underline transition-colors hover:text-blue-300 decoration-blue-800 underline-offset-4">
                  Horus Automation
                </a>
              </span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h1 className="text-7xl font-bold leading-tight text-slate-100">
              I'm Azhari 
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <p className="text-lg text-slate-400">
              Jr. Software Engineer with 2 years of experience in Software, Web, Mobile, AI and IoT Development.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <div className="flex gap-4">
              <Link to="/about">
                <button className="flex items-center gap-2 px-6 py-3 font-medium text-slate-300 transition border border-neutral-800 rounded-lg shadow-lg hover:bg-neutral-900 hover:text-white">
                  More About Me <ArrowRight size={20} />
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-6 py-3 font-medium transition border rounded-lg border-neutral-800 text-slate-300 hover:bg-neutral-900 hover:text-white">
                  Catch Me
                </button>
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="flex gap-6 pt-4 text-slate-500">
              <a href="https://github.com/rasyidinazhari" className="transition hover:text-blue-400" target='_blank' rel="noreferrer"><Github size={18} /></a>
              <a href="https://www.linkedin.com/in/rasyidinazhari/" className="transition hover:text-blue-400" target='_blank' rel="noreferrer"><Linkedin size={18} /></a>
              <a href="mailto:rasyidinazhari@gmail.com" className="transition hover:text-blue-400"><Mail size={18} /></a>
            </div>
          </FadeIn>
        </div>

        {/* Image Placeholder */}
        <PixelCard 
        variant="blue" 
        className="hidden md:flex md:w-1/2 h-96 justify-center"
      >
       
      </PixelCard>
      </section>
      <br />
      <br />
      <br />
      <br />

      {/* --- FEATURED PROJECTS SECTION --- */}
      <section className="bg-[#0C0C0C] py-20 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4">
          
          <FadeIn>
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-100">
                  Currated <span className="text-blue-500">Projects</span>
                </h2>
                <p className="text-slate-400 mt-2">Exploration of code and digital solutions.</p>
              </div>
              <Link to="/projects" className="text-slate-400 hover:text-white font-medium flex items-center gap-1 transition-colors">
                View all projects <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>

          {/* UBAH DARI GRID KE FLEX LIST */}
          <div className="flex flex-col gap-8">
            {projects.slice(0, 3).map((project, index) => (
              // Staggered delay: kartu muncul berurutan (0.2s, 0.3s, 0.4s)
              <FadeIn key={project.id} delay={index * 0.1}>
                <Link to={`/projects/${project.id}`} className="block">
                  <ProjectCard 
                    title={project.title}
                    desc={project.desc}
                    tech={project.tech}
                    image={project.image}
                  />
                </Link>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>

      {/* --- LATEST BLOG SECTION --- */}
      <section className="bg-[#0C0C0C] py-20 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-4">
           
           <FadeIn>
             <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-100">
                  Featured <span className="text-blue-500">Posts</span>
                </h2>
                <p className="text-slate-400 mt-2">Sharing knowledge about technology.</p>
              </div>
              <Link to="/blog" className="text-slate-400 hover:text-white font-medium flex items-center gap-1 transition-colors">
                View all posts <ArrowRight size={16} />
              </Link>
            </div>
           </FadeIn>

          {/* UBAH DARI GRID KE FLEX COLUMN */}
          <div className="flex flex-col gap-8">
            {blogs.slice(0, 3).map((blog, index) => (
              <FadeIn key={blog.id} delay={index * 0.1}>
                <Link to={`/blog/${blog.id}`} className="block">
                  <BlogCard 
                    title={blog.title}
                    date={blog.date}
                    excerpt={blog.excerpt}
                    readTime={blog.readTime}
                    views={blog.views}
                    tags={blog.tags}
                    image={blog.image}
                  />
                </Link>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;
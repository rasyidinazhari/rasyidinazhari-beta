import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, Calendar, User, Eye, Heart, 
  Clock, Hash, Share2, List 
} from 'lucide-react';
import { blogs } from '../data';
// 1. Import FadeIn
import { FadeIn } from '../components/FadeIn';

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === Number(id));

  const generateSlug = (text) => {
    return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
  };

  if (!blog) {
    return (
      <div className="min-h-screen pt-32 text-center bg-[#0C0C0C] text-slate-300">
        <h2 className="text-2xl">Artikel tidak ditemukan</h2>
        <Link to="/blog" className="text-blue-500 hover:underline mt-4 block">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#0C0C0C] text-slate-300">
      
      {/* Progress Bar (Opsional) */}
      <div className="fixed top-0 left-0 w-full h-1 bg-neutral-800 z-50">
        <div className="h-full bg-blue-600 w-0" id="progress-bar"></div> 
      </div>

      <div className="max-w-6xl px-4 mx-auto">
        
        {/* Tombol Kembali */}
        <FadeIn>
          <Link to="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-400 mb-8 transition group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Blog</span>
          </Link>
        </FadeIn>

        {/* --- HEADER ARTIKEL --- */}
        {/* Bungkus Header dengan FadeIn, delay 0.1s */}
        <FadeIn delay={0.1} className="mb-12 border-b border-neutral-900 pb-12">
          {/* Tags */}
          <div className="flex gap-2 mb-4">
            {blog.tags && blog.tags.map((tag, idx) => (
              <span key={idx} className="px-3 py-1 text-xs font-medium text-blue-400 bg-blue-900/10 border border-blue-900/20 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-slate-100 leading-tight mb-6">
            {blog.title}
          </h1>

          {/* Meta Info Bar */}
          <div className="flex flex-wrap items-center gap-y-4 gap-x-8 text-sm text-slate-400">
            {/* Author */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs">
                {blog.author.charAt(0)}
              </div>
              <span className="text-slate-200 font-medium">{blog.author}</span>
            </div>

            {/* Date & Read Time */}
            <div className="flex items-center gap-6 border-l border-neutral-800 pl-6">
              <span className="flex items-center gap-2"><Calendar size={16} /> {blog.date}</span>
              <span className="flex items-center gap-2"><Clock size={16} /> {blog.readTime}</span>
            </div>

            {/* Stats (Likes & Views) */}
            <div className="flex items-center gap-6 md:ml-auto">
              <span className="flex items-center gap-2 text-pink-500/80" title="Likes">
                <Heart size={18} fill="currentColor" className="bg-pink-500/10 p-0.5 rounded-sm" /> 
                <span className="font-mono">{blog.likes}</span>
              </span>
              <span className="flex items-center gap-2 text-slate-500" title="Views">
                <Eye size={18} /> 
                <span className="font-mono">{blog.views}</span>
              </span>
            </div>
          </div>
        </FadeIn>


        {/* --- MAIN LAYOUT (Content + ToC) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* KIRI: Konten Artikel (8 Kolom) */}
          <article className="lg:col-span-8 space-y-12">
            {blog.sections?.map((section, index) => (
              // Bungkus setiap section dengan FadeIn, delay bertahap
              <FadeIn key={index} delay={0.2 + (index * 0.1)}>
                <div id={generateSlug(section.title)} className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-slate-100 mb-4 flex items-center gap-3">
                    <span className="text-blue-500 text-lg opacity-50">#</span>
                    {section.title}
                  </h2>
                  <p className="text-slate-400 leading-8 text-lg">
                    {section.content}
                  </p>
                  <p className="text-slate-400 leading-8 text-lg mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem.
                  </p>
                </div>
              </FadeIn>
            ))}
            
            {/* Share Section di Bawah Artikel */}
            <FadeIn delay={0.5} className="pt-8 mt-12 border-t border-neutral-900 flex items-center justify-between">
               <span className="text-slate-500">Thanks for reading!</span>
               <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 text-slate-300 hover:text-white transition">
                  <Share2 size={16} /> Share
               </button>
            </FadeIn>
          </article>


          {/* KANAN: Table of Contents Box (4 Kolom) */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-28 space-y-8">
              
              {/* Bungkus Box ToC dengan FadeIn */}
              <FadeIn delay={0.3}>
                <div className="p-6 rounded-xl border border-neutral-800 bg-[#111] shadow-xl shadow-black/50">
                  <nav className="flex flex-col gap-1">
                    {blog.sections?.map((section, index) => (
                      <a 
                        key={index}
                        href={`#${generateSlug(section.title)}`}
                        className="text-sm text-slate-400 hover:text-blue-400 hover:translate-x-1 py-2 px-2 transition-all duration-300 border-l-2 border-transparent hover:border-blue-500 hover:bg-neutral-900/50 rounded-r block"
                      >
                        {section.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </FadeIn>

            </div>
          </aside>

        </div>

      </div>
    </div>
  );
};

export default BlogDetail;
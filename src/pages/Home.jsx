import React from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen pt-20 bg-[#0C0C0C]">
      
      {/* Hero Section */}
      <section className="flex flex-col-reverse items-center max-w-6xl gap-10 px-4 py-20 mx-auto md:flex-row">
        
        {/* Text Content */}
        <div className="space-y-6 md:w-1/2">
          {/* Badge: bg-blue-100 -> bg-blue-900/30 (transparan), text-blue-600 -> text-blue-400 (lebih terang) */}
          {/* <span className="px-3 py-1 text-sm font-semibold text-blue-400 border border-blue-800 rounded-full bg-blue-900/30">
             Crafting Experiences at <a href="#" className='text-blue-400 hover:text-blue-300'>Horus Automation</a>
          </span> */}

        <div className="flex items-center gap-3 w-fit px-4 py-1.5 rounded-full border border-blue-900/50 bg-gradient-to-r from-blue-950/80 to-transparent">
            {/* Status Dot dengan efek Glow */}
            <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full bg-blue-400 rounded-full opacity-75 animate-ping"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
            </span>

            {/* Teks dengan Glassmorphism effect */}
            <span className="text-sm font-medium tracking-wide text-blue-50/90">
            Crafting Experiences at{" "}
                <a href="#" className="text-white underline transition-colors hover:text-blue-300 decoration-blue-800 underline-offset-4">
                Horus Automation
                </a>
             </span>
        </div>
          
          {/* Heading: text-gray-900 -> text-slate-100 */}
          <h1 className="text-5xl font-bold leading-tight text-slate-100">
            Hi, <span className="text-blue-500">Under Maintenance</span> <br /> 
          </h1>
          
          {/* Paragraph: text-gray-600 -> text-slate-400 */}
          <p className="text-lg text-slate-400">
            I work with React Ecosystem, and write to teach people how to rebuild and redefine fundamental concepts through mental models.
          </p>
          
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-6 py-3 font-medium text-white transition bg-blue-600 rounded-lg shadow-lg hover:bg-blue-500 shadow-blue-500/20">
              Lihat Project <ArrowRight size={20} />
            </button>
            
            {/* Secondary Button: border-gray-300 -> border-[#0C0C0C], hover:bg-gray-100 -> hover:bg-[#0C0C0C] */}
            <button className="px-6 py-3 font-medium transition border rounded-lg border-[#0C0C0C] text-slate-300 hover:bg-[#0C0C0C]">
              Kontak Saya
            </button>
          </div>

          {/* Social Icons: text-gray-500 -> text-slate-500, hover:text-blue-600 -> hover:text-blue-400 */}
          <div className="flex gap-6 pt-4 text-slate-500">
            <a href="#" className="transition hover:text-blue-400"><Github size={24} /></a>
            <a href="#" className="transition hover:text-blue-400"><Linkedin size={24} /></a>
            <a href="#" className="transition hover:text-blue-400"><Mail size={24} /></a>
          </div>
        </div>

        {/* Image Placeholder */}
        <div className="flex justify-center md:w-1/2">
          {/* Ubah gradient sedikit agar lebih 'pop' di background gelap */}
          <div className="w-80 h-80 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.3)]">
             <span className="font-bold text-white text-9xl opacity-20">{`</>`}</span>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      {/* bg-white -> bg-[#0C0C0C], border-gray-100 -> border-[#0C0C0C] */}
      <section className="py-10 border-t bg-[#0C0C0C] border-[#0C0C0C]">
        <div className="max-w-6xl px-4 mx-auto text-center">
          <p className="mb-6 font-medium text-slate-500">Tech Stack Favorit</p>
          {/* Grayscale icons, saat hover warnanya muncul */}
          <div className="flex justify-center gap-8 transition-all duration-500 text-slate-600 grayscale hover:grayscale-0">
            <span className="font-bold text-2xl hover:text-[#61DAFB] cursor-default">React</span>
            <span className="font-bold text-2xl hover:text-[#38B2AC] cursor-default">Tailwind</span>
            <span className="font-bold text-2xl hover:text-[#3178C6] cursor-default">TypeScript</span>
            <span className="font-bold text-2xl hover:text-[#339933] cursor-default">Node.js</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
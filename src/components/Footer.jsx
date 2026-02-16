import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-[#0C0C0C] bg-[#0C0C0C]">
      <div className="max-w-6xl px-4 py-8 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <span className="text-sm text-slate-400">© {new Date().getFullYear()} rasyidinazhari.</span>
          <p className="text-sm text-slate-500">All rights reserved.</p>
        </div>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-4">
            <a href="#" className="text-sm text-slate-400 hover:text-blue-400"><Link to="/projects">Project</Link></a>
            <a href="#" className="text-sm text-slate-400 hover:text-blue-400"><Link to="/about">About</Link></a>
            <a href="#" className="text-sm text-slate-400 hover:text-blue-400"><Link to="/contact">Contact</Link></a>
          </nav>

          <div className="flex gap-4 text-slate-500">
            <a href="https://github.com/rasyidinazhari" className="transition hover:text-blue-400" target='_blank'><Github size={18} /></a>
            <a href="https://www.linkedin.com/in/rasyidinazhari/" className="transition hover:text-blue-400" target='_blank'><Linkedin size={18} /></a>
            <a href="mailto:rasyidinazhari@gmail.com" className="transition hover:text-blue-400"><Mail size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
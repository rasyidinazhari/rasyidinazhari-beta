import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    // Ubah bg-white/80 menjadi bg-[#0C0C0C]
    // Tambahkan border-b border-[#0C0C0C] agar ada garis pemisah halus
    <nav className="fixed top-0 z-50 w-full border-b bg-[#0C0C0C] backdrop-blur-md border-[#0C0C0C]">
      <div className="flex items-center justify-between max-w-6xl px-4 py-4 mx-auto">
        {/* Ubah text-gray-900 jadi text-slate-100 */}
        <h1 className="text-2xl font-bold text-slate-100">
          Eldiablo<span className="text-blue-500">.</span>
        </h1>
        
        {/* Ubah warna teks menu */}
        <ul className="flex space-x-8 font-medium text-slate-400">
          <li className="transition cursor-pointer hover:text-blue-400"><Link to="/">Home</Link></li>
          <li className="transition cursor-pointer hover:text-blue-400"><Link to="/projects">Project</Link></li>
          <li className="transition cursor-pointer hover:text-blue-400"><Link to="/blog">Blog</Link></li>
          <li className="transition cursor-pointer hover:text-blue-400"><Link to="/about">About</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
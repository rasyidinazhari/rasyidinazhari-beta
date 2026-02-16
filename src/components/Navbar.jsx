import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-[#0C0C0C] backdrop-blur-md border-[#0C0C0C]">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand / Logo (ke tengah pada layout sebelumnya, sekarang kiri) */}
          {/* <div className="flex items-center">
            <Link to="/" className="text-lg font-semibold text-slate-100">
              Rasyidinazhari<span className="text-blue-500">.</span>
            </Link>
          </div> */}

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center space-x-8 font-medium text-slate-400">
            <li className="transition cursor-pointer hover:text-blue-400"><Link to="/">Home</Link></li>
            <li className="transition cursor-pointer hover:text-blue-400"><Link to="/projects">Project</Link></li>
            <li className="transition cursor-pointer hover:text-blue-400"><Link to="/blog">Blog</Link></li>
            <li className="transition cursor-pointer hover:text-blue-400"><Link to="/about">About</Link></li>
            <li className="transition cursor-pointer hover:text-blue-400"><Link to="/contact">Contact</Link></li>
          </ul>

          {/* Mobile controls */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={open}
              className="p-2 rounded-md text-slate-400 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu (slide down) */}
        <div
          className={`md:hidden overflow-hidden transition-max-h duration-300 ease-in-out ${open ? 'max-h-96' : 'max-h-0'}`}
        >
          <ul className="flex flex-col gap-3 py-4 text-slate-400">
            <li onClick={() => setOpen(false)} className="px-2 py-2 rounded-md hover:bg-slate-900/30 transition">
              <Link to="/">Home</Link>
            </li>
            <li onClick={() => setOpen(false)} className="px-2 py-2 rounded-md hover:bg-slate-900/30 transition">
              <Link to="/projects">Project</Link>
            </li>
            <li onClick={() => setOpen(false)} className="px-2 py-2 rounded-md hover:bg-slate-900/30 transition">
              <Link to="/blog">Blog</Link>
            </li>
            <li onClick={() => setOpen(false)} className="px-2 py-2 rounded-md hover:bg-slate-900/30 transition">
              <Link to="/about">About</Link>
            </li>
            <li onClick={() => setOpen(false)} className="px-2 py-2 rounded-md hover:bg-slate-900/30 transition">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Home from './pages/Home';
import About from './pages/About';
import ProjectDetail from './pages/ProjectDetail';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';

// Placeholder komponen untuk halaman lain agar tidak error dulu
// const Projects = () => <div className="pt-24 text-2xl text-center">Halaman Projects</div>;
// const Blog = () => <div className="pt-24 text-2xl text-center">Halaman Blog</div>;
// const About = () => <div className="pt-24 text-2xl text-center">Halaman About</div>;

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans text-gray-800 bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
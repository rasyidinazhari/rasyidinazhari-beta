import React, { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Twitter, Phone } from 'lucide-react';
// 1. Import FadeIn
import { FadeIn } from '../components/FadeIn'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulasi pengiriman data
    setTimeout(() => {
      console.log('Form Submitted:', formData);
      alert('Pesan berhasil dikirim!');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-20 bg-[#0C0C0C] text-slate-300">
      
      {/* --- HEADER SECTION --- */}
      <section className="max-w-6xl px-4 mx-auto py-12 text-center md:text-left">
        {/* Bungkus konten header dengan FadeIn */}
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/10 border border-blue-900/20 text-blue-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Available for hire
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
            Let's <span className="text-blue-500">Connect.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Interested in collaborating or just saying hello? Feel free to send me a message.
            I'm always open to discussions about technology, coding, or interesting projects.
          </p>
        </FadeIn>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="max-w-6xl px-4 mx-auto pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* LEFT COLUMN: Contact Info */}
          {/* Gunakan FadeIn sebagai wrapper dengan class yang sama, tambah delay */}
          <FadeIn delay={0.2} className="space-y-8">
            
            {/* Info Cards */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-blue-500/30 transition-colors">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-slate-100 font-bold mb-1">Email</h3>
                  <a href="mailto:rasyidinazhari@gmail.com" className="text-slate-400 hover:text-blue-400 transition">
                    rasyidinazhari@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-blue-500/30 transition-colors">
                <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-slate-100 font-bold mb-1">Location</h3>
                  <p className="text-slate-400">
                    Surakarta, Indonesia
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-slate-100 font-bold mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <a href="https://github.com/rasyidinazhari" className="transition hover:text-blue-400" target='_blank' rel="noreferrer"><Github size={18} /></a>
                <a href="https://www.linkedin.com/in/rasyidinazhari/" className="transition hover:text-blue-400" target='_blank' rel="noreferrer"><Linkedin size={18} /></a>
              </div>
            </div>

          </FadeIn>

          {/* RIGHT COLUMN: Contact Form */}
          {/* Gunakan FadeIn sebagai wrapper card form, delay lebih lama (0.4s) */}
          <FadeIn delay={0.4} className="bg-[#0A0A0A] p-8 rounded-3xl border border-neutral-800 shadow-2xl">
            <h3 className="text-2xl font-bold text-slate-100 mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-400">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full bg-[#111] border border-neutral-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition placeholder:text-slate-600"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-400">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full bg-[#111] border border-neutral-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition placeholder:text-slate-600"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-400">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Ceritakan tentang proyek Anda..."
                  className="w-full bg-[#111] border border-neutral-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition placeholder:text-slate-600 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </FadeIn>

        </div>
      </section>
    </div>
  );
};

export default Contact;
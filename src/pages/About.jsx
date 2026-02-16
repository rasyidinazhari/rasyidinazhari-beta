import React from 'react';
import { User, Briefcase, Calendar, MapPin } from 'lucide-react';
import { experiences } from '../data';
import { FadeIn } from '../components/FadeIn';
import ProfileCard from '..//components/ProfileCard';

// --- DATA TECH STACK & TOOLTIP ---
const techStack = [
  {
    name: "React",
    desc: "Library utama yang saya gunakan untuk membangun UI interaktif berbasis komponen.",
    sub: "ps: Versi 19 coming soon!",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.182c5.422 0 9.818 4.396 9.818 9.818S17.422 21.818 12 21.818 2.182 17.422 2.182 12 6.578 2.182 12 2.182zM12 5.455c-3.615 0-6.545 2.93-6.545 6.545s2.93 6.545 6.545 6.545 6.545-2.93 6.545-6.545-2.93-6.545-6.545-6.545-6.545-6.545-6.545-6.545-2.93-6.545-6.545-6.545z" fill="none"/><circle cx="12" cy="12" r="2" /><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="10" ry="4.5" cx="12" cy="12" /><ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(60 12 12)" /><ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(120 12 12)" /></g></svg>
  },
  {
    name: "Next.js",
    desc: "Currently my go-to framework because of the static generation, dynamic paths, and built-in API.",
    sub: "ps: I like pages folder better than the new one.",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm-1 5v2h-2v3h2v2H6V7h5zm5 0v2h-2v3h2v2h-4V7h4z"/></svg>
  },
  {
    name: "TypeScript",
    desc: "Menambahkan static typing untuk menghindari bug saat runtime. Sangat membantu di project skala besar.",
    sub: "Wajib dipakai di tahun 2026.",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M2 2h20v20H2V2zm16.485 15.655c1.23 0 1.965-.57 1.965-1.635 0-1.125-.9-1.545-2.13-2.04l-.555-.225c-.87-.36-1.14-.615-1.14-1.125 0-.615.525-.975 1.305-.975.84 0 1.275.345 1.365.93h1.425c-.12-1.305-1.245-2.085-2.775-2.085-1.44 0-2.49.81-2.49 2.16 0 1.185.885 1.65 2.205 2.145l.51.21c1.035.39 1.305.645 1.305 1.26 0 .735-.63 1.11-1.545 1.11-1.23 0-1.785-.51-1.89-1.38H14.63c.135 1.62 1.515 2.55 3.045 2.55zm-5.85 0h1.665V8.922h-1.665v7.243c0 1.035.435 1.485 1.35 1.485h.33v-1.17h-.105c-.435 0-.585-.18-.585-.645V8.922h-2.145V7.632h5.79v1.29H12.635v8.733z"/></svg>
  }
];

const About = () => {
  const currentJob = experiences.find((item) => item.id === 1);

  return (
    <div className="min-h-screen pt-20 bg-[#0C0C0C] text-slate-300">
      
      {/* --- HEADER SECTION --- */}
      <section className="max-w-6xl px-4 mx-auto py-10">
        <FadeIn>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="p-2 rounded-lg bg-blue-900/20 border border-blue-900/30">
                  <User className="text-blue-400" size={20} />
            </div>
            <h1 className="text-3xl font-bold text-slate-100">About Me</h1>
          </div>
        </FadeIn>
      </section>

      {/* --- BIO SECTION --- */}
      <section className="max-w-6xl px-4 mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Photo Placeholder */}
          <div className="space-y-6">
          <FadeIn delay={0.2} className="flex justify-center md:justify-start">
            <div> 
            <ProfileCard
                name="Wisnu R Azhari"
                title="Software Engineer"
                handle="rasyidinazhari"
                status="Online"
                contactText="Contact Me"
                avatarUrl="assets/wisnu.png"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log('Contact clicked')}
                behindGlowColor="rgba(125, 190, 255, 0.67)"
                iconUrl="/assets/demo/iconpattern.png"
                behindGlowEnabled
                innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
            />
            </div>
          </FadeIn>
          </div>

          {/* Right: Info */}
          <div className="space-y-6">
            <FadeIn delay={0.3}>
              <div>
                <h2 className="text-3xl font-bold text-slate-100">Wisnu Rasyidin Azhari</h2>
                <div className="flex items-center gap-2 mt-2 text-blue-400">
                  <Briefcase size={18} />
                  <span className="text-sm font-medium tracking-wide">
                    {currentJob?.role} — {currentJob?.company}
                  </span>
                </div>
              </div>

              <p className="text-slate-400 leading-relaxed text-lg mt-4">
                Hello! You can call me <span className=" font-bold text-slate-100" >Azhari</span>.  I am a Software & Embedded Engineer including Web, Mobile, AI, and IoT.
              </p>
              <p className="text-slate-400 leading-relaxed text-lg mt-4">
                I was born in 2004 in Surakarta, Indonesia. My journey didn't start with a clear path into Software Engineering. in fact, I didn't even know the term back then. It all began during my Junior High School years when I started tinkering with Blogger templates out of curiosity.
              </p>
              <p className="text-slate-400 leading-relaxed text-lg mt-4">
                From there, I dove deeper into web development, which eventually led me to university. It was there that I was formally introduced to the world of Software Engineering. 
              </p>
              {/* <p className="text-slate-400 leading-relaxed text-lg mt-4">
                Today, my focus has expanded beyond the browser. I am passionate about exploring the convergence of Web and Mobile development, while diving deeper into the realms of AI and IoT/Embedded systems, always driven by a continuous desire to learn and build.
              </p> */}
            </FadeIn>

            {/* --- TECH STACK WITH TOOLTIP --- */}
            <FadeIn delay={0.4} className="pt-4">
              <p className="text-sm text-slate-500 mb-4 font-medium uppercase tracking-wider">Here are my current favorite tech stack:</p>
              
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, idx) => (
                  <div key={idx} className="relative group flex items-center justify-center">
                    
                    {/* ICON TRIGGER */}
                    <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-slate-400 hover:text-white hover:border-neutral-600 transition-all duration-300 cursor-pointer">
                      {tech.icon}
                    </div>

                    {/* TOOLTIP CONTENT (UPDATED) */}
                    <div className="
                      invisible opacity-0 group-hover:visible group-hover:opacity-100 
                      transition-all duration-200 z-[99]
                      
                      /* Mobile Style (Fixed di bawah) */
                      fixed left-4 right-4 bottom-6 w-auto translate-y-2 group-hover:translate-y-0
                      
                      /* Desktop Style (Floating di atas) */
                      md:absolute md:bottom-full md:left-1/2 md:-translate-x-1/2 md:w-72 md:mb-3 
                      md:right-auto md:top-auto md:translate-y-2
                      
                      p-4 bg-[#0A0A0A] border border-neutral-800 rounded-xl shadow-2xl text-left
                    ">
                      <div className="flex items-center gap-2 mb-2 pb-2 border-b border-neutral-800/50">
                        <div className="w-5 h-5 text-white">
                          {tech.icon}
                        </div>
                        <span className="font-bold text-slate-100 text-sm">{tech.name}</span>
                      </div>
                      <p className="text-sm text-neutral-400 leading-relaxed mb-2">
                        {tech.desc}
                      </p>
                      {tech.sub && (
                        <p className="text-xs text-neutral-500 italic">
                          {tech.sub}
                        </p>
                      )}
                      {/* Panah Kecil (Hanya muncul di Desktop) */}
                      <div className="hidden md:block absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0A0A0A] border-b border-r border-neutral-800 rotate-45"></div>
                    </div>

                  </div>
                ))}
              </div>
            </FadeIn>
            {/* --- END TECH STACK --- */}

          </div>
        </div>
      </section>

      {/* --- EXPERIENCE SECTION --- */}
      <section className="max-w-6xl px-4 mx-auto py-16 mt-8 border-t border-neutral-900">
        <FadeIn delay={0.4}>
          <div className="mb-10 flex items-center gap-3 justify-center md:justify-start">
           <div className="p-2 rounded-lg bg-blue-900/20 border border-blue-900/30">
                <Calendar className="text-blue-400" size={20} />
            </div>
            <h3 className="text-2xl font-bold text-slate-100">Experiences</h3>
          </div>
        </FadeIn>

        <div className="space-y-12 relative border-l border-neutral-800 ml-3 md:ml-0 md:border-l-0">
          {experiences.map((exp, index) => (
            // Bungkus setiap experience item dengan FadeIn, delay bertahap
            <FadeIn key={exp.id} delay={0.5 + (index * 0.1)}>
              <div className="flex flex-col md:flex-row md:items-start gap-6 relative">
                {/* Timeline */}
                <div className="md:w-48 text-slate-400 flex-shrink-0 md:text-right pl-6 md:pl-0">
                   <span className="absolute -left-[5px] md:hidden w-2.5 h-2.5 rounded-full bg-blue-500 border-4 border-[#0C0C0C]"></span>
                   <div className="inline-block px-3 py-1 text-xs font-mono bg-neutral-900 border border-neutral-800 rounded-full text-blue-400 mb-2 md:mb-0">
                      {exp.period}
                   </div>
                </div>

                {/* Content */}
                <div className="flex-1 pl-6 md:pl-0 border-l md:border-l-0 border-neutral-800 md:border-transparent">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h4 className="text-xl font-bold text-slate-100">{exp.role}</h4>
                  </div>
                  
                  <div className="flex items-center gap-3 text-slate-500 text-sm mb-4">
                    <span className="font-medium text-slate-300">{exp.company}</span>
                    <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} /> {exp.location}
                    </span>
                  </div>

                  <p className="text-slate-400 leading-relaxed">
                    {exp.desc}
                  </p>
                  
                  <div className="text-slate-400 leading-relaxed space-y-2">
                    {Array.isArray(exp.point) ? (
                    <ul className="list-none space-y-2">
                        {exp.point.map((point, i) => (
        <li key={i} className="flex items-start gap-2">
          {/* Karakter bullet atau strip sesuai permintaan Anda */}
          <span className="text-blue-500 mt-1.5 flex-shrink-0 text-[10px]">●</span>
          <span>{point}</span>
        </li>
      ))}
    </ul>
  ) : (
    <p>{exp.point}</p>
  )}
</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
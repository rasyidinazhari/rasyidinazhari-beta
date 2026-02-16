export const projects = [
  {
    id: 1,
    title: "Plant Disease Detection",
    desc: "Plant disease detection application using Computer Vision...",
    longDesc: "This is a long description of how the CNN algorithm works to detect diseases in plant leaves...",
    tech: ["Python", "OpenCV", "AWS", "Flutter"],
    githubLink: "https://github.com/username/repo",
    liveLink: "https://demo-app.com",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=1000&auto=format&fit=crop", // Contoh Image
    link: "#",
    status: "Deployed",      // Bisa: Development, Completed, Maintenance
    type: "Mobile Application", // Bisa: Web App, Mobile App, IoT
    year: "2024",
    githubLink: "#",
    liveLink: "#",
    sections: [
      {
        title: "Background",
        content: "Farmers often face difficulties in manually monitoring large farmlands. Late detection of plant diseases can lead to failed harvests. Therefore, an automated solution using drones for aerial surveillance is needed."
      },
      {
        title: "Technical Challenges",
        content: "The main challenge is the stability of the DJI Tello drone when capturing images in strong wind conditions, as well as the latency in transferring images from the drone to the server for real-time processing."
      },
      {
        title: "System Architecture",
        content: "This system consists of three main components: Drone as an edge device, Python (Flask) server for image processing using OpenCV & Deep Learning, and a Flutter mobile application as the user interface to receive notifications."
      },
      {
        title: "Results & Conclusion",
        content: "The system successfully detected 3 types of leaf diseases with an accuracy of 85%. However, the drone's flight duration remains a major limitation that needs improvement in the next version."
      }
    ]
  }
];

// Data Blog/Artikel
export const blogs = [
  {
    id: 1,
    title: "Getting started with Computer Vision",
    slug: "Getting started with Computer Vision", // Opsional, untuk URL cantik (tapi kita pakai ID dulu)
    date: "10 Feb 2026",
    excerpt: "Exploring the benefits and trade-offs of using RSC in your Next.js applications for better performance.",
    author: "Wisnu Rasyidin",
    likes: 124,
    views: 1450,
    readTime: "5 min read",
    link: "#",
    tags: ["Python", "CV", "AI"],
    // Konten kita pecah jadi array object agar mudah membuat ToC
    sections: [
      {
        title: "What is Computer Vision?",
        content: "Computer vision is a field of computer science that trains computers to interpret and understand the visual world. Using digital images from cameras and videos, along with deep learning models, machines can accurately identify and classify objects."
      },
      {
        title: "OpenCV Installation",
        content: "To get started, you need to install the OpenCV library. Make sure Python is installed, then run 'pip install opencv-python' in your terminal. This is a crucial first step before diving into image processing."
      },
      {
        title: "Reading the First Image",
        content: "After successful installation, we can try reading an image. Use the cv2.imread() function to load an image into memory, and cv2.imshow() to display it in a window."
      },
      {
        title: "Conclusion",
        content: "Computer Vision opens up many innovation opportunities. From face recognition to autonomous vehicles, it all starts with simple pixel manipulation."
      }
    ]
  }
];

export const experiences = [
  {
    id: 1,
    role: "Fullstack Engineer",
    company: "Karsadev",
    period: "Feb 2026 — Present",
    location: "Singapore, Remote",
    desc: "Building and improving the company's main product, an AI-powered automation platform for small businesses. Responsibilities include developing new features, optimizing performance, and collaborating with cross-functional teams to deliver high-quality software solutions."
  },
  {
    id: 2,
    role: "Software Quality Assurance",
    company: "PT Len Industri",
    period: "Aug 2025 — Jan 2026",
    location: "Bandung, Indonesia",
    desc: "Indonesian state-owned enterprise specializing in strategic technology solutions, including electronics, transportation systems, energy, defense, and ICT. Responsibilities include designing and executing test cases, identifying and documenting software defects, and collaborating with development teams to ensure high-quality software releases."
  },
  {
    id: 3,
    role: "Programming Assistant",
    company: "Amikom Surakarta",
    period: "Apr 2025 — Aug 2025",
    location: "Surakarta, Indonesia",
    desc: "Supporting the lecturer and assisting students during lab sessions. Responsibilities include setting up programming environments, troubleshooting code issues, and providing guidance on programming assignments."
  },
  {
    id: 4,
    role: "Fullstack Engineer",
    company: "Winnicode",
    period: "Mar 2025 — Apr 2025",
    location: "Bandung, Indonesia",
    desc: "Indonesian IT Solution company specializing in software development and digital solutions, including web and application development based in Bandung city.",
    // point: [
    //   "Developing and maintaining responsive web interfaces using HTML, CSS, and JavaScript.",
    //   "Developing the backend with Node.js for RE, PHP, and ExpressJS, as well as managing MongoDB and SQL databases using ORM tools like Mongoose and Eloquent.",
    //   "Managing the CI/CD pipeline also Conducting testing and debugging with Mocha and Postman." 
    // ]
  },
  {
    id: 5,
    role: "Frontend Developer",
    company: "Atamagri",
    period: "Aug 2023 — Jan 2024",
    location: "Karanganyar, Indonesia",
    desc: "Startup Company focused on agriculture and agribusiness solutions, providing information and tools to support farmers and agri-based businesses.",
    // point: [
    //   "Developing and maintaining responsive web interfaces using HTML, CSS, and JavaScript.",
    //   "Translating UI/UX designs into functional and user-friendly web pages.",
    //   "Integrating frontend components with backend APIs and dynamic data.",
    //   "Optimizing website performance, accessibility, and cross-browser compatibility.",
    //   "Collaborating with backend developers and designers to deliver features on schedule.",
    //   "Fixing UI bugs and improving existing features based on user feedback.",
    //   "Ensuring code quality through clean, maintainable, and reusable components."
    // ]
  }
];
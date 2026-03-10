export const projects = [
  {
    id: 1,
    title: "Automotive E-commerce Website",
    desc: "a fullstack platform for the sale of motorbikes and cars based on integrated individual showrooms",
    longDesc: "This is a long description of how the CNN algorithm works to detect diseases in plant leaves...",
    tech: ["Vue.js", "Flask", "Tailwind", "Python"],
    githubLink: "https://github.com/rasyidinazhari",
    liveLink: "https://abumotor.vercel.app",
    image: "../assets/abumotor-live.png", // Contoh Image
    link: "#",
    status: "MVP",      // Bisa: Development, Completed, Maintenance
    type: "Web App", // Bisa: Web App, Mobile App, IoT
    year: "2026",
    githubLink: "https://github.com/rasyidinazhari",
    liveLink: "https://abumotor.vercel.app",
    sections: [
      {
        title: "Background",
        content: "This Management Information System was developed to digitize the operational business processes at Abu Motor, a motorcycle dealership that previously relied heavily on manual record-keeping. Dependence on these conventional methods often triggered risks of data loss, inaccurate vehicle stock monitoring, and inefficiencies in daily and monthly sales recapitulation. This project serves as a strategic solution to transform this workflow into an integrated digital platform, ensuring operational and transactional data is recorded precisely and easily monitored by management."
      },
      {
        title: "Technical Challenges",
        content: "Developing this system presented its own technical challenges, particularly in ensuring real-time data synchronization between the sales transaction module and inventory management. The main challenge was designing a robust database structure to handle specific tracking per vehicle unit, such as recording engine and chassis numbers, while simultaneously accommodating automatic stock updates when a transaction occurs. Furthermore, summarizing complex operational data into quickly retrievable and easily understandable analytical reports required efficient query optimization to maintain stable system performance."
      },
      {
        title: "System Architecture",
        content: "Architecturally, this platform was built using a modern web-based application approach that ensures secure data flow from the server side to the user interface. The system relies on a relational database as its storage backbone to manage complex entity relationships, ranging from customer data and transaction history to the availability status of each motorcycle unit. The system design is also modular, separating the core business logic from the user interface, ensuring the application remains responsive and easily scalable for future dealership feature additions."
      },
      {
        title: "Results & Conclusion",
        content: "The implementation of this system effectively improved Abu Motor's operational efficiency, reduced human error in stock recording, and accelerated the process of generating periodic sales reports. As a standout value-add that highlights comprehensive analysis, the architecture and impact of this system's implementation are also being extracted into a scientific journal article draft. In conclusion, this project not only provided a highly valuable, practical business solution for automotive dealership operations but also produced a validated academic study regarding the effectiveness of management digitization."
      }
    ]
  },
  {
    id: 2,
    title: "2D RPG Game with Phaser.js",
    desc: "A simple 2D RPG game built with Phaser.js...",
    longDesc: "This is a long description of the 2D RPG game built with Phaser.js...",
    tech: ["JavaScript", "Phaser.js"],
    githubLink: "https://github.com/rasyidinazhari",
    liveLink: "https://rasyidinazhari.my.id/projects",
    image: "../assets/rpg-2d.png", 
    link: "#",
    status: "Deployed",      
    type: "Web Game", 
    year: "2026",
    githubLink: "https://github.com/rasyidinazhari",
    liveLink: "https://rasyidinazhari.my.id/projects",
    sections: [
      {
        title: "Background",
        content: "This role-playing game (RPG) was developed as an interactive submission for a competition, specifically designed to showcase the rich cultural and geographical landscape of Surakarta. The primary objective was to gamify the exploration of the city, transforming local heritage and landmarks into an engaging digital experience. By blending educational elements with entertainment, the project aimed to introduce players to Surakarta's unique identity through immersive storytelling, virtual exploration, and interactive gameplay."
      },
      {
        title: "Technical Challenges",
        content: "Translating a real-world city into a game environment presented significant hurdles, particularly in designing accurate and engaging mapping that felt authentic yet fun to explore. Developing a robust quest logic system was another major challenge, requiring complex state management to track player progress, handle branching NPC dialogues, and trigger specific narrative events without breaking the game loop. Additionally, creating and refining the user interface (UI) enhancements to be intuitive accommodating inventories, mini-maps, and mission logs required continuous iteration to ensure a seamless and distraction-free player experience."
      },
      {
        title: "System Architecture",
        content: "The game's architecture is built upon a modular, event-driven framework within the game engine, ensuring smooth interactions between the player character and the dynamic environment. The core system is divided into distinct controllers: a quest manager handling mission states and conditions, a spatial mapping system for optimized scene transitions across virtual Surakarta, and a dedicated UI manager rendering real-time on-screen elements. This separation of concerns allows the game to process complex narrative logic and player inputs efficiently without compromising visual rendering performance."
      },
      {
        title: "Results & Conclusion",
        content: "The final product is a fully functional, culturally immersive RPG that successfully translates the essence of Surakarta into a compelling interactive medium. The meticulous attention to map design, intricate quest programming, and UI enhancements resulted in a polished game ready for competitive exhibition. Ultimately, this project demonstrates a strong command of game development mechanics, user experience design, and highlights the potential of interactive media as an innovative tool for regional promotion."
      }
    ]
  },
  {
    id: 3,
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
  },
  
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
    role: "Software & IoT Engineer",
    company: "Self Employed",
    period: "Feb 2026 — Present",
    location: "Indonesia",
    desc: "Building and improving scalable product, an AI-powered automation platform for small businesses. Responsibilities include developing new features, optimizing performance, and collaborating with cross-functional teams to deliver high-quality software solutions."
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
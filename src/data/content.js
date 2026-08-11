// ==========================================================
// روابط وملفات لا تعتمد على اللغة
// ==========================================================
export const links = {
  photo: "/assets/images/profile.jpg",
  cv: "/assets/cv/Ziyad-Ahmed-Aljameel-CV.pdf",
  email: "zyadaljmeel@gmail.com",
  phone: "+966538034838",
  linkedin: "https://linkedin.com/in/ziyad-aljameel",
  github: "",
};

// ==========================================================
// كل نصوص الموقع بالعربي والإنجليزي — عدّل هنا بدون لمس الكومبوننتس
// ==========================================================
export const locales = {
  ar: {
    name: "زياد أحمد الجميل",
    title: "مطوّر Full Stack | مهندس برمجيات (Angular · React · .NET)",
    location: "الرياض، المملكة العربية السعودية",
    bio: "مطوّر Full Stack ومهندس برمجيات بخبرة تتجاوز السنتين في تصميم وصيانة تطبيقات تجارية وأنظمة داخلية باستخدام Angular وReact وASP.NET Core Web API وC# وSQL Server. لدي سجل واضح في تحسين أداء قواعد البيانات، وأتمتة عمليات الفروع، وكتابة كود نظيف وقابل للصيانة ضمن بيئات عمل سريعة الوتيرة. طوّرت مؤخراً مهاراتي في أساسيات الذكاء الاصطناعي التطبيقي، وأسعى للانضمام إلى فريق هندسي طموح.",

    nav: {
      about: "نبذة",
      experience: "الخبرات",
      skills: "المهارات",
      education: "التعليم",
      certificates: "الشهادات",
      contact: "تواصل",
      langToggle: "English",
    },

    hero: {
      downloadCv: "تحميل السيرة الذاتية",
      contactMe: "تواصل معي",
    },

    about: {
      title: "نبذة عني",
    },

    experience: {
      title: "الخبرات العملية",
      items: [
        {
          role: "Full Stack Developer",
          company: "ARCOM",
          period: "يناير 2024 – حتى الآن",
          points: [
            "تطوير وصيانة أنظمة إدارة تجزئة باستخدام Angular وReact وASP.NET Core Web APIs، لدعم العمليات اليومية عبر أكثر من 10 فروع.",
            "تصميم وتحسين قواعد بيانات SQL Server، شامل stored procedures وضبط الاستعلامات، مما خفّض متوسط زمن الاستجابة بنسبة ~30%.",
            "أتمتة عمليات تشغيلية متكررة، وفّرت أكثر من 5 ساعات أسبوعياً من المعالجة اليدوية وقللت الأخطاء التشغيلية.",
            "المشاركة في مراحل التطوير والاختبار والنشر، بالمساهمة في أكثر من 15 إصدار إنتاجي مستقر.",
          ],
        },
        {
          role: "Software Engineer (Co-op)",
          company: "EMART Hail",
          period: "يونيو 2023 – ديسمبر 2023",
          points: [
            "بناء أكثر من 3 أدوات داخلية باستخدام C# و.NET لتسهيل العمليات اليومية لموظفي الفروع.",
            "تحسين تجربة الاستخدام والاتساق البصري للواجهات الداخلية باستخدام HTML وCSS وJavaScript.",
            "إجراء اختبارات وظيفية وتحليل للأنظمة لدعم أداء الأدوات بشكل موثوق.",
          ],
        },
      ],
    },

    skills: {
      title: "المهارات",
      groups: [
        {
          category: "لغات البرمجة",
          items: ["C#", "TypeScript", "JavaScript", "SQL", "Java", "C++", "PHP"],
        },
        {
          category: "الواجهات الأمامية",
          items: ["Angular", "React", "Vue", "HTML5", "CSS3"],
        },
        {
          category: "الواجهات الخلفية",
          items: [
            "ASP.NET Core Web API",
            "REST APIs",
            "JWT Authentication",
            "Clean Architecture",
          ],
        },
        {
          category: "قواعد البيانات",
          items: ["SQL Server", "MySQL"],
        },
        {
          category: "الأدوات",
          items: ["Git", "GitHub", "Visual Studio", "VS Code", "Postman", "Figma"],
        },
        {
          category: "الممارسات",
          items: [
            "البرمجة الكائنية (OOP)",
            "Debugging & Testing",
            "العمل بمنهجية Agile",
          ],
        },
        {
          category: "المهارات الشخصية",
          items: [
            "التنظيم",
            "حل المشكلات",
            "التواصل",
            "إدارة الوقت",
            "العمل الجماعي",
          ],
        },
      ],
    },

    education: {
      title: "التعليم واللغات",
      educationLabel: "التعليم",
      languagesLabel: "اللغات",
      degrees: [
        {
          degree: "بكالوريوس هندسة البرمجيات",
          school: "جامعة حائل",
          period: "تخرّج يناير 2024",
        },
      ],
      languages: [
        { name: "العربية", level: "اللغة الأم" },
        { name: "الإنجليزية", level: "احترافي" },
      ],
    },

    certificates: {
      title: "الشهادات",
      empty: "لا توجد شهادات مضافة بعد.",
      items: [
        {
          title: "Web Application Programming",
          issuer: "معهد الخبراء للتدريب",
          date: "2024",
        },
        {
          title: "Web Application Front-End",
          issuer: "معهد الخبراء للتدريب",
          date: "2024",
        },
        {
          title: "Front-End Development Bootcamp",
          issuer: "Aj Space",
          date: "2024",
        },
        {
          title: "Fundamentals of AI",
          issuer: "SDAIA",
          date: "2025",
        },
        {
          title: "AI Advanced Applications",
          issuer: "SDAIA",
          date: "2025",
        },
        {
          title: "Big Data",
          issuer: "درّوب (صندوق تنمية الموارد البشرية)",
          date: "2025",
        },
        {
          title: "Web Application Development",
          issuer: "درّوب (صندوق تنمية الموارد البشرية)",
          date: "2025",
        },
        {
          title: "تحليل البيانات — تجربة عمل افتراضية",
          issuer: "مؤسسة مسك بالتعاون مع STC",
          date: "2025",
          file: "/assets/certificates/data-analysis-misk-stc.pdf",
        },
      ],
    },

    contact: {
      title: "تواصل معي",
      empty: "لا توجد بيانات تواصل مضافة بعد.",
      labels: {
        email: "الإيميل",
        phone: "الجوال",
        linkedin: "لينكدإن",
        github: "جيت هب",
      },
    },

    footer: {
      rights: "جميع الحقوق محفوظة",
    },
  },

  en: {
    name: "Ziyad Ahmed Aljameel",
    title: "Full Stack Developer | Software Engineer (Angular · React · .NET)",
    location: "Riyadh, Saudi Arabia",
    bio: "Full Stack Developer / Software Engineer with 2+ years of experience designing and maintaining retail and internal business applications using Angular, React, ASP.NET Core Web API, C#, and SQL Server. Proven track record of optimizing database queries, automating store workflows, and delivering clean, maintainable, well-tested code in fast-paced retail environments. Recently expanded skill set into applied AI fundamentals. Seeking to bring strong full stack development capabilities to a growth-focused engineering team.",

    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      education: "Education",
      certificates: "Certificates",
      contact: "Contact",
      langToggle: "العربية",
    },

    hero: {
      downloadCv: "Download CV",
      contactMe: "Contact Me",
    },

    about: {
      title: "About Me",
    },

    experience: {
      title: "Work Experience",
      items: [
        {
          role: "Full Stack Developer",
          company: "ARCOM",
          period: "January 2024 – Present",
          points: [
            "Developed and maintained retail management systems using Angular, React, and ASP.NET Core Web APIs, supporting day-to-day operations across 10+ store locations.",
            "Designed and optimized SQL Server databases, including stored procedures and query tuning, reducing average query response time by approximately 30%.",
            "Automated recurring store workflows, saving an estimated 5+ hours of manual processing per week and minimizing operational errors.",
            "Collaborated across debugging, QA testing, and deployment stages, contributing to 15+ stable production releases through strong problem-solving and organizational skills.",
          ],
        },
        {
          role: "Software Engineer (Co-op)",
          company: "EMART Hail",
          period: "June 2023 – December 2023",
          points: [
            "Built 3+ internal tools with C# and .NET to streamline daily business processes for store staff.",
            "Improved usability and visual consistency of internal interfaces using HTML, CSS, and JavaScript, reducing reported UI issues.",
            "Conducted debugging, functional testing, and system analysis to support reliable tool performance.",
          ],
        },
      ],
    },

    skills: {
      title: "Skills",
      groups: [
        {
          category: "Programming",
          items: ["C#", "TypeScript", "JavaScript", "SQL", "Java", "C++", "PHP"],
        },
        {
          category: "Front-End",
          items: ["Angular", "React", "Vue", "HTML5", "CSS3"],
        },
        {
          category: "Back-End",
          items: [
            "ASP.NET Core Web API",
            "REST APIs",
            "JWT Authentication",
            "Clean Architecture",
          ],
        },
        {
          category: "Databases",
          items: ["SQL Server", "MySQL"],
        },
        {
          category: "Tools",
          items: ["Git", "GitHub", "Visual Studio", "VS Code", "Postman", "Figma"],
        },
        {
          category: "Practices",
          items: [
            "Object-Oriented Programming",
            "Debugging & Testing",
            "Agile Collaboration",
          ],
        },
        {
          category: "Soft Skills",
          items: [
            "Organizational Skills",
            "Problem Solving",
            "Communication",
            "Time Management",
            "Team Collaboration",
          ],
        },
      ],
    },

    education: {
      title: "Education & Languages",
      educationLabel: "Education",
      languagesLabel: "Languages",
      degrees: [
        {
          degree: "Bachelor's Degree in Software Engineering",
          school: "Hail University",
          period: "Graduated January 2024",
        },
      ],
      languages: [
        { name: "Arabic", level: "Native" },
        { name: "English", level: "Professional" },
      ],
    },

    certificates: {
      title: "Certificates",
      empty: "No certificates added yet.",
      items: [
        {
          title: "Web Application Programming",
          issuer: "Experts Institute",
          date: "2024",
        },
        {
          title: "Web Application Front-End",
          issuer: "Experts Institute",
          date: "2024",
        },
        {
          title: "Front-End Development Bootcamp",
          issuer: "Aj Space",
          date: "2024",
        },
        {
          title: "Fundamentals of AI",
          issuer: "SDAIA",
          date: "2025",
        },
        {
          title: "AI Advanced Applications",
          issuer: "SDAIA",
          date: "2025",
        },
        {
          title: "Big Data",
          issuer: "Doroob (HRDF)",
          date: "2025",
        },
        {
          title: "Web Application Development",
          issuer: "Doroob (HRDF)",
          date: "2025",
        },
        {
          title: "Data Analysis — Virtual Work Experience",
          issuer: "Misk Foundation x STC",
          date: "2025",
          file: "/assets/certificates/data-analysis-misk-stc.pdf",
        },
      ],
    },

    contact: {
      title: "Contact Me",
      empty: "No contact details added yet.",
      labels: {
        email: "Email",
        phone: "Phone",
        linkedin: "LinkedIn",
        github: "GitHub",
      },
    },

    footer: {
      rights: "All rights reserved",
    },
  },
};

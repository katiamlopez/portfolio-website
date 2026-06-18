const themeToggle = document.querySelector("#theme-toggle");
const languageToggle = document.querySelector("#language-toggle");
const elements = document.querySelectorAll("[data-i18n]");
const placeholderElements = document.querySelectorAll("[data-i18n-placeholder]");
const contactForm = document.querySelector(".contact-form");
const formStatus = document.querySelector("#form-status");

themeToggle.addEventListener("change", function(){
    document.body.classList.toggle("dark-theme");
});

const translations = {
    en: {
        navContact: "Contact",
        navProjects: "Projects",
        navCertifications: "Certifications",
        navSkills: "Skills & Tools",

        heroSubtitle: "Frontend Developer | UX & Product Thinking",
        heroText: "⭐ Building creative and meaningful digital experiences through code ⭐",
        downloadResume: "Download Resume",

        aboutTitle: "About me",
        aboutText1: "My professional background comes from customer service, human resources, and operations management, where I developed skills in leadership, communication, analysis, documentation, and problem-solving while working with users, processes, performance metrics, and continuous improvement initiatives.",
        aboutText2: "I am currently shaping my career toward Front-End development, combining technical foundations in HTML, CSS, JavaScript, and responsive design with a strong focus on user experience and product thinking. I am interested in creating clear, intuitive, and visually thoughtful interfaces that consider both people’s needs and the goals behind each digital solution.",

        softskill1: "Leadership",
        softskill2: "Problem-solving",
        softskill3: "Communication",
        softskill4: "Performance improvement",
        softskill5: "Analytical thinking",
        softskill6: "Product thinking",
        softskill7: "UX thinking",
        softskill8: "Documentation",

        projects: "Projects",
        caliopeTitle: "Caliope - Reader & Writer Platform 📖",
        caliopeDescription1: "Caliope is a digital platform designed to bring the literary community together within a single ecosystem. The project aims to unify the reading experience by connecting readers, writers, and reviewers in one space, reducing the fragmentation that currently exists across multiple apps and social platforms.",
        caliopeDescription2: "As one of the key contributors to the project, I created the initial concept, conducted market research, and helped define the value proposition. During development, I adapted the original vision into a functional MVP by prioritizing core features, simplifying the visual identity for both light and dark themes, and preparing the project's foundational documentation. I also proposed product improvements focused on user experience and designed the main application screens to help communicate the long-term vision of the platform.",
        caliopeDescription3: "The project is currently being developed using HTML, CSS, Bootstrap, and JavaScript for the frontend, while the backend and database integration are in the early stages of implementation.",

        javasportTitle: "JavaSport - Online Sportswear Store 🏃🏻‍♂️",
        javasportDescription1: "A sportswear e-commerce landing page developed during a hackathon, where the main challenge was coordinating as a team and delivering a functional product in less than 24 hours. Built using HTML, CSS, Bootstrap, and JavaScript, the project focused on creating an engaging online shopping experience for a sports apparel brand.",
        javasportDescription2: "My contribution centered on the CSS architecture, including organizing stylesheet connections, defining global styles, and establishing the project's color palette and typography system to ensure visual consistency across the website.",
        
        pomodoroTitle: "Pomodoro Timer 🍅",
        pomodoroDescription1: "A productivity timer built to help users manage focused work sessions and breaks using the Pomodoro technique. The project includes customizable work intervals, interactive controls, and visual feedback to guide the user through each stage of the session.",
        pomodoroDescription2: "This project was developed using HTML, CSS, and JavaScript, with a focus on DOM manipulation, event handling, timer logic, conditional states, and dynamic UI updates.",
        pomodoroDescription3: "Users can start, pause, and reset the timer, adjust the number of intervals, track their progress through a visual progress bar, and automatically switch between work mode, break mode, and session completion.",
        
        certifications: "Certifications",
        introtojava: "Introduction to java",
        completed2026: "Completed in 2026",

        skills: "Skills & Tools",
        technologies: "Technologies 💻",
        tools: "Tools 🛠️",
        learning: "Currently learning ✨",
        intermediatejs: "Intermediate JavaScript",
        responsive: "Responsive Design",
        uxui: "UX/UI Fundamentals",

        contactme: "Contact me",
        namePlaceholder: "Your name",
        emailPlaceholder: "Your email",
        messagePlaceholder: "Your message",
        sendmsg: "Send message",

        sendingMessage: "Sending message...",
        messageSuccess: "Message sent successfully!",
        messageError: "Something went wrong. Please try again.",

        liveDemo: "Live Demo",
        repository: "View the repository",
        viewCertificate: "View Certificate",

        copyright: "© 2026 Katja.js. Built with HTML5, CSS3 & JavaScript.",
        designed: "⭐ Designed with curiosity, creativity, and a love for learning ⭐",
        curious: "Curious about how this site was built?",
    },
    es: {
        navContact: "Contacto",
        navProjects: "Proyectos",
        navCertifications: "Certificaciones",
        navSkills: "Habilidades y herramientas",

        heroSubtitle: "Desarrolladora Frontend | UX y pensamiento de producto",
        heroText: "⭐ Construyendo experiencias digitales creativas y significativas con código ⭐",
        downloadResume: "Descargar Currículum",

        aboutTitle: "Sobre mí",
        aboutText1: "Mi experiencia profesional viene del servicio al cliente, recursos humanos y gestión de operaciones, donde desarrollé habilidades de liderazgo, comunicación, análisis, documentación y resolución de problemas trabajando con usuarios, procesos, métricas e iniciativas de mejora continua.",
        aboutText2: "Actualmente estoy orientando mi carrera hacia el desarrollo Front-End, combinando bases técnicas en HTML, CSS, JavaScript y diseño responsivo con una mirada enfocada en experiencia de usuario y pensamiento de producto. Me interesa crear interfaces claras, intuitivas y visualmente cuidadas, entendiendo tanto las necesidades de las personas como los objetivos detrás de cada solución digital.",

        softskill1: "Liderazgo",
        softskill2: "Resolución de problemas",
        softskill3: "Comunicación",
        softskill4: "Mejora continua",
        softskill5: "Pensamiento analítico",
        softskill6: "Pensamiento de producto",
        softskill7: "Enfoque UX",
        softskill8: "Documentación",

        projects: "Proyectos",
        caliopeTitle: "Caliope - Plataforma para Lectores & Escritores 📖",
        caliopeDescription1: "Caliope es una plataforma digital diseñada para reunir a la comunidad literaria dentro de un solo ecosistema. El proyecto busca unificar la experiencia de lectura al conectar lectores, escritores y reseñadores en un mismo espacio, reduciendo la fragmentación que actualmente existe entre múltiples aplicaciones y plataformas sociales.",
        caliopeDescription2: "Como una de las principales colaboradoras del proyecto, creé el concepto inicial, realicé investigación de mercado y definí la propuesta de valor. Durante el desarrollo, adapté la visión original a un MVP funcional al priorizar las características principales, simplificar la identidad visual para los modos claro y oscuro, y preparar la documentación base del proyecto. También propuse mejoras de producto enfocadas en la experiencia de usuario y diseñé las pantallas principales de la aplicación para comunicar la visión a largo plazo de la plataforma.",
        caliopeDescription3: "Actualmente, el proyecto se está desarrollando con HTML, CSS, Bootstrap y JavaScript para el frontend, mientras que el backend y la integración con base de datos se encuentran en etapas iniciales de implementación.",

        javasportTitle: "JavaSport - Tienda Online de Ropa Deportiva 🏃🏻‍♂️",
        javasportDescription1: "Landing page de e-commerce de ropa deportiva desarrollada durante un hackathon, donde el principal reto fue coordinarnos como equipo y entregar un producto funcional en menos de 24 horas. Construido con HTML, CSS, Bootstrap y JavaScript, el proyecto se enfocó en crear una experiencia de compra en línea atractiva para una marca de ropa deportiva.",
        javasportDescription2: "Mi contribución se centró en la arquitectura CSS, incluyendo la organización de las conexiones entre hojas de estilo, la definición de estilos globales y el establecimiento de la paleta de colores y el sistema tipográfico del proyecto para asegurar consistencia visual en todo el sitio.",

        pomodoroTitle: "Temporizador Pomodoro 🍅",
        pomodoroDescription1: "Temporizador de productividad creado para ayudar a los usuarios a gestionar sesiones de trabajo enfocadas y descansos usando la técnica Pomodoro. El proyecto incluye intervalos de trabajo personalizables, controles interactivos y retroalimentación visual para guiar al usuario a través de cada etapa de la sesión.",
        pomodoroDescription2: "Este proyecto fue desarrollado con HTML, CSS y JavaScript, con enfoque en manipulación del DOM, manejo de eventos, lógica de temporizador, estados condicionales y actualizaciones dinámicas de la interfaz.",
        pomodoroDescription3: "Los usuarios pueden iniciar, pausar y reiniciar el temporizador, ajustar el número de intervalos, seguir su progreso mediante una barra visual y cambiar automáticamente entre modo de trabajo, modo de descanso y sesión completada.",

        certifications: "Certificaciones",
        introtojava: "Introducción a java",
        completed2026: "Completado en 2026",

        skills: "Habilidades & Herramientas",
        technologies: "Tecnologías 💻",
        tools: "Herramientas 🛠️",
        learning: "Aprendiendo ✨",
        intermediatejs: "JavaScript Intermedio",
        responsive: "Diseño Responsivo",
        uxui: "Fundamentos de UX/UI",

        contactme: "Contáctame",
        namePlaceholder: "Tu nombre",
        emailPlaceholder: "Tu correo",
        messagePlaceholder: "Tu mensaje",
        sendmsg: "Enviar mensaje",

        sendingMessage: "Enviando mensaje...",
        messageSuccess: "¡Mensaje enviado con éxito!",
        messageError: "Algo salió mal. Inténtalo de nuevo.",

        liveDemo: "Demostración en vivo",
        repository: "Ver repositorio",
        viewCertificate: "Ver certificado",

        copyright: "© 2026 Katja.js. Construido con HTML5, CSS3 & JavaScript.",
        designed: "⭐ Diseñado con curiosidad, creatividad y amor por aprender ⭐",
        curious: "¿Quieres saber más sobre el sitio?",
    }
};

languageToggle.addEventListener("change", function() {
  let currentLanguage;

  if (languageToggle.checked) {
    currentLanguage = "es";
  } else {
    currentLanguage = "en";
  }

  elements.forEach(function(element) {
    const translationKey = element.getAttribute("data-i18n");
    element.textContent = translations[currentLanguage][translationKey];
  });

  placeholderElements.forEach(function(element) {
    const translationKey = element.getAttribute("data-i18n-placeholder");
    element.placeholder = translations[currentLanguage][translationKey];
  });
});

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const currentLanguage = languageToggle.checked ? "es" : "en";

  formStatus.textContent = translations[currentLanguage].sendingMessage;

  const formData = new FormData(contactForm);

  fetch(contactForm.action, {
    method: contactForm.method,
    body: formData,
    headers: {
      "Accept": "application/json"
    }
  })
  .then(function(response) {
    if (response.ok) {
      formStatus.textContent = translations[currentLanguage].messageSuccess;
      contactForm.reset();
    } else {
      formStatus.textContent = translations[currentLanguage].messageError;
    }
  })
  .catch(function(error) {
    formStatus.textContent = translations[currentLanguage].messageError;
  });
});
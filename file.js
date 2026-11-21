// Navegación activa y smooth scroll
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelectorAll('.navbar a').forEach(a => a.classList.remove('active'));
    e.target.classList.add('active');
    const target = document.querySelector(e.target.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Portfolio: Filtrar categorías
const categoryButtons = document.querySelectorAll('.category-button');
const workCards = document.querySelectorAll('.work-card');

categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    categoryButtons.forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    const cat = button.getAttribute('data-category');
    workCards.forEach(card => {
      if (card.getAttribute('data-category') === cat) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
    // Al cambiar categoría volver a esconder ficha proyecto
    document.getElementById('project-details').classList.add('hidden');
  });
});

// Datos de proyectos (ejemplo)
const projectsData = {
  cortometraje1: {
    title: "Proyecto Cortometraje 1",
    videoSrc: "videos/cortometraje1.mp4", // reemplazá con tu video
    poster: "images/poster-cortometraje1.jpg", // miniatura
    year: "2024",
    role: "Montajista y Editora",
    description: "Un cortometraje emocionante sobre la memoria y el tiempo.",
    credits: "Dir: Juan Pérez, Prod: Lucía Gómez"
  },
  videoclip1: {
    title: "Videoclip 1",
    videoSrc: "videos/videoclip1.mp4",
    poster: "images/poster-videoclip1.jpg",
    year: "2023",
    role: "Editora",
    description: "Videoclip musical para la banda XYZ, con edición rítmica y color.",
    credits: "Dir: María López"
  }
  // Agregá más proyectos acá siguiendo este formato
};

// Mostrar ficha proyecto
document.querySelectorAll('.view-details').forEach(button => {
  button.addEventListener('click', e => {
    const projectKey = e.target.getAttribute('data-project');
    const data = projectsData[projectKey];
    if (!data) return alert("Proyecto no encontrado. Agregalo en el script.");
    document.getElementById('portfolio').scrollIntoView({behavior:'smooth'});
    
    // Rellenar datos
    document.querySelector('#project-title').textContent = data.title;
    let video = document.getElementById('project-video');
    video.src = data.videoSrc;
    video.poster = data.poster || "";
    document.getElementById('project-year').textContent = data.year;
    document.getElementById('project-role').textContent = data.role;
    document.getElementById('project-description').textContent = data.description;
    document.getElementById('project-credits').textContent = data.credits;

    // Mostrar ficha y ocultar portfolio
    document.getElementById('project-details').classList.remove('hidden');
  });
});

// Volver al portfolio
document.getElementById('back-to-portfolio').addEventListener('click', () => {
  document.getElementById('project-details').classList.add('hidden');
});

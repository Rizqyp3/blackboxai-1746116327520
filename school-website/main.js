document.addEventListener('DOMContentLoaded', () => {
  const profileData = {
    name: "SDN 01 Bojongnangka",
    address: "Jl. Pendidikan No. 123, Kota Pendidikan",
    phone: "(021) 123-4567",
    email: "info@sdn01bojongnangka.sch.id",
    description: "SDN 01 Bojongnangka adalah sekolah yang berkomitmen memberikan pendidikan terbaik dengan fasilitas lengkap dan tenaga pengajar profesional."
  };

  const activitiesData = [
    {
      title: "Kegiatan Olahraga",
      description: "Berbagai kegiatan olahraga seperti sepak bola, basket, dan voli untuk mengembangkan bakat siswa.",
      icon: "fas fa-futbol"
    },
    {
      title: "Kegiatan Seni",
      description: "Kegiatan seni meliputi tari, musik, dan teater yang menumbuhkan kreativitas siswa.",
      icon: "fas fa-paint-brush"
    },
    {
      title: "Kegiatan Pramuka",
      description: "Kegiatan pramuka untuk membentuk karakter dan jiwa kepemimpinan siswa.",
      icon: "fas fa-hiking"
    }
  ];

  const profileContainer = document.getElementById('school-profile');
  profileContainer.innerHTML = `
    <h3 class="text-xl font-bold mb-2">${profileData.name}</h3>
    <p class="mb-1"><i class="fas fa-map-marker-alt mr-2 text-blue-600"></i>${profileData.address}</p>
    <p class="mb-1"><i class="fas fa-phone mr-2 text-blue-600"></i>${profileData.phone}</p>
    <p class="mb-4"><i class="fas fa-envelope mr-2 text-blue-600"></i>${profileData.email}</p>
    <p>${profileData.description}</p>
  `;

  const activitiesContainer = document.getElementById('school-activities');
  activitiesData.forEach(activity => {
    const activityCard = document.createElement('div');
    activityCard.className = "bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300";
    activityCard.innerHTML = `
      <div class="text-blue-600 text-3xl mb-4"><i class="${activity.icon}"></i></div>
      <h4 class="text-xl font-semibold mb-2">${activity.title}</h4>
      <p>${activity.description}</p>
    `;
    activitiesContainer.appendChild(activityCard);
  });

  // Slideshow implementation
  const slidesData = [
    { src: "https://images.pexels.com/photos/414519/pexels-photo-414519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", alt: "Foto Sekolah 1" },
    { src: "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", alt: "Foto Sekolah 2" },
    { src: "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", alt: "Foto Sekolah 3" }
  ];

  const slidesContainer = document.getElementById('slides');
  let currentIndex = 0;

  function renderSlides() {
    slidesContainer.innerHTML = '';
    slidesData.forEach((slide, index) => {
      const slideDiv = document.createElement('div');
      slideDiv.className = 'min-w-full flex-shrink-0';
      slideDiv.innerHTML = `<img src="${slide.src}" alt="${slide.alt}" class="w-full h-64 object-cover rounded-lg" />`;
      slidesContainer.appendChild(slideDiv);
    });
  }

  function updateSlidePosition() {
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  document.getElementById('prevSlide').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slidesData.length) % slidesData.length;
    updateSlidePosition();
  });

  document.getElementById('nextSlide').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slidesData.length;
    updateSlidePosition();
  });

  renderSlides();
  updateSlidePosition();

  // Mobile menu toggle and submenu toggles
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  const mobileLanguageBtn = document.getElementById('mobile-language-btn');
  const mobileLanguageMenu = document.getElementById('mobile-language-menu');

  // Toggle mobile menu visibility
  menuBtn.addEventListener('click', () => {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true' || false;
    menuBtn.setAttribute('aria-expanded', !expanded);
    mobileMenu.classList.toggle('hidden');
  });

  // Toggle mobile Language submenu
  mobileLanguageBtn.addEventListener('click', () => {
    const expanded = mobileLanguageBtn.getAttribute('aria-expanded') === 'true' || false;
    mobileLanguageBtn.setAttribute('aria-expanded', !expanded);
    mobileLanguageMenu.classList.toggle('hidden');
  });
});

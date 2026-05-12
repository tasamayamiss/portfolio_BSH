(function(){
  "use strict";

  // ---------- ДАННЫЕ ПРОЕКТОВ ----------
  const projects = [
    { id: 1, title: "Сайт тур-клуба «Юпитер»", desc: "Визуальная концепция и вёрстка.", category: "web", imageLabel: "hikings", tag: "Веб-дизайн и разработка" },
    { id: 2, title: "Сайт компании «SME innovations»", desc: "Визуальная концепция и вёрстка (в процессе).", category: "web", imageLabel: "innovations", tag: "Веб-дизайн" },
    { id: 3, title: "Дизайн-эскиз стены для пункта выдачи компании «Ozon»", desc: "Графический дизайн.", category: "graphic", imageLabel: "ozon", tag: "Граф. дизайн" },
    { id: 4, title: "Сайт компании грузоперевозок «Везу Ваш груз»", desc: "Визуальная концепция и вёрстка (в процессе).", category: "web", imageLabel: "transportation", tag: "Веб-дизайн" },
    { id: 5, title: "Дизайн-эскиз тенда для грузовых машин компании «Везу Ваш груз»", desc: "Графический дизайн.", category: "graphic", imageLabel: "tend", tag: "Граф. дизайн" },
    { id: 6, title: "Логотипы для компании «SME innovations»", desc: "Графический дизайн.", category: "graphic", imageLabel: "logo", tag: "Граф. дизайн" },
    { id: 7, title: "Графические работы в стиле граффити", desc: "Графический дизайн.", category: "graphic", imageLabel: "graffiti", tag: "Граф. дизайн" }
  ];

  // Обложки для карточек
  const imageStyles = {
    hikings: 'card_1.jpg',
    innovations: 'card_2.jpg',
    transportation: 'card_4.jpg',
    ozon: 'card_3.png',
    tend: 'card_5.png',
    logo: 'card_6.jpg',
    graffiti: 'card_7.jpg'
  };

  // Подробности проектов
  const projectDetails = {
    1: { fullDesc: 'Создание полноценного веб-сайта для клуба туристов “Юпитер”. Проект включал дизайн интерфейса, адаптивную вёрстку и frontend-разработку. Главная страница рассказывает о клубе, содержит календарь ближайших походов, яркую фотогалерею и отзывы клиентов. Внутренние страницы знакомят с подробностями маршрутов. При разработке мы уделили внимание удобству мобильной версии, читаемости текстов и созданию дружелюбной атмосферы, отражающей дух путешествий.', link: 'https://юпитерпоходы.рф/' },
    2: { fullDesc: 'Создание полноценного веб-сайта для компании «SME innovations». Проект включал дизайн интерфейса, адаптивную вёрстку и frontend-разработку. Главная страница рассказывает о компании, содержит меню с разделами: о нас, наши партнеры, наши проекты, контакты. Внутренние страницы знакомят с подробностями деятельности компании. При разработке мы уделили внимание удобству мобильной версии, читаемости текстов и созданию делового стиля.', link: '#', images: ['main_комп.png','партнеры_комп.png','проекты_комп.png','радар_комп.png','беспилотники_комп.png','иновац_решения_комп.png','иновац_продукты_питания_комп.png','иновац_продукты_тушения_комп.png','иновац_адд_комп.png','контакты_комп.png'] },
    3: { fullDesc: 'Дизайн-эскиз стены для пункта выдачи компании «Ozon», эскиз был перенесен на стену с помощью робота. Пункт выдачи с моим дизайн эскизом расположен по адресу г. Москва, 3-я Парковая улица, 34', link: '#', images: ['card_3.2.png'] },
    4: { fullDesc: 'Создание полноценного веб-сайта для компании грузоперевозок «Везу Ваш груз». Проект включал дизайн интерфейса, адаптивную вёрстку и frontend-разработку. Главная страница рассказывает о компании, содержит информацию об услугах, тарифах и контактах.', link: '#', images: ['card_4.jpg','card_4.2.jpg','card_4.3.jpg','card_4.4.jpg','card_4.5.jpg'] },
    5: { fullDesc: 'Дизайн-эскиз тенда для грузовых машин компании «Везу Ваш груз»', link: '#', images: ['card_5.2.jpg'] },
    6: { fullDesc: 'Логотипы для компании «SME innovations»', link: '#', images: ['SME_LOGO.pdf'] },
    7: { fullDesc: 'Графические работы в стиле граффити: серия ярких плакатов, афиш и иллюстраций, сочетающих уличную эстетику с профессиональной подачей.', link: '#', images: ['card_7.jpg','card_7.2.jpg','card_7.3.jpg','card_7.4.jpg','card_7.5.jpg','card_7.6.jpg','card_7.7.jpg','card_7.8.jpg'] }
  };

  const portfolioGrid = document.getElementById('portfolioGrid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  let currentFilter = 'all';

  function renderCards(filterValue) {
    const filtered = filterValue === 'all' ? projects : projects.filter(p => p.category === filterValue);
    let html = '';
    filtered.forEach(proj => {
      const styleValue = imageStyles[proj.imageLabel] || 'linear-gradient(145deg, #aaa, #888)';
      let bgStyle = styleValue.includes('linear-gradient') ? `background: ${styleValue};` : `background-image: url('${styleValue}'); background-size: cover; background-position: center;`;
      html += `<div class="portfolio-card" data-category="${proj.category}" data-id="${proj.id}">
                <div class="card-img" style="${bgStyle}"><span class="card-tag">${proj.tag}</span></div>
                <div class="card-content"><h3>${proj.title}</h3><div class="card-desc">${proj.desc}</div></div>
              </div>`;
    });
    portfolioGrid.innerHTML = html || '<p style="grid-column:1/-1; text-align:center; padding:40px; color:#4A5A6A;">Пока нет проектов в этой категории</p>';
  }

  function setActiveFilter(activeBtn) {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');
    renderCards(activeBtn.dataset.filter);
  }

  filterButtons.forEach(btn => btn.addEventListener('click', (e) => setActiveFilter(e.currentTarget)));
  renderCards('all');

  // ---------- МОДАЛЬНОЕ ОКНО ----------
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-overlay"></div>
    <div class="modal-content">
      <button class="modal-close">&times;</button>
      <div class="modal-image"></div>
      <div class="modal-body">
        <span class="modal-tag"></span>
        <h2 class="modal-title"><span class="title-text"></span><a class="external-link-icon" target="_blank" title="Открыть проект"><i class="fas fa-external-link-alt"></i></a></h2>
        <p class="modal-description"></p>
        <div class="carousel-section" style="display:none;">
          <div class="carousel-gallery" id="carouselGalleryContainer"></div>
          <div class="carousel-controls">
            <button class="carousel-prev"><i class="fas fa-chevron-left"></i></button>
            <span class="carousel-counter"></span>
            <button class="carousel-next"><i class="fas fa-chevron-right"></i></button>
          </div>
        </div>
        <button class="btn btn-primary modal-link">Смотреть проект</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  const modalOverlay = modal.querySelector('.modal-overlay');
  const modalClose = modal.querySelector('.modal-close');
  const modalImage = modal.querySelector('.modal-image');
  const modalTag = modal.querySelector('.modal-tag');
  const modalTitleText = modal.querySelector('.title-text');
  const externalLinkIcon = modal.querySelector('.external-link-icon');
  const modalDesc = modal.querySelector('.modal-description');
  const modalLinkBtn = modal.querySelector('.modal-link');
  const carouselSection = modal.querySelector('.carousel-section');
  const carouselGalleryContainer = modal.querySelector('#carouselGalleryContainer');
  const carouselPrev = modal.querySelector('.carousel-prev');
  const carouselNext = modal.querySelector('.carousel-next');
  const carouselCounter = modal.querySelector('.carousel-counter');

  let currentImages = [];
  let currentSlide = 0;
  let currentProjectLink = '#';
  let galleryVisible = false;

  function updateCarousel() {
    if (!currentImages.length) return;
    const file = currentImages[currentSlide];
    carouselGalleryContainer.innerHTML = '';
    if (file.toLowerCase().endsWith('.pdf')) {
      const iframe = document.createElement('iframe');
      iframe.src = file;
      iframe.style.width = '100%';
      iframe.style.height = '500px';
      iframe.style.border = 'none';
      iframe.style.borderRadius = '8px';
      carouselGalleryContainer.appendChild(iframe);
    } else {
      const img = document.createElement('img');
      img.src = file;
      img.alt = 'скриншот';
      img.className = 'carousel-slide-img';
      carouselGalleryContainer.appendChild(img);
    }
    carouselCounter.textContent = `${currentSlide + 1} / ${currentImages.length}`;
  }

  function showPrevSlide() {
    if (!currentImages.length) return;
    currentSlide = (currentSlide - 1 + currentImages.length) % currentImages.length;
    updateCarousel();
  }

  function showNextSlide() {
    if (!currentImages.length) return;
    currentSlide = (currentSlide + 1) % currentImages.length;
    updateCarousel();
  }

  carouselPrev.addEventListener('click', showPrevSlide);
  carouselNext.addEventListener('click', showNextSlide);

  carouselGalleryContainer.addEventListener('click', (e) => {
    const target = e.target.closest('img.carousel-slide-img');
    if (!target || !currentImages.length) return;
    const file = currentImages[currentSlide];
    if (file.toLowerCase().endsWith('.pdf')) { window.open(file, '_blank'); return; }
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `<div class="lightbox-overlay"></div><img src="${file}" class="lightbox-img" />`;
    document.body.appendChild(lightbox);
    const closeLightbox = () => lightbox.remove();
    lightbox.querySelector('.lightbox-overlay').addEventListener('click', closeLightbox);
    lightbox.querySelector('.lightbox-img').addEventListener('click', (e) => e.stopPropagation());
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); }, { once: true });
  });

  modalLinkBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentImages.length > 0) {
      galleryVisible = !galleryVisible;
      carouselSection.style.display = galleryVisible ? 'block' : 'none';
      modalLinkBtn.textContent = galleryVisible ? 'Скрыть галерею' : 'Смотреть проект';
    } else if (currentProjectLink !== '#') {
      window.open(currentProjectLink, '_blank');
    }
  });

  externalLinkIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    if (currentProjectLink !== '#') window.open(currentProjectLink, '_blank');
  });

  portfolioGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.portfolio-card');
    if (!card) return;
    const id = parseInt(card.dataset.id);
    const project = projects.find(p => p.id === id);
    const details = projectDetails[id];
    if (!project) return;

    const styleValue = imageStyles[project.imageLabel] || 'linear-gradient(145deg, #aaa, #888)';
    if (styleValue.includes('linear-gradient')) {
      modalImage.style.background = styleValue;
      modalImage.style.backgroundImage = '';
    } else {
      modalImage.style.background = '';
      modalImage.style.backgroundImage = `url('${styleValue}')`;
      modalImage.style.backgroundSize = 'cover';
      modalImage.style.backgroundPosition = 'center';
    }

    modalTag.textContent = project.tag;
    modalTitleText.textContent = project.title;
    modalDesc.textContent = details ? details.fullDesc : project.desc;
    currentProjectLink = details ? details.link : '#';
    carouselSection.style.display = 'none';
    galleryVisible = false;
    modalLinkBtn.textContent = 'Смотреть проект';

    if (details && details.images && details.images.length > 0) {
      currentImages = details.images;
      currentSlide = 0;
      updateCarousel();
      modalLinkBtn.style.display = 'inline-block';
    } else {
      currentImages = [];
      modalLinkBtn.style.display = (currentProjectLink !== '#') ? 'inline-block' : 'none';
    }
    externalLinkIcon.style.display = (currentProjectLink !== '#') ? 'inline-block' : 'none';

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('active')) closeModal(); });

  // ---------- ПЕРЕКЛЮЧЕНИЕ ТЕМЫ ----------
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;
  const icon = themeToggle.querySelector('i');
  const introIcon = document.getElementById('introIcon');

  function updateIntroIcon(isDark) {
    if (!introIcon) return;
    introIcon.src = isDark ? 'icon_main_dark.svg' : 'icon_main.svg';
  }

  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('dark');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }
  updateIntroIcon(body.classList.contains('dark'));

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    if (isDark) { icon.classList.remove('fa-moon'); icon.classList.add('fa-sun'); }
    else { icon.classList.remove('fa-sun'); icon.classList.add('fa-moon'); }
    updateIntroIcon(isDark);
  });

  // ---------- ПЛАВНЫЙ СКРОЛЛ ----------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === "#" || href === "") return;
      const target = document.querySelector(href);
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

  // ---------- КОПИРОВАНИЕ EMAIL (универсальный метод) ----------
  const emailCopyBtn = document.querySelector('.email-copy');
  if (emailCopyBtn) {
    emailCopyBtn.addEventListener('click', function() {
      const email = this.getAttribute('data-email');
      // Используем Clipboard API, если доступен, иначе fallback
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).then(() => showCopyFeedback(this));
      } else {
        // Fallback для HTTP или старых браузеров
        const textarea = document.createElement('textarea');
        textarea.value = email;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand('copy');
          showCopyFeedback(this);
        } catch (err) {
          console.log('Ошибка копирования', err);
          // Можно показать email в alert
          alert('Email: ' + email);
        }
        document.body.removeChild(textarea);
      }
    });
  }

  function showCopyFeedback(button) {
    button.style.color = '#DC5D46';
    button.title = 'Email скопирован!';
    setTimeout(() => {
      button.style.color = '';
      button.title = 'Нажмите, чтобы скопировать email';
    }, 1500);
  }

})();
/**
 * PORTFOLIO APPLICATION JAVASCRIPT
 * Handles project filtering, modal dialogs, audio/video simulation,
 * interactive canvas visualizer, card 3D tilt effects, and form interactions.
 */

// --- Project Data Store ---
const PROJECTS_DATA = [
  {
    id: "compupartz",
    title: "Compupartz",
    category: "web",
    categoryLabel: "Web Development",
    tagline: "Laptop and device repair platform for a Kumasi repair shop, with online booking, repair tracking and a parts store.",
    description: "Compupartz lets customers book a repair, track its progress and manage everything from a client dashboard, with an optional parts store that can be switched on or off. Built on Django with Tailwind CSS, Google and Microsoft sign-in, Paystack payments, and automatic deployment to a VPS through GitHub Actions.",
    client: "Compupartz, Kumasi",
    role: "Design & Full-Stack Development",
    year: "Live",
    image: "assets/images/web_compupartz.jpg?v=2",
    tags: ["Django", "Tailwind CSS", "Paystack", "Google & Microsoft Sign-in", "GitHub Actions"],
    metrics: "Repair booking • Live tracking • Parts store",
    liveUrl: "https://compupartz.com",
    domain: "compupartz.com",
    theme: { accent: "#1693d6", accent2: "#f97316", onAccent: "#ffffff", titleFont: "'Outfit', var(--font-display)" }
  },
  {
    id: "topreasons",
    title: "Top Reasons",
    category: "web",
    categoryLabel: "Web Development",
    tagline: "Travel booking site for an Accra company offering car rental, airport transfers, apartments and tours.",
    description: "Top Reasons brings car hire, airport shuttles, accommodation and tour packages into one booking experience, with user accounts, bookings history, a wishlist, careers and blog pages, and a full admin area. Built with Next.js, React and TypeScript on Supabase, with Flutterwave payments and Resend email.",
    client: "Top Reasons, Accra",
    role: "Design & Full-Stack Development",
    year: "Live",
    image: "assets/images/web_topreasons.jpg?v=2",
    tags: ["Next.js", "TypeScript", "Supabase", "Flutterwave", "Tailwind CSS"],
    metrics: "Bookings • Accounts • Admin dashboard",
    liveUrl: "https://topreasonsco.com",
    domain: "topreasonsco.com",
    theme: { accent: "#facc15", accent2: "#f59e0b", onAccent: "#111111", titleFont: "'Playfair Display', Georgia, serif" }
  },
  {
    id: "wastle",
    title: "Wastle Ghana",
    category: "web",
    categoryLabel: "Web Development",
    tagline: "Smart waste pickup service for Ghana, with online pickup scheduling, plus the brand identity and video behind it.",
    description: "Wastle makes household waste collection simple: choose your location and waste type, then schedule a pickup online. Alongside the website, the project covers the Wastle brand identity (logo, colour system, app icon, fleet and uniform mockups) and video production for the launch commercial.",
    client: "Wastle Ghana",
    role: "Web, Brand Identity & Video",
    year: "Under construction",
    underConstruction: true,
    image: "assets/images/web_wastle.jpg?v=2",
    tags: ["Web Design", "Online Booking", "Brand Identity", "Video Production"],
    metrics: "Pickup scheduling • Brand system • Launch video",
    liveUrl: "https://www.wastleghana.com/",
    domain: "wastleghana.com",
    theme: { accent: "#22af4b", accent2: "#056839", onAccent: "#ffffff", titleFont: "var(--font-body)", titleTransform: "uppercase" }
  },
  {
    id: "epbcl",
    title: "Eastern Prime Business Consult",
    category: "web",
    categoryLabel: "Web Development",
    tagline: "Agribusiness consulting site for EPBCL, covering farm advisory, supply chain, investment and farmer training in Ghana.",
    description: "A website for Eastern Prime Business Consult (EPBCL) presenting its agricultural consulting, supply chain and investment services, a farmer training forum with upcoming workshops, impact figures, and an enquiry form. Built as a fast Vite front end and deployed on Vercel.",
    client: "EPBCL, Ghana",
    role: "Web Design & Development",
    year: "Under construction",
    underConstruction: true,
    image: "assets/images/web_epbcl.jpg?v=2",
    tags: ["Vite", "JavaScript", "Responsive Design", "Vercel"],
    metrics: "Services • Farmer training forum • Enquiries",
    liveUrl: "https://epbcl.vercel.app/",
    domain: "epbcl.vercel.app",
    theme: { accent: "#c9a24a", accent2: "#1f5130", onAccent: "#10240f", titleFont: "'Oswald', var(--font-display)", titleTransform: "uppercase" }
  },
  {
    id: "wastle-campaign",
    title: "Wastle Launch Campaign",
    category: "graphic",
    categoryLabel: "Graphic Design",
    tagline: "Social media flyers and branded merchandise for Wastle, Ghana's smart waste pickup service.",
    description: "A launch campaign for Wastle built on the brand's bright greens: service flyers for residential, commercial and industrial pickup, the 'Stay Clean. Stay Radiant' and 'Less Waste, More Clean' social posts promoting the Wastle app, and branded safety helmets for the collection crews.",
    client: "Wastle Ghana",
    role: "Graphic Designer",
    year: "2026",
    image: "assets/images/design/wastle_stay_clean.jpg",
    gallery: ["wastle_stay_clean.jpg", "wastle_flyer.jpg", "wastle_less_waste.jpg", "wastle_helmets.jpg"],
    tags: ["Social Media Design", "Flyers", "Brand Merchandise", "Campaign"],
    metrics: "4 campaign pieces • App launch",
    liveUrl: null,
    githubUrl: null
  },
  {
    id: "topreasons-collateral",
    title: "Top Reasons Brand Collateral",
    category: "graphic",
    categoryLabel: "Graphic Design",
    tagline: "Black-and-gold roll-up banners and branded merchandise for an Accra travel and car rental company.",
    description: "Printed brand collateral for Top Reasons in its black and gold identity: airport roll-up banners for premium car rental, city locations and social channels with client logos, plus branded keyholders, pens and caps for customers and partners.",
    client: "Top Reasons, Accra",
    role: "Graphic Designer",
    year: "2026",
    image: "assets/images/design/topreasons_keyholders.jpg",
    gallery: ["topreasons_keyholders.jpg", "topreasons_banner_car_rental.jpg", "topreasons_banner_find_us.jpg", "topreasons_banner_connect.jpg", "topreasons_banner_connect_detail.jpg", "topreasons_cap.jpg", "topreasons_pens.jpg"],
    tags: ["Roll-up Banners", "Merchandise", "Print Design", "Brand Identity"],
    metrics: "4 banners • 3 merchandise items",
    liveUrl: null,
    githubUrl: null
  },
  {
    id: "rydsom-launch",
    title: "Rydsom Zimbabwe Launch",
    category: "graphic",
    categoryLabel: "Graphic Design",
    tagline: "'Launching soon' social campaign introducing the Rydsom ride-hailing app to Zimbabwe.",
    description: "A teaser campaign announcing Rydsom's arrival in Zimbabwe, built around the brand's violet palette: hero posts featuring the Rydsom car over the Harare skyline, an app screen showing ride booking, and a rider-focused post, each driving downloads from the App Store and Google Play.",
    client: "Rydsom Zimbabwe",
    role: "Graphic Designer",
    year: "2026",
    image: "assets/images/design/rydsom_launch_1.jpg",
    gallery: ["rydsom_launch_1.jpg", "rydsom_launch_2.jpg", "rydsom_launch_3.jpg"],
    tags: ["Social Media Design", "Launch Campaign", "App Marketing"],
    metrics: "3 launch posts • App store push",
    liveUrl: null,
    githubUrl: null
  },
  {
    id: "wastle-sort-your-waste",
    title: "Wastle: Sort Your Waste",
    category: "video",
    categoryLabel: "Video & Motion",
    tagline: "Explainer ad showing households how to separate wet waste, recyclables and general waste with Wastle bins.",
    description: "A short explainer for Wastle Ghana that follows a household from a mixed bag of rubbish to three colour-coded Wastle bins for wet waste, recyclables and general waste, ending with the bins ready on the kerb for pickup. Produced with AI-assisted video generation, edited and finished with voice-over and the Wastle brand look.",
    client: "Wastle Ghana",
    role: "Video Producer & Editor",
    year: "2026",
    video: "assets/videos/wastle_sort_your_waste.mp4",
    posterTime: 12,
    tags: ["Explainer Video", "AI Video", "Editing", "Voice-over"],
    duration: "0:39",
    metrics: "16:9 • 39 seconds",
    liveUrl: null,
    githubUrl: null
  },
  {
    id: "wastle-book-pickup",
    title: "Wastle: Book a Pickup",
    category: "video",
    categoryLabel: "Video & Motion",
    tagline: "App launch commercial: book a waste pickup on the Wastle app and watch the truck arrive.",
    description: "A launch commercial for the Wastle app: a customer books a pickup from their laptop and phone, tracks the truck live on the map, and the green Wastle fleet collects the bins on a quiet residential street, closing on a 'Download the Wastle App' call to action.",
    client: "Wastle Ghana",
    role: "Video Producer & Editor",
    year: "2026",
    video: "assets/videos/wastle_book_a_pickup.mp4",
    posterTime: 20,
    tags: ["App Commercial", "AI Video", "Editing", "Motion Graphics"],
    duration: "0:46",
    metrics: "16:9 • 46 seconds",
    liveUrl: null,
    githubUrl: null
  },
  {
    id: "rydsom-now-live",
    title: "Rydsom Is Now Live in Zimbabwe",
    category: "video",
    categoryLabel: "Video & Motion",
    tagline: "Vertical launch ad for the Rydsom ride-hailing app, made for Instagram, TikTok and WhatsApp Status.",
    description: "A phone-first launch ad for Rydsom in Zimbabwe: a rider steps out, books a ride on the Rydsom app, follows the car on the violet route map and rides off, ending on 'Rydsom is now live in Zimbabwe. Ready to ride some?' with app store badges. Framed in the brand's neon violet for social feeds.",
    client: "Rydsom Zimbabwe",
    role: "Video Producer & Editor",
    year: "2026",
    video: "assets/videos/rydsom_now_live.mp4",
    posterTime: 12,
    portrait: true,
    tags: ["Social Video", "Vertical 9:16", "Launch Ad", "AI Video"],
    duration: "0:45",
    metrics: "9:16 • 45 seconds",
    liveUrl: null,
    githubUrl: null
  }
];

// --- State Management ---
let currentFilter = 'all';
let currentProjectIndex = 0;
let isAudioSynthesizerActive = false;
let audioContext = null;
let currentOscillator = null;

// --- Initialize App ---
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  renderProjectCards();
  initFilterButtons();
  initModalHandling();
  initCardTilt();
  initContactForm();
});

// --- Navigation & Scrollspy ---
function initNavigation() {
  const header = document.querySelector('.site-header');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    updateScrollSpy();
  }, { passive: true });

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile nav on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }
}

function updateScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPosition = window.scrollY + 120;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-link[href="#${id}"]`);

    if (link) {
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    }
  });
}

// --- Render Project Cards ---
function renderProjectCards() {
  const grid = document.getElementById('worksGrid');
  if (!grid) return;

  grid.innerHTML = '';

  PROJECTS_DATA.forEach((project, index) => {
    const card = document.createElement('article');
    card.className = `project-card`;
    card.dataset.category = project.category;
    card.dataset.index = index;
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View project details for ${project.title}`);

    // Generate specific media badge / indicator based on category
    let categoryBadgeHtml = '';
    let mediaOverlayHtml = '';

    if (project.category === 'web') {
      categoryBadgeHtml = `<span class="card-badge web"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg> Web Project</span>`;
      mediaOverlayHtml = `
        <div class="card-overlay">
          ${categoryBadgeHtml}
          ${project.underConstruction
            ? `<span class="site-domain-chip site-building"><span class="site-dot"></span>Under construction</span>`
            : `<span class="site-domain-chip"><span class="site-dot"></span>${project.domain || 'Live site'}</span>`}
        </div>
      `;
    } else if (project.category === 'graphic') {
      categoryBadgeHtml = `<span class="card-badge graphic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/></svg> Graphic Design</span>`;
      mediaOverlayHtml = `
        <div class="card-overlay">
          ${categoryBadgeHtml}
          <span style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--badge-graphic); background: rgba(0,0,0,0.6); padding: 2px 8px; border-radius: 4px;">HIGH-RES SHOWCASE</span>
        </div>
      `;
    } else if (project.category === 'video') {
      categoryBadgeHtml = `<span class="card-badge video"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg> Video & Motion</span>`;
      mediaOverlayHtml = `
        <div class="video-play-indicator" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="7 4 19 12 7 20 7 4"/></svg>
        </div>
        <div class="card-overlay">
          ${categoryBadgeHtml}
          <div class="audio-wave-bar" title="Motion Reel">
            <div class="audio-bar"></div>
            <div class="audio-bar"></div>
            <div class="audio-bar"></div>
            <div class="audio-bar"></div>
            <div class="audio-bar"></div>
          </div>
        </div>
      `;
    }

    const tagsHtml = project.tags.slice(0, 3).map(tag => `<span class="card-tag">${tag}</span>`).join('');

    // Real client sites carry their own brand colours and type
    if (project.theme) applySiteTheme(card, project.theme);

    const liveLinkHtml = project.category === 'web' && project.liveUrl ? `
          <a class="btn-card-live" href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" aria-label="${project.underConstruction ? `Preview ${project.title} (under construction)` : `Visit ${project.title} live site`}">
            <span>${project.underConstruction ? 'Preview Site' : 'Visit Live Site'}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>` : '';

    card.innerHTML = `
      <div class="card-media-wrapper">
        ${project.video
          ? `<video class="card-img card-video" src="${project.video}#t=${project.posterTime || 0}" muted playsinline loop preload="metadata" aria-label="${project.title} preview"></video>`
          : `<img class="card-img" src="${project.image}" alt="${project.title} Preview" loading="lazy"${project.imagePosition ? ` style="object-position: ${project.imagePosition};"` : ''}>`}
        ${mediaOverlayHtml}
      </div>
      <div class="card-content">
        <div class="card-meta">
          <span>${project.client}</span>
          <span>${project.year}</span>
        </div>
        <h3 class="card-title">${project.title}</h3>
        <p class="card-description">${project.tagline}</p>
        <div class="card-tags">
          ${tagsHtml}
        </div>
        <div class="card-footer">
          ${liveLinkHtml}
          <button class="btn-card-action" type="button">
            <span>${liveLinkHtml ? 'Case Study' : 'Explore Case Study'}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
        </div>
      </div>
    `;

    // Muted hover preview for cards with a real video file
    const cardVideo = card.querySelector('.card-video');
    if (cardVideo) {
      // Show the poster frame as the cover (the #t= fragment alone isn't honoured everywhere)
      const showPosterFrame = () => { cardVideo.currentTime = project.posterTime || 0; };
      if (cardVideo.readyState >= 1) showPosterFrame();
      else cardVideo.addEventListener('loadedmetadata', showPosterFrame, { once: true });
      card.addEventListener('mouseenter', () => {
        cardVideo.play().catch(() => {});
      });
      card.addEventListener('mouseleave', () => {
        cardVideo.pause();
      });
    }

    // Click handler to open detailed modal (the live-site link goes straight to the site)
    card.addEventListener('click', (e) => {
      if (e.target.closest('.btn-card-live')) return;
      openProjectModal(index);
    });
    card.addEventListener('keydown', (e) => {
      if (e.target.closest('.btn-card-live')) return;
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openProjectModal(index);
      }
    });

    grid.appendChild(card);
  });
}

function applySiteTheme(el, theme) {
  el.classList.add('site-themed');
  el.style.setProperty('--site-accent', theme.accent);
  el.style.setProperty('--site-accent-2', theme.accent2 || theme.accent);
  el.style.setProperty('--site-on-accent', theme.onAccent || '#041324');
  if (theme.titleFont) el.style.setProperty('--site-title-font', theme.titleFont);
  if (theme.titleTransform) el.style.setProperty('--site-title-transform', theme.titleTransform);
}

function clearSiteTheme(el) {
  el.classList.remove('site-themed');
  ['--site-accent', '--site-accent-2', '--site-on-accent', '--site-title-font', '--site-title-transform']
    .forEach(prop => el.style.removeProperty(prop));
}

// --- Filter Handling ---
function initFilterButtons() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      applyFilter(filter);
    });
  });

  // Also support quick jumps from hero pills
  const catPills = document.querySelectorAll('.cat-pill');
  catPills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      const targetFilter = pill.dataset.filter;
      if (targetFilter) {
        const correspondingBtn = document.querySelector(`.filter-btn[data-filter="${targetFilter}"]`);
        if (correspondingBtn) {
          correspondingBtn.click();
        }
      }
    });
  });
}

function applyFilter(filter) {
  currentFilter = filter;
  const cards = document.querySelectorAll('.project-card');

  cards.forEach(card => {
    const category = card.dataset.category;
    if (filter === 'all' || category === filter) {
      card.classList.remove('is-hidden');
      card.style.opacity = '0';
      card.style.transform = 'translateY(15px)';
      setTimeout(() => {
        card.style.transition = 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 50);
    } else {
      card.classList.add('is-hidden');
    }
  });
}

// --- Modal Dialog Handling ---
function initModalHandling() {
  const modal = document.getElementById('projectModal');

  if (!modal) return;

  // The close button is re-rendered with each project (see renderModalContent).
  // Native Esc closes the dialog without calling closeModal, so clean up here too.
  modal.addEventListener('close', () => {
    stopAudioSynthesis();
    stopModalVideo();
    document.body.style.overflow = '';
  });

  // Light dismiss: clicking on backdrop closes modal
  modal.addEventListener('click', (e) => {
    const dialogDimensions = modal.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      closeModal();
    }
  });

  // Keyboard navigation inside modal
  window.addEventListener('keydown', (e) => {
    if (!modal.open) return;

    if (e.key === 'ArrowRight') {
      navigateModal(1);
    } else if (e.key === 'ArrowLeft') {
      navigateModal(-1);
    }
  });
}

function openProjectModal(index) {
  const modal = document.getElementById('projectModal');
  if (!modal) return;

  currentProjectIndex = index;
  renderModalContent(PROJECTS_DATA[index]);

  // Lock body scroll under modal dialog
  document.body.style.overflow = 'hidden';
  modal.showModal();
}

function closeModal() {
  const modal = document.getElementById('projectModal');
  if (!modal || !modal.open) return;

  stopAudioSynthesis();
  modal.close();
  document.body.style.overflow = '';
}

function navigateModal(direction) {
  let newIndex = currentProjectIndex + direction;
  if (newIndex < 0) newIndex = PROJECTS_DATA.length - 1;
  if (newIndex >= PROJECTS_DATA.length) newIndex = 0;

  currentProjectIndex = newIndex;
  renderModalContent(PROJECTS_DATA[newIndex]);
}

function stopModalVideo() {
  const video = document.getElementById('modalVideo');
  if (video) video.pause();
}

function renderModalContent(project) {
  const modal = document.getElementById('projectModal');
  if (!modal) return;

  // Stop any playing video before the popup content is replaced
  stopModalVideo();

  // Category badge styling
  let badgeClass = 'web';
  if (project.category === 'graphic') badgeClass = 'graphic';
  if (project.category === 'video') badgeClass = 'video';

  // Construct left media column HTML based on category
  let mediaHtml = '';

  if (project.category === 'web') {
    mediaHtml = `
      <div class="modal-media-box" id="modalMediaFrame">
        <div class="modal-device-controls">
          <button class="device-btn active" data-device="desktop">🖥️ Desktop</button>
          <button class="device-btn" data-device="tablet">📱 Tablet</button>
        </div>
        <img src="${project.image}" alt="${project.title} Full View" id="modalImgDisplay">
      </div>
    `;
  } else if (project.category === 'video' && project.video) {
    mediaHtml = `
      <div class="modal-media-box modal-media-video${project.portrait ? ' is-portrait' : ''}">
        <video id="modalVideo" src="${project.video}" controls playsinline autoplay preload="metadata"></video>
      </div>
    `;
  } else if (project.category === 'video') {
    mediaHtml = `
      <div class="modal-media-box">
        <div class="modal-video-container">
          <div class="simulated-video-screen">
            <img src="${project.image}" alt="${project.title} Video Still" id="modalVideoPoster">
            <div class="video-modal-controls">
              <button class="video-ctrl-btn" id="modalPlayBtn" title="Play Video Simulation">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 3 20 12 6 21 6 3"/></svg>
              </button>
              <div class="video-scrub-bar" id="modalScrubBar">
                <div class="video-progress-fill" id="modalProgressFill" style="width: 25%;"></div>
              </div>
              <span class="video-timecode" id="modalTimecode">00:15 / ${project.duration || '01:00'}</span>
              <button class="video-ctrl-btn" id="modalSoundBtn" title="Toggle Sound Tone" style="width: 30px; height: 30px;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  } else {
    // Graphic design with zoom toggle and piece gallery
    const pieces = project.gallery && project.gallery.length
      ? project.gallery.map(file => `assets/images/design/${file}`)
      : [project.image];
    const thumbsHtml = pieces.length > 1 ? `
        <div class="modal-gallery-thumbs">
          ${pieces.map((src, i) => `
            <button type="button" class="gallery-thumb${i === 0 ? ' active' : ''}" data-src="${src}" aria-label="Show piece ${i + 1} of ${pieces.length}">
              <img src="${src}" alt="" loading="lazy">
            </button>
          `).join('')}
        </div>` : '';
    mediaHtml = `
      <div class="modal-gallery">
        <div class="modal-media-box modal-media-artwork">
          <img src="${pieces[0]}" alt="${project.title} High Resolution Artwork" style="cursor: zoom-in;" id="modalZoomImg">
        </div>
        ${thumbsHtml}
      </div>
    `;
  }

  // Tags
  const tagsHtml = project.tags.map(tag => `<span class="card-tag">${tag}</span>`).join('');

  // Primary Action Button
  let primaryActionHtml = '';
  if (project.liveUrl) {
    primaryActionHtml = `
      <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="font-size: 0.9rem; padding: 0.65rem 1.4rem;">
        <span>${project.category === 'web' ? `${project.underConstruction ? 'Preview' : 'Visit'} ${project.domain && project.domain.includes('.') ? project.domain : (project.underConstruction ? 'Site' : 'Live Site')}` : 'Visit Project Live'}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
      </a>
    `;
  }

  const modalContainer = modal.querySelector('.modal-inner-container');
  clearSiteTheme(modalContainer);
  if (project.theme) applySiteTheme(modalContainer, project.theme);
  modalContainer.innerHTML = `
    <div class="modal-header-bar">
      <div class="modal-badge-group">
        <span class="card-badge ${badgeClass}">${project.categoryLabel}</span>
        <span style="font-size: 0.85rem; color: var(--text-dim); font-family: var(--font-mono);">${currentProjectIndex + 1} of ${PROJECTS_DATA.length}</span>
      </div>
      <button class="modal-close-btn" id="closeModalBtn" aria-label="Close Project Modal">✕</button>
    </div>

    <div class="modal-body-layout">
      ${mediaHtml}

      <div class="modal-info-col">
        <h2 class="modal-project-title">${project.title}</h2>
        <p class="modal-tagline">${project.tagline}</p>
        
        <div class="modal-meta-grid">
          <div>
            <div class="meta-field-label">Client</div>
            <div class="meta-field-value">${project.client}</div>
          </div>
          <div>
            <div class="meta-field-label">${project.year === 'Live' || project.underConstruction ? 'Status' : 'Year'}</div>
            <div class="meta-field-value"${project.underConstruction ? ' style="color: #f59e0b;"' : ''}>${project.year === 'Live' ? 'Live site' : project.year}</div>
          </div>
          <div>
            <div class="meta-field-label">Role</div>
            <div class="meta-field-value">${project.role}</div>
          </div>
          <div>
            <div class="meta-field-label">Key Impact</div>
            <div class="meta-field-value" style="color: #34d399;">${project.metrics || 'Award Winning'}</div>
          </div>
        </div>

        <div class="modal-section-title">Case Study Overview</div>
        <p class="modal-description">${project.description}</p>

        <div class="modal-section-title">Disciplines & Tools</div>
        <div class="modal-tags">${tagsHtml}</div>

        <div class="modal-actions">
          ${primaryActionHtml}
          <button type="button" class="btn-secondary" id="modalInquireBtn" style="font-size: 0.9rem; padding: 0.65rem 1.4rem;">
            Request Similar Project
          </button>
        </div>
      </div>
    </div>
  `;

  // Re-bind close button
  const newCloseBtn = modalContainer.querySelector('#closeModalBtn');
  if (newCloseBtn) newCloseBtn.addEventListener('click', closeModal);

  // Inquire button scrolls to contact form and pre-selects project title
  const inquireBtn = modalContainer.querySelector('#modalInquireBtn');
  if (inquireBtn) {
    inquireBtn.addEventListener('click', () => {
      closeModal();
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        const messageInput = document.getElementById('formMessage');
        if (messageInput) {
          messageInput.value = `Hi, I saw your work on "${project.title}" and would like to discuss a similar project!`;
          messageInput.focus();
        }
      }
    });
  }

  // Device switcher interactive simulation for web projects
  const deviceButtons = modalContainer.querySelectorAll('.device-btn');
  const modalImgDisplay = modalContainer.querySelector('#modalImgDisplay');
  if (deviceButtons.length && modalImgDisplay) {
    deviceButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        deviceButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (btn.dataset.device === 'tablet') {
          modalImgDisplay.style.maxWidth = '70%';
          modalImgDisplay.style.margin = '0 auto';
          modalImgDisplay.style.boxShadow = '0 0 30px rgba(0,0,0,0.8)';
          modalImgDisplay.style.borderRadius = '16px';
        } else {
          modalImgDisplay.style.maxWidth = '100%';
          modalImgDisplay.style.margin = '0';
          modalImgDisplay.style.borderRadius = '0';
        }
      });
    });
  }

  // Video playback simulation for video projects
  const playBtn = modalContainer.querySelector('#modalPlayBtn');
  const progressFill = modalContainer.querySelector('#modalProgressFill');
  const soundBtn = modalContainer.querySelector('#modalSoundBtn');
  if (playBtn && progressFill) {
    let isPlaying = false;
    let progress = 25;
    let interval = null;

    playBtn.addEventListener('click', () => {
      isPlaying = !isPlaying;
      if (isPlaying) {
        playBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`;
        playBtn.style.background = 'var(--badge-video)';
        startAudioTone(220); // Gentle synthesizer harmonic
        interval = setInterval(() => {
          progress = (progress + 2) % 100;
          progressFill.style.width = `${progress}%`;
        }, 150);
      } else {
        playBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 3 20 12 6 21 6 3"/></svg>`;
        playBtn.style.background = '';
        stopAudioSynthesis();
        clearInterval(interval);
      }
    });

    if (soundBtn) {
      soundBtn.addEventListener('click', () => {
        toggleAudioTone();
      });
    }
  }

  // Graphic design zoom image
  const zoomImg = modalContainer.querySelector('#modalZoomImg');
  if (zoomImg) {
    let isZoomed = false;
    zoomImg.addEventListener('click', () => {
      isZoomed = !isZoomed;
      if (isZoomed) {
        zoomImg.style.transform = 'scale(1.5)';
        zoomImg.style.cursor = 'zoom-out';
        zoomImg.style.transition = 'transform 0.3s ease';
      } else {
        zoomImg.style.transform = 'scale(1)';
        zoomImg.style.cursor = 'zoom-in';
      }
    });

    const thumbs = modalContainer.querySelectorAll('.gallery-thumb');
    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        thumbs.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        zoomImg.src = thumb.dataset.src;
        isZoomed = false;
        zoomImg.style.transform = 'scale(1)';
        zoomImg.style.cursor = 'zoom-in';
      });
    });
  }
}

// --- Web Audio Synthesizer for Interactive Media Feedback ---
function startAudioTone(freq = 240) {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    if (!audioContext) audioContext = new AudioCtx();

    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }

    if (currentOscillator) {
      currentOscillator.stop();
      currentOscillator.disconnect();
    }

    const osc = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioContext.currentTime);

    // Warm ambient volume fade-in
    gainNode.gain.setValueAtTime(0.001, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.08, audioContext.currentTime + 0.3);

    osc.connect(gainNode);
    gainNode.connect(audioContext.destination);

    osc.start();
    currentOscillator = osc;
    isAudioSynthesizerActive = true;
  } catch (e) {
    console.warn('Web Audio not available or permission required', e);
  }
}

function stopAudioSynthesis() {
  if (currentOscillator) {
    try {
      currentOscillator.stop();
      currentOscillator.disconnect();
    } catch (e) {}
    currentOscillator = null;
  }
  isAudioSynthesizerActive = false;
}

function toggleAudioTone() {
  if (isAudioSynthesizerActive) {
    stopAudioSynthesis();
  } else {
    startAudioTone(330);
  }
}


// --- Interactive 3D Card Hover Tilt ---
function initCardTilt() {
  const cards = document.querySelectorAll('.project-card, .hero-visual-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}


// --- Contact Form Handling & Validation ---
function initContactForm() {
  const form = document.getElementById('portfolioContactForm');
  const feedback = document.getElementById('formFeedback');

  if (!form || !feedback) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('#formName').value.trim();
    const email = form.querySelector('#formEmail').value.trim();
    const service = form.querySelector('#formService').value;
    const message = form.querySelector('#formMessage').value.trim();

    if (!name || !email || !message) {
      alert('Please fill out all required fields.');
      return;
    }

    // Submit animation simulation
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Transmitting Message...</span>`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      form.reset();

      feedback.innerHTML = `
        <strong>Thank you, ${name}!</strong> Your message for <em>${service}</em> has been dispatched. I will reply within 24 hours.
      `;
      feedback.className = 'form-feedback success';

      setTimeout(() => {
        feedback.className = 'form-feedback';
      }, 7000);
    }, 1000);
  });
}

let currentSlide = 1;
let currentGallery = 'school1';

const siteData = window.siteData || {};

function getSiteImagePath(filename) {
    return `images/siteImage/${filename}`;
}

function getGalleryImagePath(filename) {
    const prefix = currentGallery === 'school1' ? 'images/school1/' : 'images/school2/';
    return prefix + filename;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadSiteData();
    initializeSlider();
    loadEvents();
    loadToppers();
    loadGallery();
    setupGalleryDropdown();
    // Mobile nav toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            const open = navMenu.classList.toggle('mobile-open');
            navToggle.setAttribute('aria-expanded', open);
            navToggle.classList.toggle('open', open);
        });

        // Close menu when a link is clicked
        navMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', function() {
            if (navMenu.classList.contains('mobile-open')) {
                navMenu.classList.remove('mobile-open');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.classList.remove('open');
            }
        }));

        // Ensure menu closes on resize to larger screens
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && navMenu.classList.contains('mobile-open')) {
                navMenu.classList.remove('mobile-open');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.classList.remove('open');
            }
        });
    }
});

// Setup gallery dropdown
function setupGalleryDropdown() {
    const dropdown = document.getElementById('gallery-branch');
    if (!dropdown) return;
    dropdown.addEventListener('change', function(e) {
        currentGallery = e.target.value;
        loadGallery();
    });
}

// Load site data (single set for all sections)
function loadSiteData() {
    if (!siteData.info) return;
    const foundationEl = document.getElementById('about-foundation');
    const aimEl = document.getElementById('about-aim');
    const featuresEl = document.getElementById('about-features');
    const mottoTitleEl = document.getElementById('motto-title');
    const mottoLearnEl = document.getElementById('motto-learn');
    const mottoLoveEl = document.getElementById('motto-love');
    const mottoServeEl = document.getElementById('motto-serve');
    const leadershipGrid = document.getElementById('leadership-grid');

    if (foundationEl) foundationEl.textContent = siteData.info.foundation || '';
    if (aimEl) aimEl.textContent = siteData.info.aim || '';
    if (mottoTitleEl) mottoTitleEl.textContent = siteData.info.motto?.title || '';
    if (mottoLearnEl) mottoLearnEl.textContent = siteData.info.motto?.learn || '';
    if (mottoLoveEl) mottoLoveEl.textContent = siteData.info.motto?.love || '';
    if (mottoServeEl) mottoServeEl.textContent = siteData.info.motto?.serve || '';

    if (featuresEl) {
        featuresEl.innerHTML = '';
        (siteData.info.features || []).forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresEl.appendChild(li);
        });
    }

    if (leadershipGrid) {
        leadershipGrid.innerHTML = '';
        (siteData.leadership || []).forEach(leader => {
            const card = document.createElement('div');
            card.className = 'leader-card';
            card.innerHTML = `
                <img src="${getSiteImagePath(leader.image)}" alt="${leader.name}" class="leader-image">
                <h4>${leader.role}</h4>
                <p>${leader.name}</p>
            `;
            leadershipGrid.appendChild(card);
        });
    }

    document.getElementById('stat-students').textContent = siteData.info.stats.students;
    document.getElementById('stat-teachers').textContent = siteData.info.stats.teachers;
    document.getElementById('stat-classes').textContent = siteData.info.stats.classes;
    const headerLogo = document.getElementById('school-logo');
    const headerLogoSecondary = document.getElementById('school-logo-secondary');
    const footerLogo = document.getElementById('footer-logo-img');
    if (headerLogo) headerLogo.src = getSiteImagePath(siteData.info.logo || 'school-logo.png');
    if (headerLogoSecondary) headerLogoSecondary.src = getSiteImagePath(siteData.info.secondaryLogo || siteData.info.logo || 'school-logo.png');
    if (footerLogo) footerLogo.src = getSiteImagePath(siteData.info.logo || 'school-logo.png');
}

// Load and display events
function loadEvents() {
    const events = siteData.events || [];
    const container = document.getElementById('events-container');
    container.innerHTML = '';
    
    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        const eventDate = new Date(event.date);
        const formattedDate = eventDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        
        eventCard.innerHTML = `
            <h3>${event.name}</h3>
            <div class="event-date">
                <i class="fas fa-calendar"></i>
                ${formattedDate}
            </div>
            <p class="event-description">${event.description}</p>
        `;
        
        container.appendChild(eventCard);
    });
}

// Load and display toppers
function loadToppers() {
    const school1 = siteData.toppers?.school1 || [];
    const school2 = siteData.toppers?.school2 || [];
    const container1 = document.getElementById('toppers-container-school1');
    const container2 = document.getElementById('toppers-container-school2');

    if (container1) {
        container1.innerHTML = '';
        school1.forEach(topper => {
            const topperCard = document.createElement('div');
            topperCard.className = 'topper-card';
            topperCard.innerHTML = `
                <img src="${getSiteImagePath(topper.image)}" alt="${topper.name}" class="topper-image">
                <h3>${topper.name}</h3>
                <div class="topper-info">
                    <p><strong>Class:</strong> ${topper.class}</p>
                    <p><strong>Mark:</strong> ${topper.total}</p>
                </div>
                <div class="rank-badge">Rank: ${topper.rank}</div>
            `;
            container1.appendChild(topperCard);
        });
    }

    if (container2) {
        container2.innerHTML = '';
        school2.forEach(topper => {
            const topperCard = document.createElement('div');
            topperCard.className = 'topper-card';
            topperCard.innerHTML = `
                <img src="${getSiteImagePath(topper.image)}" alt="${topper.name}" class="topper-image">
                <h3>${topper.name}</h3>
                <div class="topper-info">
                    <p><strong>Class:</strong> ${topper.class}</p>
                    <p><strong>Mark:</strong> ${topper.total}</p>
                </div>
                <div class="rank-badge">Rank: ${topper.rank}</div>
            `;
            container2.appendChild(topperCard);
        });
    }
}

// Load gallery
function loadGallery() {
    const container = document.getElementById('gallery-container');
    const galleryImages = currentGallery === 'school2' ? (window.gallerySchool2 || []) : (window.gallerySchool1 || []);
    
    container.innerHTML = '';
    
    galleryImages.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        galleryItem.innerHTML = `
            <img src="${getGalleryImagePath(image)}" alt="Gallery Image ${index + 1}">
            <div class="gallery-overlay">

            </div>
        `;
        
        container.appendChild(galleryItem);
    });
}

// Initialize slider
function initializeSlider() {
    // Build slider slides and dots based on current school
    const sliderContainer = document.getElementById('slider-container');
    const dotsContainer = document.getElementById('dots-container');
    if (!sliderContainer || !dotsContainer) return;
    const sliderImages = siteData.slider || [];
    sliderContainer.querySelectorAll('.slide')?.forEach(n=>n.remove());
    dotsContainer.innerHTML = '';

    sliderImages.forEach((img, idx) => {
        const slide = document.createElement('div');
        slide.className = 'slide fade';
        slide.innerHTML = `<img src="${getSiteImagePath(img)}" alt="Slide ${idx+1}">`;
        sliderContainer.insertBefore(slide, sliderContainer.querySelector('.prev'));

        const dot = document.createElement('span');
        dot.className = 'dot';
        dot.setAttribute('data-slide', idx + 1);
        dot.addEventListener('click', function() {
            goToSlide(parseInt(this.getAttribute('data-slide')));
        });
        dotsContainer.appendChild(dot);
    });

    currentSlide = 1;
    showSlides(currentSlide);
}

// Change slide
function changeSlide(n) {
    showSlides(currentSlide += n);
}

// Go to specific slide (for dot clicks)
function goToSlide(n) {
    showSlides(currentSlide = n);
}

// Current slide
function showSlides(n) {
    const slides = document.getElementsByClassName('slide');
    const dots = document.getElementsByClassName('dot');
    
    if (n > slides.length) {
        currentSlide = 1;
    }
    if (n < 1) {
        currentSlide = slides.length;
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    
    slides[currentSlide - 1].classList.add('active');
    dots[currentSlide - 1].classList.add('active');
}

// Auto advance slides every 5 seconds
function autoSlides() {
    changeSlide(1);
}

setInterval(autoSlides, 5000);

// Keyboard navigation for slider
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        changeSlide(-1);
    } else if (event.key === 'ArrowRight') {
        changeSlide(1);
    }
});

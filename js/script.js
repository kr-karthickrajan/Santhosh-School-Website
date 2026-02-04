// Data is now provided by external files: js/data_school1.js and js/data_school2.js
 
let currentSlide = 1;
let currentBranch = 'branch1';

// Helper to get path for current school images
function getImagePath(filename) {
    const prefix = currentBranch === 'branch1' ? 'images/school1/' : 'images/school2/';
    return prefix + filename;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadBranchData(currentBranch);
    initializeSlider();
    loadEvents(currentBranch);
    loadToppers(currentBranch);
    loadGallery();
    setupBranchDropdown();
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

// Setup branch dropdown
function setupBranchDropdown() {
    const dropdown = document.getElementById('branch-dropdown');
    dropdown.addEventListener('change', function(e) {
        currentBranch = e.target.value;
        loadBranchData(currentBranch);
        loadEvents(currentBranch);
        loadToppers(currentBranch);
        loadGallery();
        initializeSlider();
        updateFooterContact(currentBranch);
    });
}

// Load branch data
function loadBranchData(branch) {
    const data = (branch === 'branch1' ? window.school1Data : window.school2Data)?.info || branchData[branch];
    document.getElementById('branch-description').textContent = data.description;
    document.getElementById('stat-students').textContent = data.stats.students;
    document.getElementById('stat-teachers').textContent = data.stats.teachers;
    document.getElementById('stat-classes').textContent = data.stats.classes;
    // update header and footer logos
    const headerLogo = document.getElementById('school-logo');
    const footerLogo = document.getElementById('footer-logo-img');
    if (headerLogo) headerLogo.src = getImagePath(data.logo || 'school-logo.png');
    if (footerLogo) footerLogo.src = getImagePath(data.logo || 'school-logo.png');
}

// Load and display events
function loadEvents(branch) {
    const events = (branch === 'branch1' ? window.school1Data : window.school2Data)?.events || eventsData[branch];
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
function loadToppers(branch) {
    const toppers = (branch === 'branch1' ? window.school1Data : window.school2Data)?.toppers || toppersData[branch];
    const container = document.getElementById('toppers-container');
    container.innerHTML = '';
    
    toppers.forEach(topper => {
        const topperCard = document.createElement('div');
        topperCard.className = 'topper-card';
        
        topperCard.innerHTML = `
            <img src="${getImagePath(topper.image)}" alt="${topper.name}" class="topper-image">
            <h3>${topper.name}</h3>
            <div class="topper-info">
                <p><strong>Class:</strong> ${topper.class}</p>
                <p><strong>Mark:</strong> ${topper.total}</p>
            </div>
            <div class="rank-badge">Rank: ${topper.rank}</div>
        `;
        
        container.appendChild(topperCard);
    });
}

// Load gallery
function loadGallery() {
    const container = document.getElementById('gallery-container');
    const galleryImages = ((currentBranch === 'branch1' ? window.school1Data : window.school2Data)?.gallery) || [
        'gallery-1.jpg','gallery-2.jpg','gallery-3.jpg','gallery-4.jpg','gallery-5.jpg','gallery-6.jpg','gallery-7.jpg','gallery-8.jpg','gallery-9.jpg'
    ];
    
    container.innerHTML = '';
    
    galleryImages.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        galleryItem.innerHTML = `
            <img src="${getImagePath(image)}" alt="Gallery Image ${index + 1}">
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
    const sliderImages = ((currentBranch === 'branch1' ? window.school1Data : window.school2Data)?.slider) || ['slider-1.jpg','slider-2.jpg','slider-3.jpg','slider-4.jpg','slider-5.jpg'];
    sliderContainer.querySelectorAll('.slide')?.forEach(n=>n.remove());
    dotsContainer.innerHTML = '';

    sliderImages.forEach((img, idx) => {
        const slide = document.createElement('div');
        slide.className = 'slide fade';
        slide.innerHTML = `<img src="${getImagePath(img)}" alt="Slide ${idx+1}">`;
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

// Function to update footer contact based on branch
function updateFooterContact(branch) {
    const data = branchData[branch];
    // You can update footer contact info here if needed
}

// Keyboard navigation for slider
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        changeSlide(-1);
    } else if (event.key === 'ArrowRight') {
        changeSlide(1);
    }
});

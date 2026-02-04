document.addEventListener('DOMContentLoaded', function() {
  const navHost = document.getElementById('site-nav');
  const footerHost = document.getElementById('site-footer');

  if (navHost) {
    navHost.innerHTML = `
      <nav class="navbar">
        <div class="nav-container">
          <div class="nav-left">
            <a class="logo-link" href="index.html">
              <div class="logo">
                <img id="school-logo" src="images/siteImage/school-logo.png" alt="School Logo" class="logo-img">
                <span class="school-name">Santhosh Group of Schools</span>
                <img id="school-logo-secondary" src="images/siteImage/school-secondary-logo.png" alt="School Logo" class="logo-img logo-img-secondary">
              </div>
            </a>
          </div>
          <button id="nav-toggle" class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
            <span class="hamburger"></span>
          </button>
          <div class="nav-right">
            <ul class="nav-menu">
              <li><a href="index.html#home" class="nav-link">Home</a></li>
              <li><a href="index.html#about" class="nav-link">About Us</a></li>
              <li><a href="gallery.html" class="nav-link">Gallery</a></li>
              <li><a href="index.html#contact" class="nav-link">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </nav>
    `;
  }

  if (footerHost) {
    footerHost.innerHTML = `
      <footer id="contact" class="footer">
        <div class="footer-content">
          <div class="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="index.html#home">Home</a></li>
              <li><a href="index.html#about">About Us</a></li>
              <li><a href="index.html#gallery">Gallery</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Our Contacts</h3>
            <div class="contact-info">
              <p><i class="fas fa-phone"></i> +91-XXXXXXXXXX</p>
              <p><i class="fas fa-envelope"></i> info@santhoshschool.edu</p>
              <p><i class="fas fa-map-marker-alt"></i> Whitefield, Bangalore</p>
            </div>
          </div>
          <div class="footer-section">
            <div class="footer-logo">
              <img id="footer-logo-img" src="images/siteImage/school-logo.png" alt="School Logo">
              <div class="school-description">
                <h4>Santhosh School</h4>
                <p>Providing quality education and holistic development for students since 2000.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 Santhosh School. All rights reserved.</p>
        </div>
      </footer>
    `;
  }
});

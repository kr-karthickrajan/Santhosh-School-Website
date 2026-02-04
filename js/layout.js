document.addEventListener('DOMContentLoaded', function() {
  const navHost = document.getElementById('site-nav');
  const footerHost = document.getElementById('site-footer');

  if (navHost) {
    const nav = window.siteData?.nav || {};
    const navLinks = nav.links || [];
    const navLinksHtml = navLinks
      .map(link => `<li><a href="${link.href}">${link.label}</a></li>`)
      .join('');
    const navLogo = nav.logo || 'school-logo.png';
    const navSecondary = nav.secondaryLogo || navLogo;
    const navTitle = nav.title || 'Santhosh Group of Schools';
    navHost.innerHTML = `
      <nav class="navbar">
        <div class="nav-container">
          <div class="nav-left">
            <a class="logo-link" href="index.html">
              <div class="logo">
                <img id="school-logo" src="images/siteImage/${navLogo}" alt="School Logo" class="logo-img">
                <span class="school-name">${navTitle}</span>
                <img id="school-logo-secondary" src="images/siteImage/${navSecondary}" alt="School Logo" class="logo-img logo-img-secondary">
              </div>
            </a>
          </div>
          <button id="nav-toggle" class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
            <span class="hamburger"></span>
          </button>
          <div class="nav-right">
            <ul class="nav-menu">
              ${navLinksHtml}
            </ul>
          </div>
        </div>
      </nav>
    `;
  }

  if (footerHost) {
    const footer = window.siteData?.footer || {};
    const quickLinks = footer.quickLinks || [];
    const contact = footer.contact || {};
    const brand = footer.brand || {};
    const copyright = footer.copyright || '© 2026 Santhosh School. All rights reserved.';
    const linksHtml = quickLinks
      .map(link => `<li><a href="${link.href}">${link.label}</a></li>`)
      .join('');
    const schools = contact.schools || [];
    const schoolsHtml = schools
      .map(s => `<p><i class="fas fa-map-marker-alt"></i> <a class="footer-map" href="${s.mapUrl || '#'}" target="_blank" rel="noopener">${s.name}: ${s.address}</a></p>`)
      .join('');
    footerHost.innerHTML = `
      <footer id="contact" class="footer">
        <div class="footer-content">
          <div class="footer-section">
            <h3>Quick Links</h3>
            <ul>
              ${linksHtml}
            </ul>
          </div>
          <div class="footer-section">
            <h3>Our Contacts</h3>
            <div class="contact-info">
              <p><i class="fas fa-phone"></i> ${contact.phone || ''}</p>
              <p><i class="fas fa-envelope"></i> ${contact.email || ''}</p>
              ${schoolsHtml}
            </div>
          </div>
          <div class="footer-section">
            <div class="footer-logo">
              <img id="footer-logo-img" src="images/siteImage/school-logo.png" alt="School Logo">
              <div class="school-description">
                <h4>${brand.name || 'Santhosh School'}</h4>
                <p>${brand.description || ''}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>${copyright}</p>
        </div>
      </footer>
    `;
  }
});

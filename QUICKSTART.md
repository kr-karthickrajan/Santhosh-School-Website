# Quick Start Guide - Santhosh School Website

## 🚀 Getting Started

### Step 1: Open the Website
Simply double-click `index.html` to open it in your default browser, or:
- Right-click on `index.html` → Open with → Your preferred browser

### Step 2: Test the Features
1. **Branch Selection**: Use the dropdown in the navbar to switch between Branch 1 and Branch 2
2. **Image Slider**: Click the arrows to navigate through images or wait for auto-rotation
3. **Navigation**: Click menu items (Home, About Us, Gallery, Contact Us) to navigate
4. **Events**: Scroll through the News & Events section
5. **Toppers**: View school toppers with their information
6. **Gallery**: Hover over gallery images to see the zoom effect

---

## 📝 Customization Instructions

### 1. Change School Logo
Replace `images/school-logo.png` with your school's logo (recommended size: 50x50px or square aspect ratio)

### 2. Update Branch Information
Edit `js/script.js` and find the `branchData` object:
```javascript
const branchData = {
    branch1: {
        name: 'Santhosh School - Whitefield Branch',
        description: 'Your description here...',
        stats: {
            students: '550+',
            teachers: '65+',
            classes: '18+'
        },
        contact: {
            phone: '+91-XXXXXXXXXX',
            email: 'your-email@school.edu',
            address: 'Your Address Here'
        }
    },
    // ... rest of data
}
```

### 3. Change Event Information
Edit the `eventsData` object in `js/script.js`:
```javascript
const eventsData = {
    branch1: [
        {
            name: 'Event Name',
            date: '2026-02-20',  // Format: YYYY-MM-DD
            description: 'Event description here'
        },
        // Add more events...
    ],
    // ... branch2
}
```

### 4. Update School Toppers
Edit the `toppersData` object in `js/script.js`:
```javascript
const toppersData = {
    branch1: [
        {
            name: 'Student Name',
            class: '12-A',
            total: '98%',
            rank: '1st',
            image: 'images/topper-1.jpg'  // Replace with actual image
        },
        // Add more toppers...
    ],
    // ... branch2
}
```

### 5. Replace Placeholder Images

#### Slider Images (3 images):
- `images/slider-1.jpg` (recommended size: 1200x500px)
- `images/slider-2.jpg` (recommended size: 1200x500px)
- `images/slider-3.jpg` (recommended size: 1200x500px)

#### Student Photos (8 images):
- `images/topper-1.jpg` to `topper-8.jpg` (recommended size: 300x300px)

#### Gallery Images (9 images):
- `images/gallery-1.jpg` to `gallery-9.jpg` (recommended size: 400x300px)

**How to replace:**
1. Replace the image file in the `images/` folder with your actual image
2. Keep the same filename
3. Refresh the browser to see changes

### 6. Change Colors
Edit `css/style.css` and modify the CSS variables:
```css
:root {
    --primary-color: #1e40af;      /* Main color (currently blue) */
    --secondary-color: #f59e0b;    /* Accent color (currently amber) */
    --dark-color: #1f2937;         /* Dark text color */
    --light-color: #f3f4f6;        /* Light background */
    --text-color: #374151;         /* Regular text color */
}
```

### 7. Update Footer Information
In `index.html`, find the footer section and update:
- Quick Links URLs
- Contact information (phone, email, address)
- School description

---

## 🎨 Color Schemes (Optional)

### Professional Blue & Gold
```css
--primary-color: #1e40af;
--secondary-color: #f59e0b;
```

### Modern Purple & Pink
```css
--primary-color: #7c3aed;
--secondary-color: #ec4899;
```

### Green & Orange
```css
--primary-color: #059669;
--secondary-color: #f97316;
```

### Royal Blue & Silver
```css
--primary-color: #003d99;
--secondary-color: #a8a9ad;
```

---

## 🌐 Hosting the Website

### Option 1: Using Python (Easiest)
```bash
# In the project folder, run:
python -m http.server 8000

# Then open: http://localhost:8000
```

### Option 2: Using VS Code Live Server Extension
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 3: Free Hosting Options
- **Netlify**: Drag and drop your `Santhosh-School` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Upload to GitHub and enable Pages
- **000webhost**: Free hosting with cPanel
- **InfinityFree**: Completely free hosting

---

## 📱 Responsive Design

The website automatically adjusts for:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (Below 768px)

Test on different screen sizes by:
1. Opening browser DevTools (F12 or Right-click → Inspect)
2. Clicking the mobile device icon
3. Selecting different devices from the dropdown

---

## ⚡ Performance Tips

1. **Optimize Images**: Use tools like:
   - TinyPNG (tinypng.com)
   - ImageOptim
   - Adobe Lightroom

2. **Keep File Sizes Small**: Aim for:
   - Logo: < 50KB
   - Slider images: < 500KB each
   - Topper photos: < 100KB each
   - Gallery images: < 150KB each

3. **Image Format Recommendations**:
   - PNG: For logo (crisp quality)
   - JPG: For photos and gallery (smaller file size)
   - WebP: For modern browsers (even smaller)

---

## 🐛 Troubleshooting

### Images not showing?
- Check if image files exist in `images/` folder
- Verify filenames match exactly (case-sensitive)
- Ensure images are in supported formats (JPG, PNG, GIF)

### Branch switching not working?
- Check browser console (F12 → Console) for errors
- Ensure `js/script.js` is loading properly
- Verify branch names in dropdown match JavaScript variable names

### Styles not applying?
- Clear browser cache (Ctrl+Shift+Delete)
- Check if `css/style.css` is in the correct folder
- Ensure CSS file path is correct in HTML

### Page loading slowly?
- Optimize and compress images
- Check file sizes using your operating system
- Consider using a CDN for image delivery

---

## 📞 Quick Contact Info Update

To update the contact information shown in the footer:

1. Open `index.html`
2. Find the footer section:
```html
<div class="contact-info">
    <p><i class="fas fa-phone"></i> +91-XXXXXXXXXX</p>
    <p><i class="fas fa-envelope"></i> info@santhoshschool.edu</p>
    <p><i class="fas fa-map-marker-alt"></i> Whitefield, Bangalore</p>
</div>
```
3. Replace with your actual details

---

## ✨ Advanced Customization

### Adding More Events
In `js/script.js`, add to the `eventsData` object:
```javascript
{
    name: 'New Event',
    date: '2026-03-15',
    description: 'Event details here'
}
```

### Adding More Gallery Images
1. Add new image files to `images/` folder (e.g., `gallery-10.jpg`)
2. In `js/script.js`, add the path to `galleryImages` array:
```javascript
const galleryImages = [
    'images/gallery-1.jpg',
    // ... existing images
    'images/gallery-10.jpg'  // Add new image
];
```

### Changing Slider Speed
In `js/script.js`, find and modify:
```javascript
setInterval(autoSlides, 5000);  // 5000ms = 5 seconds
// Change 5000 to your desired interval in milliseconds
```

---

## 🎓 Tips for Teachers

- Update events regularly for students and parents
- Add real student photos and achievement information
- Include important dates and deadlines
- Keep contact information current
- Update gallery regularly with school activities

---

## 📧 Support

For issues or questions, please refer to:
- README.md - Full documentation
- Code comments in HTML, CSS, and JavaScript files
- Browser DevTools for debugging

Enjoy your new school website! 🎉

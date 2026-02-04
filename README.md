# Santhosh School Website

A modern, responsive school website for Santhosh School with support for multiple branches.

## Features

### 1. Navigation Bar
- School logo and name on the left
- Branch selector dropdown to switch between 2 branches
- Navigation menu: Home, About Us, Gallery, Contact Us
- Sticky navigation for easy access

### 2. Dynamic Branch Content
- Switch between Branch 1 (Whitefield) and Branch 2 (Indiranagar)
- Branch-specific information, statistics, events, and toppers
- Updates all sections when branch is changed

### 3. Image Slider
- Auto-rotating carousel with 3 placeholder images
- Manual navigation with previous/next buttons
- Dot indicators for slide selection
- Keyboard navigation support (Arrow keys)

### 4. About Branch Section
- Branch description
- Key statistics (Students, Teachers, Classes)
- Gradient design with visual appeal

### 5. News & Events
- Scrollable container for multiple events
- Event cards with name, date, and description
- Branch-specific events
- Calendar icons for visual clarity

### 6. School Toppers
- Student cards displaying:
  - Student photo (placeholder)
  - Name
  - Class
  - Total marks/percentage
  - Rank badge
- Grid layout with hover effects

### 7. Photo Gallery
- Thumbnail grid of school images (9 placeholders)
- Hover overlay effect
- Responsive grid that adapts to screen size
- Click-ready for future lightbox implementation

### 8. Footer
- Three-column layout:
  - Quick Links
  - Contact Information
  - School Logo and Description
- Responsive design for all screen sizes
- Copyright information

## Project Structure

```
Santhosh-School/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styling
├── js/
│   └── script.js          # All functionality
├── images/                # Image assets
│   ├── school-logo.png
│   ├── slider-1.jpg to slider-3.jpg
│   ├── topper-1.jpg to topper-8.jpg
│   ├── gallery-1.jpg to gallery-9.jpg
│   └── (add your images here)
├── create_images.py       # Script to generate placeholder images
└── README.md             # This file
```

## How to Use

### Option 1: Direct Browser Access
1. Open `index.html` in any modern web browser
2. The website will load with all features functional

### Option 2: Local Server (Recommended)
For better compatibility, serve the files through a local server:

**Using Python 3:**
```bash
cd d:\Github\ Repositories\Santhosh-School
python -m http.server 8000
```
Then open: `http://localhost:8000`

**Using Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Using Node.js (if installed):**
```bash
npx http-server
```

## Customization

### Updating Images
Replace placeholder images in the `images/` folder with your actual images:
- `school-logo.png` - School logo (ideal size: 50x50px)
- `slider-1.jpg`, `slider-2.jpg`, `slider-3.jpg` - Slider images (recommended: 1200x500px)
- `topper-1.jpg` to `topper-8.jpg` - Student photos (recommended: 300x300px)
- `gallery-1.jpg` to `gallery-9.jpg` - Gallery images (recommended: 400x300px)

### Updating Branch Information
Edit `js/script.js` to update:
- Branch names and descriptions
- Statistics (students, teachers, classes)
- Contact information

Find the `branchData` object and modify:
```javascript
branch1: {
    name: 'Your branch name',
    description: 'Your branch description',
    stats: {
        students: '500+',
        teachers: '50+',
        classes: '15+'
    },
    contact: { ... }
}
```

### Adding/Editing Events
Edit the `eventsData` object in `js/script.js`:
```javascript
branch1: [
    {
        name: 'Event Name',
        date: 'YYYY-MM-DD',
        description: 'Event description here'
    },
    // Add more events...
]
```

### Adding/Editing Toppers
Edit the `toppersData` object in `js/script.js`:
```javascript
branch1: [
    {
        name: 'Student Name',
        class: '12-A',
        total: '98%',
        rank: '1st',
        image: 'images/topper-1.jpg'
    },
    // Add more toppers...
]
```

### Changing Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #1e40af;      /* Main blue */
    --secondary-color: #f59e0b;    /* Amber accent */
    --dark-color: #1f2937;         /* Dark text */
    --light-color: #f3f4f6;        /* Light background */
    --text-color: #374151;         /* Text color */
    --border-color: #e5e7eb;       /* Border color */
}
```

## Browser Compatibility

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Responsive Design

The website is fully responsive with breakpoints at:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: Below 768px
- Small Mobile: Below 480px

## Features Breakdown

### Image Slider
- **Auto-scroll**: Every 5 seconds
- **Manual Controls**: Previous/Next buttons
- **Dot Navigation**: Click dots to jump to specific slides
- **Keyboard**: Use arrow keys to navigate

### Branch Switching
- **Dropdown Selection**: Easy branch selection
- **Dynamic Content**: All sections update when branch changes
- **Branch-specific Data**: Events and toppers are branch-specific

### Events Section
- **Scrollable**: Overflow scroll for many events
- **Formatted Dates**: Human-readable date format
- **Icons**: Calendar icons for better UX
- **Hover Effects**: Cards lift on hover

### Photo Gallery
- **Grid Layout**: Responsive grid (3 columns on desktop, 2 on tablet, 1 on mobile)
- **Hover Effects**: Image zoom and overlay on hover
- **Ready for Lightbox**: Structure supports modal implementation

## Performance

- Lightweight CSS and JavaScript
- Optimized images (placeholders are small)
- Smooth animations and transitions
- Fast page load time
- Mobile-friendly

## Future Enhancements

1. Add lightbox for gallery images
2. Implement contact form
3. Add staff directory
4. Create news blog section
5. Add admission form
6. Implement event registration
7. Add testimonials section
8. Create online results portal

## Support

For customization help or issues, refer to the code comments in:
- `index.html` - HTML structure
- `css/style.css` - Styling and animations
- `js/script.js` - JavaScript functionality

## Version

Version: 1.0
Created: February 2026

---

**Note**: Replace all placeholder images with actual school images for a professional appearance.

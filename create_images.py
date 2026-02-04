from PIL import Image, ImageDraw, ImageFont
import os

# Create images directory if not exists
images_dir = 'images'
school1_dir = os.path.join(images_dir, 'school1')
school2_dir = os.path.join(images_dir, 'school2')

for dir_path in [school1_dir, school2_dir]:
    if not os.path.exists(dir_path):
        os.makedirs(dir_path)

# School logo
logo = Image.new('RGB', (200, 200), color=(30, 64, 175))
draw = ImageDraw.Draw(logo)
draw.text((40, 80), "SCHOOL\nLOGO", fill='white', align='center')
logo.save(os.path.join(school1_dir, 'school-logo.png'))
logo.save(os.path.join(school2_dir, 'school-logo.png'))

# Slider images
slider_images = [
    ('slider-1.jpg', 'School Campus', (30, 64, 175)),
    ('slider-2.jpg', 'Sports Ground', (101, 126, 234)),
    ('slider-3.jpg', 'Classroom', (139, 92, 246)),
    ('slider-4.jpg', 'Library', (245, 158, 11)),
    ('slider-5.jpg', 'Playground', (236, 72, 153))
]

for filename, text, color in slider_images:
    img = Image.new('RGB', (1200, 500), color=color)
    draw = ImageDraw.Draw(img)
    draw.text((400, 200), text, fill='white')
    img.save(os.path.join(school1_dir, filename))
    img.save(os.path.join(school2_dir, filename))

# Topper images
for i in range(1, 9):
    img = Image.new('RGB', (300, 300), color=(101, 126, 234))
    draw = ImageDraw.Draw(img)
    draw.text((100, 130), f"Topper {i}", fill='white')
    img.save(os.path.join(school1_dir, f'topper-{i}.jpg'))
    img.save(os.path.join(school2_dir, f'topper-{i}.jpg'))

# Gallery images (now 10 instead of 9)
for i in range(1, 11):
    colors = [(30, 64, 175), (101, 126, 234), (139, 92, 246), (245, 158, 11), (236, 72, 153)]
    color = colors[i % len(colors)]
    img = Image.new('RGB', (400, 300), color=color)
    draw = ImageDraw.Draw(img)
    draw.text((130, 130), f"Gallery {i}", fill='white')
    img.save(os.path.join(school1_dir, f'gallery-{i}.jpg'))
    img.save(os.path.join(school2_dir, f'gallery-{i}.jpg'))

print("All placeholder images created successfully!")

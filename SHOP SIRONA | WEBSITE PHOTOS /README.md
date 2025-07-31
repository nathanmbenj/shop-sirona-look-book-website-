# Sirona Festival Outfits Gallery

A responsive photo gallery website for Sirona Festival Outfits.

## How to Add New Photos

1. Place your new photos in the `photos` directory
2. Open `index.html`
3. Copy and paste the following structure for each new photo:

```html
<div class="photo-card">
    <img src="photos/your-new-photo.jpg" alt="Description of your photo">
    <div class="photo-caption">Your Photo Caption</div>
</div>
```

4. Replace:
   - `your-new-photo.jpg` with your photo's filename
   - `Description of your photo` with an appropriate alt text
   - `Your Photo Caption` with a caption for your photo

## File Structure
```
.
├── index.html
├── styles.css
├── README.md
└── photos/
    ├── example1.jpg
    ├── example2.jpg
    └── your-new-photos.jpg
```

## Deployment
This website is designed to be hosted on GitHub Pages. To deploy:

1. Create a new repository on GitHub
2. Upload these files to your repository
3. Go to repository Settings > Pages
4. Select your main branch as the source
5. Your site will be published at `https://[username].github.io/[repository-name]`
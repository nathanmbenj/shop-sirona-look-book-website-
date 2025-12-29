# GitHub Pages Deployment

## Setup Instructions

1. **Configure GitHub Pages Source:**
   - Go to: https://github.com/nathanmbenj/shop-sirona-look-book-website-/settings/pages
   - Under "Source", select **"GitHub Actions"** (NOT "Deploy from a branch")
   - Save the settings

2. **Verify Deployment:**
   - Go to the **Actions** tab in your repository
   - You should see "Deploy static content to Pages" workflow running
   - Wait for it to complete (usually 1-2 minutes)

3. **Access Your Site:**
   - Once deployed, your site will be available at:
   - https://nathanmbenj.github.io/shop-sirona-look-book-website-/

## Troubleshooting

If the site still shows only the README:
- Make sure GitHub Pages source is set to **"GitHub Actions"** (not branch)
- Check the Actions tab to see if the workflow is running
- Verify the workflow completed successfully (green checkmark)
- Clear your browser cache and try again

## Files Included in Deployment

- `index.html` - Main shop page
- `product.html` - Product detail pages
- `checkout.html` - Checkout page
- `success.html` - Order confirmation page
- `styles.css` - All styling
- `cart.js` - Cart functionality
- `checkout.js` - Payment processing
- `products.js` - Product data
- `photos/` - Product images
- `.nojekyll` - Prevents Jekyll processing


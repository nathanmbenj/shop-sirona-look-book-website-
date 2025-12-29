# Pinterest Links Configuration

## How to Update Pinterest Links

To link your products to your Pinterest pins, follow these steps:

1. **Open `products.js`**
   - This file contains all product data including Pinterest links

2. **Find the product you want to update**
   - Each product has a `pinterestLink` property
   - Currently set to: `"https://www.pinterest.com/pin/YOUR_PIN_ID/"`

3. **Replace with your actual Pinterest pin URL**
   - Format: `"https://www.pinterest.com/pin/[PIN_ID]/"`
   - Example: `"https://www.pinterest.com/pin/1234567890123456789/"`

4. **Save the file**
   - The changes will automatically appear on product pages

## Product IDs Reference

- Product 1: Dark Sparkle Fairy Outfit
- Product 2: The Golden Hemlock Set
- Product 3: Magical Bxtch Keychain
- Product 4: Mushroom Accessory Holder
- Product 5: The Rave Fae
- Product 6: The Velvet Flutter set
- Product 7: Red Rosethorn Fae Set
- Product 8: The Seraphena Set
- Product 9: The Magenta Fae Set
- Product 10: Dark Purple Velvet Bodysuit

## Getting Your Pinterest Pin URLs

1. Go to Pinterest and find the pin you want to link
2. Click on the pin to open it
3. Copy the URL from your browser's address bar
4. Paste it into the corresponding `pinterestLink` field in `products.js`

### Alternative: Getting Pin ID from Pin URL

If you have a Pinterest pin URL like:
`https://www.pinterest.com/pin/1234567890123456789/`

The pin ID is the number after `/pin/` and before the trailing slash.

## Notes

- Make sure to include the full URL (starting with `https://`)
- The links will open in a new tab (target="_blank")
- All links are set to `rel="noopener noreferrer"` for security
- Pinterest pin URLs typically end with a trailing slash


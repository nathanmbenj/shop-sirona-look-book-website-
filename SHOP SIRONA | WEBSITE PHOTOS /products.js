// Product data with descriptions and Pinterest links
const products = {
    1: {
        id: 1,
        name: "Dark Sparkle Fairy Outfit",
        price: 89.99,
        image: "photos/dark-sparkle-fairy.jpg",
        description: "Embrace your dark fairy aesthetic with this stunning sparkle fairy outfit. Perfect for festivals, raves, or any magical occasion. This enchanting ensemble features shimmering details and a mystical dark color palette that will make you stand out in the crowd.",
        details: [
            "Handcrafted with attention to detail",
            "Comfortable fit for all-day wear",
            "Machine washable",
            "Available in multiple sizes"
        ],
        pinterestLink: "https://www.pinterest.com/pin/YOUR_PIN_ID/"
    },
    2: {
        id: 2,
        name: "The Golden Hemlock Set",
        price: 129.99,
        image: "photos/The Golden Hemlock Set.jpg",
        description: "Channel the elegance of nature with The Golden Hemlock Set. This luxurious ensemble combines earthy tones with golden accents, creating a sophisticated festival look. Inspired by the beauty of the hemlock tree, this set is perfect for those who want to blend seamlessly with nature while maintaining a glamorous edge.",
        details: [
            "Premium quality materials",
            "Elegant golden accents",
            "Versatile styling options",
            "Perfect for outdoor festivals"
        ],
        pinterestLink: "https://www.pinterest.com/pin/YOUR_PIN_ID/"
    },
    3: {
        id: 3,
        name: "Magical Bxtch Keychain",
        price: 19.99,
        image: "photos/Magical Bxtch Keychain.jpg",
        description: "Add a touch of magic to your everyday accessories with this enchanting keychain. Featuring a bold and empowering design, this keychain is the perfect way to express your unique style. Made with durable materials to withstand daily use while maintaining its magical charm.",
        details: [
            "Durable construction",
            "Unique design",
            "Perfect gift idea",
            "Lightweight and portable"
        ],
        pinterestLink: "https://www.pinterest.com/pin/YOUR_PIN_ID/"
    },
    4: {
        id: 4,
        name: "Mushroom Accessory Holder",
        price: 34.99,
        image: "photos/Mushroom Accessory Holder.jpg",
        description: "Organize your accessories in style with this whimsical mushroom accessory holder. This functional and decorative piece adds a touch of nature to your space while keeping your jewelry and accessories neatly organized. Perfect for the bohemian or nature-loving aesthetic.",
        details: [
            "Handcrafted design",
            "Multiple storage compartments",
            "Decorative and functional",
            "Eco-friendly materials"
        ],
        pinterestLink: "https://www.pinterest.com/pin/YOUR_PIN_ID/"
    },
    5: {
        id: 5,
        name: "The Rave Fae",
        price: 109.99,
        image: "photos/The Rave Fae.jpg",
        description: "Get ready to dance the night away in The Rave Fae outfit. This electrifying ensemble combines the ethereal beauty of fairy aesthetics with the vibrant energy of rave culture. With eye-catching colors and comfortable materials, you'll be the star of any festival or rave event.",
        details: [
            "UV-reactive elements",
            "Breathable fabric",
            "Perfect for dancing",
            "Bold and vibrant design"
        ],
        pinterestLink: "https://www.pinterest.com/pin/YOUR_PIN_ID/"
    },
    6: {
        id: 6,
        name: "The Velvet Flutter set",
        price: 119.99,
        image: "photos/The Velvet Flutter set.jpg",
        description: "Experience luxury and elegance with The Velvet Flutter set. This sophisticated ensemble features sumptuous velvet fabric with delicate flutter details that create movement and grace. Perfect for those who appreciate refined style and premium materials.",
        details: [
            "Luxurious velvet material",
            "Elegant flutter details",
            "Comfortable and stylish",
            "Perfect for special occasions"
        ],
        pinterestLink: "https://www.pinterest.com/pin/YOUR_PIN_ID/"
    },
    7: {
        id: 7,
        name: "Red Rosethorn Fae Set",
        price: 139.99,
        image: "photos/Red Rosethorn Fae Set.jpg",
        description: "Make a bold statement with the Red Rosethorn Fae Set. Inspired by the beauty and thorns of roses, this set combines romantic elements with edgy details. The rich red color palette creates a striking look that's both fierce and feminine, perfect for those who want to stand out.",
        details: [
            "Bold red color palette",
            "Unique rosetthorn design",
            "High-quality construction",
            "Statement piece"
        ],
        pinterestLink: "https://www.pinterest.com/pin/YOUR_PIN_ID/"
    },
    8: {
        id: 8,
        name: "The Seraphena Set",
        price: 149.99,
        image: "photos/The Seraphena Set.jpg",
        description: "Channel celestial beauty with The Seraphena Set. This heavenly ensemble draws inspiration from seraphim angels, featuring ethereal details and a divine color scheme. Perfect for those who want to embody angelic elegance with a modern twist.",
        details: [
            "Celestial-inspired design",
            "Premium materials",
            "Ethereal and elegant",
            "Unique and eye-catching"
        ],
        pinterestLink: "https://www.pinterest.com/pin/YOUR_PIN_ID/"
    },
    9: {
        id: 9,
        name: "The Magenta Fae Set",
        price: 129.99,
        image: "photos/The Magernta Fae Set.jpg",
        description: "Embrace vibrant energy with The Magenta Fae Set. This bold and colorful ensemble features a stunning magenta color palette that radiates confidence and creativity. Perfect for festivals, concerts, or any occasion where you want to express your vibrant personality.",
        details: [
            "Vibrant magenta color",
            "Eye-catching design",
            "Comfortable fit",
            "Perfect for festivals"
        ],
        pinterestLink: "https://www.pinterest.com/pin/YOUR_PIN_ID/"
    },
    10: {
        id: 10,
        name: "Dark Purple Velvet Bodysuit",
        price: 99.99,
        image: "photos/Dark Purple Velvet Bodysuit.jpg",
        description: "Indulge in luxury with the Dark Purple Velvet Bodysuit. This sleek and sophisticated piece features rich purple velvet that hugs your curves in all the right places. Perfect for layering or wearing on its own, this bodysuit is a versatile addition to any festival wardrobe.",
        details: [
            "Luxurious velvet fabric",
            "Flattering fit",
            "Versatile styling",
            "Rich dark purple color"
        ],
        pinterestLink: "https://www.pinterest.com/pin/YOUR_PIN_ID/"
    }
};

// Get product by ID
function getProduct(id) {
    return products[id];
}

// Get all products
function getAllProducts() {
    return Object.values(products);
}


# Setup Instructions for Payment Integration

This guide will help you set up PayPal and Stripe payment integrations for your Sirona Festival Outfits website.

## Features Added

✅ Shopping cart functionality with add/remove items
✅ Cart sidebar with quantity controls
✅ Checkout page with shipping form
✅ PayPal payment integration
✅ Stripe payment integration
✅ Order confirmation page
✅ Responsive design for mobile devices

## Payment Setup

### Stripe Setup

1. **Create a Stripe Account**
   - Go to https://stripe.com and create an account
   - Complete the account verification process

2. **Get Your API Keys**
   - Navigate to Developers > API keys in your Stripe dashboard
   - Copy your **Publishable key** (starts with `pk_test_` for testing)
   - Copy your **Secret key** (starts with `sk_test_` for testing) - keep this secure!

3. **Update checkout.js**
   - Open `checkout.js`
   - Replace `pk_test_YOUR_STRIPE_PUBLISHABLE_KEY` on line 2 with your actual Stripe publishable key

4. **Backend Integration (Required for Production)**
   - The current implementation includes a demo mode
   - For production, you need to create a backend server to:
     - Create payment intents securely
     - Handle webhooks for payment confirmations
     - Store order information securely
   
   Example backend endpoint needed:
   ```javascript
   POST /create-payment-intent
   {
     "amount": 10000, // in cents
     "currency": "usd"
   }
   ```

### PayPal Setup

1. **Create a PayPal Business Account**
   - Go to https://www.paypal.com/business and create an account
   - Complete the business verification process

2. **Get Your Client ID**
   - Navigate to Developer Dashboard: https://developer.paypal.com/dashboard/
   - Create a new app or use an existing one
   - Copy your **Client ID**

3. **Update checkout.html**
   - Open `checkout.html`
   - Find the PayPal SDK script tag (around line 10)
   - Replace `YOUR_PAYPAL_CLIENT_ID` with your actual PayPal Client ID

4. **Sandbox vs Production**
   - For testing, use PayPal Sandbox credentials
   - For production, switch to Live credentials in your PayPal dashboard

## Testing Payments

### Stripe Test Cards
Use these test card numbers in Stripe test mode:
- Success: `4242 4242 4242 4242`
- Decline: `4000 0000 0000 0002`
- Requires 3D Secure: `4000 0025 0000 3155`
- Use any future expiry date, any 3-digit CVC, and any ZIP code

### PayPal Sandbox
- Use PayPal Sandbox test accounts for testing
- Create test buyer and seller accounts in PayPal Developer Dashboard

## File Structure

```
.
├── index.html          # Main shop page with products
├── checkout.html       # Checkout page with payment options
├── success.html        # Order confirmation page
├── cart.js            # Cart management functionality
├── checkout.js        # Payment processing logic
├── styles.css         # All styling
└── photos/            # Product images
```

## Important Notes

⚠️ **Security Warnings:**
- Never commit your secret API keys to version control
- Use environment variables for sensitive keys in production
- Always use HTTPS in production
- Implement proper server-side validation for all payments

⚠️ **Current Implementation:**
- The Stripe integration is in demo mode
- You MUST implement a backend server for production use
- Orders are currently stored in localStorage (for demo only)
- In production, store orders in a secure database

## Next Steps for Production

1. **Backend Server**
   - Set up a Node.js/Express, Python/Flask, or similar backend
   - Implement payment intent creation for Stripe
   - Handle PayPal webhooks
   - Store orders in a database

2. **Environment Variables**
   - Store API keys securely
   - Use different keys for development and production

3. **Order Management**
   - Create an admin panel to view orders
   - Implement email notifications
   - Add order tracking

4. **Security**
   - Implement CSRF protection
   - Add rate limiting
   - Validate all inputs server-side
   - Use HTTPS only

## Support

For issues with:
- **Stripe**: https://stripe.com/docs/support
- **PayPal**: https://developer.paypal.com/support/

## License

© 2025 Sirona Festival Outfits. All rights reserved.


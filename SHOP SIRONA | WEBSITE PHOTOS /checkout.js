// Initialize Stripe (Replace with your publishable key)
let stripe, cardElement, cardErrors;

// Initialize Stripe when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Only initialize Stripe if the element exists
    if (document.getElementById('card-element')) {
        try {
            stripe = Stripe('pk_test_YOUR_STRIPE_PUBLISHABLE_KEY');
            const elements = stripe.elements();
            cardElement = elements.create('card');
            cardElement.mount('#card-element');
            
            cardErrors = document.getElementById('card-errors');
            cardElement.on('change', ({error}) => {
                if (error) {
                    cardErrors.textContent = error.message;
                } else {
                    cardErrors.textContent = '';
                }
            });
        } catch (error) {
            console.error('Stripe initialization error:', error);
        }
    }
});

// Load cart items on checkout page
document.addEventListener('DOMContentLoaded', function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
        alert('Your cart is empty. Redirecting to shop...');
        window.location.href = 'index.html';
        return;
    }
    
    displayCheckoutItems(cart);
    initializePayPal(cart);
});

// Display checkout items
function displayCheckoutItems(cart) {
    const checkoutItems = document.getElementById('checkoutItems');
    const checkoutTotal = document.getElementById('checkoutTotal');
    
    checkoutItems.innerHTML = cart.map(item => `
        <div class="checkout-item">
            <img src="${item.image}" alt="${item.name}" class="checkout-item-image">
            <div class="checkout-item-details">
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
            </div>
            <div class="checkout-item-total">
                $${(item.price * item.quantity).toFixed(2)}
            </div>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    checkoutTotal.textContent = total.toFixed(2);
}

// Initialize PayPal
function initializePayPal(cart) {
    if (typeof paypal === 'undefined') {
        console.error('PayPal SDK not loaded. Please check your PayPal Client ID in checkout.html');
        document.getElementById('paypal-button-container').innerHTML = 
            '<p style="color: red;">PayPal SDK not loaded. Please configure your PayPal Client ID.</p>';
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    paypal.Buttons({
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: total.toFixed(2),
                        currency: 'USD'
                    },
                    description: 'Sirona Festival Outfits Purchase'
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                handlePaymentSuccess('PayPal', details);
            });
        },
        onError: function(err) {
            alert('PayPal payment failed. Please try again.');
            console.error('PayPal Error:', err);
        }
    }).render('#paypal-button-container');
}

// Handle Stripe payment
document.addEventListener('DOMContentLoaded', function() {
    const stripeBtn = document.getElementById('stripeBtn');
    if (stripeBtn) {
        stripeBtn.addEventListener('click', handleStripePayment);
    }
});

async function handleStripePayment() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const form = document.getElementById('checkoutForm');
    
    // Validate form
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        zip: document.getElementById('zip').value,
        country: document.getElementById('country').value
    };
    
    // In a real application, you would create a payment intent on your server
    // For demo purposes, we'll show a success message
    // Replace this with actual server-side integration
    
    try {
        // This is a placeholder - you need to create a payment intent on your backend
        // const {clientSecret} = await fetch('/create-payment-intent', {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({amount: total * 100, currency: 'usd'})
        // }).then(r => r.json());
        
        // const {error, paymentIntent} = await stripe.confirmCardPayment(clientSecret, {
        //     payment_method: {
        //         card: cardElement,
        //         billing_details: {
        //             name: formData.name,
        //             email: formData.email,
        //             phone: formData.phone,
        //             address: {
        //                 line1: formData.address,
        //                 city: formData.city,
        //                 state: formData.state,
        //                 postal_code: formData.zip,
        //                 country: formData.country
        //             }
        //         }
        //     }
        // });
        
        // For demo: simulate successful payment
        alert('Note: This is a demo. In production, integrate with your Stripe backend to process payments.');
        handlePaymentSuccess('Stripe', {paymentIntent: {id: 'demo_' + Date.now()}});
        
    } catch (error) {
        if (cardErrors) {
            cardErrors.textContent = error.message || 'Payment failed. Please try again.';
        }
        console.error('Stripe Error:', error);
    }
}

// Handle successful payment
function handlePaymentSuccess(method, details) {
    // Save order details (in production, send to your server)
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        zip: document.getElementById('zip').value,
        country: document.getElementById('country').value
    };
    
    const order = {
        items: cart,
        shipping: formData,
        paymentMethod: method,
        paymentDetails: details,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        date: new Date().toISOString()
    };
    
    // Save order to localStorage (in production, send to server)
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    // Clear cart
    localStorage.removeItem('cart');
    
    // Redirect to success page
    window.location.href = 'success.html?method=' + method;
}


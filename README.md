
# Node.js Stripe Payment Server

This is the backend server for handling Stripe Checkout session creation.


##  Tech Stack
- Node.js
- Express
- Stripe SDK
- dotenv


##  Setup Instructions

### 1. Install dependencies
```bash
npm install
```

### 2. Create .env file
```bash
STRIPE_SECRET_KEY=sk_test_xxxxx
PORT=5000
```

### 3. Run server
```bash
node server.js
```

 API Endpoint
**POST /create-checkout-session**

Creates a Stripe Checkout session.

**Response:**
```json
{
  "url": "https://checkout.stripe.com/..."
}
```

###  Payment Flow   
	1.	Client calls /create-checkout-session   
	2.	Server creates Stripe session:    
  ```js
  stripe.checkout.sessions.create()
  ```
  3.	Returns session.url
  4.	Client redirects user to Stripe   

###  Security Notes   
	•	Never expose STRIPE_SECRET_KEY      
	•	Do NOT accept card details in backend      
	•	Stripe handles all sensitive payment data      
  

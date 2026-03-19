const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Create Checkout Session
app.post("/create-checkout-session", async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            line_items: [
                {
                    price_data: {
                        currency: "inr",
                        product_data: {
                            name: "Test Product",
                        },
                        unit_amount: 50000, // ₹500
                    },
                    quantity: 1,
                },
            ],
            success_url: `${process.env.CLIENT_URL}/success`,
            cancel_url: `${process.env.CLIENT_URL}/cancel`,
        });

        console.log("Checkout Session created:", session.id);

        res.json({ url: session.url });
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(process.env.PORT, () => console.log("Server running on port " + process.env.PORT));
const express = require("express");
const app = express();

require("dotenv").config();


const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const PORT = 4000;

app.get("/", async (req, res) => {
    res.send("Hello")
});

app.get("/secret", async (req, res) => {
    const intent = await stripe.paymentIntents.create({
        amount: 1099,
        currency: "nok",
        metadata: {
            integration_check: 'accept_a_payment'
        }
    })

    res.json({ client_secret: intent.client_secret })
})

app.get("/health", (req, res, next) => {
    res.send({ status: "ok" })
})


app.listen(PORT, () => { console.log(`App listening on port ${PORT}`) });
# Receive SMS messages with Node.js and the Vonage SMS API

This repository contains sample code for receiving SMS messages with Node.js and the Vonage SMS API.  

For step-by-step instructions, see the linked [blog post](https://learn.vonage.com/blog/2016/10/27/receive-sms-messages-node-js-express-dr/).

## Running Instructions

1. Clone this repository

2. Run `npm install` in your project folder

3. Run `node server.js`

4. Start a tunnel using [ngrok](https://ngrok.com/) on port 3000:
`$ ngrok http 3000`

5. Set your inbound SMS webhook to `YOUR_NGROK_URL/inbound` in your [Vonage dashboard](https://dashboard.nexmo.com), under _SMS settings_.

6. Send an SMS message to one of your [Vonage numbers](https://dashboard.nexmo.com/your-numbers)!

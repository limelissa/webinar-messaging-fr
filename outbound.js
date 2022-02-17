require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const rp = require("request-promise");

const twilionumber = '+33757900347';

(async function () {
    const response = await rp("http://affirmations.dev");
    const affirmation = JSON.parse(response).affirmation;

    const messages = await client.messages.list({ 
        dateSent: new Date(Date.UTC(2022, 01, 16, 0, 0, 0)),
        to: twilionumber 
    });

    for (const message of messages) {
        // console.log(message.from);
        await client.messages.create({
            to: message.from,
            from: twilionumber,
            body: affirmation
        });
        console.log(message.sid);
    }
})();


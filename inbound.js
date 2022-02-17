const http = require('http');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
    // Set a response type of plain text for the response
    const twiml = new MessagingResponse();

    twiml.message('Hello');

    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
});

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');





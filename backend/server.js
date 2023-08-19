const express = require('express');

// Constants
const PORT = process.env.NODE_PORT || 8080;
const HOST = '0.0.0.0';
const REMOTE_HOST = 'localhost';
const SECRET_KEY = process.env.SECRET_KEY;

// App
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${REMOTE_HOST}:${PORT}`);
    console.log(`The secret key is ${SECRET_KEY}`);
});
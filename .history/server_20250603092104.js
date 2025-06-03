const express = require('express');

const app = express();
const HOST = '127.0.0.1';
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(PORT, HOST, () => {
    console.log(`Servidor escutando em http://${HOST}:${PORT}`);
})
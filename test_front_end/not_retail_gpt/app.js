const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Array para almacenar los datos de los computadores
let computerData = [];

app.use(cors());
app.use(bodyParser.json());

app.post('/api/computers', (req, res) => {
    const newEntry = req.body;
    computerData.push(newEntry); // Agregar nueva entrada al array
    res.status(201).send(newEntry);
});

app.get('/api/computers', (req, res) => {
    const limit = req.query.limit ? parseInt(req.query.limit) : computerData.length;
    res.status(200).send(computerData.slice(-limit)); // Devolver las últimas 'limit' entradas
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

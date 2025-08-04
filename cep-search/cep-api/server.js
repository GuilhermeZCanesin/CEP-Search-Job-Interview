const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const DATA_PATH = './data/enderecos.json';

app.use(cors());
app.use(bodyParser.json());

app.get('/enderecos', (req, res) => {
    const raw = fs.readFileSync(DATA_PATH);
    res.json(JSON.parse(raw));
});

app.post('/enderecos', (req, res) => {
    const newEndereco = req.body;

    if (!newEndereco || !newEndereco.cep) {
        return res.status(400).json({ error: 'Dados inválidos' });
    }

    const raw = fs.readFileSync(DATA_PATH);
    const enderecos = JSON.parse(raw);
    newEndereco.id = Date.now().toString();
    newEndereco.date = Date.now();

    enderecos.push(newEndereco);
    fs.writeFileSync(DATA_PATH, JSON.stringify(enderecos, null, 2));

    res.status(201).json(newEndereco);
});

app.delete('/enderecos/:id', (req, res) => {
    const { id } = req.params;

    const raw = fs.readFileSync(DATA_PATH);
    let enderecos = JSON.parse(raw);

    const lengthAntes = enderecos.length;
    enderecos = enderecos.filter(e => e.id !== id);

    if (enderecos.length === lengthAntes) {
        return res.status(404).json({ error: 'Endereço não encontrado' });
    }

    fs.writeFileSync(DATA_PATH, JSON.stringify(enderecos, null, 2));
    res.status(204).send();
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

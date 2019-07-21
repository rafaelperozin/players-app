const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const players = require('./players.json');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/api/players', function (req, res) {
    const offset = parseInt(req.query.offset, 10);
    const limit = parseInt(req.query.limit, 10);
    const search = req.query.search;
    if (typeof search != 'undefined') {
        res.json(players.filter(data => JSON.stringify(data).toLowerCase().includes(search.toLowerCase())).slice(offset, offset + limit));
    } else {
        res.json(players.slice(offset, offset + limit));
    }
});

const server = app.listen(PORT, function () {
    const host = server.address().address;
    const port = server.address().port;
});
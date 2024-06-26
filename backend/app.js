const express = require('express');
const cors = require('cors');
const router = require('./routes/index');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', router);
app.get('/', (req, res) => {
    res.json({
        message: 'Hello World!'
    });
});

module.exports = app;

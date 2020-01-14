const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes.js');

const app = express();

// MongoDB (Não-relacional)

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-llinr.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(3333);

require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8080;
const legendRoutes = require('./routes/legendRoutes');

app.use('/legends', legendRoutes);

app.get('/', (req, res) => res.json({
    nome: "Adolpho",
    cargo: "Engenheiro de Software"
}));

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.rpbqu.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`)
        .then(() => {
            console.log(`App running on http://localhost:${port}`);
            app.listen(port);
        })
        .catch((err) => console.log(err));

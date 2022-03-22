const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req: any, res: any) => res.json({
    nome: "Adolpho",
    cargo: "Engenheiro de Software"
}));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
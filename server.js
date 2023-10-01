import express from 'express';

const app = express();
const port = 3000;

app.get("/", (req, res) =>
res.send("<h1>Server OK</h1>")
);

app.listen(port, () => {
console.log("Servidor iniciando na porta 3000");
});

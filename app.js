const express = require("express");

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    return res.status(404).json({error:"Ruta no encontrada"})
});

app.use((error, req, res, next) => {
    console.error(error);
    return res.status(500).json({error: "Error interno"})
});

module.exports = app;
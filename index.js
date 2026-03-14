require("dotenv").config();

const { connectDB } = require("./src/config/db");
const app = require("./app");

const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`)
})
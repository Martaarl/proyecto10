require("dotenv").config();

const { connectDB } = require("./src/config/db");
const app = require("./app");

const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
    console.log(`Servido funcionando en http://localhost:${PORT}`)
})
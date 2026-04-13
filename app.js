const express = require("express");
const cors = require("cors");
const postRouter = require("./src/api/routes/postRoutes");
const userRouter = require("./src/api/routes/userRoutes");
const commentRouter = require("./src/api/routes/commentRoutes")

const app = express();
app.use(cors());
app.use(express.json());
app.use("/posts", postRouter);
app.use("/users", userRouter);
app.use("/comments", commentRouter);

app.use((req, res, next) => {
    return res.status(404).json({error:"Ruta no encontrada"})
});

app.use((error, req, res, next) => {
    console.error(error);
    return res.status(500).json({error: "Error interno"})
});

module.exports = app;
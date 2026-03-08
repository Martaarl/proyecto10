const { isAdmin, isAuth } = require("../../middlewares/auth");
const { createPost, getPost, getPostById, updatePost, deletePost } = require("../controllers/post");

const router = require("express").Router();

router.post("/", isAuth, isAdmin, createPost);
router.get("/", getPost);
router.get("/:id", getPostById);
router.put("/:id", isAuth, isAdmin, updatePost);
router.delete("/:id", isAuth, isAdmin, deletePost);

module.exports = router;
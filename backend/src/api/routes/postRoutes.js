const { isAdmin, isAuth } = require("../../middlewares/auth");
const upload = require("../../middlewares/multer");
const { createPost, getPost, getPostById, updatePost, deletePost } = require("../controllers/post");

const router = require("express").Router();

router.post("/", isAuth, isAdmin, upload.single("image"), createPost);
router.get("/", getPost);
router.get("/:id", getPostById);
router.put("/:id", isAuth, isAdmin, upload.single("image"), updatePost);
router.delete("/:id", isAuth, isAdmin, deletePost);

module.exports = router;
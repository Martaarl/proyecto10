const { isAdmin, isAuth } = require("../../middlewares/auth");
const { deleteComment, createComment, superLikeComment, getCommentsByPost } = require("../controllers/comment");

const router = require("express").Router();

router.get("/post/:postId", getCommentsByPost);
router.post("/", isAuth, createComment);
router.delete("/:id", isAuth, deleteComment);
router.put("/superlike/:id", isAuth, isAdmin, superLikeComment);


module.exports = router;
const { isAuth } = require("../../middlewares/auth");
const { register, login, getUser, updateProfile, deleteUser, userLikedPost } = require("../controllers/user");
const router = require("express").Router();


router.post("/register", register);
router.post("/login", login);
router.get("/:id", getUser);
router.put("/profile", isAuth, updateProfile);
router.delete("/:id", isAuth, deleteUser);
router.put("/like/:postId", isAuth, userLikedPost);

module.exports = router;

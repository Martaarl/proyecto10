const { isAuth } = require("../../middlewares/auth");
const { register, login, getUser, updateProfile, deleteUser, userLikedPost, getlikedPosts } = require("../controllers/user");
const router = require("express").Router();

console.log("USER ROUTES CARGADAS");

router.post("/register", register);
router.post("/login", login);

router.get("/me", isAuth, getlikedPosts);
router.get("/:id", getUser);

router.put("/profile", isAuth, updateProfile);
router.delete("/:id", isAuth, deleteUser);
router.put("/likedPosts/:postId", isAuth, userLikedPost);


module.exports = router;

const { createBannedWord, getBannedWords, deleteBannedWord } = require("../controllers/bannedWord");
const { isAdmin, isAuth } = require("../../middlewares/auth");
const router = require("express").Router();



router.post("/", isAuth, isAdmin, createBannedWord);
router.get("/",isAuth, isAdmin,  getBannedWords);
router.delete("/:id", isAuth, isAdmin, deleteBannedWord);


module.exports = router;
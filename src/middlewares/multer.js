const multer = require("multer");
const cloudinary = require("../utils/cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "blog_posts",
        allowed_formats: ["jpg", "png", "jpeg", "webp"]
    }
});

const upload = multer({storage});
module.exports = upload;
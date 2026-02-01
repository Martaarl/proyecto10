const mongoose = require("mongoose");


const commentsSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true}, 
    post: {type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true}, 
    text: {type: String, required: true},
    image: {type: String},
    superLike: {type: Boolean, default: false}
}, {
    timestamps: true
});

const Comment = mongoose.model("Comment", commentsSchema);
module.exports = Comment;
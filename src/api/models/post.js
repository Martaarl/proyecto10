const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema({
    title: {type: String, trim: true, required: true}, 
    image: {type: String, required: true}, 
    description:{type: String, required: true},
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: "Comment"}], 
}, {
    timestamps: true
})

const Post = mongoose.model("Post", postsSchema);
module.exports = Post;
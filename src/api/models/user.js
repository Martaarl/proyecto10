const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    userName:{type: String, trim: true, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, select: false}, 
    rol: {
        type: String, required: true, enum: ["admin", "user"], default: "user"
    },
    avatar: {type: String},
    likedPost: {type: mongoose.Schema.Types.ObjectId, ref: "Post"}
},
{timestamps: true, 
collection:"user" 
});

const User = mongoose.model("User", usersSchema);
module.exports = User;
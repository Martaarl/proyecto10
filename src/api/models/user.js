const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const usersSchema = new mongoose.Schema({
    userName:{type: String, trim: true, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, select: false}, 
    rol: {
        type: String, required: true, enum: ["admin", "user"], default: "user"
    },
    avatar: {type: String},
    likedPosts: [{type: mongoose.Schema.Types.ObjectId, ref: "Post"}]
},
{timestamps: true, 
collection: "users",
});

usersSchema.pre("save", function(next){
    if (!this.isModified("password")) return next();
    this.password = bcrypt.hashSync(this.password, 10);
    next();
})

const User = mongoose.model("User", usersSchema);
module.exports = User;
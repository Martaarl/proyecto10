const mongoose = require ("mongoose");

const bannedWordsSchema = new mongoose.Schema({
    word : {type: String, trim: true, unique: true, lowercase, required: true}
}, {
    timestamps: true, 

})

const bannedWord = mongoose.model("BannedWord", bannedWordsSchema);
module.exports = bannedWord;
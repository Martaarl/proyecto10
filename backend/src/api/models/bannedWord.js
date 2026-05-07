const mongoose = require ("mongoose");

const bannedWordsSchema = new mongoose.Schema({
    word : {type: String, trim: true, unique: true, lowercase: true, required: true}
}, {
    timestamps: true, 

})

const BannedWord = mongoose.model("BannedWord", bannedWordsSchema);
module.exports = BannedWord;
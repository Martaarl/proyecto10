const BannedWord = require("../models/bannedWord");

const createBannedWord = async (req, res, next) => {
    try {
        const {word} = req.body;
        
        const existingWord = await BannedWord.findOne({word})
        if (existingWord) return res.status(400).json({error: "La palabra que intentas subir ya existe"})

        const newBannedWord = new BannedWord({
            word
        });

        await newBannedWord.save();

        return res.status(201).json({message: "La palabra prohibida se ha creado correctamente", newBannedWord})

    } catch (error) {
        return res.status(500).json({error:"Error interno del servidor"})
    }
}

const getBannedWords = async (req, res, next) => {
    try {
    const allBannedWords= await BannedWord.find();

    return res.status(200).json(allBannedWords)
    } catch (error) {
        return res.status(500).json({error: "Error interno del servidor"})
    }
}

const deleteBannedWord = async (req, res, next) => {
    try {
    const {id} = req.params;

    const bannedWord = await BannedWord.findById(id);
    if (!bannedWord) {
        return res.status(400).json({error: "La palabra que buscas no existe"})
    }

    const wordToDelete = await BannedWord.findByIdAndDelete(id);

    return res.status(200).json({message: "la palabra se ha eliminado correctamente", bannedWord: wordToDelete})
     } catch (error) {
        return res.status(500).json({error: "Error interno del servidor"})
    }
}

module.exports = {createBannedWord, getBannedWords, deleteBannedWord};

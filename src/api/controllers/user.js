const bcrypt = require ("bcrypt");
const User = require("../models/user.js");
const { generateSign } = require("../../config/jwt.js");
const { error } = require("node:console");


const register = async (req, res, next) => {
    try {
    const {userName, password, email} = req.body;

    if (!userName || !email || !password) {
        return res.status(400).json({error: "Faltan campos obligatorios"})
    }
    const checkUser = await User.findOne({email});

    if (checkUser) {
        return res.status(400).json({message:"Este usuario ya existe"});
    }

    const newUser = new User ({
        userName,
        email,
        password,
        rol: "user"
    });

    const userSaved = await newUser.save();

    return res.status(201).json({
        userName: userSaved.userName,
        email: userSaved.email,
        avatar: userSaved.avatar
    })
         
    } catch (error) {
        return res.status(500).json({error: "Error interno del servidor"})
    }

}

const login = async (req, res, next) => {
    try {
        const {email, password} = req.body;

        if (!email || !password) {
            return res.status(400).json({error: "Login incorrecto"})
        }

        const user = await User.findOne({email}).select("+password");
        if (!user)return res.status(401).json({error: "Credenciales inválidos"});

        const userCheck = bcrypt.compareSync(password, user.password);
        if (!userCheck) {
            return res.status(401).json({error: "Credenciales inválidos"})
        }

        const token = generateSign (user);

        const userToShow = {
            userName : user.userName,
            email : user.email,
            avatar: user.avatar,
            likedPosts : user.likedPosts
        }
        return res.status(200).json({user: userToShow, token});

    } catch (error) {
        return res.status(500).json({error: "Error interno del servidor"});
    }
}

const getUser = async (req, res, next) => {
    try {
        const {id} = req.params;

        const user = await User.findById(id);
        if (!user) return res.status(404).json({error: "No existe este usuario"});

        const userToShow = {
            userName:user.userName, 
            email: user.email, 
            avatar: user.avatar
        }

        return res.status(200).json(userToShow);

    } catch (error) {
        return res.status(500).json({error: "Error interno del servidor"})
    }
}

const updateProfile = async (req, res, next) => {
    try {
        //sería ideal añadir un find(email y userName para evitar duplicados?)
    
        const user = await User.findById(req.user._id);
        if (!user) return res.status(404).json({error: "Usuario no encontrado"});

        const {userName, password, email, avatar} = req.body;

       /* if (email) {
            const existingEmail = await User.findOne({email});
        }*/

        if (userName) user.userName = userName;
        if (password) user.password = password;
        if (email) user.email = email;
        if (avatar) user.avatar = avatar;

        if (condition) {
            
        }

        await user.save();

        return res.status(200).json({
            userName: user.userName,
            email: user.email,
            avatar: user.avatar
        });
    } catch (error) {
        return res.status(500).json({error: "Error interno del servidor"})
    }
};

const deleteUser = async (req, res, next) => {
    try {
    const {id} = req.params;

    const user = await User.findById(id);
    if (!user) {
        return res.status(404).json({error: "No se ha encontrado a este usuario"})
    }

    if (req.user._id.toString() !== id && req.user.rol !== "admin") {
        return res.status(403).json({error: "No tienes permiso para eliminar este usuario"})
    }

    const userToDelete = await User.findByIdAndDelete(id);

    return res.status(200).json(userToDelete);
        
    } catch (error) {
        return res.status(500).json({error: "Error interno del servidor"})
    }
}
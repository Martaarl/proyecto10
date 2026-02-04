//const bcrypt = require ("bcrypt");
const User = require("../models/user.js")

const register = async (req, res, next) => {
    try {
    const {userName, password, email} = req.body;

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

    return res.status(201).json(userSaved)
         
    } catch (error) {
        return res.status(500).json({error: "Error registrando al usuario", details: error.message})
    }

}

const login = async (req, res, next) => {
    try {
        const {email, password} = req.body;

        if (!email || !password) {
            return res.status(400).json({message: "Login incorrecto"})
        }

        const user = await User.findOne({email}).select("+password");
        if (!user)return res.status(401).json("Credenciales inválidos");

        const userCheck = bcrypt.compareSync(password, user.password);
        if (!userCheck) {
            return res.status(401).json({error: "Credenciales inválidos"})
        }

        const userToShow = {
            userName : user.userName,
            email : user.email,
            avatar: user.avatar,
            likedPosts : user.likedPosts
        }
        return res.status(200).json(userToShow);

    } catch (error) {
        return res.status(500).json({error: "Error logeando", details: error.message});
    }
}
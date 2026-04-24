const User = require("../api/models/user");
const {verifyJwt} = require("../config/jwt");

const isAuth = async (req, res, next) => {
    try {
        const token = req.headers["authorization"];
       
        if (!token) {
            return res.status(401).json({error:"Necesitas estar logeado para comentar"})
        }

        const parsedToken = token.replace("Bearer ", "");
        const {id} = verifyJwt(parsedToken);
        
        const user = await User.findById(id);
        if (!user) {
            return res.status(401).json({error: "Usuario no encontrado"})
        }

        req.user = user;
        next();

    } catch (error) {
        return res.status(401).json({error:"No estás autorizado"})
    }
}

const isAdmin = async (req, res, next) => {

    if(!req.user) return res.status(401).json({error: "Operación no válida"});
    
    if (req.user.rol !== "admin") {
       return res.status(403).json({error: "Solo pueden utilizar esta función los administradores"})
    }
        
    next();
 };

module.exports = {isAuth, isAdmin};
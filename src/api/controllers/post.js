const Post = require("../models/post");
const cloudinary = require("../../utils/cloudinary")

const createPost = async (req, res, next) => {
try {
    const {title, description} = req.body;
   
    if (!title || !description || !req.file) {
        return res.status(400).json({error: "Faltan campos obligatorios"})
    }

    const newPost = new Post({
        title,
        description,
        image: {
            url: req.file.path,
            public_id: req.file.filename
        }
    });

    const postSaved = await newPost.save();

    return res.status(201).json({message: "Post publicado correctamente", post: postSaved})
} catch (error) {
    return res.status(500).json({error: "Error interno del servidor"})
}
}

const getPost = async (req, res, next) => {
    try {
    const posts = await Post.find();
    
    return res.status(200).json(posts);
   
} catch (error) {
        return res.status(500).json({error: "Error interno del servidor"})
    }
}

const getPostById = async (req, res, next) => {
    try {
        const {id} = req.params;

        const post = await Post.findById(id);
        if (!post) {
            return res.status(404).json({error: "No se encuentra el post que estás buscando"})
        }

        return res.status(200).json(post);
    } catch (error) {
        return res.status(500).json({error: "Error interno del servidor"})
    }
}

const deletePost = async(req, res, next) => {
    try {
        const {id} = req.params;

        const post = await Post.findById(id);
        if (!post) return res.status(404).json({error: "El post que intentas eliminar no existe"});

        await cloudinary.uploader.destroy(post.image.public_id)
        
        await Post.findByIdAndDelete(id);

        return res.status(200).json({message: "Post eliminado correctamente"})

    } catch (error) {
        return res.status(500).json({error: "Error interno del servidor"})
    }
}

const updatePost = async( req, res, next) => {
   try {
    const {id} = req.params;

    const post = await Post.findById(id);
    if (!post) return res.status(404).json({error: "No se encuentra el post que estás buscando"});

    const {title, description} = req.body;

    if(title) post.title = title;
    if(description) post.description = description;

    if (req.file) {
        await cloudinary.uploader.destroy(post.image.public_id)

        post.image = 
        {url: req.file.path,
        public_id: req.file.filename
        }
    };

    const postUpdated = await post.save();

    return res.status(200).json({message: "Post actualizado correctamente" , post: postUpdated});
    } catch (error) {
        return res.status(500).json({error: "Error interno del servidor"})
   }
}

module.exports = {createPost, getPost, getPostById, deletePost, updatePost};
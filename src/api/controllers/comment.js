const BannedWord = require("../models/bannedWord");
const Comment = require("../models/comment");
const Post = require("../models/post");

const createComment = async (req, res, next) => {
    try {
        const {text, image, postId} = req.body;
        if (!text) {
            return res.status(400).json({error: "El comentario no puede estar vacío"})
        }

        const bannedWords = await BannedWord.find();
        const textNewComment = text.toLowerCase();

        const containsBannedWord = bannedWords.some(banned => textNewComment.includes(banned.word));
        if (containsBannedWord) {
            return res.status(400).json({error: "Vocabulario malsonante detectado"})
        }

        const userId = req.user._id;

        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({error: "No se encuentra el post que estás buscando"})
        }

        const newComment = new Comment({
            user: userId,
            post: postId,
            text, 
            image
        })

        await newComment.save();

        post.comments.push(newComment._id);
        await post.save();

    return res.status(201).json({
        message: "Comentario creado correctamente",
        comment: newComment});

    } catch (error) {
        return res.status(500).json({error: "Error interno del servidor"})
    }
}

const deleteComment = async (req, res, next) => {
    try {
    const commentId = req.params.id;

    const comment = await Comment.findById(commentId);
    if(!comment) return res.status(404).json({error: "El comentario que estás buscando no existe"});

    if (comment.user.toString() !== req.user._id.toString() && req.user.rol !=="admin") {
        return res.status(403).json({error: "No tienes permisos para eliminar este comentario"})
    }

    const deletedComment = await Comment.findByIdAndDelete(commentId);

    const post = await Post.findById(comment.post);
    post.comments.pull(commentId);
    await post.save();

    return res.status(200).json({
        message: "Comentario borrado con éxito",
        comment: deletedComment
    })
    } catch (error) {
        return res.status(500).json({error: "Error interno del servidor"})
    }

}

const superLikeComment = async (req, res, next) => {
    try {
        const {id} = req.params;

        const comment = await Comment.findById(id);
        if (!comment) {
           return res.status(404).json({error: "El comentario que estás buscando no existe"})
        }
 
        if (req.user.rol !== "admin") {
            return res.status(403).json({error: "No tienes permisos para realizar esta acción"})
        }

        comment.superLike = true;

        await comment.save();

        return res.status(200).json(comment)
    } catch (error) {
        return res.status(500).json({error: "Error interno del servidor"})
    }
}

const getCommentsByPost = async (req, res, next) => {
    try {
        const {postId} = req.params;

        const comments= await Comment.find({post: postId}).populate("user", "name");

        return res.status(200).json(comments);
    } catch (error) {
        return res.status(500).json({error: "Error al obtener comentarios"});
    }
}

module.exports = {createComment, deleteComment, superLikeComment, getCommentsByPost};
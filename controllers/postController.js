const prisma = require("../prisma/index");
const { connect } = require("../routes/userRoutes");

exports.createPost = async (req, res, next) => {
    const { slug, title, body, authorId } = req.body;
    try {
        const result = await prisma.post.create({
            data: {
                slug,
                title,
                body,
                author: { connect: { id: authorId } }
            }
        })
        res.json(result)
    } catch (error) {
        throw new Error(error)

    }
}

exports.updatePost = async (req, res, next) => {
    const { id } = req.params;
    const { title, body } = req.body;
    try {
        const result = await prisma.post.update({
            where: {
                id: id
            },
            data: {
                title,
                body
            }
        })
        res.json(result)
    } catch (error) {
        throw new Error(error)

    }
}

exports.deletePost = async (req, res, next) => {
    const { id } = req.params;
    try {
        const result = await prisma.post.delete({
            where: { id: id }
        })
        res.json(result)
    } catch (error) {
        throw new Error(error)
    }
}

exports.getAllPosts = async (req, res, next) => {
    try {
        const result = await prisma.post.findMany();
        res.json(result)

    } catch (error) {
        res.json({ error: `NO POSTS FOUND` })
    }
}
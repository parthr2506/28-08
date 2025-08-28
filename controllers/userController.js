const prisma = require("../prisma/index")
const cookieToken = require("../utils/cookieToken")


exports.signup = async (req, res, next) => {
    try {

        const { name, email, password } = req.body

        if (!name || !password || !email) {
            throw new Error("Please Provide All Items")
        }

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password
            }
        })

        cookieToken(user, res)
    } catch (error) {
        throw new Error(error)

    }
}

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            throw new Error("Please Provide Fields")
        }
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })
        if (!user) {
            throw new Error("Invalid User")
        }
        if (user.password !== password) {
            throw new Error("Password Doesnt Match");

        }

        cookieToken(user, res);

    } catch (error) {
        throw new Error(error)

    }
}

exports.logout = async (req, res, next) => {
    try {
        res.clearCookie("token");
        res.json({
            success: true
        })
    } catch (error) {
        throw new Error(error);

    }
}
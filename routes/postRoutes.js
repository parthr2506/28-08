const express = require("express");
const router = express.Router();

const isLoggedIn = require("../middlewares/isLoggedIn");
const { createPost, updatePost, deletePost, getAllPosts } = require("../controllers/postController");

router.route("/post/create").post(createPost);
router.route("/post/update/:id").put(updatePost);
router.route("/post/delete/:id").delete(isLoggedIn, deletePost);
router.route("/post/get").get(getAllPosts);



module.exports = router;
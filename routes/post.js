const express = require("express");
const router = express.Router();
const postController = require("../controllers/postcontroller");
const { authenticateToken } = require("../middleware/authmiddle");

router.use(authenticateToken);

router.post("/", postController.createPost);
router.get("/", postController.getAllPosts);
router.put("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);

module.exports = router;
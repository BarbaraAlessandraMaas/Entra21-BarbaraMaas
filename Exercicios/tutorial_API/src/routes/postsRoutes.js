const express = require("express");
const router = express.Router();

// Importando o controller
const postsControllers = require("../controllers/postsControllers");

// Atualizar as informações de um post
router.put("/:id", postsControllers.updatePost);

// Remover um post
router.delete("/:id", postsControllers.deletePost);

module.exports = router;
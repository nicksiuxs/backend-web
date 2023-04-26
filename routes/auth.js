const express = require("express");
const router = express.Router();

const { createUsuarios } = require("../controllers/auth")

router.post("/", createUsuarios);

module.exports = router;
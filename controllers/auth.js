const express = require('express');

const createUsuarios = (req, res = express.request) => {
    res.json({
        ok: true
    })
}

module.exports = {
    createUsuarios
}
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({ ok: true })
})

app.listen(3000, () => {
    console.log("corriendo en el puerto " + 3000)
})
const express = require("express");
require("dotenv").config()

const app = express();

app.use(express.static("public"));

//routes
app.use("/api/auth", require("./routes/auth"))


app.listen(process.env.PORT, () => {
    console.log("corriendo en el puerto " + process.env.PORT)
});
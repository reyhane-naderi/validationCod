const express = require("express");
const app = express();
const { body, validationResult } = require("express-validator")
const { LoginValidation } = require("./validation")
const { errorvalidation } = require("./validationerror")

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send("hello node js")
})

app.post("/register", LoginValidation(), errorvalidation, (req, res) => {
    res.send(req.body)
})
app.listen(3000, () => {
    console.log("server run on port 3000");
})

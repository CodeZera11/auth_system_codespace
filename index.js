require('dotenv').config()
const express = require("express");

const app = express();

const {PORT} = process.env

app.get("/", (req,res) => {
    res.json({test: "Testing"})
})

app.listen(PORT, () => {
    console.log("App listening on port 3000.")
})
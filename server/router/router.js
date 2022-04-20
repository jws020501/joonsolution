const express = require("express")
const db = require('./db')
const router = express.Router()

router.get("/test", (req, res) => {
    res.send("OOOOOOOO")
})



module.exports = router
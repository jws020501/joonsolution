const express = require("express")
// const db = require('../router/db')
const bodyParser = require('body-parser');
const excel_read = require("../router/excel_read")
const router = express.Router()
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/test", (req, res) => {
    console.log('connect')
    res.send("OOOOOOOO")
})
router.post("/upload/excel", (req, res) => {
    
    console.log(req.body)
    res.send("0")

})



module.exports = router
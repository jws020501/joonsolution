const express = require("express")
// const db = require('../router/db')
const bodyParser = require('body-parser');
const excel_read = require("../router/excel_read")
const router = express.Router()
const upload = require('./multer');
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/test", (req, res) => {
    console.log('connect')
    res.send("OOOOOOOO")
})
router.post("/upload/excel", (req, res) => {
    upload(req2,res2,err=>{
        if(err){
            return res2.json({ success: false, err});
        }
        return console.log("nice");
    })
})



module.exports = router
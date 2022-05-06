const express = require("express")
const bodyParser = require('body-parser');
const router = express.Router()
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const db = require('./db');
const { json } = require("body-parser");

router.get("/test", (req, res) => {
    console.log('connect')
    res.send("OOOOOOOO")
})
router.post("/upload/excel", (req, res) => {
    var data = req.body.data
    for (let i = 1; i < data.length; i++) {
        db.query('INSERT INTO test(test1,test2,test3,test4,test5,test6,test7) VALUES ( ?, ?, ?, ?, ?, ?, ? )',[data[i][0],data[i][1],data[i][2],data[i][3],data[i][4],data[i][5],data[i][6]],(error,results,fields)=>{
            // db.end()
            if(error){
                console.log(error)
            }
        })
    }
})
router.get("/loadproduct",(req,res)=>{
    db.query('SELECT * FROM test ',(error,row,fields)=>{
        // db.end()
        if(!error){
            var result = {
                "row":row,
                "fields":fields
            }
            res.send(result)
        }
    })
})



module.exports = router
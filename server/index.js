const express = require('express')
const app = express()
const router = require("./router/router")

app.use("/api", router)

app.listen(5000, () => {
    console.log("server:5000")
})
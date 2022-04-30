const express = require('express')
const app = express()
const router = require("./router/router")
const cors = require('cors')

let corsopt = {
    origin:"*",
    Credential:true
}
app.use(cors(corsopt))
app.use("/api", router)

app.listen(5000, () => {
    console.log("server:5000")
})
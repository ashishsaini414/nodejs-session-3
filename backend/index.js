const express = require("express")
var userData = require("./dummyusers")
const bodyparser = require("body-parser")
const app =  express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const mymiddleware = (req, res, next)=>{
        req.responseTime = new Date().toLocaleString()
        next()
}
app.use(mymiddleware)
app.get("/loaduser",(req, res)=>{
        res.send(JSON.stringify(userData))
})

app.post("/removeuser",(req, res)=>{
    console.log(req.body)
    userData = userData.filter(user => user.id !== req.body.id)
    res.send(JSON.stringify(userData))
})
app.post("/adduser",(req, res)=>{
    // console.log(req.body)
    userData.push({...req.body, created_on: req.responseTime})
    res.send(JSON.stringify(userData))
})
app.listen(4000,()=>{
    console.log("server is listening to this port", 4000)
})


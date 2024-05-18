const express = require("express")
const app = express()
const cros = require("cors")

app.use(cros());

app.get("/api",(req,res)=>{
    const data ={"users": ["UserOne","UserTwo","UserThree"]} 
    res.json(data);

})

app.listen(4000,(req,res)=>{
    console.log("on port 4000")
})
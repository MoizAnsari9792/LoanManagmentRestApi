const express = require("express");
const app = express();


app.get( "/allstudents" ,( req , res  )=>{
    res.status(200).send("hi");
})


app.listen("5000")

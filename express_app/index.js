const express =require("express");
const mongoose = require("mongoose")

const app =express();

app.use(express.json());
 
const connect =require("./config/db")





app.listen(5000,async()=>{
    try {
        await connect()
    } catch (error) {
        console.log(error);
    }
    console.log("listining at 5000")
    });














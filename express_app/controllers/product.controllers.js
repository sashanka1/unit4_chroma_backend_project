const express =require("express")

const Router =express.Router()

const Product =require("../models/product.models");


Router.post("/",async(req,res)=>{
    try {
        const product =await Product.create(req.body);
        res.status(200).send(product);
    } catch (error) {
        res.send(error)
    }
   

});

// Router.get("/",async(req,res)=>{
//     try {
//         const products =await Product.find({});
//         res.status(200).send(products);
//     } catch (error) {
//         res.send(error)
//     }
   

// });


// Router.get("/",async(req,res)=>{
//     try {
//         const products =await Product.find({}).sort({price:1});
//         res.status(200).send(products);
//     } catch (error) {
//         res.send(error)
//     }
   

// });


Router.get("/",async(req,res)=>{
    try {
        const products =await Product.find({}).sort({price:-1});
        res.status(200).send(products);
    } catch (error) {
        res.send(error)
    }
   

});



module.exports=Router
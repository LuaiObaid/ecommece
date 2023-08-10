const registerProduct = require("../models/product");

const createProduct= async(req,res)=>{
       const {name, price, image} = req.body
       console.log(req.body)
       if ((!name || !price || !image)) {
         res.status(400).send("product must contain name, price, image");
         return;
       }
     try {
        const product = registerProduct.create({
            name,
            price, 
            image
        })
        res.status(200).json({
            name:product.name,
            price:product.price,
            image:product.image
        })
        
     } catch (error) {
       res.status(400).send("Failed to create product.");
     }

}
module.exports = {createProduct};
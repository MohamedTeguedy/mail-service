const mongoose = require("mongoose"); // import module mongoose


const ProductSchema=mongoose.Schema({
    name:String,
    price:Number,
    quantity:Number,
    category:String,
    image:String,

})

const product= mongoose.model("Product",ProductSchema)

module.exports = product

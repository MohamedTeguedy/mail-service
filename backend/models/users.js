const mongoose = require("mongoose"); // import module mongoose


const UserSchema=mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,

})

const User= mongoose.model("User",UserSchema)

module.exports = User

const mongoose = require("mongoose");

let  RegisterUsers= new mongoose.Schema({
    UserName:{
        type:String,
        required:true,
    },
    Password:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
    },
    Mobile:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('RegisterUsers',RegisterUsers)
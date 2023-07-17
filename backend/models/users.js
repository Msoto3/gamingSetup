const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    specs:{
        headset:{
            type:String
        },
        mousepad:{
            type:String
        },
        monitor:{
            type:String
        },
        pc:{
            type:String
        },
        keyboard:{
            type:String
        },
        mouse:{
            type:String
        }
    }
})

const UserModel = mongoose.model("users",UsersSchema)
module.exports = UserModel
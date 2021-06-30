import mongoose from "mongoose";




const userSchema= new mongoose.Schema({
    firstname:{
        type: String,
        required:true,
        trim:true,
        min:3,
        max:20

    },
    lastname:{
        type: String,
        required:true,
        trim:true,
        min:3,
        max:20

    },
    username:{
        type: String,
        required:true,
        trim:true,
        unique:true,
        index:true,
        lowercase:true
    },
    email:{
        type: String,
        required:true,
        trim:true,
        min:3,
        max:20,
        lowercase:true
    },
    password:{
        type: String,
        required:true,
        min:6,
        max:20,
    },
    phone:{
        type:String,
    }

});

const User=mongoose.model('user',userSchema);

export default User;
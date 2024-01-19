import mongoose from "mongoose";
import { date } from "yup";

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required : [true,"Please provide a username"],
        unique : true
    },
    email : {
        type: String,
        required : [true,"Please provide a email"],
        unique : true
    },
    password : {
        type : String,
        required : [true,"Please provide a password"],
    },
    forgotPasswordToken : String,
    forgotPasswordTokenExpiry : Date,
})

const User = mongoose.models.users || mongoose.model("users",userSchema);

export default User;
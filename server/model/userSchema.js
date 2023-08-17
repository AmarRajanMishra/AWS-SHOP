import { Schema, model } from 'mongoose';


const userSchema = new Schema({
    firstName : {
        type : String,
        required : [true, 'First Name is required']
    },
    lastName : {
        type : String,
        required : [true, 'Last Name is required']
    },
    email : {
        type : String,
        required : [true, 'Email is required'],
        unique : [true, 'email is unique']
    },
    number : {
        type : Number,
        required : [true, 'number is required'],
        unique : [true, 'number is unique']
    },
    password :{
        type : String,
        required : [true, 'Password is required'],
        min : [6, 'Password must be at least 8 characters']
    },
    image : {
        type : String,
        required : [true, 'image is required']
    },
    role : {
        type : Number,
        default : 0,
    },
    token : String

})

export default model('User', userSchema);


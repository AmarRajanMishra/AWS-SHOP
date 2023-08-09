import { Schema, model } from 'mongoose';


const userSchema = new Schema({
    name : {
        type : String,
        required : [true, 'name is required']
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
    image : {
        type : String,
        required : [true, 'image is required']
    }

})

export default model('User', userSchema);


import { Schema, model } from "mongoose";


const productSchema = new Schema({
    title : {
        type : String,
        required : [true, 'Title is Required']
    },
    price : {
        type : Number,
        required : [true, 'Price is Required']
    },
    description : {
        type : String,
        required : [true, 'Description is Required']
    },
    category : {
        type : String,
        required : [true, 'Description is Required']
    },
    image : {
        type : String,
        required : [true, 'Image is Required']
    },
    rating : {
        type : String,
        default : 0
    }
},{timestamps: true})

export default model('product', productSchema);





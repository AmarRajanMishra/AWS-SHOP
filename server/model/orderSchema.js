import { Schema, model, ObjectId } from "mongoose";


const orderSchemma = new Schema({
    products : [
        {
            type : ObjectId,
            ref : "product"
        }
    ],
    payment : {},
    buyer : {
        type : ObjectId,
        ref : "User"
    },
    status : {
        type : String,
        default : "Not Process",
        enum : ["Not Process", "Processing", "Shipped", "Delivered", "Cancel"]
    }
},{timestamps: true});


export default model('Order', orderSchemma)
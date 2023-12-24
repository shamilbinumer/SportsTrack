import mongoose from "mongoose";
const product_schema=new mongoose.Schema({
    product_name:{type:String},
    category:{type:String},
    description:{type:String},
    price:{type:String},
    size:{type:String},
    stoke:{type:String},
    images:{type:Object}
})

export default mongoose.model.products||mongoose.model("product",product_schema)
import mongoose from "mongoose";
const product_schema=new mongoose.Schema({
    product_name:{type:String},
    category:{type:String},
    description:{type:String},
    price:{type:String},
    stock:{
        xs:{type:String},
        s:{type:String},
        m:{type:String},
        l:{type:String},
        xl:{type:String},
        xxl:{type:String}
    },
    banner:{type:String},
    images:{type:Object}
})

export default mongoose.model.products||mongoose.model("product",product_schema)
import mongoose from "mongoose";
const admin_schema=new mongoose.Schema({
    name:{type:String},
    username:{type:String},
    password:{type:String}
})

export default mongoose.model.admins||mongoose.model("admin",admin_schema)
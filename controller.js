import admin_schema from './Models/admin.model.js'
import category_schema from './Models/category.model.js'
import product_schema from './Models/product.model.js'
import customer_schema from './Models/customer.model.js'
import cart_schema from './Models/cart.model.js'
import wishlist_schema from './Models/wishList.model.js'
import bcrypt from 'bcrypt'
// import path from 'path'
// import jsonwebtoken from 'jsonwebtoken'
import pkg from "jsonwebtoken";
const {sign}=pkg


export async function AddAdmin(req,res){
    try {
        const {username,email,phone,password}=req.body;
        console.log(username,email,phone,password);
        if(!(username&&email&&phone&&password))
        return res.status(404).send("fields are empty")
    
        bcrypt.hash(password,10)    
        .then((hashedPwd)=>{
            admin_schema.create({username,email,phone,password:hashedPwd});
        })
        .then(()=>{
            res.status(201).send("sucessfully registered")
        })
      .catch((error)=>{
        res.status(500).send(error)
       })
        
       } catch (error) {
        console.log(error);
    
    }
    
}


export async function AdminLogin(req, res) {
    try {
     console.log(req.body);
     const { email, password } = req.body;
     const usr = await admin_schema.findOne({ email })
     console.log(usr);
     if (usr === null) return res.status(404).send("email or password doesnot exist");
     const success =await bcrypt.compare(password, usr.password)
     console.log(success);
     const {username}=usr
     if (success !== true) return res.status(404).send("email or password doesnot exist");
     const token = await sign({ username }, process.env.JWT_KEY, { expiresIn: "24h" })
     console.log(username);
     console.log(token);
     res.status(200).send({ msg: "successfullly login", token })
    //  res.end();
     
    } catch (error) {
     console.log(error); 
}
}

export async function home(req,res)
{
  try {
    
     const{username}=req.user;
    res.status(200).send({msg:`${username}`})
   } 
   catch (error) {
    res.status(404).send(error)
  }
}

export async function GetAdmin(req,res){
  const { email }=req.params;
  console.log(email);
  let task=await admin_schema.findOne({ email:email })
  console.log(task);
  res.status(200).send(task)
}


export async function forgotAdminpwd(req, res) {
  const {email,password}=req.body;
  const hashedPassword = await bcrypt.hash(password,10);
  let task = await category_schema.updateOne( {email} , { $set: { password: hashedPassword } });
  console.log(task);
  res.status(200).send(task);
}

export async function AddCategory(req, res) {
  try {
    const { category, aboutCategory } = req.body;
    console.log(category, aboutCategory);
    if (!(category && aboutCategory)) {
      return res.status(400).send("Fields are empty");
    }
    const task=await category_schema.create({ category, aboutCategory });

    res.status(200).send(task);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

export async function getCategory(req,res){
  let task=await category_schema.find()
  res.status(200).send(task)
}

export async function AddProducts(req, res) {
  try {
    // console.log(req.files);
    // const images=req.files;
    // console.log(req.files);
     const { ...productdetails } = req.body;
    const task=await product_schema.create({ ...productdetails });
    console.log(task);
    res.status(200).send({result : task});
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

// export async function SetPath(req,res)
// {
//   let { filename } = req.params;
//   console.log(filename);
//   return res.sendFile(path.resolve(`./images/${filename}`))
// }

export function delCategory(req,res)
{
    const{id}=req.params;
    const data=category_schema.deleteOne({_id:id})
    data.then((resp)=>{
        res.status(200).send(resp)          
    }).catch((error)=>{
        res.status(404).send(error)
    })
}

export async function getCatDetails(req,res){
  const{id}=req.params;
  // console.log(id);
  let task=await category_schema.findOne({_id:id})
  console.log(task);
  res.status(200).send(task)
}


export async function editCategory(req, res) {
  const { id } = req.params;
  try {
      const updatedData = req.body;
      const value = await category_schema.updateOne({ _id: id }, { $set: updatedData });
      res.status(200).send(value);
  } catch (error) {
      res.status(404).send(error);
  }
}

export async function getCategoryWisedProduct(req, res) {
  try {
    const { category } = req.params;
    const products = await product_schema.find({ category: category });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function AddCustomer(req, res) {
  try {
    const { password, ...custDetails } = req.body;
    
    if (!custDetails) {
      return res.status(404).send("Fields are empty");
    }

    const hashedPwd = await bcrypt.hash(password, 10);

    customer_schema.create({ ...custDetails, password: hashedPwd });

    res.status(201).send("Successfully registered");
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

export async function CustomerLogin(req, res) {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    const usr = await customer_schema.findOne({ email });
    console.log(usr);
    if (usr === null) return res.status(404).send("Email or password does not exist");
    const success = await bcrypt.compare(password, usr.password);
    console.log(success);
    if (!success) return res.status(404).send("Email or password does not exist");
    const { name, _id } = usr;
    const token = await sign({ name, _id }, process.env.JWT_KEY, { expiresIn: "24h" });
    res.status(200).send({ msg: "Successfully login", token });
    } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
}



export async function customerHome(req,res)
{
  try {
    console.log(req.user);
    
     const{name,_id}=req.user;
    res.status(200).send({msg:`${name}`,id:`${_id}`})
   } 
   catch (error) {
    res.status(404).send(error)
  }
}
export async function getProduct(req,res){
  const { id }=req.params;
  console.log(id);
  let task=await product_schema.findOne({ _id:id })
  console.log(task);
  res.status(200).send(task)
}

export async function editProdect(req, res) {
  const { id } = req.params;
  try {
      const updatedData = req.body;
      const value = await product_schema.updateOne({ _id: id }, { $set: updatedData });
      res.status(200).send(value);
  } catch (error) {
      res.status(404).send(error);
  }
}

export function delProduct(req,res)
{
    const{id}=req.params;
    const data=product_schema.deleteOne({_id:id})
    data.then((resp)=>{
        res.status(200).send(resp)          
    }).catch((error)=>{
        res.status(404).send(error)
    })
}

export async function getAllProducts(req,res){
  let task=await product_schema.find()
  res.status(200).send(task)
}


export async function AddToCart(req, res) {
  try {
    const { ...productdetails } = req.body;
    const task = await cart_schema.create({ ...productdetails });
    console.log(task);
    res.status(200).send(task);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}


export async function getAllCustomers(req,res){
  let task=await customer_schema.find()
  res.status(200).send(task)
}

export async function getCartProduct(req,res){
  const { id }=req.params;
  console.log(id);
  let task=await cart_schema.find({ cust_id:id })
  console.log(task);
  res.status(200).send(task)
}

export function delCartProduct(req,res)
{
    const{id}=req.params;
    const data=cart_schema.deleteOne({_id:id})
    data.then((resp)=>{
        res.status(200).send(resp)          
    }).catch((error)=>{
        res.status(404).send(error)
    })
}


export function deleteAllProducts(req,res)
{
    const{id}=req.params;
    const data=cart_schema.deleteMany({cust_id:id})
    data.then((resp)=>{
        res.status(200).send(resp)          
    }).catch((error)=>{
        res.status(404).send(error)
    })
}


export async function AddToWishList(req, res) {
  try {
    const { ...productdetails } = req.body;
    const task = await wishlist_schema.create({ ...productdetails });
    console.log(task);
    res.status(200).send(task);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

export async function getWishlistProduct(req,res){
  const { id }=req.params;
  console.log(id);
  let task=await wishlist_schema.find({ cust_id:id })
  console.log(task);
  res.status(200).send(task)
}





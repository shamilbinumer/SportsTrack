import admin_schema from './admin.model.js'
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'
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


// export async function forgotAdminpassword(req, res) {
//   const phone = req.params.phone;
//   const updatedPassword = req.body.password;
//   const saltRounds = 10;
//   const hashedPassword = await bcrypt.hash(updatedPassword, saltRounds);
//   let task = await admin_schema.updateOne({ phone }, { $set: { password: hashedPassword } });
//   res.status(200).send(task);
// }

export async function forgotAdminPassword(req, res) {
  try {
    const phone = req.params.phone;
    const updatedPassword = req.body.password;
    const admin = await admin_schema.findOne({ phone });
    if (!admin) {
      return res.status(404).json({ error: 'Admin not found' });
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(updatedPassword, saltRounds);
    const task = await admin_schema.updateOne({ phone }, { $set: { password: hashedPassword } });
    if (task.nModified === 0) {
      return res.status(500).json({ error: 'Failed to update password' });
    }
    res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

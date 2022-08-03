import db from '../models/index'
import userService from "../services/userSevices"

let allUser=async(req,res)=>{
    let data
      try{
         data=await db.users.findAll()
        console.log(data)
      } catch(e){
        console.log(e)
      }
    
      return  res.render({data:JSON.stringify(data)}) // ddua data ra view
    }
let addUser=async(req,res)=>{
 
  let message=  await userService.createNewUser(req.body)
  
   return res.send(message)
      }

      let getOneUser=async(req,res)=>{
 
        let message=  await userService.getUser(req.body)
        console.log(message)
         return res.send(message)
            }



      module.exports={
        allUser,
        addUser,
        getOneUser

    }
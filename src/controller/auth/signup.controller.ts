import prisma from "../../db";
import bcrypt from 'bcrypt'
import { asyncHandler } from "../../utils/asyncHandler";

export const signUp = asyncHandler (async (req,res)=>{
    try {
        const {email,password, name} = req.body;
        bcrypt.genSalt(10,function (err, salt){
            if (err){
                console.log ("Bcrypt Error: ", err);
                return;
            }
            bcrypt.hash(password, salt, async function(err, hash) { 
                if (err){
                    console.log ('Bcrypt Hash Error: ', err);    
                    return;           
                }
                const user = await prisma.admin.create({
                    data:{
                        name: name,
                        email: email,
                        password: hash
                    }
                })
                res.send ("User Registered successfully.")
            });
        })
        
    } catch (error) {
        res.send ("Sign In error" + error);
    }
})
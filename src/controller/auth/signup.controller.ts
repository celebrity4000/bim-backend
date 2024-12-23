import prisma from "../../db";
import bcrypt from 'bcrypt'
import { asyncHandler } from "../../utils/asyncHandler";
import jwt from 'jsonwebtoken'

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

                jwt.sign({ adminId: user.id }, process.env.JWT_SECRET as string, { expiresIn: process.env.JWT_EXPIRES_IN }, (err, token) => {
                    if (err) {
                        res.send('Error in generating token');
                    }
                    else {
                        res.send({
                            message: "Admin Registered successfully",
                            adminId: user.id,
                            token: token
                        });
                    }
                });

            });
        })
        
    } catch (error) {
        res.send ("Sign In error" + error);
    }
})

export const studentSignUp = asyncHandler (async (req,res)=>{
    try {
        const {email,password,name} = req.body;

        const existingUser = await prisma.student.findFirst({
            where:{
                email: email
            }
        })

        if (existingUser){
            res.status(400).send("User already exists.");
            return;
        }
        
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
                const user = await prisma.student.create({
                    data:{
                        name: name,
                        email: email,
                        password: hash
                    }
                })

                jwt.sign({ studentId: user.id }, process.env.JWT_SECRET as string, { expiresIn: process.env.JWT_EXPIRES_IN }, (err, token) => {
                    if (err) {
                        res.send('Error in generating token');
                    }
                    else {
                        res.send({
                            message: "Student Registered successfully",
                            studentId: user.id,
                            token: token
                        });
                    }
                });
                
                res.send ("User Registered successfully.")
            });
        })
        
    } catch (error) {
        res.send ("Sign In error" + error);
    }
})


// Teacher Sign Up
// export const teachersSignUp = asyncHandler (async (req,res)=>{
//     try {
//         const {email,password, name} = req.body;

//         const existingUser = await prisma.trainer.findFirst({
//             where:{
//                 email: email
//             }
//         })

//         if (existingUser){
//             res.status(400).send("User already exists.");
//             return;
//         }

//         bcrypt.genSalt(10,function (err, salt){
//             if (err){
//                 console.log ("Bcrypt Error: ", err);
//                 return;
//             }
//             bcrypt.hash(password, salt, async function(err, hash) { 
//                 if (err){
//                     console.log ('Bcrypt Hash Error: ', err);    
//                     return;           
//                 }
//                 const user = await prisma.trainer.create({
//                     data:{
//                         name: name,
//                         email: email,
//                         password: hash
//                     }
//                 })
                
//                 jwt.sign({ teacherId: user.id }, process.env.JWT_SECRET as string, { expiresIn: process.env.JWT_EXPIRES_IN }, (err, token) => {
//                     if (err) {
//                         res.send('Error in generating token');
//                     }
//                     else {
//                         res.send({
//                             message: "Teacher Registered successfully",
//                             teacherId: user.id,
//                             token: token
//                         });
//                     }
//                 });
//             });
//         })
//     } catch (error) {
//         res.send ("Sign Up error" + error);        
//     }
// })

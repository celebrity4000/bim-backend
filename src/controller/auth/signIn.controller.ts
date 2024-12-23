import prisma from "../../db";
import bcrypt from 'bcrypt'
import { asyncHandler } from "../../utils/asyncHandler";
import jwt from 'jsonwebtoken'

export const signIn = asyncHandler(async (req, res) => {
    try {
        const { email, password } = req.body;
        try {
            const admin = await prisma.admin.findUnique({
                where: {
                    email: email as string,
                } as any
            })
            if (!admin) {
                res.status(400).send("Admin does not exist");
            }
            else {
                bcrypt.compare(password, admin.password, function (err, result) {
                    if (!result) {
                        res.status(405).send("Wrong Password");
                    }
                    else {
                        jwt.sign({ adminId: admin.id }, process.env.JWT_SECRET as string, { expiresIn: process.env.JWT_EXPIRES_IN }, (err, token) => {
                            if (err) {
                                res.send('Error in generating token');
                            }
                            else {
                                res.send({
                                    message: "Login Successful",
                                    adminId: admin.id,
                                    token: token
                                });
                            }
                        });
                    }
                });
            }
        } catch (error) {
            console.log(error);
        }
    } catch (error) {
        res.send('SignIn error' + error);
    }
})


export const studentSignIn = asyncHandler(async (req, res) => {
    try {
        const { email, password } = req.body;
        try {
            const student = await prisma.student.findUnique({
                where: {
                    email: email as string,
                } as any
            })
            if (!student) {
                res.status(400).send("Student does not exist");
            }
            else {
                bcrypt.compare(password, student.password, function (err, result) {
                    if (!result) {
                        res.status(405).send("Wrong Password");
                    }
                    else {
                        jwt.sign({ studentId: student.id }, process.env.JWT_SECRET as string, { expiresIn: process.env.JWT_EXPIRES_IN }, (err, token) => {
                            if (err) {
                                res.send('Error in generating token');
                            }
                            else {
                                res.send({
                                    message: "Login Successful",
                                    studentId: student.id,
                                    token: token
                                });
                            }
                        });                        
                    }
                });
            }
        } catch (error) {
            console.log(error);
        }
    } catch (error) {
        res.send('SignIn error' + error);
    }
})


// Teacher SignIn
// export const teacherSignIn = asyncHandler(async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         try {
//             const teacher = await prisma.trainer.findUnique({
//                 where: {
//                     email: email as string,
//                 } as any
//             })
//             if (!teacher) {
//                 res.status(400).send("Teacher does not exist");
//             }
//             else {
//                 bcrypt.compare(password, teacher.password, function (err, result) {
//                     if (!result) {
//                         res.status(405).send("Wrong Password");
//                     }
//                     else {
//                         jwt.sign({ teacherId: teacher.id }, process.env.JWT_SECRET as string, { expiresIn: process.env.JWT_EXPIRES_IN }, (err, token) => {
//                             if (err) {
//                                 res.send('Error in generating token');
//                             }
//                             else {
//                                 res.send({
//                                     message: "Login Successful",
//                                     teacherId: teacher.id,
//                                     token: token
//                                 });
//                             }
//                         });                        
//                     }
//                 });
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     } catch (error) {
//         res.send('SignIn error' + error
//         );
//     }
// })
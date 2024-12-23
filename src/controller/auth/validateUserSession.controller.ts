import prisma from "../../db";
import bcrypt from 'bcrypt'
import { asyncHandler } from "../../utils/asyncHandler";
import jwt from 'jsonwebtoken'

export const validateUserSession = asyncHandler(async (req, res) => {
    try {
        let token = req.header('Authorization');
        token = token?.replace('Bearer ', '');
        if (!token) {
            res.status(401).send("Unauthorized Access");
            return;
        }
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            res.status(500).send("JWT Secret is not defined");
            return;
        }
        const decoded = jwt.verify(token, secret) as jwt.JwtPayload;
        if (!decoded) {
            res.status(401).send("Unauthorized Access");
            return;
        }

        if ((decoded as jwt.JwtPayload).studentId) {
            const findUser = await prisma.student.findFirst({
                where: {
                    id: (decoded as jwt.JwtPayload).studentId
                }
            })

            if (!findUser) {
                res.status(401).send("Unauthorized Access, User not found");
                return;
            }

            res.send({
                message: "Session Validated",
                decoded: decoded,
                user: findUser,
                userType: "student"
            });
            return;
        } 
        // else if ((decoded as jwt.JwtPayload).teacherId) {

        //     const findUser = await prisma.trainer.findFirst({
        //         where: {
        //             id: (decoded as jwt.JwtPayload).teacherId
        //         }
        //     })

        //     if (!findUser) {
        //         res.status(401).send("Unauthorized Access, User not found");
        //         return;
        //     }

        //     res.send({
        //         message: "Session Validated",
        //         decoded: decoded,
        //         user: findUser,
        //         userType: "trainer"
        //     });
        // }
         else if ((decoded as jwt.JwtPayload).adminId) {

            const findUser = await prisma.admin.findFirst({
                where: {
                    id: (decoded as jwt.JwtPayload).adminId
                }
            })

            if (!findUser) {
                res.status(401).send("Unauthorized Access, User not found");
                return;
            }

            res.send({
                message: "Session Validated",
                decoded: decoded,
                user: findUser,
                userType: "admin"
            });
        }

    } catch (error) {
        res
        .status(404)
        .send("Seassion Validation Error" + error);
    }
})
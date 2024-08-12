import prisma from "../../db";
import { asyncHandler } from "../../utils/asyncHandler";
import { Request, Response } from "express";

const changePassword = asyncHandler (async (req: Request, res: Response)=>{
    const {currentPassword, newPassword} = req.body();
    const id = req.params;

    try {
        const admin = await prisma.admin.findUnique ({
            where: {
                id: id,
            }
        })
        if (admin.password != currentPassword){
            res.send ("Enter correct password");
        }
        else {
            await prisma.admin.update ({
                where: {
                    id: id,
                    password: currentPassword
                },
                data:{
                    password: newPassword
                }
            })
            res.send ('password changed successfully');
        }
    } catch (error) {
        res.send ('password change error' + error);
    }
})

export default changePassword;
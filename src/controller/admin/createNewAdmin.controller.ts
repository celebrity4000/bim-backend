import { Request, Response } from "express";
import { asyncHandler } from "../../utils/asyncHandler";
import prisma from "../../db";

const createNewAdmin = asyncHandler (async (req: Request , res: Response)=>{
    try {
        const {firstName, lastName, email, password, addCourse, editCourse, deleteCourse} = req.body();
        
        const manageRole = await prisma.manageRole.create ({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            addCourse: addCourse,
            editCourse: editCourse,
            deleteCourse: deleteCourse
        })
        res.send ('manage role creation successfull'+ manageRole);
    } catch (error) {
        res.send ('manage roles creation failed' + error);
    }
})

export default createNewAdmin;
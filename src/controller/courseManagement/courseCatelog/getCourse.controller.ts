import { Request, Response } from "express";
import prisma from "../../../db";
import { asyncHandler } from "../../../utils/asyncHandler";

export const getCourse = asyncHandler (async (req: Request,res: Response)=>{
    try {
        const {adminId} = req.params;

        const courses = await prisma.course.findMany({
            where:{
                authorId: adminId,
            }
        });
        res.send (courses);
    } catch (error) {
        res.send ('Get course error'+ error);
    }
})
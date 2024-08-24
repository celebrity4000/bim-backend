import prisma from "../../db";
import { asyncHandler } from "../../utils/asyncHandler";

export const getCourse = asyncHandler (async (req,res)=>{
    try {
        const {adminId} = req.params;

        const courses = await prisma.course.findMany({
            where:{
                adminId: adminId,
            }
        });
        res.send (courses);
    } catch (error) {
        res.send ('Get course error'+ error);
    }
})
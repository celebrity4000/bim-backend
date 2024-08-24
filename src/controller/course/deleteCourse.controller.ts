import prisma from "../../db";
import { asyncHandler } from "../../utils/asyncHandler";

export const deleteCourse = asyncHandler (async (req,res)=>{
    try {
        const {courseId, adminId} = req.params;
        
        await prisma.course.delete ({
            where: {
                id: courseId,
                authorId: adminId
            }
        })
        res.send ("Course deleted Successfully")

    } catch (error) {
        res.send ('Delete course failed'+ error);
    }
})


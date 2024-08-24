import prisma from "../../db";
import { asyncHandler } from "../../utils/asyncHandler";

export const deleteCourse = asyncHandler (async (req,res)=>{
    try {
        const {courseId, adminId} = req.params;
        
        const admin = await prisma.admin.findUnique({
            where: { id: adminId }
        })

        if (admin.deleteCourse === true) {
            await prisma.course.delete ({
                where: {
                    id: courseId,
                    adminId: adminId
                }
            })
            res.send ("Course deleted Successfully")
        }
        else {
            res.send ("Admin delete course access required")
        }

    } catch (error) {
        res.send ('Delete course failed'+ error);
    }
})


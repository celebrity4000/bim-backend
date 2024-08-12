import prisma from "../../db";
import { asyncHandler } from "../../utils/asyncHandler";

const deleteCourse = asyncHandler (async (req,res)=>{
    try {
        const {id} = req.params;
        await prisma.course.delete ({
            where: {
                id: id
            }
        })
    } catch (error) {
        res.send ('Delete course failed'+ error);
    }
})

export default deleteCourse
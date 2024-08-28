import { Request, Response } from "express";
import { asyncHandler } from "../../utils/asyncHandler";
import prisma from "../../db";
import { uploadOnCloudinary } from "../../utils/cloudinaryConfig";

export const editCourse = asyncHandler(async (req: Request, res: Response) => {
    try {
        const { title, price, offerPrice, description, content, instructorName, enrolledStudent } = req.body;
        const { courseId, adminId } = req.params

        const thumbnailImage = req.file?.path as string
        if (thumbnailImage){
            const cloudinaryUrl = await uploadOnCloudinary (thumbnailImage) as string;
    
            await prisma.course.update({
                where: {
                    id: courseId,
                    authorId: adminId
                },
                data: {
                    title: title,
                    price: price,
                    offerPrice: offerPrice,
                    description: description,
                    content: content,
                    instructorName: instructorName,
                    enrolledStudent: enrolledStudent,
                    imageUrl: cloudinaryUrl
                }
            })
        }
        else {
            await prisma.course.update({
                where: {
                    id: courseId,
                    authorId: adminId
                },
                data: {
                    title: title,
                    price: price,
                    offerPrice: offerPrice,
                    description: description,
                    content: content,
                    instructorName: instructorName,
                    enrolledStudent: enrolledStudent,
                }
            })
        }
        res.send ("Course edited successfully")

    } catch (error) {
        res.send('cant edit course' + error);
    }
})

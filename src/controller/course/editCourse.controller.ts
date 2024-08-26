import { Request, Response } from "express";
import { asyncHandler } from "../../utils/asyncHandler";
import prisma from "../../db";
import { uploadOnCloudinary } from "../../utils/cloudinaryConfig";

export const editCourse = asyncHandler(async (req: Request, res: Response) => {
    try {
        const { title, price, offerPrice, description, content } = req.body;
        const { courseId, adminId } = req.params

        const thumbnailImage = req.file?.path as string
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
                imageUrl: cloudinaryUrl
            }
        })
        res.send ("Course edited successfully")

    } catch (error) {
        res.send('cant edit course' + error);
    }
})

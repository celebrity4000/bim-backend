import { Request, Response } from "express";
import { asyncHandler } from "../../utils/asyncHandler";
import prisma from "../../db";
import uploadImage from "../../utils/cloudinaryConfig";

export const editCourse = asyncHandler(async (req: Request, res: Response) => {
    try {
        const { title, price, offerPrice, description, content, image } = req.body;
        const { courseId, adminId } = req.params

        const cloudinaryUrl = uploadImage(image);

        const admin = await prisma.admin.findUnique({
            where: { id: adminId }
        })

        if (admin.editCourse === true) {
            await prisma.course.update({
                where: {
                    id: courseId,
                    adminId: adminId
                },
                data: {
                    title: title,
                    price: price,
                    offerPrice: offerPrice,
                    description: description,
                    content: content,
                    imageaUrl: cloudinaryUrl
                }
            })
            res.send ("Course edited successfully")
        }
        else {
            res.send ("Admin edit course access required")
        }

    } catch (error) {
        res.send('cant edit course' + error);
    }
})

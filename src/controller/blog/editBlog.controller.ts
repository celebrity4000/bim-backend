import { Request, Response } from "express";
import { asyncHandler } from "../../utils/asyncHandler";
import prisma from "../../db";
import { uploadOnCloudinary } from "../../utils/cloudinaryConfig";

export const editBlog = asyncHandler(async (req: Request, res: Response) => {
    try {
        const { title, description, about, author, dateAndTime } = req.body;
        const { blogId, adminId } = req.params

        const blogImage = req.file?.path as string
        const cloudinaryUrl = await uploadOnCloudinary (blogImage) as string;

        await prisma.blog.update({
            where: {
                id: blogId,
                authorId: adminId
            },
            data: {
                title: title,                
                description: description,
                about: about,
                image: cloudinaryUrl,
                authorName: author,
                date: dateAndTime,
            }
        })
        res.send ("Blog edited successfully")

    } catch (error) {
        res.send('cant edit course' + error);
    }
})

import { Request, Response } from "express";
import { asyncHandler } from "../../utils/asyncHandler";
import prisma from "../../db";
import { uploadOnCloudinary } from "../../utils/cloudinaryConfig";

export const createBlog = asyncHandler(async (req: Request, res: Response) => {
    try {
        const { title, description, about, author, date } = req.body;
        const image = req.file?.path as string
        const { adminId } = req.params;

        const imageUrl = await uploadOnCloudinary (image) as string;

        const blog = await prisma.blog.create({
            data: {
                authorName: author,
                date: date,
                title: title,
                about: about,
                description: description,
                image: imageUrl,
                author: {
                    connect: {
                        id: adminId
                    }
                }
            }
        })
            
        res.send ('Blogs Created');

    } catch (error) {
        res.send("blog creation error:" + error);
    }
})
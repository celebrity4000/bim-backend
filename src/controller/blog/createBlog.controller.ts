import { Request, Response } from "express";
import { asyncHandler } from "../../utils/asyncHandler";
import prisma from "../../db";

export const createBlog = asyncHandler(async (req: Request, res: Response) => {
    try {
        const { title, description, about, author, date, image } = req.body;
        const { adminId } = req.params;

        const imageUrl = ''

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

        res.send ("Blogs created"+ blog);

    } catch (error) {
        res.send("blog creation error:" + error);
    }
})
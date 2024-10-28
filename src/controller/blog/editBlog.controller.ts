import { Request, Response } from "express";
import { asyncHandler } from "../../utils/asyncHandler";
import prisma from "../../db";
import { uploadOnCloudinary } from "../../utils/cloudinaryConfig";

export const editBlog = asyncHandler(async (req: Request, res: Response) => {
    try {
        const { title, description, about, author, dateAndTime } = req.body;
        const { blogId } = req.params
        
        const blogImage = req.file?.path as string
        if (blogImage){
            const cloudinaryUrl = await uploadOnCloudinary (blogImage) as string;
            await prisma.blog.update({
                where: {
                    id: blogId,
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
        }
        else {
            await prisma.blog.update({
                where: {
                    id: blogId,
                },
                data: {
                    title: title,                
                    description: description,
                    about: about,
                    authorName: author,
                    date: dateAndTime,
                }
            })
        }

        res.send ("Blog edited successfully")

    } catch (error) {
        res.send('cant edit course' + error);
    }
})

import { Request, Response } from "express";
import prisma from "../../db";
import { asyncHandler } from "../../utils/asyncHandler";

export const getBlog = asyncHandler(async (req: Request, res: Response) => {
    try {
        const { adminId } = req.params;
        const blog = await prisma.blog.findMany({
            where: {
                authorId: adminId
            }
        })
        res.send(blog);
    } catch (error) {
        res.send('No blogs found: ' + error);
    }
})
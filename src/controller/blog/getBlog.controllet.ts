import { Request, Response } from "express";
import prisma from "../../db";
import { asyncHandler } from "../../utils/asyncHandler";

export const getBlog = asyncHandler(async (req: Request, res: Response) => {
    try {
        const blog = await prisma.blog.findMany()
        res.send(blog);
    } catch (error) {
        res.send('No blogs found: ' + error);
    }
})
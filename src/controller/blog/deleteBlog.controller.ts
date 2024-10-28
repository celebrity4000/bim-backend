import { Request, Response } from "express";
import prisma from "../../db";
import { asyncHandler } from "../../utils/asyncHandler";

export const deleteBlog = asyncHandler(async (req: Request, res: Response) => {
    try {
        const { blogId } = req.params;

        await prisma.blog.delete({
            where: {
                id: blogId,
            }
        })
        res.send("Blog deleted Successfully")

    } catch (error) {
        res.send('Delete blog failed' + error);
    }
})


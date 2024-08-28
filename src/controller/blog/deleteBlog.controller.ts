import { Request, Response } from "express";
import prisma from "../../db";
import { asyncHandler } from "../../utils/asyncHandler";

export const deleteBlog = asyncHandler(async (req: Request, res: Response) => {
    try {
        const { blogId, adminId } = req.params;

        await prisma.blog.delete({
            where: {
                id: blogId,
                authorId: adminId
            }
        })
        res.send("Blog deleted Successfully")

    } catch (error) {
        res.send('Delete blog failed' + error);
    }
})


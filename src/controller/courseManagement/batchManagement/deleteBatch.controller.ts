import { Request, Response } from "express";
import prisma from "../../../db";
import { asyncHandler } from "../../../utils/asyncHandler";

export const deleteBatch = asyncHandler(async (req: Request, res: Response) => {
    try {
        const { batchId } = req.params;

        await prisma.batches.delete({
            where: {
                id: batchId,
            }
        })
        res.send("Batch deleted Successfully")

    } catch (error) {
        res.send('Delete batch failed' + error);
    }
})


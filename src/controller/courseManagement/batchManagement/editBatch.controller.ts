import { Request, Response } from "express";
import { asyncHandler } from "../../../utils/asyncHandler";
import prisma from "../../../db";

export const editBatch = asyncHandler(async (req: Request, res: Response) => {
    try {
        const { batchName, startDate, endDate, trainer, participants, dropouts } = req.body;
        const { batchId } = req.params

        await prisma.batches.update({
            where: {
                id: batchId,
            },
            data: {
                batchName: batchName,
                startDate: startDate,
                endDate: endDate,
                trainer: trainer,
                participants: parseInt(participants),
                dropouts: parseInt(dropouts),
            }
        })
        res.send ("Batch edited successfully")

    } catch (error) {
        res.send('cant edit batch' + error);
    }
})

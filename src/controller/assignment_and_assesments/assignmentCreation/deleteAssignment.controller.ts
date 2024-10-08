import { Request, Response } from "express";
import prisma from "../../../db";
import { asyncHandler } from "../../../utils/asyncHandler";

export const deleteAssignment = asyncHandler(async (req: Request, res: Response) => {
    try {
        const { assignmentId } = req.params;

        await prisma.assignment.delete({
            where: {
                id: assignmentId,
            }
        })
        res.send("Assignment deleted Successfully")

    } catch (error) {
        res.send('Delete assignment failed' + error);
    }
})


import { Request, Response } from "express";
import { asyncHandler } from "../../../utils/asyncHandler";
import prisma from "../../../db";

export const editAssignment = asyncHandler(async (req: Request, res: Response) => {
    try {
        const { title, description, deadline, submissions, reviewed } = req.body;
        const { assignmentId } = req.params

        await prisma.assignment.update({
            where: {
                id: assignmentId,
            },
            data: {
                title: title,
                description: description,
                deadline: deadline,
                submissions: submissions,
                reviewed: reviewed
            }
        })
        res.send ("Batch edited successfully")

    } catch (error) {
        res.send('cant edit batch' + error);
    }
})

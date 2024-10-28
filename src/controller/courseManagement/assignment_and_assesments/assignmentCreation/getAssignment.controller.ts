import { Request, Response } from "express";
import { asyncHandler } from "../../../../utils/asyncHandler";
import prisma from "../../../../db";



export const getAssignment = asyncHandler(async (req: Request, res: Response) => {
    try {
        const assignments = await prisma.assignment.findMany();
        res.send(assignments);
    } catch (error) {
        res.send('Get assignment error' + error);
    }
})
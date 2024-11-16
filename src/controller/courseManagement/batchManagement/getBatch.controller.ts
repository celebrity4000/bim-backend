import { Request, Response } from "express";
import prisma from "../../../db";
import { asyncHandler } from "../../../utils/asyncHandler";

export const getBatch = asyncHandler(async (req: Request, res: Response) => {
    try {
        const batches = await prisma.batches.findMany();
        res.send(batches);
    } catch (error) {
        res.send('Get batch error' + error);
    }
})
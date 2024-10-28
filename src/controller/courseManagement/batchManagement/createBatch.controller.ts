import prisma from "../../../db";
import { asyncHandler } from "../../../utils/asyncHandler";
import { Request, Response } from "express";

export const createBatch = asyncHandler (async (req: Request,res: Response)=>{
    const { batchName, startDate, endDate, trainer} = req.body;
    try {
        const batch = await prisma.batches.create ({
            data:{
                batchName: batchName,
                startDate: startDate,
                endDate: endDate,
                trainer: trainer
            }
        })
        res.send ('batch created: '+ batch);
    } catch (error) {
        res.send ('batch creation error'+ error);
    }
})
import prisma from "../../../db";
import { asyncHandler } from "../../../utils/asyncHandler";
import { Request, Response } from "express";

export const createAssignment = asyncHandler (async (req: Request,res: Response)=>{
    const { title, description, deadline, submissions, reviewed} = req.body;
    try {
        const assignment = await prisma.assignment.create ({
            data:{
                title: title,
                description: description,
                deadline: deadline,
                submissions: submissions,
                reviewed: reviewed
            }
        })
        res.send ('assignment created: '+ assignment);
    } catch (error) {
        res.send ('assignment creation error'+ error);
    }
})
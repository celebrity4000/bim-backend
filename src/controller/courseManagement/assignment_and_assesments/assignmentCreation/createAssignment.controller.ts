

import { Request, Response } from "express";
import { asyncHandler } from "../../../../utils/asyncHandler";
import prisma from "../../../../db";

export const createAssignment = asyncHandler (async (req: Request,res: Response)=>{
    const { title, description, deadline, submissions, reviewed} = req.body;
    const {courseId} = req.params;
    try {
        const assignment = await prisma.assignment.create ({
            data:{
                title: title,
                description: description,
                deadline: deadline,
                submissions: submissions,
                reviewed: reviewed,
                course: {
                    connect:{
                        id: courseId
                    }
                }
            }
        })
        res.send ('assignment created: '+ assignment);
    } catch (error) {
        res.send ('assignment creation error'+ error);
    }
})
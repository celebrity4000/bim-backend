import { Request, Response } from "express";
import prisma from "../../db";
import { asyncHandler } from "../../utils/asyncHandler";

export const getFeedbacks = asyncHandler(async (req: Request, res: Response) => {
    try {
        const feedbacks = await prisma.feedback.findMany({
            include: {
                student: true,
                teacher: true 
            }
        });


        res.send(feedbacks);
    } catch (error) {
        res.status(500).send('Get batch error: ' + error);
    }
});
export const getStudentsFeedbacks = asyncHandler(async (req: Request, res: Response) => {
    try {
        const feedbacks = await prisma.feedback.findMany({
            include: {
                student: true,
                teacher: true 
            }
        });

        const studentFeedbacks = feedbacks.filter(feedback => !feedback.teacherId);

        res.send(studentFeedbacks);
    } catch (error) {
        res.status(500).send('Get batch error: ' + error);
    }
});
export const getTeachersFeedbacks = asyncHandler(async (req: Request, res: Response) => {
    try {
        const feedbacks = await prisma.feedback.findMany({
            include: {
                student: true,
                teacher: true 
            }
        });

        const teachersFeedback = feedbacks.filter(feedback => !feedback.studentId);

        res.send(teachersFeedback);
    } catch (error) {
        res.status(500).send('Get batch error: ' + error);
    }
});
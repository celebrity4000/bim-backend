import { Request, Response } from "express";
import { asyncHandler } from "../../utils/asyncHandler";
import prisma from "../../db";


export const createFeedback = asyncHandler(async (req: Request, res: Response) => {
    try {
        const { feedbackType, feedback, student, studentId, teacher, teacherId, courseName, courseId } = req.body;

        const missingFields = [];

        if (!feedbackType) missingFields.push("feedbackType");
        if (!feedback) missingFields.push("feedback");

        if (missingFields.length > 0) {
            return res.status(400).send({ error: "Missing fields", missingFields });
        }

        await prisma.feedback.create({
            data: {
                feedbackType: feedbackType,
                feedback: feedback,
                student: student,
                studentId: studentId,
                teacher: teacher,
                teacherId: teacherId,
                courseName: courseName,
                courseId: courseId
            }
        })
        res.send ('Feedback Created');     

    } catch (error) {
        res.send('Feedback creation failed' + error);
    }
})
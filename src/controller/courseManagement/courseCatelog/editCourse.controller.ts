import { Request, Response } from "express";
import { asyncHandler } from "../../../utils/asyncHandler";
import prisma from "../../../db";
import { uploadOnCloudinary } from "../../../utils/cloudinaryConfig";

export const editCourse = asyncHandler(async (req: Request, res: Response) => {
    try {
        const { title, price, offerPrice, description, content, instructorName, enrolledStudent } = req.body;
        const { courseId } = req.params
        const students = await prisma.student.count({
            where: {
                courseId: courseId,
            }
        })
        const thumbnailImage = req.file?.path as string
        if (thumbnailImage) {
            const cloudinaryUrl = await uploadOnCloudinary(thumbnailImage) as string;

            await prisma.course.update({
                where: {
                    id: courseId,
                },
                data: {
                    title: title,
                    price: price,
                    offerPrice: offerPrice,
                    description: description,
                    content: content,
                    instructorName: instructorName,
                    enrolledStudent: students.toString(),
                    imageUrl: cloudinaryUrl
                }
            })
        }
        else {
            await prisma.course.update({
                where: {
                    id: courseId,
                },
                data: {
                    title: title,
                    price: price,
                    offerPrice: offerPrice,
                    description: description,
                    content: content,
                    instructorName: instructorName,
                    enrolledStudent: enrolledStudent,
                }
            })
        }
        res.send("Course edited successfully")

    } catch (error) {
        res.send('cant edit course' + error);
    }
})

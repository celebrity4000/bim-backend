import { Response, Request } from "express";
import prisma from "../../db";
import { asyncHandler } from "../../utils/asyncHandler";
import uploadImage from "../../utils/cloudinaryConfig";

export const createCourse = asyncHandler (async (req: Request,res: Response)=>{
    try {
        const {title, price, offerPrice, description, content, image} = req.body;
        const {adminId} = req.params;

        const cloudinaryUrl = uploadImage(image);
        
        const admin = await prisma.admin.findUnique({
            where: {id: adminId}
        })
        if (admin.addCourse=== true){
            const course = await prisma.course.create ({
                title: title,
                price: price,
                offerPrice: offerPrice,
                description: description,
                content: content,
                imageUrl: cloudinaryUrl,
                admin: {
                    connect: {
                        id: adminId
                    }
                }
            })
            res.send ('course created'+course);
        }
        else {
            res.send ('Admin add course access required')
        }
    } catch (error) {
        res.send (error);
    }
})

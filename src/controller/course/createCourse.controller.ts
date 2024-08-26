import { Response, Request } from "express";
import prisma from "../../db";
import { asyncHandler } from "../../utils/asyncHandler";
import { uploadOnCloudinary } from "../../utils/cloudinaryConfig";

export const createCourse = asyncHandler (async (req: Request,res: Response)=>{
    try {
        const {title, price, offerPrice, description, content} = req.body;
        const {adminId} = req.params;

        const thumbnailImage = req.file?.path as string
        const cloudinaryUrl = await uploadOnCloudinary (thumbnailImage) as string;
        
        const course = await prisma.course.create ({
            data:{
                title: title,
                price: price,
                offerPrice: offerPrice,
                description: description,
                content: content,
                imageUrl: cloudinaryUrl,
                videoUrl: '',
                author: {
                    connect: {
                        id: adminId
                    }
                }
            }
        })
        res.send ('course created'+course);        
    } catch (error) {
        res.send (error);
    }
})

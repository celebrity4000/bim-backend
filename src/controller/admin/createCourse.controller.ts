import { Response, Request } from "express";
import prisma from "../../db";
import { asyncHandler } from "../../utils/asyncHandler";
import uploadImage from "../../utils/cloudinaryConfig";

const createCourse = asyncHandler (async (req: Request,res: Response)=>{
    try {
        const {title, price, offerPrice, description, content, image} = req.body();

        const cloudinaryUrl = uploadImage(image);

        const course = await prisma.course.create ({
            title: title,
            price: price,
            offerPrice: offerPrice,
            description: description,
            content: content,
            imageUrl: cloudinaryUrl
        })
        res.send ('course created'+course);
    } catch (error) {
        res.send (error);
    }
})

export default createCourse;
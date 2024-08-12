import { Request, Response } from "express";
import { asyncHandler } from "../../utils/asyncHandler";
import prisma from "../../db";
import uploadImage from "../../utils/cloudinaryConfig";

const editCourse = asyncHandler (async (req: Request , res: Response)=>{
    try {
        const {title, price, offerPrice, description, content, image} = req.body();
        const {id} = req.params

        const cloudinaryUrl = uploadImage(image);

        await prisma.course.update ({
            where: {
                id: id
            },
            data:{
                title: title,
                price: price,
                offerPrice: offerPrice,
                description: description,
                content: content,
                imageaUrl: cloudinaryUrl
            }
        })
        
    } catch (error) {
        res.send ('cant edit course' + error);
    }
})

export default editCourse;
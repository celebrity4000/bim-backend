import { Request, Response } from "express";
import { asyncHandler } from "../../utils/asyncHandler";

const editCourse = asyncHandler (async (req: Request , res: Response)=>{
    try {
        const {title, price, offerPrice, description, content, image} = req.body();
        
    } catch (error) {
        res.send ('cant edit course' + error);
    }
})

export default editCourse;
import { Request, Response } from "express";
import { asyncHandler } from "../../utils/asyncHandler";

const createNewAdmin = asyncHandler (async (req: Request , res: Response)=>{
    try {
        const {firstName, lastName, email, password, addCourse, editCourse, deleteCourse} = req.body();
        
    } catch (error) {
        res.send ('admin creation failed' + error);
    }
})

export default createNewAdmin;
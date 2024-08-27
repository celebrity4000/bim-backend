import { Request, Response } from "express";
import { asyncHandler } from "../../utils/asyncHandler";

export const deleteBlog = asyncHandler (async (req:Request,res: Response)=>{
    try {
        
    } catch (error) {
        res.send ("Blog Deletation error:"+ error);
    }
})
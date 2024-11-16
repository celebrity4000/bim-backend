import { asyncHandler } from "../../utils/asyncHandler";

export const adminSetting = asyncHandler (async (req,res)=>{
    try {
        const {adminId} = req.params;
        
    } catch (error) {
        res.send ("admin setting error: "+ error);
    }
})
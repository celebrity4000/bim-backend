import { asyncHandler } from "../../utils/asyncHandler";

export const trainerSetting = asyncHandler (async (req,res)=>{
    try {
        const {trainerId} = req.params
    } catch (error) {
        res.send ("trainer setting error: "+ error);
    }
})
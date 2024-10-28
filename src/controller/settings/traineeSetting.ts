import { asyncHandler } from "../../utils/asyncHandler";

export const traineeSetting = asyncHandler (async (req,res)=>{
    try {
        const {traineeId} = req.params;
        res.send ('trainee setting success' + traineeId)
    } catch (error) {
        res.send ("trainee setting error: "+ error);
    }
})
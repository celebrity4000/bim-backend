import { asyncHandler } from "../../utils/asyncHandler";

export const signOut = asyncHandler (async (req,res)=>{
    try {
        
        
    } catch (error) {
        res.send ('Sign Out error: '+ error);
    }
})
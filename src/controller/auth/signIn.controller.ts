import prisma from "../../db";
import bcrypt from 'bcrypt'
import { asyncHandler } from "../../utils/asyncHandler";

export const signIn = asyncHandler(async (req, res) => {
    try {
        const { email, password } = req.body;
        try {
            const admin = await prisma.admin.findUnique({
                where: {
                    email: email,
                }
            })
            if (!admin) {
                res.send("Admin does not exist");
            }
            else {
                bcrypt.compare(password, admin.password, function (err, result) {
                    if (!result) {
                        res.send("Wrong Password");
                    }
                    else {
                        res.send({
                            message: "Login Successful",
                            adminId: admin.id,
                        });
                    }
                });
            }
        } catch (error) {
            console.log(error);
        }
    } catch (error) {
        res.send('SignIn error' + error);
    }
})
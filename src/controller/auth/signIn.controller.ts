import prisma from "../../db";
import bcrypt from 'bcrypt'
import { asyncHandler } from "../../utils/asyncHandler";

export const signIn = asyncHandler(async (req, res) => {
    try {
        const { email, password } = req.body;
        try {
            const user = await prisma.admin.findUnique({
                where: {
                    email: email,
                }
            })
            if (!user) {
                res.send("User does not exist");
            }
            else {
                bcrypt.compare(password, user.password, function (err, result) {
                    if (!result) {
                        res.send("Wrong Password");
                    }
                    else {
                        res.send({
                            message: "Login Successful",
                            userId: user.id,
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
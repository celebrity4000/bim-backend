import express from 'express'
import { signIn } from '../controller/auth/signIn.controller';
import { signOut } from '../controller/auth/signOut.controller';
import { signUp } from '../controller/auth/signup.controller';


const router = express.Router();

// SignIn Route
router.route ('/signIn').post(signIn);

// SignOut Route
router.route ('/signOut').post(signOut);

// SignUp Route
router.route ('/signUp').post(signUp);


export default router;

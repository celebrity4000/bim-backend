import express from 'express'
import { signIn, studentSignIn, teacherSignIn } from '../controller/auth/signIn.controller';
import { signOut } from '../controller/auth/signOut.controller';
import { signUp, studentSignUp, teachersSignUp } from '../controller/auth/signup.controller';
import { validateUserSession } from '../controller/auth/validateUserSession.controller';


const router = express.Router();

// SignIn Routes
router.route ('/signIn').post(signIn);

router.route ('/studentSignIn').post(studentSignIn);

router.route ('/teacherLogin').post(teacherSignIn);


// SignOut Route
router.route ('/signOut').post(signOut);

// SignUp Route
router.route ('/signUp').post(signUp);

router.route ('/studentSignUp').post(studentSignUp);

router.route('/teacherSignUp').post(teachersSignUp)

// Validate User Session
router.route ('/validateUserSession').get(validateUserSession);


export default router;

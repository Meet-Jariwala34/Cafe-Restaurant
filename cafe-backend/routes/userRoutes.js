import express from 'express'
import { userLogin,userRegistration,admin, getUser } from '../controllers/userController.js'
import adminAuth from '../middleware/adminAuth.js';

const userRouter = express.Router();

userRouter.post('/register',userRegistration);
userRouter.get('/list-users',adminAuth,getUser);
userRouter.post('/login', userLogin);
userRouter.post('/admin', admin);

export default userRouter;
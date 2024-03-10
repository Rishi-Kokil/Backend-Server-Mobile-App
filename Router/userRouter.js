import express from 'express';
import authenticateUser from './middlewares/authenticateUser.js';

const userRouter = express.Router();

userRouter.use(authenticateUser);



export default userRouter;

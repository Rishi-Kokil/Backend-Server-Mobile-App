import express from 'express';
import jwt from 'jsonwebtoken'
import cors from 'cors'
import userRouter from './Router/userRouter.js';
import { db } from './Database/index.js';
import { loginRouteController, signUpRouteController } from './middlewares/LoginSignupControllers.js';
const app = express();

app.use(cors())
app.use(express.json())
app.use("/user", userRouter);
 
app.post("/login", loginRouteController);
app.post("/signup", signUpRouteController);

app.listen(5000 , ()=>{
    console.log("Server running on port 5000");
})
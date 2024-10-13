import { Router } from "express";
import handleLogin from "./controllers/login.controller";
import handleLogout from "./controllers/logout.controller";
import handleSignUp from "./controllers/signup.controller";

const userRouter = Router();

userRouter.post('/signup', handleSignUp);
userRouter.post('/login', handleLogin);
userRouter.post('/logout', handleLogout);

export default userRouter;
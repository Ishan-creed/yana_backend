import express from 'express'

const router = express.Router();

import { registerUser,loginUser, findUser,getUser,updateUser } from '../Controllers/userController.js';

router.post("/register",registerUser);
router.post("/login",loginUser);
router.get("/find/:userId",findUser);
router.put("/update",updateUser);
router.get("/",getUser);


export default router;
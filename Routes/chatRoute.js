import express from 'express'

const router = express.Router();


import { createChat,findUserChats,findChat } from '../Controllers/chatController.js';

router.post("/",createChat);
router.get("/:userId",findUserChats);
router.get("/find/:firstId/:secondId",findChat);

export default router;
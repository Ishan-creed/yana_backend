import express from 'express'

const router = express.Router();

import { createMessage, getMessage} from '../Controllers/messageController.js';

router.post("/",createMessage);
router.get("/:chatId",getMessage);

export default router;
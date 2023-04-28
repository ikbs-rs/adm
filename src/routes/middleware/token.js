import express from "express";
const router = express.Router();

import { authenticateJWT  } from '../../security/jwt/authenticateJWT.js';

router.post('/', authenticateJWT) 

export default router;

import express, { request, response } from "express";
import abstructController from "../../controllers/abstructController.js";

const router = express.Router();

router.get("/*", abstructController.getAll);
router.post("/", abstructController.getAll);

export default router;
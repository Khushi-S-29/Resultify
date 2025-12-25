import express from "express";
import {
  addResult,
  getResultsByStudent,
} from "../controllers/result.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", authenticate, addResult);
router.get("/:id", authenticate, getResultsByStudent);

export default router;

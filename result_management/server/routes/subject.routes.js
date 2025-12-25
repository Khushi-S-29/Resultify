import express from "express";
import { createSubject, getSubjects } from "../controllers/subject.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { authorize } from "../middlewares/role.middleware.js";

const router = express.Router();

router.post("/", authenticate, authorize("admin"), createSubject);
router.get("/", authenticate, getSubjects);

export default router;

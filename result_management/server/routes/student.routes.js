import express from "express";
import {
  createStudent,
  getStudents,
} from "../controllers/student.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { authorize } from "../middlewares/role.middleware.js";

const router = express.Router();

router.post("/", authenticate, authorize("admin"), createStudent);
router.get("/", authenticate, authorize("admin"), getStudents);

export default router;

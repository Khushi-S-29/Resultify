import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import studentRoutes from "./routes/student.routes.js";
import resultRoutes from "./routes/result.routes.js";
import subjectRoutes from "./routes/subject.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/results", resultRoutes);

app.use("/api/subjects", subjectRoutes);

app.use(errorHandler);

export default app;

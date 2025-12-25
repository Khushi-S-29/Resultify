import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  rollNumber: String,
  department: String,
  semester: Number,
});

export default mongoose.model("Student", studentSchema);

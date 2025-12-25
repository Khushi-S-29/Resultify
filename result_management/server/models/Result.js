import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
  subject: { type: mongoose.Schema.Types.ObjectId, ref: "Subject" },
  marks: Number,
  grade: String,
  semester: Number,
});

export default mongoose.model("Result", resultSchema);

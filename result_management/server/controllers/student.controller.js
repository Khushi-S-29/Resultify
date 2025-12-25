import Student from "../models/Student.js";

export const createStudent = async (req, res) => {
  const student = await Student.create(req.body);
  res.status(201).json(student);
};

export const getStudents = async (req, res) => {
  const students = await Student.find().populate("user");
  res.json(students);
};

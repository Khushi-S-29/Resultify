import Result from "../models/Result.js";
import { calculateGrade } from "../services/grade.service.js";

export const addResult = async (req, res) => {
  const { marks } = req.body;
  const grade = calculateGrade(marks);
  const result = await Result.create({ ...req.body, grade });
  res.status(201).json(result);
};

export const getResultsByStudent = async (req, res) => {
  const results = await Result.find({ student: req.params.id }).populate(
    "subject"
  );
  res.json(results);
};

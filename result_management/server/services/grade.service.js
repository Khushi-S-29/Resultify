export const calculateGrade = (marks) => {
  if (marks >= 90) return "A";
  if (marks >= 75) return "B";
  if (marks >= 60) return "C";
  if (marks >= 40) return "D";
  return "F";
};

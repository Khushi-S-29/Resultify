const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rollNumber: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    grades: {
        math: { type: Number, required: true },
        science: { type: Number, required: true },
        english: { type: Number, required: true }
    },
    dateOfBirth: { type: Date, required: true }
});

module.exports = mongoose.model('Student', studentSchema);

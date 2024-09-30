const express = require('express');
const connectDB = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());

app.use('/students', studentRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Student Result Management System');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

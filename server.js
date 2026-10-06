const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


// ===============================
// HOME / TEST
// ===============================

app.get("/", (req, res) => {
    res.json({
        message: "School Management System Backend is Running!"
    });
});


// ===============================
// STUDENTS DATA
// ===============================

let students = [];


// ===============================
// GET ALL STUDENTS
// ===============================

app.get("/api/students", (req, res) => {

    res.json(students);

});


// ===============================
// ADD STUDENT
// ===============================

app.post("/api/students", (req, res) => {

    const student = req.body;

    if (!student.name || !student.email) {

        return res.status(400).json({
            message: "Name and Email are required."
        });

    }

    students.push(student);

    res.status(201).json({
        message: "Student added successfully!",
        student: student
    });

});


// ===============================
// DELETE STUDENT
// ===============================

app.delete("/api/students/:email", (req, res) => {

    const email = req.params.email;

    students = students.filter(
        student => student.email !== email
    );

    res.json({
        message: "Student deleted successfully!"
    });

});


// ===============================
// SERVER
// ===============================

const PORT = 5000;

app.listen(PORT, () => {

    console.log(
        `Backend server running on http://localhost:${PORT}`
    );

});
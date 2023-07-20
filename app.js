const express = require("express");
const cors = require("cors");
require("./src/db/connection")
const Student = require("./src/models/students")

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello from other side");

})

app.get("/student", async (req, res) => {
    try {
        const allStudents = await Student.find();
        if (allStudents.length === 0) {
            return res.status(404).send("No students found");
        } else {
            res.send(allStudents);
        }
    } catch (e) {
        res.status(500).send("Internal server error");
    }

})

app.post("/student", async (req, res) => {

    try {
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(200).send(createUser);
    }
    catch (e) {
        res.status(400).send(e);
    }

})

app.delete("/student/:id", async (req, res) => {
    try {
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if (!deleteStudent) {
            return res.status(404).send(); // Return 404 if the student with the given id is not found
        }
        res.send(deleteStudent);
    } catch (e) {
        res.status(500).send(e);
    }
});


app.listen(port, () => {
    console.log(`connection is established ${port}`);
})
//Read Data using ID
app.get("/student/:name", async (req, res) => {

    try {

        const _name = req.params.name;
        const studentData = await Student.find({ name: _name });
        if (!studentData) {
            return res.status(404).send;
        }
        else {
            res.send(studentData);
        }

    }
    catch (e) {
        res.status(400).send(e);
    }

})
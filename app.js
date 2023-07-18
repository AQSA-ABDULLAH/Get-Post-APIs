const express = require("express");
require("./src/db/connection")
const Student = require("./src/models/students")

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello from other side");

})

// app.post("/student", (req, res) => {
//     console.log(req.body);
//     const user = new Student(req.body);
//     user.save().then(() => {
//         console.log(user);
//         res.status(201).send(user);
//     }).catch((e) => {
//         res.status(400).send(e);
//     })

// })

app.post("/student", async (req, res) => {

    try {
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    }
    catch(e){
        res.status(400).send(e);
    }

})

app.listen(port, () => {
    console.log(`connection is established ${port}`);
})
//Read Data using ID
app.get("/student/:id", async (req, res) => {

    try {

        const _id = req.params.id;
        const studentData = await Student.findById(_id);
        if(!studentData){
            return res.status(404).send;
        }
        else{
            res.send(studentData);
        }

    }
    catch(e){
        res.status(400).send(e);
    }

})
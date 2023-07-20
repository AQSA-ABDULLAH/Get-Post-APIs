const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3
    },

    // email: {
    //     type: String,
    //     required: true,
    //     // unique: [true, "Email ID Already used."],
    //     validator(value) {
    //         if (!validator.isEmail(value)) {
    //             throw new Error("Invalid Email")
    //         }
    //     }
    // },
    // phoneno:{
    //     type: Number,
    //     minlength: 11,
    //     maxlength: 11,
    //     required: true,
    //     // unique: true
    // },
    // address: {
    //     type: String,
    //     required: true,
    // }
})

//We create new collection here
const Student = new mongoose.model('Student', studentSchema);

module.exports = Student;
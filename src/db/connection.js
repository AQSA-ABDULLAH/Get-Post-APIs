const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/students-records", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection is established.");
}).catch((e) => {
    console.log("No connection established",e);
});
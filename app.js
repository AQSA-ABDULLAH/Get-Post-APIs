const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
app.get("/", (req, res)=>{
    res.send("Hello from other side");

})

app.post("/student", (req, res)=>{
    res.send("Hello from other side");

})

app.listen(port, () => {
    console.log(`connection is setup at port no ${port}`);
})
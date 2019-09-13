const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const data = ("/data.json")

const completedTasks = [
    {id:1, task: "wash Car", dateDue:"9/20/2019", priority:2},
    {id:2, task: "Walk dog", dateDue:"9/13/2019", priority:2},
    {id:3, task: "do laundry", dateDue:"9/23/2019", priority:2},
    {id:4, task: "fix faucet", dateDue:"9/14/2019", priority:2},
    {id:5, task: "pay bills", dateDue:"9/9/2019", priority:2},
    {id:6, task: "do homework", dateDue:"9/15/2019", priority:2},
    {id:7, task: "meditate", dateDue:"9/10/2019", priority:2}
];

// Homepage
app.get("/", (req,res) =>{
    res.write ('Homepage of ToDo App');
    res.write("\nThe Completed tasks listed below \n");
    res.write(completedTasks);
    res.end()
});

// Unsure How to assign a new port Number
// Also how to change the message from Listening on Port 3000 to newly updated port
app.listen(port, ()=> console.log(`Listening on Port ${port}`));
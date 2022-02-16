const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const child_process = require("child_process");

const app = express();



const port = 3007;

app.get("/", (req, res) => {
    res.send("Hello world")
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.options('*', cors());


var apps;

let configContent = fs.readFileSync(__dirname + "/apps.json");

apps = JSON.parse(configContent).apps;

console.log(apps);

app.post("/apps/exec/:id", (req,res)=> {
    apps.forEach(element => {
        if (element.id == req.params.id) {
            exec(element.path);
            res.send(`Abrindo ${element.name}`);
        }
    });
    
})

app.get("/apps", (req,res) =>  {
    let appsFilter = [];

    apps.forEach(element => {
        appsFilter.push({
            name: element.name,
            id : element.id
        })
    });

    res.json(appsFilter);
    
})


 exports.StartServer = (callback) => {

    app.listen(port, () => {
        console.log(`Listen on port ${port}`);
        callback();
    })
}





const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const child_process = require("child_process");

const app = express();


//portass
const port = 3007;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.options('*', cors());


var apps;

//carrega os caminhos dos apps para executal-los, entre outras informações
let configContent = fs.readFileSync(__dirname + "/apps.json");

apps = JSON.parse(configContent).apps;

console.log(apps);

//executa um app pelo id
app.post("/apps/exec/:id", (req,res)=> {

    //executa os apps
    apps.forEach(element => {

        if (element.id == req.params.id) {

            exec(element.path);
            res.send(`Abrindo ${element.name}`);
        }
    });
    
})


//retorna os apps no aruivo apps.json
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


//inicia os servidor express
 exports.StartServer = (callback) => {

    app.listen(port, () => {
        console.log(`Listen on port ${port}`);
        callback();
    })
}





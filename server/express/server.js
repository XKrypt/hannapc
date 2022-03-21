const express = require('express');
const cors = require('cors');
const { getAppsWithoutPath, executeApp, scanApps, addApp, removeApp } = require('../apps-controller/apps-controller');

const app = express();


//portass
const port = 3007;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.options('*', cors());

//executa um app pelo id
app.post("/apps/exec/:id", (req,res)=> {

    //executa os apps
    executeApp(req.params.id);
    
})


//Scan
app.get("/apps/scan", (req,res)=> {

    //executa os apps
    scanApps();
    res.sendStatus(200);
    
})




//Adicionar um novo app
app.put("/apps", (req,res) => {
        addApp(req.body.data.appName, req.body.appTarget);
        res.sendStatus(201);
})

//Adicionar um novo app
app.remove("/apps", (req,res) => {
        removeApp(req.body.data.nid);
        res.sendStatus(201);
})


//Retorna os apps no aruivo apps.json
app.get("/apps", (req,res) =>  {
    
    res.json(getAppsWithoutPath());
    
})


//inicia os servidor express
 exports.StartServer = (callback = () => {}) => {

    app.listen(port, () => {
        console.log(`Listen on port ${port}`);
        callback();
    })
}


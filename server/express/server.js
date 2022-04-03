const express = require('express');
const cors = require('cors');
const {executeApp, getApps, scanApps, addApp, removeApp,getConfig } = require('../apps-controller/apps-controller');

const app = express();


//portas
const port = getConfig('port').data.port;


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
app.put("/apps/scan/", (req,res)=> {
    let scanPath = `${process.env.APPDATA}\\Microsoft\\Windows\\Start Menu\\Programs\\`;
    //executa os apps
    scanApps(req.body.scanPath || scanPath);
    res.sendStatus(200);
    
})




//Adicionar um novo app
app.put("/apps", (req,res) => {
        addApp(req.body.data.appName, req.body.appTarget);
        res.sendStatus(201);
})

//remove um app
app.delete("/apps/:id", (req,res) => {
        removeApp(req.params.id);
        res.sendStatus(201);
})


//Retorna os apps no aruivo apps.json
app.get("/apps", (req,res) =>  {
    
    res.json(getApps());
    
})


//inicia os servidor express
 exports.StartServer = (callback = () => {}) => {

    app.listen(port, () => {
        console.log(`Listen on port ${port}`);
        callback();
    })
}


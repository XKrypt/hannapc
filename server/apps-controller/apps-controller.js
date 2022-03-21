const fs = require('fs');
const path = require('path');
const child_process = require("child_process");
const {shell} = require('electron');
const Parsim = require('../parsim').default

var savePath =  `${process.env.HOMEPATH}\\Documents\\Hanna\\parsim.json`
var database = new Parsim(savePath,false,'utf8');



exports.scanApps = (scanPath = '') => {

    if (database.getGroup('apps') == undefined) {
        database.addGroup('apps')
    }

    fs.readdir(scanPath,  (err, files) => {

        //Procura arquivos lnk que são atalhos e pega sua propriedades
        files.forEach(file => {
            if (fs.existsSync(scanPath+file)  && fs.lstatSync(scanPath+file).isDirectory()) {
                this.scanApps(scanPath+file+"\\");
            }

            
            if(path.extname(file) === '.lnk'){

                try {
                    const shortcut = shell.readShortcutLink(scanPath+file);
                    database.addData('apps',{
                        //name id
                        nid : file.toLowerCase().replace(' ', '_'),
                        name : file.replace('.lnk',''),
                        path : shortcut.target
                        //target é o caminho do executavel.
                   })
                } catch (error) {
                    console.log(`Error to read : ${scanPath+file}`);
                }
                //lê as propriedades do atalho
               
            }
        })
    })

}

exports.addApp = (appName, appTarget) => {
    database.addData('apps',{
        nid : appName.toLowerCase().replace(' ', '_'),
        name : appName,
        path : appTarget
    })
}

exports.removeApp = (nid) => {
    database.removeData('apps', (app,key) => app.nid = nid);
}

exports.executeApp = (nid) => {

    let app = database.getData('apps', data => data.nid == nid).path;
    exec(app);

}

//remove os caminhos do app e retorna só o nome e um name id (nid).
exports.getAppsWithoutPath = () => {
    let appsFiltered = [];
    
    database.getGroup('apps').data.forEach(element => {
        appsFiltered.push({
            name: element.name,
            id : element.nid
        })
    });

    return appsFiltered;
}
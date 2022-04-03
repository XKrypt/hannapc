const fs = require('fs');
const path = require('path');
const child_process = require("child_process");
const {shell} = require('electron');
const {Parsin} = require('parsin')

var savePath =  `${process.env.HOMEPATH}\\Documents\\Hanna\\database.json`

var database = new Parsin(savePath,false,'utf8');

if (database.getGroup('apps') == undefined) {
    database.addGroup('apps');
}
if (database.getGroup('downloads') == undefined) {
    database.addGroup('downloads');
}

if (database.getGroup('configs') == undefined) {
    database.addGroup('configs');
    database.addData('configs',{
        config : 'port',
        port : 3007
    })
}
exports.getConfig = (config) => {
    return database.getSingleData('configs', (data) => data.data.config == config);
}


exports.scanApps = (scanPath = '') => {

   

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
        name : appName,
        path : appTarget
    })
}

exports.removeApp = (id) => {
    database.removeData('apps', (app) => app.id = id);
}

exports.executeApp = (id) => {

    let app = database.getSingleData('apps', data => data.id == id).data.path;
    exec(app);

}

//remove os caminhos do app e retorna só o nome e um name id (nid).
exports.getApps = () => {
    return database.getAllData('apps');
}
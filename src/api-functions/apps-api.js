import { api } from "../axios/api";

export function addApp(appName, appPath){
   return api.put('apps',{data : {
        appName : appName,
        appTarget : appPath
    }})
}

export function deleteApp(appId){
    return api.delete(`apps/${appId}`)
}

export function scanApps(){
    return api.put('apps/scan/')
}
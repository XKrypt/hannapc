import { AppConfigs, AppContainer, AppIcon, AppItem, AppName, ButtonConfig } from "../components/styled-components/apps-components";
import { ServerConfigsContainer, ServerConfigsLabel, ServerConfigsInput, ServerConfigItem, ServerPortContainer } from "../components/styled-components/server-components";
import {api} from '../axios/api';
import { useState } from "react";
import { useEffect } from "react";
import { AppInfo } from "../components/components-items/app-item";

export function Home() {

    const [apps, setApps] = useState([]);



    useEffect(()=>{
        api.get("apps").then((response) => {
            setApps(response.data);
        });
    },[])

    return (
        <>
            <AppContainer>

                {
                    apps.map((value, key) => {
                        return (
                           <AppInfo data={value} />
                        )
                    })
                }

            </AppContainer>
            
            <AppConfigs>
                <ButtonConfig>
                    Adicionar
                </ButtonConfig>
                <ButtonConfig>
                    Remover
                </ButtonConfig>
                <ButtonConfig>
                    Escanear
                </ButtonConfig>
            </AppConfigs>


            <ServerConfigsContainer>
                <ServerConfigItem >
                    <ServerConfigsLabel>IP : </ServerConfigsLabel>
                    <ServerConfigsInput disabled defaultValue={"192.168.1.1"} />
                </ServerConfigItem>

                <ServerConfigItem >
                    <ServerConfigsLabel>Porta : </ServerConfigsLabel>
                    <ServerConfigsInput defaultValue={"3005"} />
                </ServerConfigItem>
                <ServerConfigItem >
                    <ButtonConfig>
                        Salvar
                    </ButtonConfig>
                </ServerConfigItem>
            </ServerConfigsContainer>
        </>
    )
}
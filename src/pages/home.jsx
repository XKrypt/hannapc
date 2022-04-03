import {
    AppConfigs,
    AppContainer,
    AppIcon,
    AppItem,
    AppName,
    ButtonConfig,
    Aplication
} from '../components/styled-components/apps-components';
import { ServerConfigsContainer, ServerConfigsLabel, ServerConfigsInput, ServerConfigItem, ServerPortContainer, ServerConfigsInputs } from "../components/styled-components/server-components";
import { api } from '../axios/api';
import { useState } from "react";
import { useEffect } from "react";
import { AppInfo } from "../components/components-items/app-item";
import { AppList } from "../components/appList";

import TextField from '@mui/material/TextField'
import { FilesTransferList } from '../components/files-transfer-list';
import { Box, Button } from '@mui/material';

export function Home() {
    const [apps, setApps] = useState([]);


    useEffect(() => {
        api.get("apps").then((response) => {
            setApps(response.data);
        });
    }, [])

    return (
        <Aplication>

            <AppContainer>

                <AppList appList={apps} />


            </AppContainer>

            <ServerConfigsContainer>
                <Box sx={{ display:'flex', justifyContent: 'space-evenly' }}>
                    <Button variant="contained">Escanear novos apps</Button>
                    <Button variant="contained">Adicionar App</Button>
                </Box>
                <FilesTransferList />

                <ServerConfigsInputs>
                    <div style={{ width: '120px' }}>
                        <TextField
                            InputProps={{
                                readOnly: true,
                            }}

                            sx={{
                                input: { color: 'white', },
                                label: { color: 'white' },
                                div: {
                                    ':before': { borderBottom: '1px solid white', ':hover': { borderBottom: '1px solid white' } }
                                }
                            }} variant='standard' label='IP' defaultValue={"192.168.0.1"} />
                    </div>
                    <div style={{ width: '120px' }}>
                        <TextField

                            sx={{
                                input: { color: 'white', },
                                label: { color: 'white' },
                                div: {
                                    ':before': { borderBottom: '1px solid white' }
                                }
                            }} variant='standard' label='Porta' defaultValue={"3007"} />
                    </div>
                    <div style={{ padding: '10px 0px' }}>
                        <Button variant="outlined">Salvar</Button>
                    </div>
                </ServerConfigsInputs>
            </ServerConfigsContainer>
        </Aplication>
    )
}
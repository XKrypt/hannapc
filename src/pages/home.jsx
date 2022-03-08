import { AppConfigs, AppContainer, AppIcon, AppItem, AppName, ButtonConfig } from "../components/apps-components";
import { ServerConfigsContainer, ServerConfigsLabel, ServerConfigsInput, ServerConfigItem, ServerPortContainer } from "../components/server-components";



export function Home() {
    return (
        <>
            <AppContainer>

                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((value, key) => {
                        return (
                            <AppItem>
                                <AppIcon>

                                </AppIcon>
                                <AppName>
                                    Chrome {key}
                                </AppName>
                            </AppItem>
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
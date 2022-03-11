import { AppIcon, AppItem, AppName } from "../styled-components/apps-components";





export function AppInfo({ data }) {
    const { name } = data;

    return (
        <AppItem>
            <AppIcon>

            </AppIcon>
            <AppName>
                {name}
            </AppName>
        </AppItem>
    )
}
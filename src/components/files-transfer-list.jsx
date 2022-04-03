import { Box, Checkbox, IconButton, ListItemButton, Typography } from "@mui/material";
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { Add } from "@mui/icons-material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


export function FilesTransferList() {

    function secondaryText(text) {
        return (
            <Typography style={{ color: '#9e9e9e', fontSize: "0.8em" }}>{text}</Typography>
        )
    }
    return (
        <Box sx={{ marginTop: "1em" }}>
            <Typography style={{ color: '#FFF', padding: '10px' }}> Arquivos disponiveis para baixar no smartphone: </Typography>
            <List sx={{ width: '100%', height: '250px', bgcolor: '#2c2c2c', overflow: 'auto' }}>

                <ListItemButton>
                    <Checkbox style={{ color: "#FFF" }} />
                    <ListItemAvatar>
                        <Avatar>
                            <InsertDriveFileIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText sx={{ color: 'white' }} primary="Arquivo.png" secondary={secondaryText("File path")} />
                </ListItemButton>

                <ListItemButton>
                    <Checkbox style={{ color: "#FFF" }} />
                    <ListItemAvatar>
                        <Avatar>
                            <InsertDriveFileIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText sx={{ color: 'white' }} primary="Livro.pdf" secondary={secondaryText("File path")} />
                </ListItemButton>

                <ListItemButton>
                    <Checkbox style={{ color: "#FFF" }} />
                    <ListItemAvatar>
                        <Avatar>
                            <InsertDriveFileIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText sx={{ color: 'white' }} primary="Musica.mp3" secondary={secondaryText("File path")} />
                </ListItemButton>

            </List>
            <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                <IconButton>
                    <DeleteOutlineIcon sx={{ color: 'white', fontSize: '1.3em' }} />
                </IconButton>
                <IconButton>
                    <Add sx={{ color: 'white', fontSize: '1.3em' }} />
                </IconButton>

            </Box>
        </Box>
    )
}
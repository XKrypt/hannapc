import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




export function AppList({ appList }) {

    return (
        <div>

            {
                appList.map((value, key) => {

                    return (
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography>{value.name}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                <TextField label="Nome" variant='standard' defaultValue={value.name} />
                                <TextField label="Caminho" variant='standard' />
                                <Button sx={{
                                    margin: '5px',
                                }} variant="outlined" color="error">Remover</Button>
                                <Button sx={{
                                    margin: '5px'
                                }} variant="contained">Salvar</Button>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    )
                })
            }
         
        </div>
    )
}
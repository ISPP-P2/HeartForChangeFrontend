import * as React from 'react';
import Box from '@mui/material/Box';
import users, { CustomList } from '../static/user'
import DetailsCard from "../components/DetailsCard.jsx";
import DetailsTable from "../components/DetailsTable.jsx";


const actividades = [
    {
        id: "1",
        name: "Ayudanos a salvar a los lemures rojos",
        description: "Se realizará en el campo verde de la fuensanta donde les llevaremos mangos a todos los lemúres rojos de la zona. Todo el mundo es bienvenido a esta actividad",
        type: "Ayuda",
        location: "Parque de la Fuensanta",
        capacity: "100",
        date: "22-03-2023",
    }
]



function ActivityDetails() {
    const ActivityList = new CustomList(actividades)
    let objetoTabla = ActivityList.parseToTable(
        ["Id", "Nombre de actividad", "Tipo","Lugar", "Capacidad","Fecha"],
        ["id", "name", "type", "location","capacity","date"],
        ["Descripcion"],
        ["description"]
    )



    return (
        <Box>
            <DetailsTable activityData= {objetoTabla}  maxHeight={"15rem"} maxWidth={"25rem"}></DetailsTable>
            <DetailsCard></DetailsCard>
        </Box>
    );
}

export default ActivityDetails;
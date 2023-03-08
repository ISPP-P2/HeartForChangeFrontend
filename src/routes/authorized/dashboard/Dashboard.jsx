import { Grid, useMediaQuery } from '@mui/material';
import React from 'react';
import CustomButton, { VARIANTES_BUTTON } from '../../../components/CustomButton';
import CustomCard from '../../../components/CustomCard';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import BasicModal from '../../../components/BasicModal';

function Dashboard() {
    
    const mobile = useMediaQuery('(min-width:600px)')
   

    return (
        <Grid display={"grid"} gap="1rem" gridTemplateColumns={mobile ? "repeat(auto-fill, minmax(25rem, 1fr))" : "repeat(auto-fill, minmax(10rem, 400px))" }  >
            <CustomCard 
                title='Registrar una nueva actividad'
                iconD={<PeopleOutlineIcon color='disabled'/>}
                buttonSidebar={<CustomButton text={"Crear"}  
                iconD={<ArrowForwardIcon sx={{marginLeft: "2rem"}}/>} 
                variantButton={VARIANTES_BUTTON.GREEN}/>}/>
            <CustomCard
                title='Registrar una nueva actividad'
                iconD={<PeopleOutlineIcon color='disabled' />}
                buttonSidebar={<CustomButton  text={"Registar"}  
                iconD={<ArrowForwardIcon sx={{marginLeft: "2rem"}}/>} 
                variantButton={VARIANTES_BUTTON.GREEN}/>}/>
            <CustomCard 
                title='Registrar una nueva actividad'
                iconD={<PeopleOutlineIcon color='disabled' />}
                buttonSidebar={<CustomButton text={"Registar"}  
                iconD={<ArrowForwardIcon sx={{marginLeft: "2rem"}}/>} 
                variantButton={VARIANTES_BUTTON.GREEN}/>}/>



            
        </Grid>
    );
}

export default Dashboard
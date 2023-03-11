import { Grid, useMediaQuery } from '@mui/material';
import React from 'react';
import CustomButton, { VARIANTES_BUTTON } from '../../../components/CustomButton';
import CustomCard from '../../../components/CustomCard';
import CustomCardMini from '../../../components/CustomCardMini';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SavingsIcon from '@mui/icons-material/Savings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BasicModal from '../../../components/BasicModal'
import AcademicExperienceForm from '../volunteers/AcademicExperienceForm';
import FormBeneficiaries from '../beneficiaries/FormBeneficiaries';
import WorkExperienceForm from '../volunteers/WorkExperienceForm';
import ComplementaryFormationForm from '../volunteers/ComplementaryFormationForm';

function Dashboard() {
    
    const mobile = useMediaQuery('(min-width:600px)')
   

    return (
        <Grid display={mobile ? "grid" : "flex"} flexDirection={"column-reverse"} gap="1rem" justifyItems={"center"} gridTemplateColumns={mobile ? "repeat(auto-fill, minmax(20rem, 1fr))" : "repeat(auto-fill, minmax(10rem, 400px))" }  >
            <CustomCardMini 
                title='Beneficiarios registrados'
                iconD={<AccountBoxIcon htmlColor='#0055FF'/>}
                totalNumber="100"/>
            <CustomCardMini 
                title='Actividades'
                iconD={<AssignmentIcon htmlColor='#0055FF'/>}
                totalNumber="100"/>
            <CustomCardMini 
                title='Voluntarios'
                iconD={<VolunteerActivismIcon htmlColor='#0055FF'/>}
                totalNumber="100"/>
            <CustomCardMini 
                title='Subvenciones último mes'
                iconD={<SavingsIcon  htmlColor='#0055FF'/>}
                totalNumber="100 €"/>
             <CustomCard
                title='Registrar una beneficiario'
                iconD={<PeopleOutlineIcon color='disabled' />}
                buttonSidebar={<CustomButton widthButton='10rem' text={"Registar"}  
                iconD={<ArrowForwardIcon sx={{marginLeft: "2rem"}}/>} 
                variantButton={VARIANTES_BUTTON.GREEN}/>}/>
            <CustomCard 
                title='Crear una actividad'
                iconD={<PeopleOutlineIcon color='disabled' />}
                buttonSidebar={<CustomButton widthButton='10rem' text={"Crear"}  
                iconD={<ArrowForwardIcon sx={{marginLeft: "2rem"}}/>} 
                variantButton={VARIANTES_BUTTON.GREEN}/>}/>
            <CustomCard 
                title='Registrar un voluntario'
                iconD={<PeopleOutlineIcon color='disabled'/>}
                buttonSidebar={<CustomButton widthButton='10rem' text={"Registrar"}  
                iconD={<ArrowForwardIcon sx={{marginLeft: "2rem"}}/>} 
                variantButton={VARIANTES_BUTTON.GREEN}/>}/>
            <CustomCard 
                title='Registrar una subvención'
                iconD={<PeopleOutlineIcon color='disabled' />}
                buttonSidebar={<CustomButton widthButton='10rem' text={"Registrar"}  
                iconD={<ArrowForwardIcon sx={{marginLeft: "2rem"}}/>} 
                variantButton={VARIANTES_BUTTON.GREEN}/>}/>
            </Grid>
            
    );
}

export default Dashboard
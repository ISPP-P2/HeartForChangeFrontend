import { Box, CircularProgress, Grid, Typography, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import CustomButton, { VARIANTES_BUTTON } from '../../../components/CustomButton';
import CustomCard from '../../../components/CustomCard';
import CustomCardMini from '../../../components/CustomCardMini';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SavingsIcon from '@mui/icons-material/Savings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CustomLink from '../../../components/CustomLink';
import BodyWrapper from '../../../components/BodyWrapper';
import { useAuthUser } from 'react-auth-kit';
import { getActivitiesAPI, getTotalActivitiesAPI } from '../../../api/actividades/api';
import { getTotalVolunteersAPI } from '../../../api/voluntarios/api';
import { getBeneficiariesAPI, getTotalBeneficiariesAPI } from '../../../api/beneficiario/api';
import { useQuery } from 'react-query';
import { getTOTALSubventionAPI } from '../../../api/subvenciones/api';
import CustomReloading from '../../../components/CustomReloading';
import CustomError from '../../../components/CustomError';
import { CustomList } from '../../../static/user';
import BasicTableNoDescription from '../../../components/BasicTableNoDescription';
import CustomFlex from '../../../components/CustomFlex';
import moment from 'moment';
import SearchIcon from '@mui/icons-material/Search';
import { getAllAppointmentAPI } from '../../../api/beneficiario/appointment/api';
import { AppointmentsListWeek } from './AppointmentsListWeek';
import { ActivityListWeek } from './ActivityListWeek';
import LoadingWrapper from '../../../components/LoadingWrapper';

function Dashboard() {
    
    const user = useAuthUser();
    const [beneficiaries, setBeneficiaries] = useState(null);

    const mobile = useMediaQuery('(min-width:600px)')
   
    const queryBeneficiariesTotal = useQuery(["QUERY_BENEFICIARIES_TOTAL_NUM"],() => getTotalBeneficiariesAPI(user().token),{
        retry: 2,
        refetchOnWindowFocus: false,
        });
    const queryTaskTotal = useQuery(["QUERY_TASK_TOTAL_NUM"],() => getTotalActivitiesAPI(user().token),{
        retry: 2,
        refetchOnWindowFocus: false,
        });
    const queryVolunteersTotal = useQuery(["QUERY_VOLUNTEERS_TOTAL_NUM"],() => getTotalVolunteersAPI(user().token),{
        retry: 2,
        refetchOnWindowFocus: false,
        });
    const querySubventionsTotal = useQuery(["QUERY_SUBVENTIONS_TOTAL_NUM"],() => getTOTALSubventionAPI(user().token),{
        retry: 2,
        refetchOnWindowFocus: false,
        });

    
                    


    return (
        <BodyWrapper title={"Panel de control"}>
            <CustomFlex direction={"column"} >
            <Grid display={mobile ? "grid" : "flex"} flexDirection={"column-reverse"} gap="1rem" justifyItems={"center"} gridTemplateColumns={mobile ? "repeat(auto-fill, minmax(20rem, 1fr))" : "repeat(auto-fill, minmax(10rem, 400px))" }  >
                <CustomCardMini 
                    title='Beneficiarios registrados'
                    iconD={<AccountBoxIcon htmlColor='#0055FF'/>}
                    totalNumber={!queryBeneficiariesTotal.isError && !queryBeneficiariesTotal.isLoading ? queryBeneficiariesTotal.data : <CircularProgress />}/>
                <CustomCardMini 
                    title='Actividades'
                    iconD={<AssignmentIcon htmlColor='#0055FF'/>}
                    totalNumber={!queryTaskTotal.isError && !queryTaskTotal.isLoading ? queryTaskTotal.data : <CircularProgress />}/>
                <CustomCardMini 
                    title='Voluntarios'
                    iconD={<VolunteerActivismIcon htmlColor='#0055FF'/>}
                    totalNumber={!queryVolunteersTotal.isError && !queryVolunteersTotal.isLoading ? queryVolunteersTotal.data : <CircularProgress />}/>
                <CustomCardMini 
                    title='Total recaudado'
                    iconD={<SavingsIcon  htmlColor='#0055FF'/>}
                    totalNumber={!querySubventionsTotal.isError && !querySubventionsTotal.isLoading ? querySubventionsTotal.data + "€" : <CircularProgress />}/>
                <CustomCard
                    title='Registrar un beneficiario'
                    iconD={<PeopleOutlineIcon color='disabled' />}
                    buttonSidebar={
                    <CustomLink to={'/ong/beneficiario/añadir'}>
                        <CustomButton widthButton='11rem' text={"Registar"}
                            iconD={<ArrowForwardIcon sx={{marginLeft: "2rem"}}/>} 
                            variantButton={VARIANTES_BUTTON.GREEN}/>
                    </CustomLink>
                    }/>
                <CustomCard 
                    title='Crear una actividad'
                    iconD={<PeopleOutlineIcon color='disabled' />}
                    buttonSidebar={
                    <CustomLink to={"/ong/actividades"}>
                        <CustomButton widthButton='10rem' text={"Crear"}  
                        iconD={<ArrowForwardIcon sx={{marginLeft: "2rem"}}/>} 
                        variantButton={VARIANTES_BUTTON.GREEN}/>
                    </CustomLink>}/>
                <CustomCard 
                    title='Registrar un voluntario'
                    iconD={<PeopleOutlineIcon color='disabled'/>}
                    buttonSidebar={
                    <CustomLink to={"/ong/voluntario/añadir"}>
                        <CustomButton widthButton='11rem' text={"Registrar"}  
                        iconD={<ArrowForwardIcon sx={{marginLeft: "2rem"}}/>} 
                        variantButton={VARIANTES_BUTTON.GREEN}/>
                    </CustomLink>}/>
                <CustomCard 
                    title='Registrar una subvención'
                    iconD={<PeopleOutlineIcon color='disabled' />}
                    buttonSidebar={
                    <CustomLink to={'/ong/subvenciones'}>
                        <CustomButton widthButton='11rem' text={"Registrar"}  
                        iconD={<ArrowForwardIcon sx={{marginLeft: "2rem"}}/>} 
                        variantButton={VARIANTES_BUTTON.GREEN}/>
                    </CustomLink>}/>
            </Grid>
            <Grid display={mobile ? "grid" : "flex"} justifyContent={"space-around"} marginTop={"2rem"} flexDirection={"column-reverse"} gap="1rem" justifyItems={"center"} gridTemplateColumns={"repeat(auto-fill, minmax(20vw, 40vw))"}>
                    <ActivityListWeek />
                   <AppointmentsListWeek/>
            </Grid>
            </CustomFlex>
        </BodyWrapper>
    );
}

export default Dashboard



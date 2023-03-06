import { Grid } from '@mui/material';
import React from 'react';
import CustomButton, { VARIANTES_BUTTON } from '../../../components/CustomButton';
import CustomCard from '../../../components/CustomCard';

function Dashboard() {
    return (
        <Grid display={"flex"} gap="1rem">
            <CustomCard buttonSidebar={<CustomButton text={"pppp"} variantButton={VARIANTES_BUTTON.BLUE}/>}/>
            <CustomCard />
            <CustomCard />
            <CustomCard />
        </Grid>
    );
}

export default Dashboard
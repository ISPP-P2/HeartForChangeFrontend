import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CustomButton, { VARIANTES_BUTTON } from '../components/CustomButton';

function DetailsCard({title, buttonText}) {
    return (
        <Card sx={{ display: 'flex' , width: "min-content"}}>
            <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {title}
                    </Typography>
                </CardContent>
                <CustomButton onClick={()=> {console.log()}} text={buttonText} variantButton={VARIANTES_BUTTON.RED}/>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                alt="Live from space album cover"
            />
        </Card>
    );
}

export default DetailsCard;
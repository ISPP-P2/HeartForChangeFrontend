import React from 'react';
import CustomButton, { VARIANTES_BUTTON } from '../../../components/CustomButton';
import CustomCard from '../../../components/CustomCard';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Dashboard() {
    return (
        <div>
            <CustomButton onClick={()=> {console.log()}} icon={()=>< ArrowForwardIcon />} text={"BLUE"} variantButton={VARIANTES_BUTTON.BLUE}/>
            <CustomButton onClick={()=> {console.log()}} text={"DARKGREEN"} variantButton={VARIANTES_BUTTON.DARKGREEN}/>
            <CustomButton onClick={()=> {console.log()}} text={"GREEN"} variantButton={VARIANTES_BUTTON.GREEN}/>
            <CustomButton onClick={()=> {console.log()}} text={"LIGHTBLUE"} variantButton={VARIANTES_BUTTON.LIGHTBLUE}/>
            <CustomButton onClick={()=> {console.log()}} text={"LIGHTGREEN"} variantButton={VARIANTES_BUTTON.LIGHTGREEN}/>
            <CustomButton onClick={()=> {console.log()}} text={"PURPLE"} variantButton={VARIANTES_BUTTON.PURPLE}/>
            <CustomButton onClick={()=> {console.log()}} text={"RED"} variantButton={VARIANTES_BUTTON.RED}/>
            <CustomCard />
        </div>
    );
}

export default Dashboard
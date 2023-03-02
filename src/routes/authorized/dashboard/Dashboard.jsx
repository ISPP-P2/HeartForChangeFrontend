import React from 'react';
import CustomButton, { VARIANTES_BUTTON } from '../../../components/CustomButton';
import CustomCard from '../../../components/CustomCard';

function Dashboard() {
    return (
        <div>
            <CustomButton onClick={()=> {console.log()}} text={"BLUE"} variantButton={VARIANTES_BUTTON.BLUE}/>
            <CustomButton onClick={()=> {console.log()}} text={"DARKGREEN"} variantButton={VARIANTES_BUTTON.DARKGREEN}/>
            <CustomButton onClick={()=> {console.log()}} text={"GREEN"} variantButton={VARIANTES_BUTTON.GREEN}/>
            <CustomButton onClick={()=> {console.log()}} text={"LIGHTBLUE"} variantButton={VARIANTES_BUTTON.LIGHTBLUE}/>
            <CustomButton onClick={()=> {console.log()}} text={"LIGHTGREEN"} variantButton={VARIANTES_BUTTON.LIGHTGREEN}/>
            <CustomButton onClick={()=> {console.log()}} text={"PURPLE"} variantButton={VARIANTES_BUTTON.PURPLE}/>
            <CustomButton onClick={()=> {console.log()}} text={"RED"} variantButton={VARIANTES_BUTTON.RED}/>
            <CustomButton onClick={()=> {console.log()}} text={"ORANGE"} variantButton={VARIANTES_BUTTON.ORANGE}/>
            <CustomCard />
        </div>
    );
}

export default Dashboard
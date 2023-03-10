import * as React from 'react';
import Box from '@mui/material/Box';
import BasicTable from '../../../components/BasicTable';
import CustomCard from '../../../components/CustomCard'
import { CustomList } from '../../../static/activity'
import CustomCardMini from '../../../components/CustomCardMini';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CustomFlex from '../../../components/CustomFlex';


const subvenciones = [
    {
      id: "1",
      name: "European Solidarity Corps",
      type: "Public",
      status: "In Process",
      quantity: "30.000€",
    },
    {
      id: "2",
      name: "Amancio Ortega Donation",
      type: "Private",
      status: "Received",
      quantity: "500€",
    },
    {
      id: "3",
      name: "Ayuda del Gobierno de España",
      type: "Public",
      status: "In Process",
      quantity: "15.000€",
    },
    {
      id: "4",
      name: "Fundraising apps",
      type: "Private",
      status: "In Process",
      quantity: "10.000€",
    },
    
]



function Subventions() {
  const SubventionList = new CustomList(subvenciones)
  let objetoTabla = SubventionList.parseToTable(
    ["Id","Nombre", "Tipo", "Estado"], 
    ["id","name", "type", "status"],
    ["Cantidad"],
    ["quantity"]
    )


  
  return (
    <Box>
      <CustomFlex direction={"row"}>
            <CustomCardMini 
                  title='Activades'
                  iconD={<AccountBoxIcon htmlColor='#0055FF'/>}
                  totalNumber="100"/>
          </CustomFlex>
        <BasicTable objetoTabla = {objetoTabla}  maxHeight={"60vh"} maxWidth={"85vw"}></BasicTable>
      </Box>
    );
}

export default Subventions;
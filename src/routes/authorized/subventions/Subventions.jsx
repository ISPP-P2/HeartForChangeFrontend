import * as React from 'react';
import Box from '@mui/material/Box';
import BasicTable from '../../../components/BasicTable';
import CustomCard from '../../../components/CustomCard'
import { CustomList } from '../../../static/activity'


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
        <CustomCard title="Subvenciones" quantity={subvenciones.length}> </CustomCard>
        <BasicTable objetoTabla = {objetoTabla}  maxHeight={"60vh"}></BasicTable>
      </Box>
    );
}

export default Subventions;
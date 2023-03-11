import * as React from 'react';
import Box from '@mui/material/Box';
import BasicTable from '../../../components/BasicTable';
import CustomCard from '../../../components/CustomCard'
import { CustomList } from '../../../static/activity'
import CustomCardMini from '../../../components/CustomCardMini';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CustomFlex from '../../../components/CustomFlex';
import BasicModal from '../../../components/BasicModal';
import { Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CustomButton, { VARIANTES_BUTTON } from '../../../components/CustomButton';
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

  
const subvencionesConBoton = React.useMemo(() => {
  return subvenciones.map((subvencion) => {
    return {
      ...subvencion,
      button: <ToolList  subvencion={subvencion} />,
    };
  });
}, [subvenciones]);
  const SubventionList = new CustomList(subvencionesConBoton)
  let objetoTabla = SubventionList.parseToTable(
    ["Nombre", "Tipo", "Estado","Eliminar"], 
    ["name", "type", "status","button"],
    ["Cantidad"],
    ["quantity"]
    )


  
  return (
    <Box>
        <CustomFlex direction={"column"}>
          <CustomFlex direction={"row"}>
              <CustomCardMini
                    title='Nº de subvenciones'
                    iconD={<BasicModal title={"Añadir subvención"} text={"Añadir"} body={<></>}/>}
                    totalNumber="100"/>
          </CustomFlex>

        <BasicTable objetoTabla = {objetoTabla}  maxHeight={"80vh"} maxWidth={"85vw"}></BasicTable>
       
    
        </CustomFlex>
      </Box>
    );
}


export default Subventions;

const ToolList = ({subvencion, handleEliminar}) => {
  return (
    <CustomFlex justifyContent={"flex-start"} direction={"row"}>
      <BasicModal title={"¿Estás seguro?"} heightButton={"1.5rem"} body={<Box><Typography>La subvención se eliminará permanentemente</Typography><CustomButton text={"Eliminar"} variantButton={VARIANTES_BUTTON.RED} /></Box>} variant={VARIANTES_BUTTON.RED} text={<DeleteForeverIcon />}/>
    </CustomFlex>
  )

}
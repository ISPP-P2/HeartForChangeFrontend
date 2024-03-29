import { Box } from '@mui/material';
import React from 'react'
import { useAuthUser } from 'react-auth-kit';
import { useQuery } from 'react-query';
import { GetWorkExperienceVolunteers } from '../../../api/complementaryInformation/workExperience';
import BasicModal from '../../../components/BasicModal';
import BasicTableNoDescription from '../../../components/BasicTableNoDescription';
import { VARIANTES_BUTTON } from '../../../components/CustomButton';
import CustomError from '../../../components/CustomError';
import CustomFlex from '../../../components/CustomFlex';
import CustomReloading from '../../../components/CustomReloading';
import { CustomList } from '../../../static/user';
import WorkExperienceForm from './WorkExperienceForm';
import AddIcon from '@mui/icons-material/Add';
import { ToolListWorkExperience } from '../beneficiaries/BeneficiariesWorkExperiencesForm';
function VolunteerWorkForm({id}) {
    const [handleClose, setHandleClose] = React.useState({});
    const user = useAuthUser();
    const query = useQuery(["QUERY_VOLUNTEERS_DETAILS_WORK_EXPERIENCE", id],() => GetWorkExperienceVolunteers(user().token,id),{
        retry: 2,
        refetchOnWindowFocus: false,
    });
    

    return (
      <CustomFlex direction={"row"} >
        <Box flexBasis={"fit-content"}>
           <ListData id={id} query={query}/>
        </Box>
            <BasicModal
            setHandleCloseButton={setHandleClose}
            variant={VARIANTES_BUTTON.GREEN2}
            text={<AddIcon />}
            title={"Experiencia Laboral"}
            body={<WorkExperienceForm id={id} handleClose={handleClose} refetch={query.refetch}/>}
            />
        </CustomFlex>
    )
}

export default VolunteerWorkForm


const ParseData = (data, query) => {

  if(data === undefined || data === null){
    return []
  }
   return  data.map((item) => {
        return {
            ...item,
            toollist: <ToolListWorkExperience id={item.id} query={query} />
        }
    })
}


const ListData = ({id, query}) => {
    
    if(query.isLoading){
      return <CustomReloading />
    }
  
    if(query.isError){
      return <CustomError onClick={()=> query.refetch()}/>
    }
  
  

    const BeneficiarieList = new CustomList(ParseData(query.data.data, query))
    let objetoTabla = BeneficiarieList.parseToTableBasic(
      ["Trabajo", "Lugar","Tiempo","Razon", "Acciones"],
       ["job","place","time","reasonToFinish", "toollist"])
  

return ( <BasicModal
    widthButton={"10rem"}
    variant={VARIANTES_BUTTON.ORANGE}
    text={"Experiencia Laboral"}
    title={"Experiencia Laboral"}
    body={<BasicTableNoDescription objetoTabla = {objetoTabla}  maxHeight={"80vh"} maxWidth={"85vw"} ></BasicTableNoDescription>}
    />)
}
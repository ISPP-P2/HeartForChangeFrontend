import { Box } from '@mui/material';
import React from 'react'
import { useAuthUser } from 'react-auth-kit';
import { useQuery } from 'react-query';
import { GetAcademixExperienceVoluntaries } from '../../../api/complementaryInformation/AcademixExperience';
import BasicModal from '../../../components/BasicModal';
import BasicTableNoDescription from '../../../components/BasicTableNoDescription';
import CustomError from '../../../components/CustomError';
import CustomFlex from '../../../components/CustomFlex';
import CustomReloading from '../../../components/CustomReloading';
import AcademicExperienceForm from './AcademicExperienceForm';
import AddIcon from '@mui/icons-material/Add';
import { VARIANTES_BUTTON } from '../../../components/CustomButton';
import { CustomList } from '../../../static/user';
function VolunteerAcademicExperienceForm({id}) {
 
    const [hadleClose, setHadleClose] = React.useState({});
  
    return (
      <CustomFlex direction={"row"}>
                    <Box flexBasis={"fit-content"}>
                    <ListData id={id}/>
                    </Box>
                    <BasicModal
                        setHandleCloseButton={setHadleClose}
                        variant={VARIANTES_BUTTON.GREEN2}
                      text={<AddIcon />}
                      title={"Experiencia Académica"}
                      body={<AcademicExperienceForm id={id} handleClose={hadleClose}/>}
                    />
                    
                  </CustomFlex>
    )
}

export default VolunteerAcademicExperienceForm

const ListData = ({id}) => {
    const user = useAuthUser();
    const query = useQuery(["QUERY_VOLUNTEERS_DETAILS_ACADEMIC_INFORMATION", id],() => GetAcademixExperienceVoluntaries(user().token, id),{
        retry: 2,
        refetchOnWindowFocus: false,
      });
  
    if(query.isLoading){
        return <CustomReloading />
    }
  
    if(query.isError){
        return <CustomError onClick={()=> query.refetch()}/>
    }
  
  
    if(query.data.length === 0){
        return <CustomError onClick={()=> query.refetch()}/>
    }
  
    const BeneficiarieList = new CustomList(query.data.data)
    let objetoTabla = BeneficiarieList.parseToTableBasic(
      ["Especialidad","Nivel","Satisfacción","Año de finalización"],
      ["speciality","educationalLevel","satisfactionDegree","endingYear"])
        
    return (
        <BasicModal
                        widthButton={"10rem"}
                        variant={VARIANTES_BUTTON.ORANGE}
                        text={"Experiencia Académica"}
                        title={"Experiencia Académica"}
                        body={<BasicTableNoDescription objetoTabla = {objetoTabla}  maxHeight={"80vh"} maxWidth={"85vw"} />}
                      />
    )
  
}
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
import { ToolListAcademicExperience } from '../beneficiaries/BeneficiariesAcademicExperienceForm';
function VolunteerAcademicExperienceForm({id}) {
 
    const [hadleClose, setHadleClose] = React.useState({});

    const user = useAuthUser();

    const query = useQuery(["QUERY_VOLUNTEERS_DETAILS_ACADEMIC_INFORMATION", id],() => GetAcademixExperienceVoluntaries(user().token, id),{
        retry: 2,
        refetchOnWindowFocus: false,
      });
    return (
      <CustomFlex direction={"row"}>
                    <Box flexBasis={"fit-content"}>
                    <ListData id={id} query={query}/>
                    </Box>
                    <BasicModal
                        setHandleCloseButton={setHadleClose}
                        variant={VARIANTES_BUTTON.GREEN2}
                      text={<AddIcon />}
                      title={"Experiencia Académica"}
                      body={<AcademicExperienceForm id={id} handleClose={hadleClose} refetch={query.refetch}/>}
                    />
      </CustomFlex>
    )
}

export default VolunteerAcademicExperienceForm


const ParseData = (data, query) => {
  if(data === undefined || data === null){
    return []
  }
  return  data.map((item) => {
      return {
          ...item,
          toollist: <ToolListAcademicExperience id={item.id} query={query} />
      }
  })
}



const ListData = ({id, query}) => {

    if(query.isLoading || query.data.data === undefined || query.data.data === null){
        return <CustomReloading />
    }
  
    if(query.isError ){
        return <CustomError onClick={()=> query.refetch()}/>
    }

    const BeneficiarieList = new CustomList(ParseData(query.data.data, query))
    let objetoTabla = BeneficiarieList.parseToTableBasic(
    ["Especialidad","Nivel","Satisfacción","Año de finalización", "Acciones"],
    ["speciality","educationalLevel","satisfactionDegree","endingYear", "toollist"])
        
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
import { Box } from '@mui/material'
import React from 'react'
import BasicModal from '../../../components/BasicModal'
import { VARIANTES_BUTTON } from '../../../components/CustomButton'
import CustomFlex from '../../../components/CustomFlex'
import AcademicExperienceForm from '../volunteers/AcademicExperienceForm'
import AddIcon from '@mui/icons-material/Add';
import { useAuthUser } from 'react-auth-kit'
import { useQuery } from 'react-query'
import CustomReloading from '../../../components/CustomReloading'
import CustomError from '../../../components/CustomError'
import { CustomList } from '../../../static/user'
import BasicTableNoDescription from '../../../components/BasicTableNoDescription'
import { GetAcademixExperienceBeneficiary } from '../../../api/complementaryInformation/AcademixExperience'
function BeneficiariesAcademicExperienceForm({id}) {

  const [hadleClose, setHadleClose] = React.useState({})
  const user = useAuthUser();
  const query = useQuery(["QUERY_BENEFICIARIES_DETAILS_ACADEMIC_INFORMATION", id],() => GetAcademixExperienceBeneficiary(user().token, id),{
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
                    body={<AcademicExperienceForm id={id}  handleClose={hadleClose} refetch={query.refetch}/>}
                  />
                </CustomFlex>
  )
}

export default BeneficiariesAcademicExperienceForm


const ListData = ({id, query}) => {
  

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
      />)
  } 
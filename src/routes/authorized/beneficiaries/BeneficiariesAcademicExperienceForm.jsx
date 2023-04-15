import { Box, Typography } from '@mui/material'
import React from 'react'
import BasicModal from '../../../components/BasicModal'
import CustomButton, { VARIANTES_BUTTON } from '../../../components/CustomButton'
import CustomFlex from '../../../components/CustomFlex'
import AcademicExperienceForm from '../volunteers/AcademicExperienceForm'
import AddIcon from '@mui/icons-material/Add';
import { useAuthUser } from 'react-auth-kit'
import { useQuery } from 'react-query'
import CustomReloading from '../../../components/CustomReloading'
import CustomError from '../../../components/CustomError'
import { CustomList } from '../../../static/user'
import BasicTableNoDescription from '../../../components/BasicTableNoDescription'
import { DeleteAcademixExperience, GetAcademixExperienceBeneficiary } from '../../../api/complementaryInformation/AcademixExperience'
import DeleteIcon from '@mui/icons-material/Delete';
import { CustomNotistackContext } from '../../../context/CustomNotistack'
import { useContext } from 'react'

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



const ToolList = ({id, query}) => {

  const user = useAuthUser();
  const {setSuccessMsg, setErrorMsg} = useContext(CustomNotistackContext)

  const [handleClose, setHandleClose] = React.useState({})


  const handleDelete = () => {
    DeleteAcademixExperience(user().token, id)
    .then(() => {
      query.refetch()
      handleClose.handleClose()
      setSuccessMsg("Experiencia académica eliminada correctamente")
    }).catch((err) => {
      setErrorMsg("Error al eliminar la experiencia académica")
    })

  }

  return (
    <BasicModal
          widthButton={"10rem"}
          setHandleCloseButton={setHandleClose}
          variant={VARIANTES_BUTTON.RED}
          text={<DeleteIcon />}
          title={"¿Estás seguro?"}
          body={<CustomFlex direction={"column"}>
                <Typography>Seguro que estas seguro de eliminar esta experiencia académica?</Typography>
                <CustomButton onClick={handleDelete} variantButton={VARIANTES_BUTTON.RED} text={"Eliminar"}/>
            </CustomFlex>}
      />)
}

const ParseToTable = (data, query) => {
  return data.map((item) => {
    return {
      ...item,
      toollist : <ToolList id={item.id} query={query}/>
    }
  })
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

  const BeneficiarieList = new CustomList(ParseToTable(query.data.data, query))
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
      />)
  } 
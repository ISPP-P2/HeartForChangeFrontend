import { Box, Typography } from '@mui/material'
import React from 'react'
import BasicFrom from '../../../components/BasicFrom'
import BasicModal from '../../../components/BasicModal'
import CustomButton, { VARIANTES_BUTTON } from '../../../components/CustomButton'
import CustomFlex from '../../../components/CustomFlex'
import WorkExperienceForm from '../volunteers/WorkExperienceForm'
import { extraForm, extraForm2 } from './BeneficiariesDetails'
import AddIcon from '@mui/icons-material/Add';
import { DeleteWorkExperience, GetWorkExperienceBeneficiary } from '../../../api/complementaryInformation/workExperience'
import { useQuery } from 'react-query'
import CustomReloading from '../../../components/CustomReloading'
import CustomError from '../../../components/CustomError'
import { useAuthUser } from 'react-auth-kit'
import BasicTable from '../../../components/BasicTable'
import { CustomList } from '../../../static/user'
import BasicTableNoDescription from '../../../components/BasicTableNoDescription'
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from 'react'
import { CustomNotistackContext } from '../../../context/CustomNotistack'



function BeneficiariesWorkExperiencesForm({id}) {
  const [handleClose, setHandleClose] = React.useState({});
  const user = useAuthUser();
  const query = useQuery(["QUERY_BENEFICIARIES_DETAILS_WORK_EXPERIENCE", id],() => GetWorkExperienceBeneficiary(user().token,id),{
    retry: 2,
    refetchOnWindowFocus: false,
  });

  return (
    <CustomFlex direction={"row"} >
                  <Box flexBasis={"fit-content"}>
                    <ListData id={id} query={query}/>
                  </Box>
                    <BasicModal
                      variant={VARIANTES_BUTTON.GREEN2}
                      setHandleCloseButton={setHandleClose}
                      text={<AddIcon />}
                      title={"Experiencia Laboral"}
                      body={<WorkExperienceForm id={id} handleClose={handleClose} refetch={query.refetch}/>}
                    />
                </CustomFlex>
  )
}

export default BeneficiariesWorkExperiencesForm


const ToolList = ({id, query}) => {

  const [handleClose, setHandleClose] = React.useState({});
  const user = useAuthUser();
  const {setSuccessMsg, setErrorMsg} = useContext(CustomNotistackContext)

  const handleDelete = () => {
    DeleteWorkExperience(user().token, id)
    .then(() => {
      handleClose.handleClose()
      query.refetch()
      setSuccessMsg("Experiencia laboral eliminada correctamente")
    }).catch((err) => {
      setErrorMsg("Error al eliminar la experiencia laboral")
    })
  }

  return (
    <BasicModal
          widthButton={"10rem"}
          variant={VARIANTES_BUTTON.RED}
          setHandleCloseButton={setHandleClose}
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
    ["Trabajo", "Lugar","Tiempo","Razon", "Acciones"], 
    ["job","place","time","reasonToFinish", "toollist"])
  return (
    <BasicModal
                        widthButton={"10rem"}
                        variant={VARIANTES_BUTTON.ORANGE}
                        text={"Experiencia Laboral"}
                        title={"Experiencia Laboral"}
                        body={<BasicTableNoDescription objetoTabla = {objetoTabla}  maxHeight={"80vh"} maxWidth={"85vw"} ></BasicTableNoDescription>}
                      />
  )
}
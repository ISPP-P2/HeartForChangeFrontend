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
import { GetAcademixExperienceBeneficiary } from '../../../api/complementaryInformation/AcademixExperience'
import DeleteIcon from '@mui/icons-material/Delete';
import { CustomNotistackContext } from '../../../context/CustomNotistack'
import { useContext } from 'react'
import BeneficiaryAppoinmentForm from './BeneficiaryAppoinmentForm'
import { DeleteAppoinmentAPI, getAllAppoinmentsByBeneficiary } from '../../../api/beneficiario/appointment/api'
import moment from 'moment/moment'
function BeneficiariesAppointments({id}) {

  const [hadleClose, setHadleClose] = React.useState({})
  const user = useAuthUser();
  const query = useQuery(["QUERY_BENEFICIARIES_DETAILS_APPOINTMENT", id],() => getAllAppoinmentsByBeneficiary(user().token, id),{
    retry: 2,
    refetchOnWindowFocus: false,
  });

  console.log(query)

  return (
    <CustomFlex direction={"row"}>
          <Box flexBasis={"fit-content"}>
            <ListData id={id} query={query}/>
          </Box>
          <BasicModal
          setHandleCloseButton={setHadleClose}
              variant={VARIANTES_BUTTON.GREEN2}
            text={<AddIcon />}
            title={"Crear cita"}
            body={<BeneficiaryAppoinmentForm id={id}  handleClose={hadleClose} refetch={query.refetch}/>}
          />
    </CustomFlex>
  )
}

export default BeneficiariesAppointments

const ToolList = ({id, query}) => {

  const [handleClose, setHandleClose] = React.useState({});


  const user = useAuthUser();
  const {setSuccessMsg, setErrorMsg} = useContext(CustomNotistackContext)

  const handleDelete = () => {
    DeleteAppoinmentAPI(user().token, id)
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
      date: moment(item.date).format("DD/MM/YYYY"),
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
    ["Fecha", "Hora", "Acción"],
    ["date", "hour","toollist"]
    )

  return (
      <BasicModal
            widthButton={"10rem"}
            variant={VARIANTES_BUTTON.ORANGE}
            text={"Citas"}
            title={"Citas"}
            body={<BasicTableNoDescription objetoTabla = {objetoTabla}  maxHeight={"80vh"} maxWidth={"85vw"} />}
      />)
  } 
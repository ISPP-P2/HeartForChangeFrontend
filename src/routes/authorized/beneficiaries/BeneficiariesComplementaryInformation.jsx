import { Box } from '@mui/system'
import React from 'react'
import BasicModal from '../../../components/BasicModal'
import CustomFlex from '../../../components/CustomFlex'
import ComplementaryFormationForm from '../volunteers/ComplementaryFormationForm'
import AddIcon from '@mui/icons-material/Add';
import CustomButton, { VARIANTES_BUTTON } from '../../../components/CustomButton'
import { useAuthUser } from 'react-auth-kit'
import { useQuery } from 'react-query'
import CustomReloading from '../../../components/CustomReloading'
import CustomError from '../../../components/CustomError'
import { CustomList } from '../../../static/user'
import BasicTableNoDescription from '../../../components/BasicTableNoDescription'
import {DeleteComplementaryInformation, GetComplementaryInformationBeneficiary } from '../../../api/complementaryInformation/complementaryFormation'
import { useContext } from 'react'
import { CustomNotistackContext } from '../../../context/CustomNotistack'
import DeleteIcon from '@mui/icons-material/Delete';
import { Typography } from '@mui/material'
import moment from 'moment'
function BeneficiariesComplementaryInformation({id}) {
    
    const [handleClose, setHandleClose] = React.useState({});
    const user = useAuthUser();
    const query = useQuery(["QUERY_BENEFICIARIES_DETAILS_COMPLEMENTARY_INFORMATION", id],() => GetComplementaryInformationBeneficiary(user().token, id),{
      retry: 2,
      refetchOnWindowFocus: false,
    });

    return (
    <CustomFlex direction={"row"}>
                  <Box flexBasis={"fit-content"}>
                    <ListData id={id} query={query}/>
                  </Box>
                  <BasicModal
                  setHandleCloseButton={setHandleClose}
                    variant={VARIANTES_BUTTON.GREEN2}
                    text={<AddIcon />}
                    title={"Formación Complementaria"}
                    body={<ComplementaryFormationForm id={id} handleClose={handleClose} refetch={query.refetch}/>}
                  />
                </CustomFlex>
  )
}

export default BeneficiariesComplementaryInformation

export const ToolListComplemetaryInformation = ({id, query}) => {

  const user = useAuthUser();
  const {setSuccessMsg, setErrorMsg} = useContext(CustomNotistackContext)
  const [disableButton, setDisableButton] = React.useState(false)
  const [handleClose, setHandleClose] = React.useState({});

  const handleDelete = () => {
    setDisableButton(true)
    DeleteComplementaryInformation(user().token, id)
    .then(() => {
      handleClose.handleClose()
      query.refetch()
      setSuccessMsg("Experiencia académica eliminada correctamente")
    }).catch((err) => {
      setErrorMsg("Error al eliminar la experiencia académica")
    }).finally(() => {
      setDisableButton(false)
    })
  }

  return (
    <BasicModal
          widthButton={"10rem"}
          variant={VARIANTES_BUTTON.RED}
          text={<DeleteIcon />}
          setHandleCloseButton={setHandleClose}
          title={"¿Estás seguro?"}
          body={<CustomFlex direction={"column"}>
                <Typography>Seguro que estas seguro de eliminar esta experiencia académica?</Typography>
                <CustomButton onClick={handleDelete} isLoading={disableButton} variantButton={VARIANTES_BUTTON.RED} text={"Eliminar"}/>
            </CustomFlex>}
      />)
}

const ParseToTable = (data, query) => {
  return data.map((item) => {
    return {
      ...item,
      date: moment(`${item.date[0]}-${item.date[1]}-${item.date[2]}`).format("yyyy-MM-DD"),
      toollist : <ToolListComplemetaryInformation id={item.id}  query={query}/>
    }
  })
}


const ListData = ({id,query}) => {
 
  
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
        ["Nombre","Organismo","Lugar", "Fecha", "Acciones"],
        ["name","organization","place","date", "toollist"]
    )
    return (
            <BasicModal
                widthButton={"10rem"}
              variant={VARIANTES_BUTTON.ORANGE}
              text={"Formación Complementaria"}
              title={"Formación Complementaria"}
              body={<BasicTableNoDescription objetoTabla = {objetoTabla}  maxHeight={"80vh"} maxWidth={"85vw"} />}
            />
    )


}
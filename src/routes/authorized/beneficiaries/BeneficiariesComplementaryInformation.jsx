import { Box } from '@mui/system'
import React from 'react'
import BasicModal from '../../../components/BasicModal'
import CustomFlex from '../../../components/CustomFlex'
import ComplementaryFormationForm from '../volunteers/ComplementaryFormationForm'
import AddIcon from '@mui/icons-material/Add';
import { VARIANTES_BUTTON } from '../../../components/CustomButton'
import { useAuthUser } from 'react-auth-kit'
import { useQuery } from 'react-query'
import CustomReloading from '../../../components/CustomReloading'
import CustomError from '../../../components/CustomError'
import { CustomList } from '../../../static/user'
import BasicTableNoDescription from '../../../components/BasicTableNoDescription'
import {GetComplementaryInformationBeneficiary } from '../../../api/complementaryInformation/complementaryFormation'

function BeneficiariesComplementaryInformation({id}) {
    
    const [handleClose, setHandleClose] = React.useState({});



    return (
    <CustomFlex direction={"row"}>
                  <Box flexBasis={"fit-content"}>
                    <ListData id={id}/>
                  </Box>
                  <BasicModal
                  setHandleCloseButton={setHandleClose}
                    variant={VARIANTES_BUTTON.GREEN2}
                    text={<AddIcon />}
                    title={"Formación Complementaria"}
                    body={<ComplementaryFormationForm id={id} handleClose={handleClose} />}
                  />
                </CustomFlex>
  )
}

export default BeneficiariesComplementaryInformation


const ListData = ({id}) => {
    const user = useAuthUser();
    const query = useQuery(["QUERY_BENEFICIARIES_DETAILS_COMPLEMENTARY_INFORMATION", id],() => GetComplementaryInformationBeneficiary(user().token, id),{
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
        ["Nombre","Organismo","Lugar", "Fecha"],
        ["name","organization","place","date"]
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
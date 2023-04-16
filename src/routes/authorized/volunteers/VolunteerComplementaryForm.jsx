import { Box } from '@mui/material';
import React from 'react'
import { useAuthUser } from 'react-auth-kit';
import { useQuery } from 'react-query';
import { GetComplementaryInformationVolunteers } from '../../../api/complementaryInformation/complementaryFormation';
import BasicModal from '../../../components/BasicModal';
import BasicTableNoDescription from '../../../components/BasicTableNoDescription';
import CustomError from '../../../components/CustomError';
import CustomFlex from '../../../components/CustomFlex';
import CustomReloading from '../../../components/CustomReloading';
import ComplementaryFormationForm from './ComplementaryFormationForm';
import AddIcon from '@mui/icons-material/Add';
import { VARIANTES_BUTTON } from '../../../components/CustomButton';
import { CustomList } from '../../../static/user';
import { ToolListComplemetaryInformation } from '../beneficiaries/BeneficiariesComplementaryInformation';
function VolunteerComplementaryForm({id}) {

    const [hadleClose, setHadleClose] = React.useState({});
    const user = useAuthUser();
    const query = useQuery(["QUERY_VOLUNTEERS_DETAILS_COMPLEMENTARY_INFORMATION", id],() => GetComplementaryInformationVolunteers(user().token, id),{
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
                    title={"Formación Complementaria"}
                    body={<ComplementaryFormationForm id={id} handleClose={hadleClose} refetch={query.refetch}/>}
                  />
                </CustomFlex>
  )
}

export default VolunteerComplementaryForm


const ParseData = (data, query) => {

  if(data === undefined || data === null){
    return []
  }
  return data.map((item) => {
      return {
          ...item,
          toollist: <ToolListComplemetaryInformation id={item.id} query={query} />
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
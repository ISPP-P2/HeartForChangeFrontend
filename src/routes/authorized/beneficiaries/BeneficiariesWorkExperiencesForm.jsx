import { Box } from '@mui/material'
import React from 'react'
import BasicFrom from '../../../components/BasicFrom'
import BasicModal from '../../../components/BasicModal'
import { VARIANTES_BUTTON } from '../../../components/CustomButton'
import CustomFlex from '../../../components/CustomFlex'
import WorkExperienceForm from '../volunteers/WorkExperienceForm'
import { extraForm, extraForm2 } from './BeneficiariesDetails'
import AddIcon from '@mui/icons-material/Add';
import { GetWorkExperienceBeneficiary } from '../../../api/complementaryInformation/workExperience'
import { useQuery } from 'react-query'
import CustomReloading from '../../../components/CustomReloading'
import CustomError from '../../../components/CustomError'
import { useAuthUser } from 'react-auth-kit'
import BasicTable from '../../../components/BasicTable'
import { CustomList } from '../../../static/user'
import BasicTableNoDescription from '../../../components/BasicTableNoDescription'




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
  let objetoTabla = BeneficiarieList.parseToTableBasic(["Trabajo", "Lugar","Tiempo","Razon"], ["job","place","time","reasonToFinish"])
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
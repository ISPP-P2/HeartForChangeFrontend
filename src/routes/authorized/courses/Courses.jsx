import * as React from 'react';
import CustomFlex from '../../../components/CustomFlex';
import { CustomList } from '../../../static/user';
import CustomCardMini from '../../../components/CustomCardMini';
import BasicModal from '../../../components/BasicModal';
import { useAuthUser } from 'react-auth-kit';
import { useQuery } from 'react-query';
import BodyWrapper from '../../../components/BodyWrapper';
import CustomReloading from '../../../components/CustomReloading';
import CustomError from '../../../components/CustomError';
import { CustomNotistackContext } from '../../../context/CustomNotistack';
import BasicTableNoDescription from '../../../components/BasicTableNoDescription';
import CustomLink from '../../../components/CustomLink';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Typography } from '@mui/material';
import CustomButton, { VARIANTES_BUTTON } from '../../../components/CustomButton';
import { getCoursesAPI } from '../../../api/beneficiario/course';
import CourseForm from './CourseForm';


function Courses() {
  const user = useAuthUser();
  const [handleDeleteFunc, setHandleDeleteFunc] = React.useState({});
  const [filterValue, setFilterValue] = React.useState('');
  const {setSuccessMsg, setErrorMsg} = React.useContext(CustomNotistackContext)
  const query = useQuery(["QUERY_COURSES"],() => getCoursesAPI(user().token),{
    retry: 2,
    refetchOnWindowFocus: false,
  });
 
  if(query.isLoading){
    return <CustomReloading />
  }

  if(query.isError){
    return <CustomError onClick={()=> query.refetch()}/>
  }

  const filteredData = query.data.filter((item) =>
  item.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const ActivityList = new CustomList(parseTaller(filteredData));
  let objetoTabla = ActivityList.parseToTableBasic(
    ["Nombre del taller","Lugar","Coordinador","Fecha","Ver detalles"],
    ["name", "place","coordinator","date", "button"]
  )

  
  return (
    <BodyWrapper title={"Lista de cursos"}>
      <CustomFlex direction={"column"}>
          <CustomFlex direction={"row"}>
              <CustomCardMini
                    title='Nº de talleres'
                    iconD={<BasicModal 
                      setHandleCloseButton={setHandleDeleteFunc} 
                      title={"Añadir taller"} 
                      text={"Añadir"}
                      body={<CourseForm handleClose={handleDeleteFunc} query={query}/>}
                      />}
                    totalNumber={query.data.length}/>
            </CustomFlex>
            <Box>
        <TextField
          id="input-with-icon-textfield"
          label="Nombre del curso"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        />
         <BasicTableNoDescription objetoTabla = {objetoTabla}  maxHeight={"60vh"} />
         </Box>
        </CustomFlex> 
      </BodyWrapper>
    );
}

export default Courses;


const ToolList = ({actividad, handleDelete, id}) => {
  const [handleCloseFunc, setHandleCloseFunc] = React.useState({});

  return (
    <CustomFlex justifyContent={"flex-start"} direction={"row"}>
      <CustomLink  to={`/ong/curso/${id}`}>
        <SearchIcon />
      </CustomLink>
      <BasicModal  setHandleCloseButton={setHandleCloseFunc} title={"¿Estás seguro?"} heightButton={"2.25rem"} body={<Box>
        <Typography>El curso se eliminará permanentemente</Typography>
        <CustomButton onClick={()=>handleDelete(id, handleCloseFunc)} text={"Eliminar"}  variantButton={VARIANTES_BUTTON.RED} />
        </Box>} variant={VARIANTES_BUTTON.RED}  text={<DeleteForeverIcon />}
        />
    </CustomFlex>
  )
}


const parseTaller = (data) => {
    return data.map((taller) => {
        
        return {  
            ...taller,  
            button:<ToolList actividad={taller} handleDelete={()=> {}} id={taller.id}/>
          };
    })
          
}
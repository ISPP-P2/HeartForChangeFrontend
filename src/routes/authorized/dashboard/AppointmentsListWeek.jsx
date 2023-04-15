import { useState } from "react";
import { useAuthUser } from "react-auth-kit";
import { getAllAppointmentAPI, getBeneficiaryByAppointment } from "../../../api/beneficiario/appointment/api";
import { useQuery } from "react-query";
import moment from "moment";
import CustomReloading from "../../../components/CustomReloading";
import CustomError from "../../../components/CustomError";
import { CustomList } from "../../../static/user";
import { Box, Typography } from "@mui/material";
import BasicTableNoDescription from "../../../components/BasicTableNoDescription";
import CustomFlex from "../../../components/CustomFlex";
import CustomLink from "../../../components/CustomLink";
import SearchIcon from '@mui/icons-material/Search';




export const AppointmentsListWeek = () => {
    const user = useAuthUser();
    const [appointment, setAppointment] = useState(null);


    const query = useQuery(["QUERY_APPOINTMENTS"],() => getAllAppointmentAPI(user().token),{
      retry: 2,
      onSuccess: (data) => {
        setAppointment(data
                .filter((activity) => {
                return moment(activity.date)
                .isBetween(moment(), moment()
                .add(7, 'days'), null, '[]');
            }))
        },
      refetchOnWindowFocus: false,
    });



    if(query.isLoading || appointment === null){
      return <CustomReloading />
    }
  
    if(query.isError){
        return <CustomError onClick={()=> query.refetch()}/>
    }
    
    
    const ActivityList = new CustomList(ParseAppointment(appointment));
    let objetoTabla = ActivityList.parseToTableBasic(
    ["Nombre","Notas","Fecha","Ver detalles"],
    ["name", "notes","date", "button"]
    )
    
    return (
        <Box height={"40vh"}>
            <Typography component={"h1"} fontSize={"2rem"} fontWeight={"550"} color={"#686868"} marginBottom={'1rem'}>
                Próximas citas
            </Typography>
            <BasicTableNoDescription objetoTabla = {objetoTabla}  maxHeight={"40vh"} />
        </Box>
    )
}


const ParseAppointment = (appointments) =>  {
    return appointments.map((appointment) => {
        return {
            ...appointment,
            name: <BeneficiarioNombre appointmentId={appointment.id}/>,
            date: moment(appointment.date).format("DD/MM/YYYY HH:mm"),
            button: <ToolList appointmentId={appointment.id}/>
        }
    })
}


const ToolList = ({appointmentId}) => {
  const user = useAuthUser();
  const [beneficiarie, setBeneficiarie] = useState(null);

  const query = useQuery(["QUERY_APPOINTMENT_BY_BENEFICIARY", appointmentId],() => getBeneficiaryByAppointment(user().token, appointmentId),{
    retry: 2,
    onSuccess: (data) => {
      setBeneficiarie(data)
      },
    refetchOnWindowFocus: false,
  });

  console.log(query)

  if(query.isLoading || beneficiarie === null){
    return <CustomReloading />
  }

  if(query.isError){
      return <CustomError onClick={()=> query.refetch()}/>
  }


    return (
      <CustomFlex justifyContent={"flex-start"} direction={"row"}>
        <CustomLink  to={`/ong/beneficiario/${beneficiarie.id}`}>
          <SearchIcon />
        </CustomLink>
      </CustomFlex>
    )
  }

const BeneficiarioNombre = ({appointmentId}) => {
  const user = useAuthUser();
  const [beneficiarie, setBeneficiarie] = useState(null);

  const query = useQuery(["QUERY_APPOINTMENT_BY_BENEFICIARY", appointmentId],() => getBeneficiaryByAppointment(user().token, appointmentId),{
    retry: 2,
    onSuccess: (data) => {
      setBeneficiarie(data)
      },
    refetchOnWindowFocus: false,
  });

  console.log(query)

  if(query.isLoading || beneficiarie === null){
    return <CustomReloading />
  }

  if(query.isError){
      return <CustomError onClick={()=> query.refetch()}/>
  }

  return (
    <Typography>
      {beneficiarie.name}
    </Typography>
  )
}



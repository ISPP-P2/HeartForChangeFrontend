import React from 'react'
import { useContext } from 'react';
import { useAuthUser } from 'react-auth-kit';
import { postAppointmentAPI } from '../../../api/beneficiario/appointment/api';
import BasicFrom from '../../../components/BasicFrom';
import { CustomNotistackContext } from '../../../context/CustomNotistack';
import { APPOINTMENT_FORM } from './forms';

function BeneficiaryAppoinmentForm({id, handleClose, refetch}) {
  const {setSuccessMsg, setErrorMsg} = useContext(CustomNotistackContext)
  const auth = useAuthUser()

  const handleSubmitForm = (values) => {
    postAppointmentAPI(auth().token, values, id).then(
          (response) => {
              setSuccessMsg("Se ha añadido correctamente")
              refetch()
              handleClose.handleClose()
          }
      ).catch(
          (error) => {
              setErrorMsg("Ha ocurrido un error")
          }
      );
  }


return (
      <BasicFrom 
      form={APPOINTMENT_FORM} 
      buttonText={"añadir"}
      handleSubmitForm={handleSubmitForm}
  />
)
}

export default BeneficiaryAppoinmentForm



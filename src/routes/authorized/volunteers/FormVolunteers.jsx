import React from 'react'
import BasicFrom from '../../../components/BasicFrom'
import BasicModal from '../../../components/BasicModal'
import BodyWrapper from '../../../components/BodyWrapper'
import { beneficiarioYvoluntarioBasicForm } from '../beneficiaries/forms'




function FormVolunteers() {
  return (
    <BodyWrapper>
        <BasicFrom 
            buttonText={"Añadir"}
            form={beneficiarioYvoluntarioBasicForm}
        />
    </BodyWrapper>
  )
}

export default FormVolunteers
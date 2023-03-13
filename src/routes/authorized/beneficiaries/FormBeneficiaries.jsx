import React from 'react'
import BasicFrom from '../../../components/BasicFrom'
import BodyWrapper from '../../../components/BodyWrapper';
import { beneficiarioYvoluntarioBasicForm } from './forms';

function FormBeneficiaries() {
    

  return (
    <BodyWrapper title={"Añadir un nuevo beneficiario"}>
        <BasicFrom 
                form={beneficiarioYvoluntarioBasicForm} 
                handleSubmitForm={(values) => console.log(values)}
                buttonText={"Añadir"}
            />
    </BodyWrapper>
   
  )
}

export default FormBeneficiaries
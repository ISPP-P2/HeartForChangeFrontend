import  {object} from 'yup'


export const FORM_TYPES ={
    TEXT: 'text',
    SELECT: 'select',
    TEXTEAREA: 'textearea',
    DATE:'datetime-local',
    ONLYDATE: 'date',
    CHECKBOX: 'checkbox',
    NUMBER: 'number',
    TIME: 'time',
    PASSWORD : 'password',
}


export const createDiccFromList = (list) => {
    let dicc = {};
    list.forEach((item) => {
        if(item.value === undefined){
            dicc[item.name] = '';
        }else{
            dicc[item.name] = item.value;
        }
    });
    return dicc;
}

export const createYupDicc = (list) => {
    let dicc = {};
    list.forEach((item) => {
        dicc[item.name] = item.validation;
    });
    return object().shape(dicc);
}
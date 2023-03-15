import { FORM_TYPES } from "../../../components/utils/utilsForms";

export const formONGACTIVITYDetails = (form) => {
    
    return [
    {
        type: FORM_TYPES.TEXT,
        label: "Lugar",
        value: form.location
    }, {
        type: FORM_TYPES.TEXT,
        label: "Coordinador",
        value: form.coordinator
    }, {
        type: FORM_TYPES.TEXT,
        label: "Fecha de realización",
        value: form.date
    }, {
        type: FORM_TYPES.TEXT,
        label: "Finalizada",
        value: form.finished
    }, {
        type: FORM_TYPES.TEXT,
        label: "Grupo/Individual",
        value: form.group
    }
]}
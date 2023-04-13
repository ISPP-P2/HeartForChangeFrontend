import { axiosWithToken } from "../../auth/axios";

export const postAppointmentAPI = (token, data, id) => {
    return axiosWithToken(token).post(`/api/appointments/save/${id}`, data);
}


export const getAllAppoinmentsByBeneficiary = (token, id) => {
    return axiosWithToken(token).get(`/api/appointments/get/beneficiary/${id}`);
}

export const DeleteAppoinmentAPI = (token, id) => {
    return axiosWithToken(token).post(`/api/appointments/delete/${id}`);
}
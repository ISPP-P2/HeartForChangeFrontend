import { axiosWithToken } from "../auth/axios";

export const GetComplementaryInformationBeneficiary = (token, id) => {
    return axiosWithToken(token).get(`/api/complementaryFunctions/get/beneficiary/${id}`);
}

export const GetComplementaryInformationVolunteers = (token, id) => {
    return axiosWithToken(token).get(`/api/complementaryFunctions/get/volunteer/${id}`);
}

export const PostComplementaryInformation = (token, data, id) => {
    return axiosWithToken(token).post(`/api/complementaryFunctions/save/${id}`, data);
}

export const PutComplementaryInformation = (token,data, id) => {
    return axiosWithToken(token).put(`/api/complementaryFunctions/update/${id}`, data);
}

export const DeleteComplementaryInformation = (token,id) => {
    return axiosWithToken(token).get(`/api/complementaryFunctions/delete/${id}`);
}
import { axiosWithToken } from "../auth/axios";

export const GetComplementaryInformationBeneficiary = (token, id) => {
    return axiosWithToken(token).get(`/api/complementaryFormations/get/beneficiary/${id}`);
}

export const GetComplementaryInformationVolunteers = (token, id) => {
    return axiosWithToken(token).get(`/api/complementaryFormations/get/volunteer/${id}`);
}

export const PostComplementaryInformation = (token, data, id) => {
    return axiosWithToken(token).post(`/api/complementaryFormations/save/${id}`, data);
}

export const PutComplementaryInformation = (token,data, id) => {
    return axiosWithToken(token).put(`/api/complementaryFormations/update/${id}`, data);
}

export const DeleteComplementaryInformation = (token,id) => {
    return axiosWithToken(token).post(`/api/complementaryFormations/delete/${id}`);
}
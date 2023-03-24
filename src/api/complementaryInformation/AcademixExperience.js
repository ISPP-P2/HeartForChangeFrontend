import { axiosWithToken } from "../auth/axios";

export const GetAcademixExperienceBeneficiary = (token, id) => {
    return axiosWithToken(token).get(`/api/academicExperiences/get/beneficiary/${id}`);
}

export const GetAcademixExperienceVoluntaries = (token, id) => {
    return axiosWithToken(token).get(`/api/academicExperiences/get/volunteer/${id}`);
}

export const PostAcademixExperience = (token, data, id) => {
    return axiosWithToken(token).post(`/api/academicExperiences/save/${id}`, data);
}

export const PutAcademixExperience = (token,data, id) => {
    return axiosWithToken(token).put(`/api/academixexperience/update/${id}`, data);
}

export const DeleteAcademixExperience = (token,id) => {
    return axiosWithToken(token).get(`/api/academicExperiences/delete/${id}`);
}
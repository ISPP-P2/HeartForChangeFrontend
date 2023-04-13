import { axiosWithToken } from "../auth/axios";

export const GetWorkExperienceBeneficiary = (token, id) => {
    return axiosWithToken(token).get(`/api/workExperiences/get/beneficiary/${id}`);
}


export const GetWorkExperienceVolunteers = (token, id) => {
    return axiosWithToken(token).get(`/api/workExperiences/get/volunteer/${id}`);
}


export const PostWorkExperience = (token, data, id) => {
    return axiosWithToken(token).post(`/api/workExperiences/save/${id}`, data);
}

export const PutWorkExperience = (token,data, id) => {
    return axiosWithToken(token).put(`/api/workExperiences/update/${id}`, data);
}

export const DeleteWorkExperience = (token,id) => {
    return axiosWithToken(token).post(`/api/workExperiences/delete/${id}`);
}
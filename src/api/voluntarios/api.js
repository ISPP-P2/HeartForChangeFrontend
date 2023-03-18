import { axiosWithToken } from "../auth/axios"

export const getVolunteersAPI = async (token) => {
    const {data} =  await axiosWithToken(token).get("/api/volunteers")
    return data
}
export const saveVolunteerAPI = async (token, values) => {
    const {data} =  await axiosWithToken(token).post(`/api/volunteers/signup`, values)
    return data
}

export const deleteVolunteerAPI = async (token, id) => {
    const {data} =  await axiosWithToken(token).post(`/api/volunteers/delete/${id}`)
    return data
}

export const getVolunteerAPI = async (token,id) => {
    const {data} =  await axiosWithToken(token).get(`/api/volunteers/${id}`)
    return data
}

export const saveAcademicExpAPI = async (token, values,id) => {
    const {data} =  await axiosWithToken(token).post(`/api/academicExps/save/${id}`, values)
    return data
}
export const getAcademicExpByUsernameAPI = async (token,id) => {
    const {data} =  await axiosWithToken(token).get(`/api/academicExps/get/volunteer/${id}`)
    return data
}


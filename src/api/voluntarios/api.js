import { axiosWithToken } from "../auth/axios"

export const getVolunteersAPI = async (token) => {
    const {data} =  await axiosWithToken(token).get("/api/volunteers/get")
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
    const {data} =  await axiosWithToken(token).get(`/api/volunteers/get/${id}`)
    return data
}

export const updateVolunteersAPI = async (token ,values,id) => {
    const {data} =  await axiosWithToken(token).put(`/api/volunteers/update/${id}`,values)
    return data
}

export const getTotalVolunteersAPI = async (token) => {
    const {data} =  await axiosWithToken(token).get(`/api/volunteers/total`)
    return data
}

export const resetPassword = async (token, id, password) => {
    const {data} =  await axiosWithToken(token).put(`/api/volunteers/update/${id}/password`, password)
    return data
}
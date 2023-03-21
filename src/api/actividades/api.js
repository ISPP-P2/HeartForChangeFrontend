import { axiosWithToken } from "../auth/axios"

export const getActivitiesAPI = async (token) => {
    const {data} =  await axiosWithToken(token).get("/api/tasks/ong/get")
    return data
}
export const saveActivityAPI = async (token, values) => {
    const {data} =  await axiosWithToken(token).post(`/api/tasks/new`, values)
    return data
}

export const deleteActivityAPI = async (token, id) => {
    const {data} =  await axiosWithToken(token).post(`/api/tasks/delete/${id}`)
    return data
}

export const getActivityAPI = async (token, id) => {
    const {data} =  await axiosWithToken(token).get(`/api/tasks/get/${id}`)
    return data
}

export const getTotalActivitiesAPI = async (token) => {
    const {data} =  await axiosWithToken(token).get(`/api/tasks/count`)
    return data
}
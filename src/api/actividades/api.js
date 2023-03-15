import { axiosWithToken } from "../auth/axios"

export const getActivitiesAPI = async (token) => {
    const {data} =  await axiosWithToken(token).get("/api/tasks")
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
    const {data} =  await axiosWithToken(token).get(`/api/tasks/${id}`)
    return data
}
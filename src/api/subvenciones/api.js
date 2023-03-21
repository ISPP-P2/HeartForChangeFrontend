import { axiosWithToken } from "../auth/axios"

export const getSubventions = async (token) => {
    const {data} =  await axiosWithToken(token).get("/api/grants/get/ong")
    return data
}
export const saveSubventionAPI = async (token, values) => {
    const {data} =  await axiosWithToken(token).post(`/api/grants/save`, values)
    return data
}

export const deleteSubvencioAPI = async (token, id) => {
    const {data} =  await axiosWithToken(token).post(`/api/grants/delete/${id}`)
    return data
}
export const getTOTALSubventionAPI = async (token, id) => {
    const {data} =  await axiosWithToken(token).get(`/api/grants/${id}/amount`)
    return data
}
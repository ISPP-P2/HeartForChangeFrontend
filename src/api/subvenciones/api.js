import { axiosWithToken } from "../auth/axios"

export const getSubventions = async (token) => {
    const {data} =  await axiosWithToken(token).get("/api/grants/get")
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
export const getTOTALSubventionAPI = async (token) => {
    const {data} =  await axiosWithToken(token).get(`/api/grants/get/amount`)
    return data
}

export const getSubventionAPI = async (token, id) => {
    const {data} =  await axiosWithToken(token).get(`/api/grants/get/${id}`)
    return data
}

export const updateSubventionAPI = async (token, values, id) => {
    const {data} =  await axiosWithToken(token).put(`/api/grants/update/${id}`, values)
    return data
}


import { axiosWithToken } from "../auth/axios"

export const getWorkshopsAPI = async (token) => {
    const {data} = await axiosWithToken(token).get("/api/workshops/ong/get")
    return data
}

export const saveWorkshopsAPI = async (token, values) => {
    const {data} = await axiosWithToken(token).post("/api/workshops/new", values)
    return data
}


export const deleteBeneficiarieInWorkShopAPI = async (token, taskId, personId) => {
    const {data} = await axiosWithToken(token).post(`/api/attendances/quit/${taskId}/${personId}`)
    return data
}


export const getWorkshopByIdAPI = async (token, id) => {
    const {data} = await axiosWithToken(token).get(`/api/workshops/get/${id}`)
    return data
}

export const addBeneficiaryToWorkshopAPI = async (token, taskId, beneficiaryId) => {
    const {data} = await axiosWithToken(token).post(`/api/attendances/add/${taskId}/${beneficiaryId}`)
    return data
}

export const getAttendancesByTaskId = async (token, taskId) => {
    const {data} = await axiosWithToken(token).get(`/api/workshops/get/${taskId}/attendances/beneficiaries`)
    return data
}

export const updateWorkshopAPI = async (token, values, workshopId) => {
    const {data} = await axiosWithToken(token).put(`/api/workshops/update/${workshopId}`, values)
    return data
}

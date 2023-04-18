import { axiosWithToken } from "../auth/axios"

export const getBeneficiariesAPI = async (token) => {
    const {data} = await axiosWithToken(token).get("/api/beneficiaries/get")
    return data
}
export const saveBeneficiariesAPI = async (token, values) => {
    const {data} = await axiosWithToken(token).post(`/api/beneficiaries/signup`, values)
    return data
}

export const updateBeneficiariesAPI = async (token, values, id) => {
    const {data} = await axiosWithToken(token).put(`/api/beneficiaries/update/${id}`, values)
    return data
}

export const deleteBeneficiariesAPI = async (token, id) => {
    const {data} = await axiosWithToken(token).post(`/api/beneficiaries/delete/${id}`)
    return data
}

export const getBeneficiarieAPI = async (token,id) => {
    const {data} = await axiosWithToken(token).get(`/api/beneficiaries/get/${id}`)
    return data
}

export const getTotalBeneficiariesAPI = async (token) => {
    const {data} = await axiosWithToken(token).get(`/api/beneficiaries/total`)
    return data
}

export const updateTypeOfAttendanceById = async (token, id, type) => {
    const {data} = await axiosWithToken(token).put(`/api/attendances/confirm/${id}/${type}`)
    return data
}
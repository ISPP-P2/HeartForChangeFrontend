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
    console.log(data)
    return data
}

export const getBeneficiariesAPI = async (token) => {
    const {data} =  await axiosWithToken(token).get("/api/beneficiaries")
    return data
}
export const saveBeneficiariesAPI = async (token, values) => {
    const {data} =  await axiosWithToken(token).post(`/api/beneficiaries/signup`, values)
    return data
}

export const deleteBeneficiariesAPI = async (token, id) => {
    const {data} =  await axiosWithToken(token).post(`/api/beneficiaries/delete/${id}`)
    console.log(data)
    return data
}

import { axiosWithToken } from "../auth/axios"


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
    return data
}

export const getBeneficiarieAPI = async (token,id) => {
    const {data} =  await axiosWithToken(token).get(`/api/beneficiaries/${id}`)
    return data
}

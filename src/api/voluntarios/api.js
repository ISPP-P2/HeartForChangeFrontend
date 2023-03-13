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
    console.log(data)
    return data
}
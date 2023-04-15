import { axiosWithToken } from "../auth/axios"

export const getCoursesAPI = async (token) => {
    const {data} = await axiosWithToken(token).get("/api/courses/ong/get")
    return data
}

export const saveCourseAPI = async (token, values) => {
    const {data} = await axiosWithToken(token).post("/api/courses/new", values)
    return data
}


export const deleteBeneficiarieInCourseAPI = async (token, taskId, personId) => {
    const {data} = await axiosWithToken(token).post(`/api/attendances/quit/${taskId}/${personId}`)
    return data
}


export const getCourseByIdAPI = async (token, id) => {
    const {data} = await axiosWithToken(token).get(`/api/courses/get/${id}`)
    return data
}

export const addBeneficiaryToCoursesAPI = async (token, taskId, beneficiaryId) => {
    const {data} = await axiosWithToken(token).post(`/api/attendances/add/${taskId}/${beneficiaryId}`)
    return data
}

export const getAttendancesByTaskId = async (token, taskId) => {
    const {data} = await axiosWithToken(token).get(`/api/courses/get/${taskId}/attendances/beneficiaries`)
    return data
}

export const getAllAttendancesByTaskId = async (token, taskId) => {
    const {data} = await axiosWithToken(token).get(`/api/attendances/get/task/${taskId}`)
    return data
}
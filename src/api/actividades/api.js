import { axiosWithToken } from "../auth/axios"

export const getActivitiesAPI = async (token) => {
    const {data} =  await axiosWithToken(token).get("/api/activities/ong/get/all")
    return data
}

export const getActivitiesDateAPI = async (token) => {
    const {data} = await axiosWithToken(token).get("/api/activities/ong/get/date")
    return data
}

export const getMyActivitiesAPI = async (token) => {
    const {data} =  await axiosWithToken(token).get("/api/activities/volunteer/get/attendances")
    return data
}

export const saveActivityAPI = async (token, values) => {
    const {data} =  await axiosWithToken(token).post(`/api/activities/new`, values)
    return data
}

export const deleteActivityAPI = async (token, id) => {
    const {data} =  await axiosWithToken(token).post(`/api/activities/delete/${id}`)
    return data
}

export const getActivityAPI = async (token, id) => {
    const {data} =  await axiosWithToken(token).get(`/api/activities/get/${id}`)
    return data
}

export const updateActivityAPI = async (token, values, id) => {
    const {data} = await axiosWithToken(token).put(`/api/activities/update/${id}`,values)
    return data
}

export const getTotalActivitiesAPI = async (token) => {
    const {data} =  await axiosWithToken(token).get(`/api/activities/ong/get/all`)
    return data.length
}

export const postPersonActivity = async (token, personId, taskId) => {
    const {data} =  await axiosWithToken(token).post(`/api/attendances/add/${taskId}/${personId}`)
    return data
}

export const getVolunteersAcceptedByActivityAPI = async (token, id) => {
    const {data} =  await axiosWithToken(token).get(`/api/activities/get/${id}/attendances/volunteer/accepted`)
    return data
}

export const getVolunteersByActivityAPI = async (token, id) => {
    const {data} =  await axiosWithToken(token).get(`/api/activities/get/${id}/attendances/volunteer`)
    return data
}

export const getStateByVolunteerAndActivity = async (token, idPerson, taskId) => {
    const {data} =  await axiosWithToken(token).get(`/api/activities/get/${idPerson}/${taskId}/petition/state/`)
    return data
}

export const getAttendancesByActivityAPI = async (token, id) => {
    const {data} =  await axiosWithToken(token).get(`/api/attendances/get/task/${id}`)
    return data
}

export const acceptAttendancesAPI = async (token, id) => {
    const {data} =  await axiosWithToken(token).put(`/api/attendances/accept/${id}`)
    return data
}

export const saveAttendancesAPI = async (token, id) => {
    const {data} =  await axiosWithToken(token).post(`/api/attendances/new/${id}`)
    return data
}



export const denyAttendancesAPI = async (token, id) => {
    const {data} =  await axiosWithToken(token).put(`/api/attendances/deny/${id}`)
    return data
}

export const quitAttendancesAPI = async (token, idTask) => {
    const {data} =  await axiosWithToken(token).post(`/api/attendances/quit/activity/${idTask}`)
    return data
}


export const getStateByTaskId = async (token, taskId) => {
    const {data} =  await axiosWithToken(token).get(`/api/activities/get/${taskId}/petition/state/`)
    return data
}

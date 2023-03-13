import axios from 'axios'

export const axiosWithToken =  (bearerToken) => {
    let res = axios.create(
        {
            baseURL: import.meta.env.VITE_BASE_URL
        }
    )
    res.defaults.headers.common['Authorization'] = `Bearer ${bearerToken}`;
    return res
}

export default axios.create(
    {
        baseURL: import.meta.env.VITE_BASE_URL
    }
)
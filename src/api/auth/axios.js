import axios from 'axios'

export const axiosWithToken =  (bearerToken) => {
    let res = axios.create(
        {
            baseURL:  'https://heartforchangebackend.ew.r.appspot.com/'
        }
    )
    res.defaults.headers.common['Authorization'] = `Bearer ${bearerToken}`;
    return res
}

export default axios.create(
    {
        baseURL: 'https://heartforchangebackend.ew.r.appspot.com/'
    }
)
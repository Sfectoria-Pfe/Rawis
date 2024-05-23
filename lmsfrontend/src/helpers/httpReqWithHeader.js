import axios from "axios"
const apiUrl = 'http://localhost:4000/'
export const getWithHeader =async  (url) => {
    const token =JSON.parse(localStorage.getItem('token'))
    const resp =await axios.get(apiUrl+ url, {headers :{ Authorization: 'Bearer '+ token }})
    return resp; 
}

export const postWithHeader =async  (url, body) => {
    const token =JSON.parse(localStorage.getItem('token'))
    const resp =await axios.post(apiUrl+ url, body, {headers :{ Authorization: 'Bearer '+ token }})
    return resp; 
}

export const deleteWithHeader =async  (url) => {
    const token =JSON.parse(localStorage.getItem('token'))
    const resp =await axios.delete(apiUrl+ url, {headers :{ Authorization: 'Bearer '+ token }})
    return resp; 
}

export const getOneWithHeader = async  (url) => {
    const token =JSON.parse(localStorage.getItem('token'))
    const resp =await axios.get(apiUrl+ url, {headers :{ Authorization: 'Bearer '+ token }})
    return resp; 
}
import axios from "axios";
// const BASE_URL = "/api/v1";
const BASE_URL = `${import.meta.env.VITE_API_URL}/api/v1`;
// const BASE_URL = `http://localhost:8080/api/v1`;


export default axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true

})

export const AdminApi = axios.create({
    // baseURL: "/api/v1/admin",
    baseURL: `${BASE_URL}/admin`,
    headers: {
        "Content-Type": "multipart/form-data",
    },
});
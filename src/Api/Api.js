import axios from "axios";
const BASE_URL = "/api/v1";

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
    baseURL: "/api/v1/admin",
    headers: {
        "Content-Type": "multipart/form-data",
    },
});
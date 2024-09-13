import axios from "axios";
// import {API_URL} from "@env"

const apiUrl = "http://10.0.2.2:3000";

const api = axios.create({
    baseURL: apiUrl
})

export default api
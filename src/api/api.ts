import axios from "axios";
import {API_URL} from "@env"

const apiUrl = API_URL;

const api = axios.create({
    baseURL: apiUrl
})

export default api
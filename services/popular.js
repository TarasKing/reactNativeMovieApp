import axios from "axios";
import { POPULAR_URL } from "./api_config";


export default axios.create({
    baseURL: POPULAR_URL,
})
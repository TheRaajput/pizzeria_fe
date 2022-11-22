import axios from "axios";
import { API_URLS } from "../config/API_URLS";

const axiosInstance = axios.create({
  baseURL: API_URLS.base_url,
});

export default axiosInstance;

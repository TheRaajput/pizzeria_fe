import axios from "axios";
const prod_url = "https://pizzeria-6kcsxlo93-theraajput.vercel.app";
const axiosInstance = axios.create({
  baseURL: prod_url,
});

export default axiosInstance;

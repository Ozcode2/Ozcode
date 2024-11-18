import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://us-central1-portfolio-d58a0.cloudfunctions.net/api",
});

export default axiosInstance;

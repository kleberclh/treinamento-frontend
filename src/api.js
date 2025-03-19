import axios from "axios";

const URL = "http://localhost:3002";

const api = axios.create({
  baseURL: URL,
});

export default api;

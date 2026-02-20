
/*
import axios from "axios";
const BASE_URL=process.env.REACT_APP_BASE_URL;

const API = axios.create({ baseURL: BASE_URL });

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;

*/

//new 
import axios from "axios";

// Use environment variable with a fallback to localhost:5000
const BASE_URL = process.env.REACT_APP_BASE_URL || "https://uasingishujobs.onrender.com";
 
const API = axios.create({ baseURL: BASE_URL });

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
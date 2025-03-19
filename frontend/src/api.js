import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

// Auth
export const register = (data) => API.post("/auth/register", data);
export const login = (data) => API.post("/auth/login", data);
export const getProfile = (token) => API.get("/auth/profile", { headers: { Authorization: token } });

// Blog Posts
export const getPosts = () => API.get("/posts");
export const getPost = (id) => API.get(`/posts/${id}`);
export const createPost = (data, token) => API.post("/posts", data, { headers: { Authorization: token } });

export default API;

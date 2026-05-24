import axios from "axios";

import { clearAuthSession, getAccessToken, setAccessToken } from "./auth";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000",
});

api.interceptors.request.use((config) => {
  const token = getAccessToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => {
    const refreshedToken = response.headers["x-access-token"];

    if (refreshedToken) {
      setAccessToken(refreshedToken);
    }

    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      clearAuthSession();
      window.location.href = "/";
    }

    return Promise.reject(error);
  },
);

export async function listAnimals() {
  const response = await api.get("/api/animals");
  return response.data;
}

export async function createAnimal(payload) {
  const response = await api.post("/api/animals", payload);
  return response.data;
}

export async function analyzeFertilityPattern(payload) {
  const response = await api.post("/api/ai/fertility-pattern", payload);
  return response.data;
}

export async function loginUser(payload) {
  const response = await api.post("/api/auth/login", payload);
  return response.data;
}

export default api;

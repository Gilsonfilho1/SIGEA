import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000",
});

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

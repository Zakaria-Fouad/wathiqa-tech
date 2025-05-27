import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

function getAuthHeader() {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

// Auth API service
export const authService = {
  // Connexion
  login: async (credentials) => {
    const res = await axios.post(`${API_URL}/login`, credentials);
    // On suppose que le token est dans res.data.token
    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
    }
    return res.data;
  },

  // Inscription
  register: async (data) => {
    const res = await axios.post(`${API_URL}/register`, data);
    // On suppose que le token est dans res.data.token
    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
    }
    return res.data;
  },

  // Déconnexion
  logout: async () => {
    const res = await axios.post(`${API_URL}/logout`, {}, { headers: getAuthHeader() });
    localStorage.removeItem("token");
    return res.data;
  },

  // Récupérer le profil utilisateur
  getProfile: async () => {
    const res = await axios.get(`${API_URL}/user`, { headers: getAuthHeader() });
    return res.data;
  },
};

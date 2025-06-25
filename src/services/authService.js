import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

export const authService = {
  // Connexion
  login: async (credentials) => {
    const res = await axios.post(`${API_URL}/login`, credentials);
    const token = res.data.token;
    localStorage.setItem("token", token);

    // Récupérer l'utilisateur connecté
    const userRes = await axios.get(`${API_URL}/user`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    localStorage.setItem("user", JSON.stringify(userRes.data));
    return userRes.data;
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
    const res = await axios.post(
      `${API_URL}/logout`,
      {},
      { headers: getAuthHeader() }
    );
    localStorage.removeItem("token");
    return res.data;
  },

  // Récupérer le profil utilisateur
  getProfile: async () => {
    const res = await axios.get(`${API_URL}/user`, { headers: getAuthHeader() });
    return res.data;
  },

  // Mettre à jour le profil utilisateur (nom)
  updateProfile: async (data) => {
    const res = await axios.put(`${API_URL}/user/update`, data, { headers: getAuthHeader() });
    return res.data;
  },

  // Changer le mot de passe
  changePassword: async (data) => {
    const res = await axios.put(`${API_URL}/user/password`, data, { headers: getAuthHeader() });
    return res.data;
  },
};

function getAuthHeader() {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
}

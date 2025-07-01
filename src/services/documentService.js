import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

function getAuthHeader() {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

// Document API service
export const documentService = {
  // Liste tous les documents
  getAll: async () => {
    const res = await axios.get(`${API_URL}/documents`, { headers: getAuthHeader() });
    return res.data;
  },

  // Crée un document
  create: async (data) => {
    const res = await axios.post(`${API_URL}/documents`, data, { headers: getAuthHeader() });
    return res.data;
  },

  // Voir un document
  getOne: async (id) => {
    const res = await axios.get(`${API_URL}/documents/${id}`, { headers: getAuthHeader() });
    return res.data;
  },

  // Modifier un document
  update: async (id, data) => {
    const res = await axios.put(`${API_URL}/documents/${id}`, data, { headers: getAuthHeader() });
    return res.data;
  },

  // Supprimer un document
  remove: async (id) => {
    const res = await axios.delete(`${API_URL}/documents/${id}`, { headers: getAuthHeader() });
    return res.data;
  },

  // Télécharger un document (PDF)
  download: async (id) => {
    const res = await axios.get(`${API_URL}/documents/${id}/download`, {
      headers: getAuthHeader(),
      responseType: 'blob',
    });
    return res.data;
  },

  // Aperçu/génération du PDF
  getPdf: async (id) => {
    const res = await axios.get(`${API_URL}/documents/${id}/pdf`, {
      headers: getAuthHeader(),
      responseType: 'blob',
    });
    return res.data;
  },

  // Crée un document à partir d'un template (endpoint /documents/generate)
  // createFromTemplate: async (data) => {
  //   const res = await axios.post(`${API_URL}/documents/generate`, data, {
  //     headers: {
  //       ...getAuthHeader(),
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   return res.data;
  // },
};

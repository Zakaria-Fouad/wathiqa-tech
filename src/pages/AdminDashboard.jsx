import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";

// Données statiques pour la carte OpenAI (identiques à UsagePage)
const openaiDemo = {
  tokens: 18600,
  cost: 0.05,
};

// Données statiques pour les stats du dashboard
const statsDemo = {
  contrats: 12,
  utilisateurs: 5,
};

const lastContracts = [
  { type: "Contrat de location", date: "11 05 2025" },
  { type: "Contrat de travail", date: "11 05 2025" },
  { type: "Contrat de location", date: "11 05 2025" },
];

const AdminDashboard = () => {
  // const [stats, setStats] = useState({ contrats: 0, utilisateurs: 0 });
  const stats = statsDemo;
  // const [openai, setOpenai] = useState({ tokens: 0, cost: 0 });
  const openai = openaiDemo;
  const [loading] = useState(false);
  const [error] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get("/api/admin/dashboard", {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //     })
  //     .then((res) => {
  //       setStats({
  //         contrats: res.data.contrats ?? 0,
  //         utilisateurs: res.data.utilisateurs ?? 0,
  //       });
  //       setLoading(false);
  //     })
  //     .catch(() => {
  //       setError("Erreur lors du chargement des statistiques.");
  //       setLoading(false);
  //     });
  // }, []);

  if (loading)
    return <div className="text-center mt-12">Chargement des statistiques...</div>;
  if (error)
    return <div className="text-center text-red-600 mt-12">{error}</div>;

  return (
    <div className="max-w-5xl mx-auto w-full">
      {/* Titre principal */}
      <h1 className="text-5xl font-extrabold text-gray-900 text-center mt-8 mb-12">
        Tableau de bord
      </h1>
      {/* Statistiques */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
        {/* Carte OpenAI */}
        <div className="bg-white shadow-sm rounded-lg p-8 flex-1 flex flex-col items-center min-w-[220px] border border-blue-100">
          <span className="text-2xl font-bold text-blue-700 mb-1">OpenAI</span>
          <span className="text-lg text-gray-700 mb-2">
            Tokens/mois : <b>{openai.tokens.toLocaleString()}</b>
          </span>
          <span className="text-lg text-gray-700 mb-4">
            Coût estimé : <b>{openai.cost.toFixed(2)} $</b>
          </span>
          <a
            href="/admin/usage"
            className="text-blue-600 font-semibold hover:underline"
          >
            Voir le détail
          </a>
        </div>
        {/* Statistiques classiques */}
        <div className="bg-white shadow-sm rounded-lg p-8 flex-1 flex flex-col items-center min-w-[220px]">
          <span className="text-4xl font-bold text-gray-900 mb-2">
            {stats.contrats}
          </span>
          <span className="text-gray-600 text-lg font-medium capitalize">
            contrats générés
          </span>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-8 flex-1 flex flex-col items-center min-w-[220px]">
          <span className="text-4xl font-bold text-gray-900 mb-2">
            {stats.utilisateurs}
          </span>
          <span className="text-gray-600 text-lg font-medium capitalize">
            utilisateurs inscrits
          </span>
        </div>
      </div>
      {/* Derniers contrats */}
      <div className="bg-white shadow-sm rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Derniers contrats
        </h2>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-2 font-bold text-gray-900">Type</th>
              <th className="py-2 font-bold text-gray-900">Date de création</th>
              <th className="py-2 font-bold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody>
            {lastContracts.map((row, idx) => (
              <tr key={idx} className="border-b border-gray-100 last:border-b-0">
                <td className="py-3 text-gray-900 font-medium">{row.type}</td>
                <td className="py-3 text-gray-900">{row.date}</td>
                <td className="py-3">
                  <a
                    href="#"
                    className="text-indigo-600 font-semibold hover:underline mr-4"
                  >
                    voir
                  </a>
                  <a
                    href="#"
                    className="text-red-500 font-semibold hover:underline"
                  >
                    Supprimer
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;

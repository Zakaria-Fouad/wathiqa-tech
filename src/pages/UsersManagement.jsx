import React from "react";
import AdminLayout from "../layouts/AdminLayout";

const users = [
  { id: 1, name: "Zakaria fouad", date: "11 05 2025" },
  { id: 2, name: "Hamza gourja", date: "11 05 2025" },
  { id: 3, name: "Imane el hitmi", date: "11 05 2025" },
];

const handleDelete = (id) => {
  // À implémenter : suppression utilisateur
};

const UsersManagement = () => (
  
    <div className="max-w-5xl mx-auto w-full">
      {/* Titre principal */}
      <h1 className="text-5xl font-extrabold text-gray-900 text-left mt-8 mb-10">Gérer les utilisateurs</h1>
      {/* Sous-titre */}
      <h2 className="text-xl font-bold text-gray-900 mb-6">Utilisateurs inscrits</h2>
      {/* Tableau des utilisateurs */}
      <div className="bg-white shadow-sm rounded-lg overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="p-6 font-bold text-gray-900">Nom & Prénom</th>
              <th className="p-6 font-bold text-gray-900 text-center">Date d'inscription</th>
              <th className="p-6 font-bold text-gray-900 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-gray-200 last:border-b-0">
                <td className="p-6 text-gray-900 font-medium">{user.name}</td>
                <td className="p-6 text-gray-600 text-center">{user.date}</td>
                <td className="p-6 text-right">
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="text-red-600 font-semibold hover:underline"
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  
);

export default UsersManagement;

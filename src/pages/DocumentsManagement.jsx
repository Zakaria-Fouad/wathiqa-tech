import React from "react";
import AdminLayout from "../layouts/AdminLayout";

const documents = [
  { id: 1, type: "Contrat de location", date: "11 05 2025" },
  { id: 2, type: "Contrat de travail", date: "11 05 2025" },
  { id: 3, type: "Contrat de location", date: "11 05 2025" },
];

const handleView = (id) => {
  // À implémenter : voir le document
};

const handleDelete = (id) => {
  // À implémenter : suppression du document
};

const DocumentsManagement = () => (
  
    <div className="max-w-5xl mx-auto w-full">
      {/* Titre principal */}
      <h1 className="text-5xl font-extrabold text-gray-900 text-left mt-8 mb-10">Gérer les documpents</h1>
      {/* Sous-titre */}
      <h2 className="text-xl font-bold text-gray-900 mb-6">Derniers documents</h2>
      {/* Tableau des documents */}
      <div className="bg-white shadow-sm rounded-lg overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-6 py-4 font-semibold text-gray-900">Type</th>
              <th className="px-6 py-4 font-semibold text-gray-900 text-center">Date de création</th>
              <th className="px-6 py-4 font-semibold text-gray-900 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc) => (
              <tr key={doc.id} className="border-b border-gray-200 last:border-b-0">
                <td className="px-6 py-4 text-gray-900 font-medium text-left">{doc.type}</td>
                <td className="px-6 py-4 text-gray-600 text-center">{doc.date}</td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => handleView(doc.id)}
                    className="text-blue-600 font-semibold hover:text-blue-800 mr-4"
                  >
                    voir
                  </button>
                  <button
                    onClick={() => handleDelete(doc.id)}
                    className="text-red-600 font-semibold hover:text-red-800"
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

export default DocumentsManagement;

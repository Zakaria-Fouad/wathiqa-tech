import React from "react";
import { HiOutlineDocumentText } from "react-icons/hi2";
import Button from "./Button";

function ApercuDocument() {
  return (
    <div className="bg-white min-h-screen flex flex-col ">
      
      {/* Titre principal */}
      <h1 className="text-4xl font-bold text-gray-900 mb-18 mt-15 ml-10">Aperçu du document</h1>
      {/* Carte d'aperçu */}
      <div className="flex justify-center items-center">
        <div className="bg-white border border-gray-800 rounded-lg p-12 max-w-xl w-full flex flex-col items-center shadow-lg">
          {/* Icône + nom du fichier */}
          <div className="flex items-center justify-center mb-8 gap-4">
            <HiOutlineDocumentText className="text-gray-700" size={44} />
            <span className="text-lg font-semibold text-gray-900">Contrat de location.pdf</span>
          </div>
          {/* Boutons d'action */}
          <div className="flex justify-center gap-4 mt-8 w-full">
            <button className="border border-gray-300 bg-white text-gray-700 rounded-xl px-6 py-3 font-medium hover:bg-gray-50 transition">Supprimer</button>
            <button className="border border-gray-300 bg-white text-gray-700 rounded-xl px-6 py-3 font-medium hover:bg-gray-50 transition">Modifier</button>
            <Button>Télécharger</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApercuDocument;

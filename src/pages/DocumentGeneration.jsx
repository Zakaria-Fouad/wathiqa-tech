import React from "react";
import { useParams } from "react-router-dom";
import { documentForms } from "../utils/documentForms";
import DynamicDocumentForm from "../components/DynamicDocumentForm";

// Génération de document
function DocumentGeneration() {
  const { documentType } = useParams();
  const config = documentForms[documentType] || documentForms[Object.keys(documentForms)[0]];

  return (
    <div className="flex flex-col items-center justify-center bg-white relative">
        <a href="/home" className="self-start mb-4 text-indigo-600 hover:underline text-base font-medium">
            &larr; Retour à l'accueil
        </a>
      <div className="flex flex-col items-center justify-center mt-24 bg-white">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Générer un {config.label}</h1>
        <DynamicDocumentForm config={config} />
      </div>
    </div>
  );
}

export default DocumentGeneration;

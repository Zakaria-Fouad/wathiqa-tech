import React from "react";
import { useParams } from "react-router-dom";
import { documentForms } from "../utils/documentForms";
import DynamicDocumentForm from "../components/DynamicDocumentForm";

// Génération de document
function DocumentGeneration() {
  const { documentType } = useParams();
  const config = documentForms[documentType] || documentForms[Object.keys(documentForms)[0]];

  return (
    <div className="max-w-4xl mx-auto py-8 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Générer un {config.label}</h1>
      <div className="bg-white rounded-2xl shadow p-8 w-full">
        <DynamicDocumentForm config={config} />
      </div>
    </div>
  );
}

export default DocumentGeneration;

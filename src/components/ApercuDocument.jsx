import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HiOutlineDocumentText } from "react-icons/hi2";
import Button from "./Button";
import { documentService } from "../services/documentService";
import { useLocation } from "react-router-dom";

const handleDownload = async (id) => {
  try {
    const blob = await documentService.download(id);
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'document.pdf'); // ou le nom dynamique
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  } catch (error) {
    alert("Erreur lors du téléchargement du PDF");
  }
};

function ApercuDocument() {
  const { id: documentId } = useParams();
  const [document, setDocument] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDocument() {
      setLoading(true);
      setError(null);
      try {
        const doc = await documentService.getOne(documentId);
        setDocument(doc.document);
      } catch (err) {
        setError("Impossible de charger le document.");
      } finally {
        setLoading(false);
      }
    }
    fetchDocument();
  }, [documentId]);

  if (loading) return <div className="text-center mt-12">Chargement du document...</div>;
  if (error) return <div className="text-center text-red-600 mt-12">{error}</div>;
  if (!document) return null;

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
            <span className="text-lg font-semibold text-gray-900">{document.title || 'Document.pdf'}</span>
          </div>
          {/* Affichage des informations principales du document */}
          <div className="flex flex-col w-full mb-4">
            <span className="text-gray-700 text-base mb-2 font-medium">Titre :</span>
            <div className="bg-gray-50 border rounded p-4 text-gray-800 text-sm mb-2">
              {document.title || 'Sans titre'}
            </div>
            {/* Ajoutez d'autres champs principaux si besoin, par exemple la date de création */}
            {document.created_at && (
              <>
                <span className="text-gray-700 text-base mb-2 font-medium">Créé le :</span>
                <div className="bg-gray-50 border rounded p-4 text-gray-800 text-sm mb-2">
                  {new Date(document.created_at).toLocaleString('fr-FR')}
                </div>
              </>
            )}
          </div>
          {/* Boutons d'action */}
          <div className="flex justify-center gap-4 mt-8 w-full">
            <button className="border border-gray-300 bg-white text-gray-700 rounded-xl px-6 py-3 font-medium hover:bg-gray-50 transition">Supprimer</button>
            <button className="border border-gray-300 bg-white text-gray-700 rounded-xl px-6 py-3 font-medium hover:bg-gray-50 transition">Modifier</button>
            <Button onClick={() => handleDownload(documentId)}>Télécharger</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApercuDocument;

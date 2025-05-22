import React from "react";

function ModalRechercheDocument({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30" 
         onClick={onClose}
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md"
           onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-bold mb-4">Recherche de document</h2>
        <input className="w-full border rounded px-3 py-2 mb-4" placeholder="Rechercher..." />
        <div className="flex justify-end gap-2">
          <button className="px-4 py-2 rounded bg-gray-200" onClick={onClose}>Fermer</button>
          <button className="px-4 py-2 rounded bg-indigo-600 text-white">Rechercher</button>
        </div>
      </div>
    </div>
  );
}

export default ModalRechercheDocument;

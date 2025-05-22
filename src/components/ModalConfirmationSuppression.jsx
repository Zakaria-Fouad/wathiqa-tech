import React from "react";

function ModalConfirmationSuppression({ open, onClose, onConfirm }) {
//   if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md p-8 flex flex-col items-center animate-fade-in">
        {/* Bouton de fermeture */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl focus:outline-none"
          onClick={onClose}
          aria-label="Fermer"
        >
          &times;
        </button>
        {/* Icône d'alerte rouge */}
        <div className="flex items-center justify-center mb-4 mt-2">
          <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="12" fill="none" />
              <path d="M8 8l8 8M16 8l-8 8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        {/* Titre */}
        <h2 className="text-lg font-bold text-gray-900 mb-2 text-center">Confirmer la suppression</h2>
        {/* Message */}
        <p className="text-base text-gray-700 mb-8 text-center">Êtes-vous sûr de vouloir supprimer ce document</p>
        {/* Boutons */}
        <div className="flex w-full gap-4 mt-2">
          <button
            className="flex-1 border border-gray-900 text-gray-900 font-semibold py-2 rounded-lg bg-white hover:bg-gray-100 transition-colors"
            onClick={onClose}
          >
            Annuler
          </button>
          <button
            className="flex-1 bg-red-600 text-white font-semibold py-2 rounded-lg hover:bg-red-700 transition-colors"
            onClick={onConfirm}
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalConfirmationSuppression;

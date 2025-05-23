import React from 'react';
import Button from './Button';

const AccountForm = () => {
  return (
    <div className="bg-blue-50 rounded-xl shadow p-8 max-w-2xl mx-auto mt-6">
      {/* Titre principal */}
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-left">Mon Profil</h1>
      {/* Section informations personnelles */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">Informations personnelles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {/* Nom complet */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-900 mb-1">Nom complet</label>
            <span className="text-gray-600 text-base bg-white rounded px-4 py-2 border border-gray-200">Emma Martinez</span>
          </div>
          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-900 mb-1">Email</label>
            <span className="text-gray-600 text-base bg-white rounded px-4 py-2 border border-gray-200">Emma.Martinez@gmail.com</span>
          </div>
          {/* Mot de passe */}
          <div className="flex flex-col md:col-span-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold text-gray-900 mb-1">Mot de passe</label>
              <button type="button" className="text-blue-600 text-sm font-semibold hover:underline">Changer le mot de passe &gt;</button>
            </div>
          </div>
          {/* Date de création */}
          <div className="flex flex-col md:col-span-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold text-gray-900 mb-1">Date de création</label>
              <span className="text-gray-600 text-base">22 avril 2025</span>
            </div>
          </div>
        </div>
      </div>
      {/* Bouton Modifier */}
      <div className="flex justify-end mt-8">
        <Button>Modifier</Button>
      </div>
    </div>
  );
};

export default AccountForm;

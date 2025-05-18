// Schéma de formulaire dynamique (exemple)
export const formSchema = {
  contratLocation: {
    fields: [
      { name: 'nomProprietaire', label: 'Nom du propriétaire', type: 'text', required: true },
      { name: 'nomLocataire', label: 'Nom du locataire', type: 'text', required: true },
      { name: 'adresseBien', label: 'Adresse du bien', type: 'text', required: true },
      // ...
    ]
  },
  // ...autres types de documents
};

// Exemple de configuration centralisée pour les formulaires dynamiques
export const documentForms = {
  "contrat-civil": {
    label: "Contrat Civil",
    defaultType: "location",
    types: {
      location: [
        { name: "nomLocataire", label: "Nom du locataire", type: "text" },
        { name: "prenomLocataire", label: "Prénom du locataire", type: "text" },
        { name: "adresseLocataire", label: "Adresse du locataire", type: "text" },
        { name: "nomBailleur", label: "Nom du bailleur", type: "text" },
        { name: "adresseBailleur", label: "Adresse du bailleur", type: "text" },
        { name: "adresseBien", label: "Adresse du bien loué", type: "text" },
        { name: "typeBien", label: "Type de bien (appartement, maison...)", type: "text" },
        { name: "superficie", label: "Superficie (en m²)", type: "number" },
        { name: "loyerMensuel", label: "Loyer mensuel (€)", type: "number" },
        { name: "chargesMensuelles", label: "Charges mensuelles (€)", type: "number" },
        { name: "dateDebut", label: "Date de début du contrat", type: "date" },
        { name: "dateFin", label: "Date de fin du contrat", type: "date" },
        { name: "dureePreavis", label: "Durée du préavis (en mois)", type: "number" },
        { name: "montantDepotGarantie", label: "Dépôt de garantie (€)", type: "number" },
        { name: "modalitePaiement", label: "Modalité de paiement", type: "text" },
        { name: "usageBien", label: "Usage du bien (habitation, professionnel...)", type: "text" },
     ],

      vente: [
        // Informations sur l'acheteur
        { name: "nomAcheteur", label: "Nom de l'acheteur", type: "text" },
        { name: "prenomAcheteur", label: "Prénom de l'acheteur", type: "text" },
        { name: "adresseAcheteur", label: "Adresse de l'acheteur", type: "text" },

        // Informations sur le vendeur
        { name: "nomVendeur", label: "Nom du vendeur", type: "text" },
        { name: "prenomVendeur", label: "Prénom du vendeur", type: "text" },
        { name: "adresseVendeur", label: "Adresse du vendeur", type: "text" },

        // Détails du bien
        { name: "typeBien", label: "Type de bien (maison, appartement...)", type: "text" },
        { name: "adresseBien", label: "Adresse du bien", type: "text" },
        { name: "descriptionBien", label: "Description du bien", type: "text" },
        { name: "superficie", label: "Superficie (en m²)", type: "number" },

        // Détails financiers
        { name: "prixVente", label: "Prix de vente (€)", type: "number" },
        { name: "montantAcompte", label: "Montant de l’acompte (€)", type: "number" },
        { name: "modalitePaiement", label: "Modalité de paiement", type: "text" },

        // Dates
        { name: "dateSignature", label: "Date de signature du contrat", type: "date" },
        { name: "dateTransfert", label: "Date de transfert de propriété", type: "date" },

        // Divers
        { name: "notaire", label: "Nom du notaire", type: "text" },
        { name: "conditionsSuspensives", label: "Conditions suspensives", type: "text" }
        ],
    },
  },
  "contrat-commercial": {
    label: "Contrat Commercial",
    defaultType: "prestation",
    types: {
      prestation: [
        { name: "nomClient", label: "Nom du client", type: "text" },
        { name: "descriptionService", label: "Description du service", type: "text" },
      ],
      sousTraitance: [
        { name: "nomSousTraitant", label: "Nom du sous-traitant", type: "text" },
        { name: "montant", label: "Montant", type: "number" },
      ],
    },
  },
};

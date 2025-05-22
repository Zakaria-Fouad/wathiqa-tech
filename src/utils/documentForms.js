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

        colocation: [
            { name: "nomColocataire1", label: "Nom du colocataire 1", type: "text" },
            { name: "prenomColocataire1", label: "Prénom du colocataire 1", type: "text" },
            { name: "nomColocataire2", label: "Nom du colocataire 2", type: "text" },
            { name: "prenomColocataire2", label: "Prénom du colocataire 2", type: "text" },
            { name: "nomBailleur", label: "Nom du bailleur", type: "text" },
            { name: "adresseBailleur", label: "Adresse du bailleur", type: "text" },
            { name: "adresseLogement", label: "Adresse du logement", type: "text" },
            { name: "typeLogement", label: "Type de logement (appartement, maison...)", type: "text" },
            { name: "superficieLogement", label: "Superficie du logement (en m²)", type: "number" },
            { name: "loyerMensuel", label: "Loyer mensuel total (€)", type: "number" },
            { name: "partLoyerColocataire1", label: "Part du loyer - colocataire 1 (€)", type: "number" },
            { name: "partLoyerColocataire2", label: "Part du loyer - colocataire 2 (€)", type: "number" },
            { name: "chargesMensuelles", label: "Charges mensuelles (€)", type: "number" },
            { name: "montantCaution", label: "Montant de la caution (€)", type: "number" },
            { name: "dateDebutBail", label: "Date de début du bail", type: "date" },
            { name: "dateFinBail", label: "Date de fin du bail (facultatif)", type: "date" },
            { name: "reglesVieCommune", label: "Règles de vie commune (facultatif)", type: "text" },
            { name: "clauseSolidarite", label: "Clause de solidarité entre colocataires", type: "checkbox" }
        ],

        vente: [
            { name: "nomAcheteur", label: "Nom de l'acheteur", type: "text" },
            { name: "prenomAcheteur", label: "Prénom de l'acheteur", type: "text" },
            { name: "adresseAcheteur", label: "Adresse de l'acheteur", type: "text" },
            { name: "nomVendeur", label: "Nom du vendeur", type: "text" },
            { name: "prenomVendeur", label: "Prénom du vendeur", type: "text" },
            { name: "adresseVendeur", label: "Adresse du vendeur", type: "text" },
            { name: "typeBien", label: "Type de bien (maison, appartement...)", type: "text" },
            { name: "adresseBien", label: "Adresse du bien", type: "text" },
            { name: "descriptionBien", label: "Description du bien", type: "text" },
            { name: "superficie", label: "Superficie (en m²)", type: "number" },
            { name: "prixVente", label: "Prix de vente (€)", type: "number" },
            { name: "montantAcompte", label: "Montant de l’acompte (€)", type: "number" },
            { name: "modalitePaiement", label: "Modalité de paiement", type: "text" },
            { name: "dateSignature", label: "Date de signature du contrat", type: "date" },
            { name: "dateTransfert", label: "Date de transfert de propriété", type: "date" },
            { name: "notaire", label: "Nom du notaire", type: "text" },
            { name: "conditionsSuspensives", label: "Conditions suspensives", type: "text" }        
        ],

        pret: [
            { name: "nomPreteur", label: "Nom du prêteur", type: "text" },
            { name: "nomEmprunteur", label: "Nom de l'emprunteur", type: "text" },
            { name: "montantPret", label: "Montant du prêt (€)", type: "number" },
            { name: "datePret", label: "Date du prêt", type: "date" },
            { name: "dateRemboursement", label: "Date de remboursement prévue", type: "date" },
            { name: "modalitesRemboursement", label: "Modalités de remboursement", type: "text" },
            { name: "interets", label: "Taux d'intérêt (%)", type: "number" },
            { name: "objetPret", label: "Objet du prêt", type: "text" }
        ],

        reconnaissanceDette: [
            { name: "nomDebiteur", label: "Nom du débiteur", type: "text" },
            { name: "nomCreancier", label: "Nom du créancier", type: "text" },
            { name: "montantDette", label: "Montant de la dette (€)", type: "number" },
            { name: "dateReconnaissance", label: "Date de reconnaissance de dette", type: "date" },
            { name: "modalitesPaiement", label: "Modalités de paiement", type: "text" },
            { name: "lieuSignature", label: "Lieu de signature", type: "text" }
        ],

        prestationServices: [
            { name: "nomPrestataire", label: "Nom du prestataire", type: "text" },
            { name: "nomClient", label: "Nom du client", type: "text" },
            { name: "descriptionService", label: "Description de la prestation", type: "text" },
            { name: "dateDebut", label: "Date de début de la prestation", type: "date" },
            { name: "dateFin", label: "Date de fin de la prestation", type: "date" },
            { name: "montantPrestation", label: "Montant de la prestation (€)", type: "number" },
            { name: "modalitesPaiement", label: "Modalités de paiement", type: "text" },
            { name: "lieuExecution", label: "Lieu d'exécution du service", type: "text" },
            { name: "conditionsAnnulation", label: "Conditions d'annulation", type: "text" }
        ]
    },
  },
  "contrat-commercial": {
    label: "Contrat Commercial",
    defaultType: "prestationServicesEntreprise",
    types: {
        prestationServicesEntreprise: [
            { name: "nomEntreprisePrestataire", label: "Nom de l’entreprise prestataire", type: "text" },
            { name: "nomEntrepriseClient", label: "Nom de l’entreprise cliente", type: "text" },
            { name: "descriptionServices", label: "Description des services fournis", type: "text" },
            { name: "dateDebut", label: "Date de début de la prestation", type: "date" },
            { name: "dateFin", label: "Date de fin de la prestation", type: "date" },
            { name: "montant", label: "Montant du contrat (€)", type: "number" },
            { name: "modalitesPaiement", label: "Modalités de paiement", type: "text" },
            { name: "conditionsResiliation", label: "Conditions de résiliation", type: "text" }
        ],

        sousTraitance: [
            { name: "donneurOrdre", label: "Nom de l'entreprise donneur d'ordre", type: "text" },
            { name: "sousTraitant", label: "Nom du sous-traitant", type: "text" },
            { name: "objetSousTraitance", label: "Objet du contrat de sous-traitance", type: "text" },
            { name: "delaisExecution", label: "Délais d’exécution", type: "text" },
            { name: "montant", label: "Montant (€)", type: "number" },
            { name: "modalitesPaiement", label: "Modalités de paiement", type: "text" },
            { name: "obligationsConfidentialite", label: "Obligations de confidentialité", type: "text" }
        ],

        venteCommerciale: [
            { name: "vendeur", label: "Nom de l’entreprise vendeuse", type: "text" },
            { name: "acheteur", label: "Nom de l’entreprise acheteuse", type: "text" },
            { name: "descriptionMarchandises", label: "Description des marchandises", type: "text" },
            { name: "quantite", label: "Quantité", type: "number" },
            { name: "prixUnitaire", label: "Prix unitaire (€)", type: "number" },
            { name: "montantTotal", label: "Montant total (€)", type: "number" },
            { name: "conditionsLivraison", label: "Conditions de livraison", type: "text" },
            { name: "modalitesPaiement", label: "Modalités de paiement", type: "text" }
        ],

        bailCommercial: [
            { name: "bailleur", label: "Nom du bailleur", type: "text" },
            { name: "locataire", label: "Nom du locataire", type: "text" },
            { name: "adresseLocal", label: "Adresse du local commercial", type: "text" },
            { name: "activite", label: "Activité exercée", type: "text" },
            { name: "dureeBail", label: "Durée du bail (années)", type: "number" },
            { name: "montantLoyer", label: "Montant du loyer mensuel (€)", type: "number" },
            { name: "charges", label: "Charges et taxes", type: "text" },
            { name: "modalitesRenouvellement", label: "Modalités de renouvellement", type: "text" }
        ],

        achatMaterielPro: [
            { name: "acheteur", label: "Nom de l’acheteur", type: "text" },
            { name: "vendeur", label: "Nom du fournisseur", type: "text" },
            { name: "descriptionMateriel", label: "Description du matériel", type: "text" },
            { name: "quantite", label: "Quantité", type: "number" },
            { name: "prixUnitaire", label: "Prix unitaire (€)", type: "number" },
            { name: "montantTotal", label: "Montant total (€)", type: "number" },
            { name: "garantie", label: "Conditions de garantie", type: "text" },
            { name: "modalitesLivraison", label: "Modalités de livraison", type: "text" }
        ],

        partenariatCommercial: [
            { name: "partenaire1", label: "Nom du premier partenaire", type: "text" },
            { name: "partenaire2", label: "Nom du second partenaire", type: "text" },
            { name: "objetPartenariat", label: "Objet du partenariat", type: "text" },
            { name: "modalitesCollaboration", label: "Modalités de collaboration", type: "text" },
            { name: "dureePartenariat", label: "Durée du partenariat", type: "text" },
            { name: "partageRevenus", label: "Modalités de partage des revenus", type: "text" },
            { name: "confidentialite", label: "Clause de confidentialité", type: "text" }
        ],
        nonConcurrence: [
            { name: "entreprise", label: "Nom de l’entreprise", type: "text" },
            { name: "employe", label: "Nom de la personne concernée", type: "text" },
            { name: "duree", label: "Durée de la clause (mois)", type: "number" },
            { name: "zoneGeographique", label: "Zone géographique couverte", type: "text" },
            { name: "activitesInterdites", label: "Activités interdites", type: "text" },
            { name: "indemnite", label: "Indemnité éventuelle (€)", type: "number" }
        ],

        lettreIntention: [
            { name: "expediteur", label: "Nom de l’expéditeur", type: "text" },
            { name: "destinataire", label: "Nom du destinataire", type: "text" },
            { name: "objetLettre", label: "Objet de la lettre", type: "text" },
            { name: "contexte", label: "Contexte de l’intention", type: "text" },
            { name: "conditions", label: "Conditions préalables", type: "text" },
            { name: "engagements", label: "Engagements envisagés", type: "text" },
            { name: "date", label: "Date de rédaction", type: "date" }
        ]
    },
  },
  "document-administratif": {
    label: "Document Administratif",
    defaultType: "miseEnDemeure",
    types: {
        miseEnDemeure: [
            { name: "expediteur", label: "Nom de l’expéditeur", type: "text" },
            { name: "destinataire", label: "Nom du destinataire", type: "text" },
            { name: "objetLitige", label: "Objet de la mise en demeure", type: "text" },
            { name: "dateEcheance", label: "Date d’échéance", type: "date" },
            { name: "montantReclame", label: "Montant réclamé (le cas échéant)", type: "number" },
            { name: "detailsObligation", label: "Détail de l’obligation non respectée", type: "text" },
            { name: "date", label: "Date de la lettre", type: "date" }
        ],

        resiliation: [
            { name: "expediteur", label: "Nom du titulaire du contrat", type: "text" },
            { name: "destinataire", label: "Nom du fournisseur / prestataire", type: "text" },
            { name: "numeroContrat", label: "Numéro de contrat ou de client", type: "text" },
            { name: "motif", label: "Motif de la résiliation (facultatif)", type: "text" },
            { name: "dateEffet", label: "Date de prise d'effet de la résiliation", type: "date" },
            { name: "adresse", label: "Adresse de l’expéditeur", type: "text" },
            { name: "date", label: "Date de rédaction", type: "date" }
        ],

        attestationResidence: [
            { name: "nom", label: "Nom complet", type: "text" },
            { name: "adresse", label: "Adresse de résidence", type: "text" },
            { name: "dateNaissance", label: "Date de naissance", type: "date" },
            { name: "lieuNaissance", label: "Lieu de naissance", type: "text" },
            { name: "dateResidenceDepuis", label: "Réside à cette adresse depuis", type: "date" },
            { name: "date", label: "Date de l’attestation", type: "date" }
        ],

        declarationHonneur: [
            { name: "nom", label: "Nom complet du déclarant", type: "text" },
            { name: "dateNaissance", label: "Date de naissance", type: "date" },
            { name: "adresse", label: "Adresse", type: "text" },
            { name: "contenuDeclaration", label: "Objet de la déclaration sur l'honneur", type: "text" },
            { name: "lieu", label: "Lieu de la déclaration", type: "text" },
            { name: "date", label: "Date de la déclaration", type: "date" }
        ],

        demandeConge: [
            { name: "nomSalarie", label: "Nom du salarié", type: "text" },
            { name: "poste", label: "Poste occupé", type: "text" },
            { name: "typeConge", label: "Type de congé demandé", type: "text" },
            { name: "dateDebut", label: "Date de début du congé", type: "date" },
            { name: "dateFin", label: "Date de fin du congé", type: "date" },
            { name: "motif", label: "Motif du congé (facultatif)", type: "text" },
            { name: "dateDemande", label: "Date de la demande", type: "date" }
        ],

        certificatTravail: [
            { name: "nomEmploye", label: "Nom du salarié", type: "text" },
            { name: "poste", label: "Poste occupé", type: "text" },
            { name: "dateDebut", label: "Date d’entrée", type: "date" },
            { name: "dateFin", label: "Date de départ", type: "date" },
            { name: "nomEmployeur", label: "Nom de l’employeur", type: "text" },
            { name: "adresseEmployeur", label: "Adresse de l’entreprise", type: "text" },
            { name: "date", label: "Date de délivrance du certificat", type: "date" }
        ],

        procuration: [
            { name: "nomMandant", label: "Nom du mandant (donneur de procuration)", type: "text" },
            { name: "nomMandataire", label: "Nom du mandataire (représentant)", type: "text" },
            { name: "objet", label: "Objet de la procuration", type: "text" },
            { name: "dateDebut", label: "Date de début de validité", type: "date" },
            { name: "dateFin", label: "Date de fin de validité", type: "date" },
            { name: "lieu", label: "Lieu de signature", type: "text" },
            { name: "date", label: "Date de la procuration", type: "date" }
        ],
        autorisationParentale: [
            { name: "nomParent", label: "Nom du parent/tuteur", type: "text" },
            { name: "nomEnfant", label: "Nom de l’enfant", type: "text" },
            { name: "objet", label: "Objet de l’autorisation (voyage, activité…)", type: "text" },
            { name: "dateDebut", label: "Date de début de l’autorisation", type: "date" },
            { name: "dateFin", label: "Date de fin de l’autorisation", type: "date" },
            { name: "adresse", label: "Adresse du parent", type: "text" },
            { name: "date", label: "Date de la lettre", type: "date" }
        ]
    }
  },
  "document-rh": {
    label: "Document RH/Emploi",
    defaultType: "contratCDI",
    types: {
        contratCDI: [
            { name: "nomEmploye", label: "Nom du salarié", type: "text" },
            { name: "poste", label: "Poste occupé", type: "text" },
            { name: "nomEmployeur", label: "Nom de l’employeur", type: "text" },
            { name: "adresseEmployeur", label: "Adresse de l’entreprise", type: "text" },
            { name: "dateDebut", label: "Date de début du contrat", type: "date" },
            { name: "salaire", label: "Salaire mensuel brut", type: "number" },
            { name: "periodeEssai", label: "Durée de la période d’essai", type: "text" }
        ],

        contratCDD: [
            { name: "nomEmploye", label: "Nom du salarié", type: "text" },
            { name: "poste", label: "Poste occupé", type: "text" },
            { name: "nomEmployeur", label: "Nom de l’employeur", type: "text" },
            { name: "adresseEmployeur", label: "Adresse de l’entreprise", type: "text" },
            { name: "dateDebut", label: "Date de début du contrat", type: "date" },
            { name: "dateFin", label: "Date de fin du contrat", type: "date" },
            { name: "motifCDD", label: "Motif du recours au CDD", type: "text" },
            { name: "salaire", label: "Salaire mensuel brut", type: "number" }
        ],

        conventionStage: [
            { name: "nomStagiaire", label: "Nom du stagiaire", type: "text" },
            { name: "etablissement", label: "Nom de l’établissement d’enseignement", type: "text" },
            { name: "entreprise", label: "Nom de l’entreprise", type: "text" },
            { name: "adresseEntreprise", label: "Adresse de l’entreprise", type: "text" },
            { name: "tuteurEntreprise", label: "Nom du tuteur en entreprise", type: "text" },
            { name: "dateDebut", label: "Date de début du stage", type: "date" },
            { name: "dateFin", label: "Date de fin du stage", type: "date" },
            { name: "indemnisation", label: "Montant de l’indemnité (le cas échéant)", type: "number" }
        ],

        attestationSalaire: [
            { name: "nomEmploye", label: "Nom du salarié", type: "text" },
            { name: "poste", label: "Poste occupé", type: "text" },
            { name: "periode", label: "Période concernée", type: "text" },
            { name: "salaireBrut", label: "Salaire mensuel brut", type: "number" },
            { name: "nomEmployeur", label: "Nom de l’employeur", type: "text" },
            { name: "date", label: "Date de l’attestation", type: "date" }
        ],

        attestationFinStage: [
            { name: "nomStagiaire", label: "Nom du stagiaire", type: "text" },
            { name: "poste", label: "Poste ou mission effectuée", type: "text" },
            { name: "dateDebut", label: "Date de début du stage", type: "date" },
            { name: "dateFin", label: "Date de fin du stage", type: "date" },
            { name: "nomEntreprise", label: "Nom de l’entreprise", type: "text" },
            { name: "adresseEntreprise", label: "Adresse de l’entreprise", type: "text" },
            { name: "date", label: "Date de délivrance de l’attestation", type: "date" }
        ],

        lettreEmbauche: [
            { name: "nomCandidat", label: "Nom du salarié", type: "text" },
            { name: "poste", label: "Poste proposé", type: "text" },
            { name: "typeContrat", label: "Type de contrat (CDD/CDI)", type: "text" },
            { name: "dateDebut", label: "Date de début du contrat", type: "date" },
            { name: "salaire", label: "Salaire proposé", type: "number" },
            { name: "nomEntreprise", label: "Nom de l’entreprise", type: "text" },
            { name: "date", label: "Date de rédaction", type: "date" }
        ],

        lettreDemission: [
            { name: "nomSalarie", label: "Nom du salarié", type: "text" },
            { name: "poste", label: "Poste occupé", type: "text" },
            { name: "dateDebutContrat", label: "Date de début du contrat", type: "date" },
            { name: "dateDemission", label: "Date de la démission", type: "date" },
            { name: "respectPreavis", label: "Préavis respecté (oui/non)", type: "text" },
            { name: "nomEmployeur", label: "Nom de l’employeur", type: "text" }
        ],

        lettreLicenciement: [
            { name: "nomSalarie", label: "Nom du salarié", type: "text" },
            { name: "poste", label: "Poste occupé", type: "text" },
            { name: "dateEntree", label: "Date d’entrée dans l’entreprise", type: "date" },
            { name: "motifLicenciement", label: "Motif du licenciement", type: "text" },
            { name: "dateEffet", label: "Date d’effet du licenciement", type: "date" },
            { name: "respectPreavis", label: "Préavis accordé (oui/non)", type: "text" },
            { name: "nomEmployeur", label: "Nom de l’employeur", type: "text" },
            { name: "date", label: "Date de la lettre", type: "date" }
        ]
    }
  },
};

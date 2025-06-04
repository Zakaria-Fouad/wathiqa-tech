
📁 README.md

```markdown
# 🧾 Générateur de Documents Dynamiques

Une application web moderne permettant aux utilisateurs de générer, personnaliser, gérer et télécharger une variété de documents juridiques, administratifs ou professionnels à partir de modèles préétablis.

---

## 🚀 Objectif du projet

Offrir une interface simple et intuitive pour :

- Générer des documents personnalisés selon type et sous-type
- Télécharger, modifier ou supprimer les documents générés
- Accéder à l’historique de génération
- Naviguer facilement à travers une interface claire et responsive

---

## 🛠️ Stack Technique

| Technologie     | Rôle                                                                 |
|----------------|----------------------------------------------------------------------|
| React          | Librairie JS pour construire l'interface utilisateur                 |
| Vite           | Outil de bundling ultra-rapide pour le développement                 |
| Tailwind CSS   | Framework CSS utilitaire pour un design rapide et responsive         |
| React Router   | Gestion du routage entre les pages                                   |
| Context API    | Gestion de l’état global pour l'utilisateur et le thème              |
| Backend (API)  | Gère l’authentification, la génération de documents, et la persistance des données |

---

## 📁 Structure du projet

```


📁 Structure projet (React + Vite + Tailwind CSS) :

my-app/
├── public/                             # Fichiers statiques accessibles directement
│   └── favicon.ico
├── src/
│   ├── assets/                         # Images, icônes, logos
│   │   └── logo.svg
│   │
│   ├── components/                     # Composants UI réutilisables
│   │   ├── headers/
│   │   │   ├── HeaderA.jsx            # Header pour landing, mentions légales…
│   │   │   ├── HeaderB.jsx            # Header après connexion (avec email utilisateur)
│   │   │   └── HeaderC.jsx            # Header minimal pour auth (logo uniquement)
│   │   ├── Footer.jsx
│   │   ├── Sidebar.jsx
        ├── AccountForm.jsx
│   │   ├── CardDocument.jsx
        ├── DynamicDocumentForm.jsx
│   │   ├── FormulaireDocument.jsx
│   │   ├── SelectSousType.jsx
│   │   ├── HistoriqueDocuments.jsx
│   │   ├── ApercuDocument.jsx
│   │   ├── Loader.jsx
│   │   ├── Button.jsx
        ├── ModalConfirmationSuppression.jsx
│   │   └── ModalRechercheDocument.jsx
│   │
│   ├── layouts/                        # Layouts globaux par type de page
│   │   ├── PublicLayout.jsx           # HeaderA + Footer
│   │   ├── PrivateLayout.jsx          # Sidebar + HeaderB
│   │   └── AuthLayout.jsx             # HeaderC uniquement
│   │
│   ├── pages/                          # Pages principales de l’app
│   │   ├── Landing.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
        ├── AccountForm.jsx
│   │   ├── ForgotPassword.jsx
│   │   ├── MentionsLegales.jsx
│   │   ├── ConditionsUtilisation.jsx
│   │   ├── PolitiqueConfidentialite.jsx
│   │   ├── Home.jsx
│   │   ├── DocumentGeneration.jsx
│   │   └── DocumentDetails.jsx
│   │
│   ├── routes/                         # Définition des routes
│   │   └── AppRouter.jsx
│   │
│   ├── context/                        # Context API
│   │   ├── AuthContext.jsx
│   │   └── DocumentContext.jsx
│   │
│   ├── services/                       # Appels API backend
│   │   ├── authService.js
│   │   └── documentService.js
│   │
│   ├── utils/                          # Fichiers utilitaires
│   │   └── formSchema.js              # Schémas des formulaires dynamiques
│   │
│   ├── App.jsx                         # Composant principal
│   ├── main.jsx                        # Point d’entrée de l’application
│   └── index.css                       # CSS global (intègre Tailwind)
│
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md

```

---

## 📄 Pages de l’application

### 🌐 Interface publique

- LandingPage : présentation générale (HeaderA, description, bouton Connexion)
- Mentions Légales & Conditions Générales d’Utilisation
- Politique de Confidentialité

Toutes ces pages utilisent le HeaderA (logo + navigation) et un footer commun.

### 🔐 Pages d’authentification (HeaderC uniquement avec logo)

- LoginPage : champ email, mot de passe, lien mot de passe oublié, lien vers inscription
- RegisterPage : formulaire d’inscription
- ForgotPasswordPage : récupération du mot de passe

### 🏠 Interface authentifiée

- HomePage : affichage des 4 cartes types de documents
  - Sidebar : toggle (burger), bouton recherche, historique des documents
  - HeaderB : logo + profil utilisateur (email)
- DocumentFormPage : formulaire dynamique selon le type et le sous-type
  - Input texte / select selon modèle
  - Bouton Générer avec animation de chargement
  - Résultat : possibilité de télécharger / modifier / supprimer

---

## ✅ Fonctionnalités clés

- Authentification et navigation protégée
- Interface utilisateur responsive
- Sidebar dynamique avec historique
- Formulaires dynamiques avec adaptation automatique aux sous-types
- Génération de document avec animation de chargement
- Téléchargement, modification, suppression des documents
- Intégration simple avec des APIs backend

---

## 🗂️ Types de documents générés

### 1. Contrats Civils (entre particuliers)

- Contrat de location (habitation)
- Contrat de colocation
- Contrat de prêt (entre amis ou familial)
- Contrat de vente de bien mobilier
- Reconnaissance de dette
- Contrat de prestation de services (soutien scolaire, bricolage…)

### 2. Contrats Commerciaux (professionnels/entreprises)

- Contrat de prestation de services (entreprises)
- Contrat de sous-traitance
- Contrat de vente commerciale
- Contrat de bail commercial
- Contrat d’achat de matériel professionnel
- Contrat de partenariat commercial
- Accord de non-concurrence
- Lettre d’intention (LOI)

### 3. Documents Administratifs / Officiels

- Lettre de mise en demeure
- Lettre de résiliation
- Attestation de résidence
- Déclaration sur l’honneur
- Demande de congé
- Certificat de travail
- Procuration simple
- Lettre d’autorisation parentale

### 4. Documents RH / Emploi

- Contrat de travail (CDD)
- Contrat de travail (CDI)
- Convention de stage
- Attestation de salaire
- Attestation de fin de stage
- Lettre d’embauche
- Lettre de démission
- Lettre de licenciement

---

## 🔗 Navigation

| Page                     | Accès       | Composants inclus                        |
|--------------------------|-------------|------------------------------------------|
| /                        | Public      | HeaderA, Footer, Description, CTA Connexion |
| /login                   | Public      | HeaderC, Formulaire connexion            |
| /register                | Public      | HeaderC, Formulaire inscription          |
| /forgot-password         | Public      | HeaderC, Formulaire récupération         |
| /home                    | Privé       | HeaderB, Sidebar, Cartes                 |
| /generate/:documentType  | Privé       | Formulaire dynamique, gestion des actions|
| /mentions-legales        | Public      | HeaderA, Footer                          |
| /politique-confidentialite | Public    | HeaderA, Footer                          |

---

4. Structure des fichiers Tailwind :
- index.css : contient les directives @tailwind base, components, utilities
- Utilisation de classes utilitaires directement dans les composants

---

## 🧠 Bonnes pratiques

- Utilisation de composants réutilisables
- Séparation claire entre logique d’UI (front-end) et logique métier (API backend)
- Respect de l’accessibilité et du responsive design
- Utilisation cohérente du système de routing
- Modularité des fichiers (pages, layouts, services…)

---

## 📌 Notes

- L’application ne contient pas de logique métier en front-end (authentification, génération… traités via API)
- Le formulaire s’adapte automatiquement selon le type/sous-type sélectionné
- Historique stocké et affiché dynamiquement dans la sidebar

---

## 📃 Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus d’informations.

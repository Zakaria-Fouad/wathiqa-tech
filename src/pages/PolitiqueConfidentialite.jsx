import React from "react";
import HeaderB from "../components/headers/HeaderB";
import Footer from "../components/Footer";

function PolitiqueConfidentialite() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <HeaderB />
      <main className="flex-1 max-w-4xl mx-auto px-6 py-12 mt-8 mb-8">
        <h1 className="text-3xl font-bold text-center mb-16 text-gray-900">
          Politique de confidentialité
        </h1>

        {/* 1. Introduction */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">
            1. Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Chez WathiqaTech, la protection de vos données personnelles est une
            priorité. Nous nous engageons à respecter la confidentialité de vos
            informations et à les traiter dans le strict respect de la loi
            marocaine n°09-08 relative à la protection des données à caractère
            personnel.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cette politique explique quelles données sont collectées, comment elles
            sont utilisées, et quels sont vos droits en tant qu’utilisateur.
          </p>
        </section>

        {/* 2. Données collectées */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">
            2. Données collectées
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Nom, prénom</li>
            <li>Adresse e-mail</li>
            <li>
              Données contractuelles (nom du propriétaire/locataire, adresses,
              montants, etc.)
            </li>
            <li>Informations extraites via OCR (photo CIN, documents scannés)</li>
          </ul>
        </section>

        {/* 3. Finalités de la collecte */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">
            3. Finalités de la collecte
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Les données collectées sont utilisées pour :
          </p>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>
              Génération de contrats personnalisés à la demande de l'utilisateur
            </li>
            <li>Amélioration de l'expérience utilisateur</li>
            <li>Statistiques internes (navigation, fréquence d'usage)</li>
            <li>Archivage temporaire dans l'historique utilisateur</li>
          </ul>
        </section>

        {/* 4. Conservation des données */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">
            4. Conservation des données
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Vos données sont conservées pour une durée maximale de 30 jours, sauf
            obligation légale contraire ou demande expresse de suppression.
          </p>
        </section>

        {/* 5. Partage des données */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">
            5. Partage des données
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Vos données ne sont jamais vendues ni communiquées à des tiers, sauf
            obligation légale ou accord explicite de votre part.
          </p>
        </section>

        {/* 6. Sécurité des données */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">
            6. Sécurité des données
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nous mettons en œuvre les mesures suivantes pour garantir la sécurité
            de vos informations :
          </p>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Connexions sécurisées via HTTPS</li>
            <li>Chiffrement des données sensibles</li>
            <li>
              Stockage sécurisé (base de données protégée par authentification et
              pare-feu)
            </li>
            <li>Journalisation des accès pour détecter toute anomalie</li>
          </ul>
        </section>

        {/* 7. Vos droits */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">
            7. Vos droits
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Conformément à la loi marocaine, vous disposez des droits suivants
            concernant vos données personnelles :
          </p>
          <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-4">
            <li>Droit d'accès à vos données</li>
            <li>Droit de rectification</li>
            <li>Droit à l'effacement (droit à l'oubli)</li>
            <li>Droit d'opposition au traitement</li>
            <li>Droit de limitation du traitement</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pour exercer ces droits, contactez-nous à l’adresse suivante :{" "}
            <a
              href="mailto:privacy@wathiqatech.ma"
              className="text-blue-600 underline"
            >
              privacy@wathiqatech.ma
            </a>
          </p>
        </section>

        {/* 8. Modification de la politique */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">
            8. Modification de la politique
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cette politique de confidentialité peut être modifiée à tout moment
            pour s’adapter à l’évolution de nos services ou à la législation en
            vigueur.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Toute modification importante sera notifiée aux utilisateurs par email
            ou via l’application.
          </p>
          <div className="text-sm text-gray-600 italic">
            Dernière mise à jour : 10 mai 2025
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default PolitiqueConfidentialite;

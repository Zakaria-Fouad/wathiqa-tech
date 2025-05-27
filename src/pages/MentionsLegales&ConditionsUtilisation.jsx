import React from "react";
import HeaderB from "../components/headers/HeaderB";
import Footer from "../components/Footer";

// Mentions légales
function MentionsLegales() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <HeaderB />
      <main className="flex-1 max-w-4xl mx-auto px-4 py-12 mt-8 mb-8">
        <h1 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Mentions légales & Conditions générales d'utilisation
        </h1>

        {/* Informations légales */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6 text-gray-900">
            Informations légales
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Nom de l'application :{" "}
            <span className="font-medium">WathiqaTech</span>
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Éditeur : Équipe projet PFC – École SUPMTI
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Hébergeur : Render.com / Vercel
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Email de contact :{" "}
            <a
              href="mailto:contact@jurisgenie.ma"
              className="text-blue-600 underline"
            >
              contact@jurisgenie.ma
            </a>
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Numéro de téléphone : +212 6 00 00 00 00
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Adresse postale : École SUPMTI, Rabat, Maroc
          </p>
        </section>

        {/* CGU */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900">
            Conditions générales d'utilisation
          </h2>

          {/* Objet */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              Objet de l'application
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              WathiqaTech a pour objectif de faciliter la génération, la gestion
              et la personnalisation de documents juridiques adaptés au droit
              marocain, à destination des particuliers et professionnels.
            </p>
          </div>

          {/* Conditions d'utilisation */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              Conditions d'utilisation
            </h3>
            <ol className="space-y-4 ml-4">
              <li>
                <span className="font-bold">1 Accès au service</span>
                <p className="text-gray-700 leading-relaxed">
                  L'accès à l'application est gratuit. La création d'un compte est
                  nécessaire pour accéder à certaines fonctionnalités avancées.
                </p>
              </li>
              <li>
                <span className="font-bold">2 Responsabilités de l'utilisateur</span>
                <p className="text-gray-700 leading-relaxed">
                  L'utilisateur s'engage à fournir des informations exactes et à
                  respecter la législation en vigueur lors de l'utilisation de
                  l'application.
                </p>
              </li>
              <li>
                <span className="font-bold">3 Propriété intellectuelle</span>
                <p className="text-gray-700 leading-relaxed">
                  L'ensemble des contenus, marques et fonctionnalités de
                  l'application sont protégés par le droit de la propriété
                  intellectuelle.
                </p>
              </li>
              <li>
                <span className="font-bold">4 Restrictions</span>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Il est interdit de :
                </p>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>
                    Utiliser l'application à des fins frauduleuses ou illégales
                  </li>
                  <li>
                    Copier ou reproduire l'application ou ses fonctionnalités sans
                    autorisation
                  </li>
                  <li>Modifier ou décompiler le code source</li>
                </ul>
              </li>
            </ol>
          </div>
        </section>

        {/* Encadré d'avertissement */}
        <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4 rounded flex items-start gap-3 mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0Z"
            />
          </svg>
          <span className="italic text-gray-700">
            Ce document ne remplace pas un avis juridique officiel. Pour des cas
            spécifiques, nous recommandons de consulter un avocat ou un notaire.
          </span>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MentionsLegales;

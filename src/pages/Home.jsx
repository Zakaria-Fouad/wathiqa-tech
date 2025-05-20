import React from "react";
import HeaderA from "../components/headers/HeaderA";
import Sidebar from "../components/Sidebar";
import CardDocument from "../components/CardDocument";
import { FaFileContract, FaBriefcase, FaGavel, FaUserShield } from "react-icons/fa"; // Example icons

function Home() {
  const cards = [
    {
      icon: <FaFileContract size={28} />,
      title: "Contrats Civils",
      description: "Rédigez facilement vos contrats entre particuliers : location, vente etc...",
    },
    {
      icon: <FaBriefcase size={28} />,
      title: "Contrats Commerciaux",
      description: "Générez des contrats B2B ou B2C adaptés à votre activité : prestations, sous-traitance...",
    },
    {
      icon: <FaUserShield size={28} />,
      title: "Documents Administratifs",
      description: "Établissez vos contrats de travail, conventions de stage, lettres de démission...",
    },
    {
      icon: <FaGavel size={28} />,
      title: "Documents RH/Emploi",
      description: "Gérez vos documents RH : contrats de travail, attestations, lettres de démission, etc.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <main>
        <h1 className="text-3xl font-bold text-center mb-12 text-gray-900">Quel document souhaitez-vous générer ?</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {cards.map((card, idx) => (
            <CardDocument
              key={idx}
              icon={card.icon}
              title={card.title}
              description={card.description}
              onStart={() => alert(`Commencer: ${card.title}`)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
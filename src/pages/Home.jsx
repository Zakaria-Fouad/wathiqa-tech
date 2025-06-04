import React from "react";
import CardDocument from "../components/CardDocument";
import { FaFileContract, FaBriefcase, FaGavel, FaUserShield } from "react-icons/fa";
import { useOutletContext, useNavigate } from "react-router-dom";
import { documentForms } from "../utils/documentForms";

function Home() {
  const navigate = useNavigate();
  const cards = [
    {
      icon: <FaFileContract size={28} />,
      title: "Contrats Civils",
      description: "Rédigez facilement vos contrats entre particuliers : location, vente etc...",
      formKey: "contrat-civil"
    },
    {
      icon: <FaBriefcase size={28} />,
      title: "Contrats Commerciaux",
      description: "Générez des contrats B2B ou B2C adaptés à votre activité : prestations, sous-traitance...",
      formKey: "contrat-commercial"
    },
    {
      icon: <FaUserShield size={28} />,
      title: "Documents Administratifs",
      description: "Établissez vos contrats de travail, conventions de stage, lettres de démission...",
      formKey: "document-administratif"
    },
    {
      icon: <FaGavel size={28} />,
      title: "Documents RH/Emploi",
      description: "Gérez vos documents RH : contrats de travail, attestations, lettres de démission, etc.",
      formKey: "document-rh"
    },
  ];

  // Récupère l'état sidebarOpen via Outlet context
  const { sidebarOpen } = useOutletContext ? useOutletContext() : { sidebarOpen: true };

  const handleStart = (formKey) => {
    if (formKey && documentForms[formKey]) {
      navigate(`/generate/${formKey}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] flex justify-center items-center" style={{ minHeight: 'calc(100vh - 68px)' }}>
      <div
        className="flex flex-col items-center w-full"
        style={{
          maxWidth: 900,
          marginLeft: sidebarOpen ? 0 : 0,
          transition: 'margin 0.3s',
        }}
      >
        <div className="w-full flex flex-col items-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-18 mt-0 text-center">Quel document souhaitez-vous générer ?</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 w-full max-w-4xl justify-center">
            {cards.map((card, idx) => (
              <CardDocument
                key={idx}
                icon={card.icon}
                title={card.title}
                description={card.description}
                onStart={() => handleStart(card.formKey)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
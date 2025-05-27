import React from "react";
import { FaKeyboard, FaMagic, FaFilePdf, FaClock } from "react-icons/fa";
import HeaderB from "../components/headers/HeaderB";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import robotImg from "../assets/robot.png"; // Remplace par ton image si besoin
import bureauImg from "../assets/bureau.jpg"; // Remplace par ton image si besoin


// Page d'accueil publique
function Landing() {
  const navigate = useNavigate();

  const handleStart = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* HeaderB */}
      <HeaderB />

      {/* Hero */}
      <section id="hero" className="max-w-7xl mx-auto w-full py-20 px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Colonne gauche */}
        <div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">GÉNÉREZ VOS CONTRATS JURIDIQUES EN QUELQUES CLICS</h1>
          <p className="text-xl text-gray-700 mb-8">Une solution intelligente et adaptée au droit marocain pour vos documents légals.</p>
          <a onClick={handleStart} className="inline-block bg-yellow-400 text-gray-900 font-bold px-8 py-3 rounded-lg shadow hover:bg-yellow-300 transition text-lg cursor-pointer">Commencer</a>
        </div>
        {/* Colonne droite */}
        <div className="flex justify-center">
          <img src={robotImg} alt="Robot WathiqaTech" className="w-80 h-80 object-contain" />
        </div>
      </section>

      {/* Fonctionnalités */}
      <section id="features" className="py-20 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12 tracking-widest">FONCTIONNALITÉS</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-100 rounded-xl flex flex-col items-center p-8 shadow hover:scale-105 transition">
            <FaKeyboard className="text-4xl text-blue-600 mb-4" />
            <div className="text-lg font-semibold mb-1">SAISIE INTELLIGENTE</div>
          </div>
          <div className="bg-gray-100 rounded-xl flex flex-col items-center p-8 shadow hover:scale-105 transition">
            <FaMagic className="text-4xl text-yellow-400 mb-4" />
            <div className="text-lg font-semibold mb-1">GÉNÉRATION IA</div>
          </div>
          <div className="bg-gray-100 rounded-xl flex flex-col items-center p-8 shadow hover:scale-105 transition">
            <FaFilePdf className="text-4xl text-red-500 mb-4" />
            <div className="text-lg font-semibold mb-1">EXPORT PDF</div>
          </div>
          <div className="bg-gray-100 rounded-xl flex flex-col items-center p-8 shadow hover:scale-105 transition">
            <FaClock className="text-4xl text-indigo-500 mb-4" />
            <div className="text-lg font-semibold mb-1">HISTORIQUE SÉCURISÉ</div>
          </div>
        </div>
      </section>

      {/* À propos */}
      <section id="about" className="py-20 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">À PROPOS</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Colonne gauche : image */}
          <div className="flex justify-center">
            <img src={bureauImg} alt="Bureau moderne" className="w-full max-w-md rounded-xl shadow-lg object-cover" />
          </div>
          {/* Colonne droite : texte */}
          <div>
            <p className="text-base text-gray-600 mb-8">
              WathiqaTech est une plateforme innovante qui simplifie la création de documents juridiques pour tous. Notre solution s’appuie sur l’intelligence artificielle pour générer des contrats adaptés au droit marocain, tout en garantissant la sécurité et la confidentialité de vos données. Que vous soyez particulier, professionnel ou entreprise, gagnez du temps et de la sérénité grâce à une interface intuitive et des fonctionnalités avancées.
            </p>
            <h3 className="text-xl font-semibold mb-2">PRÊT À AUTOMATISER VOS CONTRATS JURIDIQUES ?</h3>
            <p className="mb-4 text-gray-700">Créer un compte gratuitement</p>
            <a href="/register" className="inline-block bg-yellow-400 text-gray-900 font-bold px-8 py-3 rounded-lg shadow hover:bg-yellow-300 transition text-lg">S'INSCRIRE</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Landing;

import React from "react";

// Header après connexion (avec email utilisateur)
function HeaderB() {
  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4">
        <div className="text-2xl font-bold text-gray-900">WathiqaTech</div>
        <nav className="hidden md:flex gap-8 text-base font-medium text-gray-700">
          <a href="#hero" className="hover:text-blue-600 transition">
            Accueil
          </a>
          <a href="#features" className="hover:text-blue-600 transition">
            Fonctionnalités
          </a>
          <a href="#about" className="hover:text-blue-600 transition">
            À propos
          </a>
        </nav>
        <a
          href="/login"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
        >
          Se connecter
        </a>
      </div>
    </header>
  );
}

export default HeaderB;

import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Header après connexion (avec email utilisateur)
function HeaderB() {
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll vers l'ancre après navigation si besoin
  const handleNav = (anchor) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(anchor);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4">
        <div className="text-2xl font-bold text-gray-900">WathiqaTech</div>
        <nav className="hidden md:flex gap-8 text-base font-medium text-gray-700">
          <button
            onClick={() => navigate("/")}
            className="hover:text-blue-600 transition bg-transparent border-none p-0 m-0 cursor-pointer focus:outline-none"
          >
            Accueil
          </button>
          <button
            onClick={() => handleNav("features")}
            className="hover:text-blue-600 transition bg-transparent border-none p-0 m-0 cursor-pointer focus:outline-none"
          >
            Fonctionnalités
          </button>
          <button
            onClick={() => handleNav("about")}
            className="hover:text-blue-600 transition bg-transparent border-none p-0 m-0 cursor-pointer focus:outline-none"
          >
            À propos
          </button>
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

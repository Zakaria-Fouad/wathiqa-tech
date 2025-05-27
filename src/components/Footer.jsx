import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-50 py-12 mt-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Colonne 1 */}
        <div>
          <div className="text-xl font-bold text-gray-900 mb-2">WathiqaTech</div>
          <div className="text-gray-500">© 2025</div>
        </div>
        {/* Colonne 2 */}
        <div className="flex flex-col gap-2">
          <a href="#hero" className="text-gray-700 hover:text-blue-600 transition">Accueil</a>
          <a href="#features" className="text-gray-700 hover:text-blue-600 transition">Fonctionnalités</a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 transition">À propos</a>
        </div>
        {/* Colonne 3 */}
        <div className="flex flex-col gap-2">
          <a href="/politique-confidentialite" className="text-gray-700 hover:text-blue-600 transition">Politique de confidentialités</a>
          <a href="/mentions-legales" className="text-gray-700 hover:text-blue-600 transition">Mentions légales</a>
        </div>
        {/* Newsletter */}
        <div>
          <div className="font-semibold text-gray-900 mb-2">Newsletter</div>
          <form className="flex gap-2">
            <input type="email" placeholder="Entrez votre Email" className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 bg-white" />
            <button type="submit" className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-6 py-2 rounded-lg transition">Send</button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

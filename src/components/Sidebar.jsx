import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { authService } from "../services/authService";
import { useNavigate } from "react-router-dom";
import HistoriqueDocument from "./HistoriqueDocuments";
import ModalRechercheDocument from "./ModalRechercheDocument";

const SIDEBAR_WIDTH = 230; // px, à ajuster si besoin

function Sidebar({ open, onToggle }) {
  const [openRecherche, setOpenRecherche] = useState(false);
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await authService.logout();
      setUser(null);
      navigate("/");
    } catch (error) {
      // Optionnel: afficher une notification d'erreur
      console.error("Erreur lors de la déconnexion", error);
    }
  };

  return (
    <>
      <aside
        className={`fixed top-0 left-0 flex flex-col bg-[#EEF0FF] border-r border-indigo-100 transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'}`}
        style={{width: '100%', minWidth: SIDEBAR_WIDTH, maxWidth: SIDEBAR_WIDTH, height: '100vh', zIndex: 20}}
      >
        {/* Header intégré dans la sidebar */}
        <div className="flex items-center justify-between border-b border-indigo-100"
          style={{height: 68, padding: '0 16px', width: '100%', minWidth: SIDEBAR_WIDTH, maxWidth: SIDEBAR_WIDTH}}>
          {/* Hamburger */}
          <button className="p-2 rounded hover:bg-indigo-100 focus:outline-none" onClick={onToggle}>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>
          {/* Recherche */}
          <button className="p-2 rounded hover:bg-indigo-100 focus:outline-none" onClick={() => setOpenRecherche(true)}>
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>
        <HistoriqueDocument />
        {/* Bouton logout en bas */}
        <div className="mt-auto flex flex-col items-center pb-6">
          <button
            className="flex items-center gap-2 p-2 rounded hover:bg-red-100 text-red-600 focus:outline-none"
            onClick={handleLogout}
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M16 17l5-5-5-5" />
              <path d="M21 12H9" />
              <path d="M12 19v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2" />
            </svg>
            <span>Déconnexion</span>
          </button>
        </div>
      </aside>
      <ModalRechercheDocument open={openRecherche} onClose={() => setOpenRecherche(false)} />
    </>
  );
}

export default Sidebar;

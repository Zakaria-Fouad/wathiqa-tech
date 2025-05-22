import React, { useState } from "react";
import HistoriqueDocument from "./HistoriqueDocuments";
import ModalRechercheDocument from "./ModalRechercheDocument";

const SIDEBAR_WIDTH = 230; // px, à ajuster si besoin

function Sidebar({ open, onToggle }) {
  const [openRecherche, setOpenRecherche] = useState(false);

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
      </aside>
      <ModalRechercheDocument open={openRecherche} onClose={() => setOpenRecherche(false)} />
    </>
  );
}

export default Sidebar;

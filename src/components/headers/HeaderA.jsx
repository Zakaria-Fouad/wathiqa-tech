import React from "react";
import { useNavigate } from "react-router-dom";

const SIDEBAR_WIDTH = 230; // px, à ajuster si besoin

const HeaderA = ({ sidebarOpen, onBurgerClick }) => {
  const navigate = useNavigate();
  return (
    <header
      className="flex items-center justify-between bg-[#FFFFFF] transition-all duration-300"
      style={{
        height: 68,
        width: sidebarOpen ? `calc(100% - ${SIDEBAR_WIDTH}px)` : '100%',
        marginLeft: sidebarOpen ? SIDEBAR_WIDTH : 0,
        padding: '0 20px',
        position: 'relative',
        zIndex: 30,
      }}
    >
      {/* Zone gauche : burger + logo */}
      <div className="flex items-center gap-2">
        {/* Burger visible seulement si sidebar fermée */}
        {!sidebarOpen && (
          <button className="p-2 rounded hover:bg-indigo-100 focus:outline-none mr-1" onClick={onBurgerClick}>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>
        )}
        <div
          className="text-xl font-semibold text-gray-900 tracking-tight font-sans cursor-pointer hover:text-indigo-600 transition-colors"
          onClick={() => navigate('/home')}
          tabIndex={0}
          role="button"
          onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && navigate('/home')}
        >
          WathiqaTech
        </div>
      </div>
      {/* Zone droite : profil */}
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white shadow text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        </span>
        <span className="text-gray-700 text-base font-medium font-sans">example@gmail.com</span>
      </div>
    </header>
  );
};

export default HeaderA;

import React, { useState } from "react";

function DocumentItem({ name, active, onClick }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e) => {
    setShowTooltip(true);
    setTooltipPos({ x: e.clientX, y: e.clientY });
  };
  const handleMouseMove = (e) => {
    setTooltipPos({ x: e.clientX, y: e.clientY });
  };
  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <>
      <div
        className={`flex items-center justify-between mb-2 rounded-[4px] transition-colors ${active ? "bg-white border-l-4 border-indigo-400" : "bg-[#EEF0FF]"} hover:bg-[#F6F7FB] cursor-pointer`}
        style={{height: 46, padding: '8px 12px'}}
        onClick={onClick}
        tabIndex={0}
        role="button"
        onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onClick()}
      >
        <span
          className="text-gray-900 text-[15px] font-normal truncate"
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {name}
        </span>
        <button className="p-1 rounded hover:bg-indigo-200 focus:outline-none">
          <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="5" cy="12" r="1.5" />
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="19" cy="12" r="1.5" />
          </svg>
        </button>
      </div>
      {showTooltip && (
        <div
          className="fixed z-50 px-3 py-1 bg-white text-black border text-sm rounded shadow-lg pointer-events-none whitespace-nowrap max-w-none"
          style={{ left: tooltipPos.x + 12, top: tooltipPos.y + 8 }}
        >
          {name}
        </div>
      )}
    </>
  );
}

function HistoriqueDocument() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  // Liste statique pour l'instant
  const documents = [
    { name: "Contrat de location" },
    { name: "Contrat de reconnaissance de dette" },
    { name: "Convention de stage" },
  ];
  return (
    <div className="flex flex-col py-3" style={{padding: '12px 16px', marginTop: 8}}>
      <h2 className="text-gray-900 font-semibold text-base mb-3">Historique</h2>
      <div className="flex flex-col gap-2">
        {documents.map((doc, idx) => (
          <DocumentItem
            key={idx}
            name={doc.name}
            active={selectedIdx === idx}
            onClick={() => setSelectedIdx(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default HistoriqueDocument;

import React from "react";

function DocumentItem({ name, active }) {
  return (
    <div
      className={`flex items-center justify-between mb-2 rounded-[4px] transition-colors ${active ? "bg-white border-l-4 border-indigo-400" : "bg-[#F6F7FB]"}`}
      style={{height: 46, padding: '8px 12px'}}
    >
      <span className="text-gray-900 text-[15px] font-normal truncate">{name}</span>
      <button className="p-1 rounded hover:bg-indigo-200 focus:outline-none">
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="5" cy="12" r="1.5" />
          <circle cx="12" cy="12" r="1.5" />
          <circle cx="19" cy="12" r="1.5" />
        </svg>
      </button>
    </div>
  );
}

function HistoriqueDocument() {
  // Liste statique pour l'instant
  const documents = [
    { name: "Contrat de location", active: true },
    { name: "Contrat de reconnaissance de dette", active: false },
    { name: "Convention de stage", active: false },
  ];
  return (
    <div className="flex flex-col py-3" style={{padding: '12px 16px', marginTop: 8}}>
      <h2 className="text-gray-900 font-semibold text-base mb-3">Historique</h2>
      <div className="flex flex-col gap-2">
        {documents.map((doc, idx) => (
          <DocumentItem key={idx} name={doc.name} active={doc.active} />
        ))}
      </div>
    </div>
  );
}

export default HistoriqueDocument;

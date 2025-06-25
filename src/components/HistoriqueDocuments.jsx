import React, { useState, useEffect, useContext } from "react";
import { documentService } from "../services/documentService";
import { DocumentContext } from "../context/DocumentContext";
import { Link } from "react-router-dom";

function DocumentItem({ id, name }) {
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
      <Link
        to={`/document/${id}`}
        className={
          "flex items-center justify-between mb-2 rounded-[4px] transition-colors bg-[#EEF0FF] hover:bg-[#F6F7FB] cursor-pointer group"
        }
        style={{ height: 46, padding: '8px 12px' }}
        tabIndex={0}
        role="button"
      >
        <span
          className="text-gray-900 text-[14px] font-sans truncate font-medium"
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {name}
        </span>
        <button
          className="p-1 rounded hover:bg-indigo-200 focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ pointerEvents: 'auto' }}
        >
          <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="5" cy="12" r="1.5" />
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="19" cy="12" r="1.5" />
          </svg>
        </button>
      </Link>
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
  const { documents, setDocuments } = useContext(DocumentContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchDocuments() {
      setLoading(true);
      setError("");
      try {
        const res = await documentService.getAll();
        setDocuments(Array.isArray(res) ? res : (res.data || []));
      } catch (err) {
        setError("Erreur lors du chargement de l'historique");
      } finally {
        setLoading(false);
      }
    }
    fetchDocuments();
  }, [setDocuments]);

  return (
    <div className="flex flex-col py-3" style={{padding: '12px 16px', marginTop: 8}}>
      <h2 className="text-gray-900 font-semibold text-base mb-3">Historique</h2>
      {loading ? (
        <div className="text-gray-500 text-sm">Chargement...</div>
      ) : error ? (
        <div className="text-red-600 text-sm">{error}</div>
      ) : (
        <div className="flex flex-col gap-2">
          {documents.length === 0 ? (
            <div className="text-gray-500 text-sm">Aucun document</div>
          ) : (
            documents.map((doc, idx) => (
              <DocumentItem
                key={doc.id || idx}
                id={doc.id}
                name={doc.title || doc.name}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default HistoriqueDocument;

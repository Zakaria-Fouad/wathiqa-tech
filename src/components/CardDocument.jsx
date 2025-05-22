import React from "react";
import Button from "./Button";

function CardDocument({ icon, title, description, onStart }) {
  return (
    <div
      className="flex flex-col justify-between bg-[#EEF0FF] rounded-xl shadow-md transition-transform hover:scale-[1.025] hover:shadow-lg cursor-pointer"
      style={{ width: 340, height: 190, padding: 20 }}
      onClick={onStart}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onStart()}
    >
      {/* En-tête */}
      <div className="flex items-center gap-3 mb-2">
        <span className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow text-indigo-500">
          {icon}
        </span>
        <span className="text-lg font-semibold text-gray-900 font-sans">
          {title}
        </span>
      </div>
      {/* Corps */}
      <div className="flex-1 text-gray-700 text-sm mb-4 font-sans leading-snug">
        {description}
      </div>
      {/* Pied */}
      <div className="flex justify-center">
        {/* Le bouton reste visible mais tout le bloc est cliquable */}
        <span className="pointer-events-none">
          <Button onClick={onStart}>Commencer</Button>
        </span>
      </div>
    </div>
  );
}

export default CardDocument;

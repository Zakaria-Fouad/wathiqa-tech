import React from "react";

function Button({ children, onClick, className = "" }) {
  return (
    <button
      className={`bg-[#5E5CFF] text-white font-sans text-base font-medium rounded-full px-6 py-2 min-h-[40px] shadow-sm hover:bg-[#4746b6] hover:opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#5E5CFF] ${className} cursor-pointer`}
      style={{ borderRadius: 20 }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;

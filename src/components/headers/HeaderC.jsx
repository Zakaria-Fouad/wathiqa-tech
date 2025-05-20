import React from "react";

const HeaderC = () => {
  return (
    <header
      className="flex items-center justify-between bg-[#FFFFFF] w-full shadow-md"
      style={{
        height: 68,
        padding: '0 20px',
        position: 'relative',
        zIndex: 30,
      }}
    >
      <div className="text-xl font-semibold text-gray-900 tracking-tight font-sans">WathiqaTech</div>
    </header>
  );
};

export default HeaderC;

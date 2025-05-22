import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import HeaderA from "../components/headers/HeaderA";
import { Outlet } from "react-router-dom";

const SIDEBAR_WIDTH = 230;

const PrivateLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen((open) => !open);

  return (
    <div className="min-h-screen w-full bg-[#FFFFFF]">
      <Sidebar open={sidebarOpen} onToggle={toggleSidebar} />
      <HeaderA sidebarOpen={sidebarOpen} onBurgerClick={toggleSidebar} />
      <main
        style={{
          marginLeft: sidebarOpen ? SIDEBAR_WIDTH : 0,
          padding: 24,
          transition: 'margin-left 0.3s',
          minHeight: `calc(100vh - 68px)`
        }}
      >
        <Outlet context={{ sidebarOpen }} />
      </main>
    </div>
  );
};

export default PrivateLayout;
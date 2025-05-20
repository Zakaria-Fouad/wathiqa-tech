import React from "react";
import Sidebar from "../components/Sidebar";
import HeaderA from "../components/headers/HeaderA";
import { Outlet } from "react-router-dom";

const PrivateLayout = () => (
  <div className="min-h-screen w-full bg-[#FFFFFF]">
    <Sidebar />
    <HeaderA />
    <main style={{ marginLeft: 230, marginTop: 68, padding: 24 }}>
      <Outlet />
    </main>
  </div>
);

export default PrivateLayout;
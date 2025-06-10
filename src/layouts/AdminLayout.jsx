import React from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import HeaderA from "../components/headers/HeaderA";

function AdminSidebar() {
  const location = useLocation();
  return (
    <aside className="bg-indigo-100 w-[200px] min-h-screen flex flex-col p-6">
      <h2 className="text-xl font-bold text-indigo-700 mb-8">Tableau de bord</h2>
      <nav className="flex flex-col gap-4">
        <NavLink
          to="/admin"
          end
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg font-medium transition-all text-indigo-800 cursor-pointer ${
              isActive ? "bg-white shadow" : "hover:bg-indigo-200"
            }`
          }
        >
          Statistiques
        </NavLink>
        <NavLink
          to="/admin/utilisateurs"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg font-medium transition-all text-indigo-800 cursor-pointer ${
              isActive ? "bg-white shadow" : "hover:bg-indigo-200"
            }`
          }
        >
          Utilisateurs
        </NavLink>
        <NavLink
          to="/admin/documents"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg font-medium transition-all text-indigo-800 cursor-pointer ${
              isActive ? "bg-white shadow" : "hover:bg-indigo-200"
            }`
          }
        >
          Documents
        </NavLink>
      </nav>
    </aside>
  );
}

const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <HeaderA sidebarOpen={true} />
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

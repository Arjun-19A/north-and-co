import { useState } from "react";
import { Outlet } from "react-router-dom";
import {  FiX } from "react-icons/fi";

import AdminHeader from "../Admin/AdminHeader";
import Sidebar from "../Admin/Sidebar";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-100 flex">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`
          fixed
          top-0
          left-0
          z-50
          h-screen
          w-72
          bg-stone-100
          border-r
          border-gray-300
          overflow-y-auto
          transform
          transition-transform
          duration-300

          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}

          lg:translate-x-0
        `}
      >
        <button
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden absolute top-5 right-5 text-xl"
        >
          <FiX />
        </button>

        <Sidebar />
      </aside>

      <div className="flex-1 lg:ml-72">
        <div className="sticky top-0 z-20">
          <AdminHeader onMenuClick={() => setSidebarOpen(true)} />
        </div>

        <main className="px-5 py-2 md:py-4 lg:px-8 lg:py-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

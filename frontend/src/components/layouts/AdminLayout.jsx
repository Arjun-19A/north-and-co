import { Outlet } from "react-router-dom";
import AdminHeader from "../Admin/AdminHeader";
import Sidebar from "../Admin/Sidebar";

export default function AdminLayout() {  
  return (
    <div className="min-h-screen bg-stone-100 flex">
      <aside className="fixed left-0 top-0 h-screen w-72 overflow-y-auto border-r border-gray-300">
        <Sidebar />
      </aside>

      <div className="flex-1 ml-72">
        <div className="sticky top-0 z-20">
          <AdminHeader />
        </div>

        <main className="px-10 py-7">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

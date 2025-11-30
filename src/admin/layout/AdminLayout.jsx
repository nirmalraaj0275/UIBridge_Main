import { useState } from "react";
import Sidebar from "@/admin/components/Sidebar";
import AdminHeader from "@/admin/components/Header";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex">

      {/* SIDEBAR */}
      <div
        className={`
          ${isSidebarOpen ? "block" : "hidden"} 
          md:block 
          bg-gray-900 
          text-white 
          min-h-screen 
          w-64 
          transition-all
        `}
      >
        <Sidebar />
      </div>

      {/* MAIN AREA */}
      <div className="flex-1">
        <AdminHeader toggleSidebar={toggleSidebar} />

        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;

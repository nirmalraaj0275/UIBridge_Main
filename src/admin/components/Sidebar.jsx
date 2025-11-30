import { NavLink } from "react-router-dom";
import { LayoutDashboard, BookOpen, LogOut } from "lucide-react";
import {logo} from "@/assets/images/HeadandFooter"; 

const Sidebar = () => {
    const logout = () => {
    try {
      localStorage.removeItem("adminToken");
      window.location.href = "/admin/login";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <div className="w-64 bg-gray-950 text-gray-200 min-h-screen p-5 shadow-2xl flex flex-col">

      {/* LOGO */}
      <div className="flex justify-center mb-10">
        <img
          src={logo}
          alt="Admin Logo"
          className="w-28 h-auto object-contain drop-shadow-md"
        />
      </div>

      {/* MENU */}
      <nav className="flex-1 space-y-3">

        {/* Dashboard */}
        <NavLink
          to="/admin"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition-all 
            ${
              isActive
                ? "bg-blue-600 text-white shadow-md"
                : "hover:bg-gray-800"
            }`
          }
        >
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>

        {/* Blogs */}
        <NavLink
          to="/admin/blogs"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition-all 
            ${
              isActive
                ? "bg-blue-600 text-white shadow-md"
                : "hover:bg-gray-800"
            }`
          }
        >
          <BookOpen size={20} />
          <span>Blogs</span>
        </NavLink>

      </nav>

      {/* LOGOUT */}
      <div className="mt-auto">
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-red-600 hover:text-white transition-all"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

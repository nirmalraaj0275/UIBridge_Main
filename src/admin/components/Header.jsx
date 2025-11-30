// import { useNavigate } from "react-router-dom";

const AdminHeader = () => {
//   const navigate = useNavigate();

  const logout = () => {
    try {
         localStorage.removeItem("adminToken");
    window.location.href = "/admin/login";

    } catch (error) {
        console.error("Logout failed:", error);
        
    }
   
  };

  return (
    <div className="w-full bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Admin Dashboard</h1>
      <button
        onClick={logout}
        className="bg-red-600 px-4 py-2 text-white rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default AdminHeader;

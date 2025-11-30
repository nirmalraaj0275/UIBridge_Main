import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminLogin } from "@/redux/slices/adminAuthSlice";
import { useNavigate } from "react-router-dom";

const images = [
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
];

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({ username: "", password: "" });
  const [currentSlide, setCurrentSlide] = useState(0);

  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.adminAuth
  );

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(adminLogin(form));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/admin");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* LEFT SIDE IMAGE SLIDER */}
      <div className="w-1/2 relative hidden md:block">
        <img
          src={images[currentSlide]}
          className="w-full h-full object-cover transition-all duration-700"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Caption (optional) */}
        <div className="absolute bottom-10 left-10 text-white text-3xl font-semibold drop-shadow-lg">
          Industry Solutions
        </div>
      </div>

      {/* RIGHT SIDE LOGIN FORM */}
      <div className="w-full md:w-1/2 flex justify-center items-center px-6 bg-black">

        <form
          onSubmit={handleSubmit}
          className="bg-white/90 backdrop-blur-xl border border-gray-300 shadow-2xl p-10 w-[90%] max-w-md rounded-2xl"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Admin Login
          </h2>

          {/* Floating Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center 
            justify-center text-3xl font-bold shadow-xl animate-[float_3s_ease-in-out_infinite]">
              🔐
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-center mb-4 font-medium animate-pulse">
              {error}
            </p>
          )}

          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            className="w-full p-3 mb-4 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="w-full p-3 mb-4 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={handleChange}
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full p-3 rounded-xl text-white font-semibold text-lg 
              ${loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700 hover:scale-[1.02]"}
              transition-all transform`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>

      {/* animations */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>

    </div>
  );
};

export default Login;

import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBlogById } from "@/redux/slices/blogSlice";

const ViewBlog = () => {
  const { id } = useParams(); // FIXED
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { singleBlog, loading, error } = useSelector((state) => state.blogs);

  // Load blog by ID
  useEffect(() => {
    dispatch(getBlogById(id));
  }, [dispatch, id]);

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-gray-300">

      {loading && <p className="text-center text-blue-600 font-medium">Loading...</p>}
      {error && (
   <p className="text-red-600 font-medium">❌ {error.message || error}</p>
)}


      {singleBlog && (
        <>
          <div className="overflow-hidden rounded-2xl shadow-lg mb-6">
            <img
              src={singleBlog.image?.url}
              alt={singleBlog.title}
              className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Title coming from DB */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {singleBlog.title}
          </h1>

          <div className="flex items-center gap-6 text-gray-600 mb-6">
            <p>✍️ {singleBlog.author}</p>
            <p>📅 {new Date(singleBlog.createdAt).toLocaleDateString()}</p>
          </div>

          <p className="text-lg text-gray-700 mb-6 bg-gray-100 p-4 rounded-xl border">
            {singleBlog.shortdescription}
          </p>

          <div className="text-gray-800 text-lg leading-relaxed whitespace-pre-line bg-gray-50 p-6 rounded-xl border shadow-sm">
            {singleBlog.longdescription}
          </div>

          <button
            onClick={() => navigate(-1)}
            className="w-full mt-8 py-3 rounded-xl bg-gray-200 hover:bg-gray-300"
          >
            ← Back to Blogs
          </button>
        </>
      )}
    </div>
  );
};

export default ViewBlog;

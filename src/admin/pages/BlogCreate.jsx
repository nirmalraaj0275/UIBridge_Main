import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBlog } from "@/redux/slices/blogSlice";
import { useNavigate } from "react-router-dom";

const BlogCreate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error, success } = useSelector((state) => state.blogs);

  const [preview, setPreview] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    shortDescription: "",
    longDescription: "",
    author: "",
    image: null,
  });

  // Redirect on success
  useEffect(() => {
    if (success) {
      setFormData({
        title: "",
        shortDescription: "",
        longDescription: "",
        author: "",
        image: null,
      });
      setPreview("");
      navigate("/admin/blogs");
    }
  }, [success, navigate]);

  // Handle input text change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image upload
  const handleImageSelect = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setFormData({ ...formData, image: file });
    }
  };

  // Submit form
  const submitHandler = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("shortdescription", formData.shortDescription);
    data.append("longdescription", formData.longDescription);
    data.append("author", formData.author);
    data.append("image", formData.image);

    dispatch(createBlog(data));
  };

  return (
    <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-gray-300 mt-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        ✨ Create New Blog
      </h1>

      <form onSubmit={submitHandler} className="space-y-6">
        
        {/* Title Field */}
        <FormField
          label="Blog Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter blog title"
          required={true}
        />

        {/* Short Description */}
        <TextAreaField
          label="Short Description"
          name="shortDescription"
          value={formData.shortDescription}
          onChange={handleChange}
          placeholder="Small summary"
          rows={2}
          required={true}
        />

        {/* Long Description */}
        <TextAreaField
          label="Long Description"
          name="longDescription"
          value={formData.longDescription}
          onChange={handleChange}
          placeholder="Write full content..."
          rows={6}
          required={true}
        />

        {/* Author */}
        <FormField
          label="Author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Author name"
          required={true}
        />

        {/* Image Upload */}
        <div>
          <label className="text-sm font-semibold text-gray-700">
            Upload Image
          </label>

          <div
            className="mt-2 p-5 border-2 border-dashed border-gray-300 rounded-xl hover:border-blue-500 transition cursor-pointer bg-gray-50"
            onClick={() => document.getElementById("fileInput").click()}
          >
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageSelect}
            />

            {!preview ? (
              <div className="text-center text-gray-500 py-4">
                <p className="text-lg font-medium">Click to upload</p>
                <p className="text-sm text-gray-400">PNG, JPG up to 5MB</p>
              </div>
            ) : (
              <img
                src={preview}
                className="w-full h-48 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                alt="Preview"
              />
            )}
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <p className="text-blue-600 font-medium text-center flex items-center justify-center gap-2">
            <span className="animate-spin h-4 w-4 border-2 border-blue-600 border-t-transparent rounded-full"></span>
            Creating blog...
          </p>
        )}

        {/* Error */}
        {error && (
          <p className="text-red-600 font-medium text-center">
            ❌ {error}
          </p>
        )}

        {/* Success */}
        {success && (
          <p className="text-green-600 font-medium text-center animate-pulse">
            ✅ Blog created successfully!
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-xl text-lg font-semibold transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700 hover:scale-[1.02]"
          }`}
        >
          {loading ? "Publishing..." : "🚀 Publish Blog"}
        </button>
      </form>
    </div>
  );
};

// Reusable Input Field
const FormField = ({ label, name, value, onChange, placeholder, required }) => (
  <div>
    <label className="text-sm font-semibold text-gray-700">{label}</label>
    <input
      type="text"
      name={name}
      className="mt-1 w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  </div>
);

// Reusable Textarea Field
const TextAreaField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  rows,
  required,
}) => (
  <div>
    <label className="text-sm font-semibold text-gray-700">{label}</label>
    <textarea
      name={name}
      rows={rows}
      className="mt-1 w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    ></textarea>
  </div>
);

export default BlogCreate;

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    getBlogById,
    updateBlog,
    resetStatus,
} from "@/redux/slices/blogSlice";
import { Navigate } from "react-router-dom";

const EditBlog = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { singleBlog, loading, error, success } = useSelector(
        (state) => state.blogs
    );

    const [preview, setPreview] = useState("");
    const [formData, setFormData] = useState({
        title: "",
        shortDescription: "",
        longDescription: "",
        author: "",
        image: null,
    });

    // Fetch the blog data by ID
    useEffect(() => {
        dispatch(getBlogById(id));
    }, [dispatch, id]);

    // When the blog loads, fill the form
    useEffect(() => {
        if (singleBlog) {
            setFormData({
                title: singleBlog.title,
                shortDescription: singleBlog.shortdescription,
                longDescription: singleBlog.longdescription,
                author: singleBlog.author,
                image: null,
            });
            setPreview(singleBlog.image?.url);
        }
    }, [singleBlog]);

    // Auto hide success message
    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => {
                dispatch(resetStatus());
                navigate("/admin/blogs");
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [success, dispatch, navigate]);

    // Input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Image change
    const handleImageSelect = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
            setFormData({ ...formData, image: file });
        }
    };

    // Submit update
    const submitHandler = (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("title", formData.title);
        data.append("shortdescription", formData.shortDescription);
        data.append("longdescription", formData.longDescription);
        data.append("author", formData.author);

        if (formData.image) {
            data.append("image", formData.image);
        }

        dispatch(updateBlog({ id, formData: data }));
    };

    return (
        <div className="max-w-3xl mx-auto bg-white/80 p-8 rounded-2xl shadow-xl border mt-8">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">✏️ Edit Blog</h1>

            {loading && <p className="text-blue-600 font-medium">Loading...</p>}
            {error && (
                <p className="text-red-600 bg-red-100 p-2 rounded mb-3">
                    {error.message || error}
                </p>
            )}
            {success && (
                <p className="text-green-600 bg-green-100 p-2 rounded mb-3">
                    ✔ Blog updated successfully!
                </p>
            )}

            <form onSubmit={submitHandler} className="space-y-6">

                {/* Title */}
                <InputField
                    label="Blog Title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter blog title"
                />

                {/* Short Description */}
                <TextAreaField
                    label="Short Description"
                    name="shortDescription"
                    rows="2"
                    value={formData.shortDescription}
                    onChange={handleChange}
                />

                {/* Long Description */}
                <TextAreaField
                    label="Long Description"
                    name="longDescription"
                    rows="5"
                    value={formData.longDescription}
                    onChange={handleChange}
                />

                {/* Author */}
                <InputField
                    label="Author Name"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    placeholder="Enter author name"
                />

                {/* Image */}
                <div>
                    <label className="text-sm font-semibold text-gray-700">
                        Blog Image
                    </label>

                    <div
                        className="mt-2 p-4 border-2 border-dashed border-gray-300 rounded-xl 
            hover:border-blue-500 transition cursor-pointer bg-gray-50"
                        onClick={() => document.getElementById("fileInput").click()}
                    >
                        <input
                            id="fileInput"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageSelect}
                        />

                        {preview ? (
                            <img
                                src={preview}
                                className="w-full h-48 object-cover rounded-xl shadow"
                                alt="Preview"
                            />
                        ) : (
                            <p className="text-center text-gray-500">Click to upload image</p>
                        )}
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-3 rounded-xl text-lg font-semibold mt-3 transition 
          ${loading
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-blue-600 text-white hover:bg-blue-700"
                        }`}
                >
                    {loading ? "Updating..." : "💾 Save Changes"}
                </button>

                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="w-full py-3 mt-2 rounded-xl text-lg bg-gray-200 hover:bg-gray-300"
                >
                    ← Back to Blogs
                </button>
            </form>
        </div>
    );
};

// Reusable fields
const InputField = ({ label, name, value, onChange, placeholder }) => (
    <div>
        <label className="text-sm font-semibold text-gray-700">{label}</label>
        <input
            name={name}
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="mt-1 w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
        />
    </div>
);

const TextAreaField = ({ label, name, rows, value, onChange }) => (
    <div>
        <label className="text-sm font-semibold text-gray-700">{label}</label>
        <textarea
            name={name}
            rows={rows}
            value={value}
            onChange={onChange}
            className="mt-1 w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
        ></textarea>
    </div>
);

export default EditBlog;

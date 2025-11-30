import React, { useEffect, useState } from "react";
import DeleteModal from "@/admin/pages/Blog/deleteBlog";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs,deleteBlog} from "@/redux/slices/blogSlice";
import { Link } from "react-router-dom";

const Blogs = () => {
    const dispatch = useDispatch();

    const { blogs, loading, error } = useSelector((state) => state.blogs);

    useEffect(() => {
  dispatch(getBlogs());
}, [dispatch]);

    const [showModal, setShowModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [deleteTitle, setDeleteTitle] = useState("");

    const openDeleteModal = (id, title) => {
        setDeleteId(id);
        setDeleteTitle(title);
        setShowModal(true);
    };

    const confirmDelete = () => {
        dispatch(deleteBlog(deleteId));
        setShowModal(false);
    };



    return (
        <div>
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Manage Blogs</h1>

                <Link
                    to="/admin/blogs/create"
                    className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
                >
                    ➕ Add Blog
                </Link>
            </div>

            {/* Error Message */}
            {error && (
                <p className="text-red-500 bg-red-100 p-2 rounded mb-3">
                    {error.message || error}
                </p>
            )}

            {/* Loading */}
            {loading && <p className="text-blue-600">Loading...</p>}

            {/* Table */}
            <div className="overflow-x-auto bg-white rounded shadow">
                <table className="w-full text-left">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3">Image</th>
                            <th className="p-3">Title</th>
                            <th className="p-3">Author</th>
                            <th className="p-3">Date</th>
                            <th className="p-3 text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* No Blogs */}
                        {blogs?.length === 0 && !loading && (
                            <tr>
                                <td colSpan="5" className="p-4 text-center text-gray-500">
                                    No blogs found.
                                </td>
                            </tr>
                        )}

                        {/* Blog Rows */}
                        {blogs?.map((blog) => (
                            <tr key={blog._id} className="border-b">
                                <td className="p-3">
                                    <img
                                        src={blog?.image?.url}
                                        alt={blog?.title}
                                        className="w-20 h-14 object-cover rounded"
                                    />
                                </td>

                                <td className="p-3 font-medium">{blog.title}</td>
                                <td className="p-3">{blog.author}</td>
                                <td className="p-3">
                                    {new Date(blog.createdAt).toLocaleDateString()}
                                </td>

                                <td className="p-3">
                                    <div className="flex items-center justify-center gap-4">

                                        {/* VIEW */}
                                        <Link
                                            to={`/admin/blogs/view/${blog._id}`}
                                            className="text-blue-600 hover:underline"
                                        >
                                            View
                                        </Link>

                                        {/* EDIT */}
                                        <Link
                                            to={`/admin/blogs/edit/${blog._id}`}
                                            className="text-green-600 hover:underline"
                                        >
                                            Edit
                                        </Link>

                                        <button
                                            onClick={() => openDeleteModal(blog._id, blog.title)}
                                            className="text-red-600 hover:underline"
                                        >
                                            Delete
                                        </button>

                                        <DeleteModal
                                            show={showModal}
                                            onClose={() => setShowModal(false)}
                                            onConfirm={confirmDelete}
                                            title={deleteTitle}
                                        />



                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Blogs;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../../redux/slices/blogSlice"; 

const Blogs = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  const { blogs } = useSelector((state) => state.blogs);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Latest Blogs
      </h2>

      {/* If blogs still loading or empty */}
      {!blogs || blogs.length === 0 ? (
        <p className="text-center text-gray-600">No blogs available...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.slice(0, visibleCount).map((blog) => (
            <div
              key={blog._id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden"
            >
              <img
                src={blog.image?.url}
                className="w-full h-48 sm:h-52 md:h-56 lg:h-60 object-cover"
                alt={blog.title}
              />

              <div className="p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-sm mb-3 line-clamp-2">
                  {blog.shortdescription}
                </p>

                <div className="flex justify-between items-center text-gray-500 text-xs sm:text-sm mt-3">
                  <span>{blog.author}</span>
                  <span>{new Date(blog.date).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* View More Button */}
      {blogs && visibleCount < blogs.length && (
        <div className="text-center mt-10">
          <button
            onClick={() => setVisibleCount(visibleCount + 3)}
            className="px-6 py-2 text-sm sm:text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default Blogs;

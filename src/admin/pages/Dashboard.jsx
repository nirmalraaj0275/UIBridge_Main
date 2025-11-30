import { useDispatch, useSelector } from "react-redux";
import { dashboard } from "@/redux/slices/dashboardSlices";
import { useEffect } from "react";

const Dashboard = () => {
    const dispatch = useDispatch();

    const { loading, error, stats } = useSelector(
        (state) => state.dashboard
    );

    useEffect(() => {
        dispatch(dashboard());
    }, [dispatch]);

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>

            {/* LOADING STATE */}
            {loading && <p className="text-blue-600">Loading...</p>}

            {/* ERROR STATE */}
            {error && (
                <p className="text-red-500 bg-red-100 p-2 rounded mb-3">
                    {error}
                </p>
            )}

            {/* STATS CARDS */}
            {!loading && !error && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 bg-yellow-100 rounded shadow">
                        Total Messages: {stats?.totalMessages ?? 0}
                    </div>

                    <div className="p-4 bg-blue-100 rounded shadow">
                        Total Users: {stats?.totalUsers ?? 0}
                    </div>

                    <div className="p-4 bg-green-100 rounded shadow">
                        Total Blogs: {stats?.totalBlogs ?? 0}
                    </div>

                   

                </div>
            )}
        </div>
    );
};

export default Dashboard;

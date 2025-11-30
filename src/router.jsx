import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

/* Website Layout + Pages */
import MainLayout from "@/website/layout/MainLayout";
import Home from "@/website/webPages/Home/HomePage.jsx";
import Calibration from "@/website/webPages/Calibration/Calibration.jsx";
import Careers from "@/website/webPages/Careers/Careers.jsx";

/* Protected Route */
import ProtectedRoute from "@/admin/ProtectedRoute";

/* ROUTER SETUP */
const router = createBrowserRouter([
  /* WEBSITE ROUTES */
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/calibration-service", element: <Calibration /> },
      { path: "/careers", element: <Careers /> },
    ],
  },

  // ===========================
  // ADMIN ROUTES (COMMENTED)
  // ===========================
  // {
  //   path: "/admin/login",
  //   element: <Login />,
  // },
  // {
  //   path: "/admin",
  //   element: (
  //     <ProtectedRoute>
  //       <AdminLayout />
  //     </ProtectedRoute>
  //   ),
  //   children: [
  //     { index: true, element: <Dashboard /> },
  //     { path: "users", element: <Users /> },
  //     { path: "products", element: <Products /> },
  //     { path: "orders", element: <Orders /> },
  //     { path: "blogs", element: <Blogs /> },
  //     { path: "blogs/create", element: <BlogCreate /> },
  //     { path: "blogs/view/:id", element: <ViewBlog /> },
  //     { path: "blogs/edit/:id", element: <Editblog /> },
  //   ],
  // },
]);

const AppRouter = () => {
  useEffect(() => {
    AOS.init({ duration: 800, Scroll: false });
  }, []);

  return <RouterProvider router={router} />;
};

export default AppRouter;

import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { logo } from "@/assets/images/HeadandFooter";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const location = useLocation();
  const navigate = useNavigate();

  // UPDATED scroll logic
  const scrollToSection = (id) => {
    // Handle Careers DIFFERENTLY → navigate to careers page
    if (id === "careers") {
      navigate("/careers");
      setMenuOpen(false);
      return;
    }

    // If NOT home page → navigate to home first, THEN scroll
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 120;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 300);

      setMenuOpen(false);
      return;
    }

    // If already on home → scroll normally
    const section = document.getElementById(id);
    if (section) {
      const top = section.offsetTop - 120;
      window.scrollTo({ top, behavior: "smooth" });
    }

    setMenuOpen(false);
  };

  useEffect(() => {
    if (location.pathname !== "/") return; // tracking only on home page

    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const ids = [
        "home",
        "about",
        "capabilities",
        "industries",
        "offerings",
        "business",
        "life",
        "careers",
        "contact",
      ];

      ids.forEach((id) => {
        const sec = document.getElementById(id);
        if (sec && scrollPos >= sec.offsetTop - 150) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const navItem = (id) =>
    `relative pb-1 transition ${
      activeSection === id && location.pathname === "/"
        ? "text-bg font-semibold"
        : "text-gray-700"
    }`;

  const underline = (id) =>
    `absolute left-0 bottom-0 h-[2px] bg-bg transition-all duration-300 ${
      activeSection === id && location.pathname === "/" ? "w-full" : "w-0"
    }`;

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">

      <div className="w-full bg-gray-100 text-sm px-6 py-2 flex justify-end gap-6 text-gray-700">
        <a href="tel:+916374617699" className="hover:text-blue-600 text-[10px] md:text-sm">📞 +91 6374 617 699</a>
        <a href="mailto:hello@uibridgesolutions.com" className="hover:text-blue-600 text-[10px] md:text-sm">✉ hello@uibridgesolutions.com</a>
      </div>

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 bg-white">

        <motion.img
          src={logo}
          alt="Logo"
          className="w-32 cursor-pointer"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          onClick={() => scrollToSection("home")}
        />

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex gap-10 text-sm font-medium">
          {[
            ["home", "Home"],
            ["about", "About"],
            ["capabilities", "Capabilities"],
            ["industries", "Industries"],
            ["offerings", "Offerings"],
            ["business", "Business Model"],
            ["life", "Life at UIB"],
            ["careers", "Careers"], // <-- FIXED
          ].map(([id, label]) => (
            <button key={id} onClick={() => scrollToSection(id)} className={navItem(id)}>
              {label}
              <span className={underline(id)}></span>
            </button>
          ))}
        </nav>

        <button
          className="hidden lg:block px-5 py-2 bg-bg text-white rounded-lg hover:bg-blue-700 transition"
          onClick={() => scrollToSection("contact")}
        >
          Get in Touch
        </button>

        <button className="lg:hidden text-2xl text-gray-800" onClick={() => setMenuOpen(true)}>
          <FaBars />
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed top-0 left-0 w-64 h-full bg-white shadow-xl z-[9999] p-6"
              initial={{ x: -260 }}
              animate={{ x: 0 }}
              exit={{ x: -260 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-blue-700">Menu</h2>
                <button onClick={() => setMenuOpen(false)}>
                  <IoClose className="text-2xl" />
                </button>
              </div>

              <nav className="flex flex-col gap-5 text-blue-900 text-lg">
                {[
                  ["home", "Home"],
                  ["about", "About"],
                  ["capabilities", "Capabilities"],
                  ["industries", "Industries"],
                  ["offerings", "Offerings"],
                  ["business", "Business Model"],
                  ["life", "Life at UIB"],
                  ["contact", "Contact"],
                ].map(([id, label]) => (
                  <button key={id} onClick={() => scrollToSection(id)} className="text-left py-2">
                    {label}
                  </button>
                ))}

                {/* Careers always navigates */}
                <button
                  onClick={() => scrollToSection("careers")}
                  className="text-left py-2"
                >
                  Careers
                </button>
              </nav>
            </motion.div>

            <motion.div
              className="fixed inset-0 bg-black/40 z-[9990]"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          </>
        )}
      </AnimatePresence>

    </header>
  );
};

export default Navbar;

import { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import axios from "axios";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Check login status whenever the route changes
  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loginStatus);
  }, [location.pathname]);

  // Also set up listener for changes in other tabs
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "isLoggedIn") {
        setIsLoggedIn(e.newValue === "true");
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const navLinks = [
    { to: "/home", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const handleLogout = async () => {
    console.log("Attempting to logout...");
    console.log("Access token from storage:", localStorage.getItem("accessToken"));
    const token = localStorage.getItem("accessToken");
  
    if (!token) {
      console.log("No token found in localStorage.");
      return;
    }
  
    console.log("Access token from storage:", token ? "Present" : "Missing");
  
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/user/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      console.log("Logout API call successful");
  
      // Clear localStorage or relevant session data
      localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("isLoggedIn");
  
      // Redirect or update UI accordingly
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
      console.log("Error details:", err.response?.data || err.message);
    }
  };
  

  return (
    <nav className="bg-gray-800 text-gray-300 shadow-md w-full sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <NavLink
          to="/"
          className="text-2xl font-bold text-teal-500 hover:text-teal-400 transition duration-300"
        >
          Rental System
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `py-2 px-3 rounded-md hover:bg-gray-700 transition duration-300 ${
                  isActive ? "bg-teal-500 text-white font-semibold" : ""
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="py-2 px-3 rounded-md bg-red-500 hover:bg-red-600 text-white font-semibold"
            >
              Logout
            </button>
          ) : (
            <>
              <NavLink
                to="/login"
                className="py-2 px-3 rounded-md hover:bg-gray-700 transition duration-300"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="py-2 px-3 rounded-md hover:bg-gray-700 transition duration-300"
              >
                Register
              </NavLink>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 flex flex-col space-y-3 px-4 py-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="py-2 px-3 rounded-md hover:bg-gray-600 text-white"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}

          {isLoggedIn ? (
            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="py-2 px-3 rounded-md bg-red-500 hover:bg-red-600 text-white font-semibold"
            >
              Logout
            </button>
          ) : (
            <>
              <NavLink
                to="/login"
                className="py-2 px-3 rounded-md hover:bg-gray-600 text-white"
                onClick={() => setIsOpen(false)}
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="py-2 px-3 rounded-md hover:bg-gray-600 text-white"
                onClick={() => setIsOpen(false)}
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

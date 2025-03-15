import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { to: "/home", label: "Home" },
        { to: "/products", label: "Products" },
        { to: "/about", label: "About" },
        { to: "/contact", label: "Contact" },
        { to: "/register", label: "Register" },
        { to: "/login", label: "Login" },
    ];

    return (
        <nav className="bg-gray-800 text-gray-300 shadow-md w-full sticky top-0 z-10">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <NavLink to="/" className="text-2xl font-bold text-teal-500 hover:text-teal-400 transition duration-300">
                    Rental System
                </NavLink>

                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) =>
                                `py-2 px-3 rounded-md hover:bg-gray-700 transition duration-300 ${
                                    isActive ? 'bg-teal-500 text-white font-semibold' : ''
                                }`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>

                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden bg-gray-700 flex flex-col space-y-4 px-4 py-4">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `py-2 rounded-md hover:bg-gray-600 transition duration-300 ${
                                    isActive ? 'bg-teal-500 text-white font-semibold' : ''
                                }`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
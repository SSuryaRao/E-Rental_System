import React, { useState } from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation

function RegisterPage() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordMatchError, setPasswordMatchError] = useState("");

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        if (password !== e.target.value) {
            setPasswordMatchError("Passwords do not match");
        } else {
            setPasswordMatchError("");
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setPasswordMatchError("Passwords do not match");
            return;
        }
        // In a real application, you would handle form submission here
        console.log("Form submitted:", { firstName, lastName, email, password });
        // Reset form fields after submission (optional)
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setPasswordMatchError("");
    };

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div
                style={{ animation: "slideInFromLeft 1s ease-out" }}
                className="max-w-md bg-gray-800 rounded-xl shadow-2xl overflow-hidden p-8 space-y-6 w-full">
                <h2
                    style={{ animation: "appear 1.5s ease-out" }}
                    className="text-center text-3xl font-extrabold text-white">
                    Create Account
                </h2>
                <p style={{ animation: "appear 2.5s ease-out" }} className="text-center text-gray-400">
                    Sign up to join
                </p>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative">
                            <input
                                placeholder="First name"
                                className="peer h-10 w-full border rounded-md border-gray-700 text-white bg-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500"
                                required
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                id="firstName"
                            />
                            <label
                                className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5.5 peer-focus:text-blue-500 peer-focus:text-sm"
                                htmlFor="firstName">
                                First name
                            </label>
                        </div>
                        <div className="relative">
                            <input
                                placeholder="Last name"
                                className="peer h-10 w-full border rounded-md border-gray-700 text-white bg-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500"
                                required
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                id="lastName"
                            />
                            <label
                                className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5.5 peer-focus:text-blue-500 peer-focus:text-sm"
                                htmlFor="lastName">
                                Last name
                            </label>
                        </div>
                    </div>
                    <div className="relative">
                        <input
                            placeholder="your.email@example.com"
                            className="peer h-10 w-full border rounded-md border-gray-700 text-white bg-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500"
                            required
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                        />
                        <label
                            className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5.5 peer-focus:text-blue-500 peer-focus:text-sm"
                            htmlFor="email">
                            Email address
                        </label>
                    </div>
                    <div className="relative">
                        <input
                            placeholder="Password"
                            className="peer h-10 w-full border rounded-md border-gray-700 text-white bg-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500"
                            required
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id="password"
                        />
                        <label
                            className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5.5 peer-focus:text-blue-500 peer-focus:text-sm"
                            htmlFor="password">
                            Password
                        </label>
                    </div>
                    <div className="relative">
                        <input
                            placeholder="Confirm password"
                            className="peer h-10 w-full border rounded-md border-gray-700 text-white bg-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500"
                            required
                            type="password"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            id="confirmPassword"
                        />
                        <label
                            className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5.5 peer-focus:text-blue-500 peer-focus:text-sm"
                            htmlFor="confirmPassword">
                            Confirm password
                        </label>
                    </div>
                    {passwordMatchError && <p className="text-red-500 text-sm mt-1">{passwordMatchError}</p>}
                    <button
                        className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 rounded-md shadow-lg text-white font-semibold transition duration-200"
                        type="submit">
                        Create Account
                    </button>
                </form>
                <div className="text-center text-gray-400 mt-3">
                    Already have an account?
                    <Link to="/login" className="text-blue-300 hover:underline ml-1">Sign in</Link>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
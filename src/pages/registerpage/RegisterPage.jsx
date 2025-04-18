import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function RegisterPage() {
    const [fullName, setFullName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordMatchError, setPasswordMatchError] = useState("");
    const [serverError, setServerError] = useState("");

    const navigate = useNavigate();

    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        setConfirmPassword(value);
        if (password !== value) {
            setPasswordMatchError("Passwords do not match");
        } else {
            setPasswordMatchError("");
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!fullName || !userName || !email || !password || !confirmPassword) {
            setServerError("Please fill in all fields");
            return;
        }

        if (password !== confirmPassword) {
            setPasswordMatchError("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/user/register`, {
                fullname: fullName,
                username: userName,
                email,
                password,
            });

            console.log("Registration success:", response.data);
            // Redirect to login or home
            navigate("/login");

            // Reset form (optional)
            setFullName("");
            setUserName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setPasswordMatchError("");
            setServerError("");
        } catch (error) {
            setServerError(error.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div
                style={{ animation: "slideInFromLeft 1s ease-out" }}
                className="max-w-md bg-gray-800 rounded-xl shadow-2xl overflow-hidden p-8 space-y-6 w-full"
            >
                <h2
                    style={{ animation: "appear 1.5s ease-out" }}
                    className="text-center text-3xl font-extrabold text-white"
                >
                    Create Account
                </h2>
                <p style={{ animation: "appear 2.5s ease-out" }} className="text-center text-gray-400">
                    Sign up to join
                </p>

                {serverError && (
                    <p className="text-red-400 text-sm text-center">{serverError}</p>
                )}
                {passwordMatchError && (
                    <p className="text-red-400 text-sm text-center">{passwordMatchError}</p>
                )}

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    <input
                        type="text"
                        name="userName"
                        placeholder="Username"
                        className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                    />
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
                    >
                        Register
                    </button>
                </form>

                <p className="mt-4 text-center text-gray-400">
                    Already have an account?{" "}
                    <Link to="/login" className="text-indigo-500 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default RegisterPage;

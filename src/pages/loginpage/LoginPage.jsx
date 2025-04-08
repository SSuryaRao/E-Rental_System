import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/user/login",
        {
          identifier,
          password,
        }
      );

      console.log("Login successful:", response.data);
      // In your login component after successful login
      localStorage.setItem("isLoggedIn", "true");
      // Store the auth token if your API returns one
      if (response.data.message && response.data.message.token) {
        localStorage.setItem("authToken", response.data.message.token);
      }
      // After successful login
      localStorage.setItem('accessToken', response.data.token);

      setSuccessMessage("Login successful! Redirecting...");
      setError("");

      // Redirect after 2 seconds
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Something went wrong");
      setSuccessMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div
        style={{ animation: "slideInFromLeft 1s ease-out" }}
        className="max-w-md bg-gray-800 rounded-xl shadow-2xl overflow-hidden p-8 space-y-8 w-full"
      >
        <h2 className="text-center text-3xl font-extrabold text-white">
          Welcome Back
        </h2>
        <p className="text-center text-gray-400">
          Sign in with email or username
        </p>

        {error && <p className="text-red-500 text-center">{error}</p>}
        {successMessage && (
          <p className="text-green-500 text-center">{successMessage}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder="Email or Username"
              className="peer h-10 w-full border rounded-md border-gray-700 text-white bg-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500"
              required
              id="identifier"
              name="identifier"
              type="text"
            />
            <label
              htmlFor="identifier"
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-500 peer-focus:text-sm"
            >
              Email or Username
            </label>
          </div>
          <div className="relative">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="peer h-10 w-full border rounded-md border-gray-700 text-white bg-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500"
              required
              id="password"
              name="password"
              type="password"
            />
            <label
              htmlFor="password"
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-500 peer-focus:text-sm"
            >
              Password
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

import React from 'react';

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div
                style={{ animation: "slideInFromLeft 1s ease-out" }}
                className="max-w-md bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl shadow-2xl overflow-hidden p-8 space-y-8 w-full">
                <h2
                    style={{ animation: "appear 1.5s ease-out" }}
                    className="text-center text-3xl font-extrabold text-white">
                    Welcome Back
                </h2>
                <p style={{ animation: "appear 2.5s ease-out" }} className="text-center text-gray-200">
                    Sign in to continue
                </p>
                <form method="POST" action="#" className="space-y-6">
                    <div className="relative">
                        <input
                            placeholder="your.email@example.com"
                            className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-blue-500"
                            required
                            id="email"
                            name="email"
                            type="email"/>
                        <label
                            className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-500 peer-focus:text-sm"
                            htmlFor="email">
                            Email address
                        </label>
                    </div>
                    <div className="relative">
                        <input
                            placeholder="Password"
                            className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-blue-500"
                            required
                            id="password"
                            name="password"
                            type="password"/>
                        <label
                            className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-500 peer-focus:text-sm"
                            htmlFor="password">
                            Password
                        </label>
                    </div>
                    <div className="flex items-center justify-between">
                        <label className="flex items-center text-sm text-gray-200">
                            <input
                                className="form-checkbox h-4 w-4 text-blue-600 bg-gray-800 border-gray-300 rounded"
                                type="checkbox"/>
                            <span className="ml-2">Remember me</span>
                        </label>
                        <a className="text-sm text-blue-200 hover:underline" href="#">
                            Forgot your password?
                        </a>
                    </div>
                    <button
                        className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 rounded-md shadow-lg text-white font-semibold transition duration-200"
                        type="submit">
                        Sign In
                    </button>
                </form>
                <div className="text-center text-gray-300">
                    Don't have an account?
                    <a className="text-blue-300 hover:underline" href="#">Sign up</a>
                </div>
            </div>
        </div>
    );
}
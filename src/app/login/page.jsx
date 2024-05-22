// components/Login.js

'use client'


import { useState } from 'react';

import { FaMoon, FaSun } from "react-icons/fa";
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [theme, setTheme] = useState('light');

    const handleThemeChange = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
    };

    return (
        <div className={`min-h-screen flex items-center justify-center bg-gradient-to-r from-${theme === 'light' ? 'blue-500' : 'gray-800'} to-${theme === 'light' ? 'indigo-500' : 'gray-900'} px-4 sm:px-6 lg:px-8`}>
            <div className="max-w-md w-full space-y-8 bg-white bg-opacity-20 backdrop-filter backdrop-blur-md rounded-md p-8">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-extrabold text-white">
                        Sign in to your account
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 bg-white bg-opacity-10 backdrop-filter backdrop-blur-md border border-gray-300 placeholder-gray-200 text-gray-200 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 bg-white bg-opacity-10 backdrop-filter backdrop-blur-md border border-gray-300 placeholder-gray-200 text-gray-200 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-500 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-200">
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-500 hover:text-indigo-400">
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <div className="flex justify-center mt-4">
                    <button
                        className="text-white hover:text-gray-200 focus:outline-none"
                        onClick={handleThemeChange}
                    >
                        {theme === 'light' ? <FaMoon className="h-6 w-6" /> : <FaSun className="h-6 w-6" />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;


import React from "react";
import { Link } from "react-router-dom";
import Button from "../layouts/Button";
import GoogleLogo from "../assets/img/GoogleLogo.png";
const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6 ">
          Login
        </h2>

        <form className="space-y-5">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brightColor focus:border-transparent"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brightColor focus:border-transparent"
            />
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-brightColor border-gray-300 rounded focus:ring-brightColor"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <Link
              to="/forgot-password"
              className="text-sm text-brightColor hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <div className="mt-6 flex items-center justify-center">
            <Button title="Login" />
          </div>
        </form>

        {/* Continue with Google */}
        <div className="mt-6 flex items-center justify-center">
          <button
            className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-600 bg-white hover:bg-gray-50"
          >
            <img
              src={GoogleLogo}
              alt="Google icon"
              className="w-6 h-6 mr-2"
            />
            Continue with Google
          </button>
        </div>

        {/* Divider and Sign Up Link */}
        <div className="mt-8 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-brightColor font-medium hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from "react";

import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="text-black h-full flex justify-center items-center  shadow-md">
      <div className="bg-white w-96 p-8 rounded-xl">
        <h1 className="font-medium text-2xl text-black mt-3 text-center">
          Register
        </h1>

        <form>
          <div className="my-5 text-sm">
            <label htmlFor="username" className="block">
              Username
            </label>
            <input
              type="text"
              autoFocus
              id="username"
              className="rounded-sm px-4 py-3 mt-3 focus:outline-none border border-gray-500 w-full"
              placeholder="Username"
            />
          </div>

          <div className="my-5 text-sm">
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="rounded-sm px-4 py-3 mt-3 focus:outline-none border border-gray-500 w-full"
              placeholder="Password"
            />
          </div>

          <div className="my-5 text-sm">
            <label htmlFor="password" className="block">
              Confirm Password
            </label>
            <input
              type="password"
              id="password"
              className="rounded-sm px-4 py-3 mt-3 focus:outline-none border border-gray-500 w-full"
              placeholder="Password"
            />
            <div className="flex justify-end mt-2 text-xs text-gray-600">
              <Link to="/reset">Forgot Password?</Link>
            </div>
          </div>

          <button className="border text-primary border-primary rounded-md self-center text-center p-2 duration-300  hover:bg-primary hover:text-white w-20">
            Register
          </button>
        </form>

        <p className="mt-12 text-xs text-center font-light text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-black font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;

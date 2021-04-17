import React from "react";
import { Link } from "react-router-dom";
import Gift from "../assets/undraw_gift1.svg";

function Login() {
  return (
    <div className="text-black h-full flex justify-center items-center">
      <img
        alt="login-img"
        className="h-80 w-40 flex-1 object-contain"
        src={Gift}
      />
      <div className="m-10 flex-1 bg-white">
        <div className="py-8 px-8 rounded-md shadow-lg">
          <h1 className="font-medium text-2xl  text-center">Login</h1>

          <form>
            <div className="my-5 text-sm">
              <label htmlFor="username" className="block">
                Username
              </label>
              <input
                type="text"
                autoFocus
                id="username"
                className="border border-gray-500 rounded-md px-4 py-3 mt-3 focus:outline-none w-full"
                placeholder="Username"
              />
            </div>

            <div className="my-5 text-sm">
              <label htmlFor="password" className="block ">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="border border-gray-500 rounded-md px-4 py-3 mt-3 focus:outline-none  w-full"
                placeholder="Password"
              />
              <div className="flex justify-end mt-2 text-xs ">
                <Link to="/reset">Forgot Password?</Link>
              </div>
            </div>

            <button className="border border-primary rounded-md self-center text-center p-2 duration-300 text-primary  hover:bg-primary hover:text-white w-20">
              Login
            </button>
          </form>

          <p className="mt-12 text-xs text-center font-light">
            Don't have an account?{" "}
            <Link to="/register" className="text-black font-medium">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

import React from "react";

import { Link } from "react-router-dom";

function Reset() {
  return (
    <div className="text-black h-full flex justify-center items-center  shadow-md">
      <div className="bg-white w-96 p-8 rounded-xl">
        <h1 className="font-medium text-2xl mt-3 text-center">Reset</h1>

        <form className="mt-6">
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

          <button className="border text-primary border-primary rounded-md self-center text-center p-2 duration-300  hover:bg-primary hover:text-white w-20">
            Reset
          </button>
        </form>

        <p className="mt-12 text-xs text-center font-light text-gray-400">
          Don't have an account?{" "}
          <Link to="/register" className="text-black font-medium">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Reset;

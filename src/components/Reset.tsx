import React from 'react';

import { Link } from 'react-router-dom';

function Reset() {
  return (
    <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
      <div className="py-8 px-8 rounded-xl">
        <h1 className="font-medium text-2xl mt-3 text-center">Reset</h1>

        <form className="mt-6">
          <div className="my-5 text-sm">
            <label htmlFor="username" className="block text-black">Username</label>
            <input type="text" autoFocus id="username" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Username" />
          </div>

          <button className="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">Reset</button>
        </form>

        <p className="mt-12 text-xs text-center font-light text-gray-400">Don't have an account? <Link to="/register" className="text-black font-medium">Register</Link></p>
      </div>
    </div>
  );
}

export default Reset;

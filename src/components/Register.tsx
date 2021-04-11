import React from 'react';

import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
      <div className="py-8 px-8 rounded-xl">
        <h1 className="font-medium text-2xl mt-3 text-center">Register</h1>

        <form className="mt-6">
          <div className="my-5 text-sm">
            <label htmlFor="username" className="block text-black">Username</label>
            <input type="text" autoFocus id="username" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Username" />
          </div>

          <div className="my-5 text-sm">
            <label htmlFor="password" className="block text-black">Password</label>
            <input type="password" id="password" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Password" />
          </div>

          <div className="my-5 text-sm">
            <label htmlFor="password" className="block text-black">Confirm Password</label>
            <input type="password" id="password" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Password" />
            <div className="flex justify-end mt-2 text-xs text-gray-600">
              <Link to="/reset">Forgot Password?</Link>
            </div>
          </div>

          <button className="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">Register</button>
        </form>

        <p className="mt-12 text-xs text-center font-light text-gray-400">Already have an account? <Link to="/login" className="text-black font-medium">Login</Link></p>
      </div>
    </div>
  );
}

export default Register;

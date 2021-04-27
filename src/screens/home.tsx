import React from 'react';
import { StarIcon } from '@heroicons/react/solid';

function Home() {
  return (
    <ol className="flex flex-col m-auto w-11/12 text-gray-700">
      <li className="flex justify-between bg-white border-purple-500 border-l-4 py-4 shadow-md rounded-r-lg">
        <div className="flex">
          <img className="mx-4 rounded-full h-10 w-10 object-cover self-center" src="https://images.unsplash.com/photo-1548546738-8509cb246ed3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80" />

          <div className="self-center">
            <span className="text-3xl font-bold">Dwight</span>
            <span className="ml-1 font-light">Schrute</span>
          </div>
        </div>

        <div className="self-center">
          <span>earned</span>
          <span className="text-xl ml-1 font-bold">20<StarIcon className="h-5 w-5 text-yellow-500 align-text-bottom inline" /></span>
          <span className="ml-1">for</span>
          <span className="text-purple-500 text-lg font-bold ml-1">Hiring</span>
          <span className="ml-1">on</span>
        </div>

        <div className="relative self-center mr-8">
          <span className="font-black text-5xl">22</span>
          <span className="ml-1 font-light relative -top-5">Jul</span>
          <span className="font-medium absolute right-0 bottom-0">21</span>
        </div>
      </li>

      <li className="flex justify-between bg-white border-green-500 border-l-4 py-4 shadow-md rounded-r-lg mt-4">
        <div className="flex">
          <img className="mx-4 rounded-full h-10 w-10 object-cover self-center" src="https://images.unsplash.com/photo-1548546738-8509cb246ed3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80" />

          <div className="self-center">
            <span className="text-3xl font-bold">Jim</span>
            <span className="ml-1 font-light">Halpert</span>
          </div>
        </div>

        <div className="self-center">
          <span>earned</span>
          <span className="text-xl ml-1 font-bold">10<StarIcon className="h-5 w-5 text-yellow-500 align-text-bottom inline" /></span>
          <span className="ml-1">for</span>
          <span className="text-green-500 text-lg font-bold ml-1">COE</span>
          <span className="ml-1">on</span>
        </div>

        <div className="relative self-center mr-8">
          <span className="font-black text-5xl">7</span>
          <span className="ml-1 font-light relative -top-5">Apr</span>
          <span className="font-medium absolute right-0 bottom-0">21</span>
        </div>
      </li>

      <li className="flex justify-between bg-white border-pink-500 border-l-4 py-4 shadow-md rounded-r-lg mt-4">
        <div className="flex">
          <img className="mx-4 rounded-full h-10 w-10 object-cover self-center" src="https://images.unsplash.com/photo-1548546738-8509cb246ed3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80" />

          <div className="self-center">
            <span className="text-3xl font-bold">Michael</span>
            <span className="ml-1 font-light">Scott</span>
          </div>
        </div>

        <div className="self-center">
          <span>earned</span>
          <span className="text-xl ml-1 font-bold">50<StarIcon className="h-5 w-5 text-yellow-500 align-text-bottom inline" /></span>
          <span className="ml-1">for</span>
          <span className="text-pink-500 text-lg font-bold ml-1">KFC</span>
          <span className="ml-1">on</span>
        </div>

        <div className="relative self-center mr-8">
          <span className="font-black text-5xl">18</span>
          <span className="ml-1 font-light relative -top-5">Mar</span>
          <span className="font-medium absolute right-0 bottom-0">21</span>
        </div>
      </li>
    </ol>
  );
}

export default Home;

import React from 'react';
import Select from 'react-select';

function Claim() {
  return (
    <form className="w-8/12 mx-auto bg-white py-8 px-8 rounded-md shadow-md">
      <div className="my-5 text-sm">
        <label htmlFor="type" className="block">
          Type
        </label>
        <select autoFocus id="type" className="border border-gray-500 rounded-md px-4 py-3 mt-3 focus:outline-none w-full" placeholder="Type">
          <option>Hiring</option>
          <option>COE</option>
          <option>KFC</option>
        </select>
      </div>

      <div className="my-5 text-sm">
        <label htmlFor="date" className="block">
          Date
        </label>
        <input type="date" id="date" className="border border-gray-500 rounded-md px-4 py-3 mt-3 focus:outline-none w-full" />
      </div>

      <div className="my-5 text-sm">
        <label htmlFor="date" className="block">
          Peers
        </label>
        <Select options={[{ value: 'toby-flenderson', label: 'Toby Flenderson' }, { value: 'stanley-hudson', label: 'Stanley Hudson' }, { value: 'pam-beesly', label: 'Pam Beesly' }]} isMulti classNamePrefix="react-select" />
      </div>

      <div className="my-5 text-sm">
        <label htmlFor="description" className="block">
          Description
        </label>
        <textarea id="description" className="border border-gray-500 rounded-md px-4 py-3 mt-3 focus:outline-none w-full" />
      </div>

      <div className="my-5 text-sm">
        <input type="checkbox" id="agreement" />
        <label htmlFor="agreement" className="ml-2">I hereby declare that the following submission is best to my knowledge</label>
      </div>

      <button className="border border-primary rounded-md self-center text-center p-2 duration-300 text-primary  hover:bg-primary hover:text-white w-20">
        Submit
      </button>

    </form>
  );
}

export default Claim;

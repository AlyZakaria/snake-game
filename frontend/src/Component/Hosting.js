import React from 'react';
// import logo from '../images/logo.png'

const Hosting = () => {
  return (
    <>
    <div className="container">
    <div className="row d-flex justify-content-center ">
      <div className="col-3 ">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 container ">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="number"
            >
              Number of Players
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="number"
              type="number"
              placeholder="2-10"
              min="2"
              max="10"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="countries"
            >
              Board types
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
            >
              <option selected>Choose a board type</option>
              <option value="US">Type 1</option>
              <option value="CA">Type 2</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Create Room
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
    </>
  );
};

export default Hosting;
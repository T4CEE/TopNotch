import React from "react";
import { Link } from "react-router-dom";

const PrivacyActStatement: React.FC = () => {
  return (
    <div className="p-6 mt-20 max-w-4xl mx-auto bg-white border border-gray-200 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Privacy Act Statement and Declaration of Eligibility</h1>
      <p className="mb-4">
        FEMA is required by law to give you a copy of the Privacy Act Statement. The Privacy Act of 1974 protects your
        rights as to how FEMA uses and shares your information with entities such as states, tribes, local governments,
        and other organizations. The Stafford Act and other laws allow FEMA to collect information to determine
        eligibility and provide assistance after a Presidentially declared disaster.
      </p>
      <p className="mb-4">
        If you get FEMA assistance and your insurance or other sources cover the same loss, you may be required to
        return some or all of the FEMA assistance you received.
      </p>
      <p className="mb-4">
        To qualify for assistance, you must declare that you or someone in your household is a citizen, non-citizen
        national, or a qualified alien of the United States. If you provide false information or lie in an attempt to
        get assistance, it violates federal and state laws, which carry criminal or civil penalties or both.
      </p>
      <p className="mb-4">
        You authorize FEMA and the state, tribe, or local government to verify all of the information you provide and
        request documentation from your insurance company, or other third parties, to determine your eligibility for
        assistance.
      </p>
      <p className="mb-4">
        The disclosure of information, including the Social Security number, on this form is voluntary; but failure to
        provide the information we request may delay or stop you from getting disaster assistance.
      </p>
      <div className="mt-6">
        <div className="flex items-center mb-4">
          <input
            id="privacy-act-agree"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
          />
          <label htmlFor="privacy-act-agree" className="ml-2 text-sm font-medium text-gray-900">
            I agree that I have read and accept the Privacy Act Statement. <span className="text-red-500">*</span>
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="declaration-agree"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
          />
          <label htmlFor="declaration-agree" className="ml-2 text-sm font-medium text-gray-900">
            I declare that I or someone in my household is a citizen, non-citizen national, or qualified non-citizen of
            the United States. <span className="text-red-500">*</span>
          </label>
        </div>
      </div>
      <Link to='/congrats'>
    <button
        type="submit"
        className="mt-6 mb-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </Link>
    </div>
  );
};

export default PrivacyActStatement;

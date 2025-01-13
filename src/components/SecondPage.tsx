import { useState } from 'react'
import {  useNavigate  } from 'react-router-dom';


const SecondPage = () => {

  const navigate = useNavigate()

      const [zipCode, setZipCode] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Allow only numbers and limit to 5 characters
    if (/^\d{0,5}$/.test(value)) {
      setZipCode(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (zipCode.length === 5) {
      navigate('/thirdselection')
      alert(`ZIP Code submitted: ${zipCode}`);
    } else {
      alert("Please enter a valid 5-digit ZIP code.");
    }


  };

    return (
        <div className="mt-20 pt-4 px-4 "> 
        <h1 className="font-bold text-[22px]">What is the Location of your loss?</h1>
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mt-4" >
        Enter ZIP Code
      </label>
      <input
        type="text"
        id="zipCode"
        value={zipCode}
        onChange={handleChange}
        placeholder="12345"
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />
      <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mt-4">
        Enter Home Address
      </label>
      <input
        type="text"
        id="Home Address"
        // value={zipCode}
        onChange={handleChange}
        placeholder="Enter Home Address"
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />
      <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mt-4">
        Enter SSN Number
      </label>
      <label htmlFor="zipCode" className="block text-xs font-medium text-green-600 m1-4">
        100% secured by <span className='font-bold'>FEMA</span>
      </label>
      <input
        type="text"
        id="SSN"
        // value={zipCode}
        onChange={handleChange}
        placeholder="Enter 9-digit SSN number"
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />
      <button
        type="submit"
        className="mt-4 mb-4  w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        Next
      </button>
    </form>

        </div>
    )
}

export default SecondPage;
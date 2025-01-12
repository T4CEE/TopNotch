import { useEffect, useRef, useState } from "react";
// import TopNotchLogo from "@/assets/TopNotchLogo.png";
// import { Button } from "@/components/ui/button"
// import DropDown from '@/components/DownOne'
// import DropDownTwo from '@/components/DownTwo'
import { GoDotFill } from "react-icons/go";
import Flag from 'react-world-flags'
import {Link} from "react-router-dom"


const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  function toggleDropDown() {
    setIsDropdownVisible(!isDropdownVisible);
  }

  useEffect(() => {
    // Close dropdown when clicking outside of it
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <nav>
      <div className="fixed z-30 w-full text-[10px] pl-1 pt-1 bg-gray-100">
        <div className="flex">
        <Flag className='w-9' code="US" /> <h1 className="ml-1">
      An official website of the United States government.
        </h1>
        </div>
        </div>
      <div className="fixed z-20 w-full bg-white md:h-[70px] md:pt-1 md:mt-4">
        <div className="flex flex-row  md:justify-between">
        <div className=" w-full bg-white my-auto px-3 md:px-14 md:pt-1">
        <div className="flex flex-row md:justify-between mt-2">
          <Link to='/'>
          <div className="flex font-semibold text-xl py-auto">
            <h1 className="text-black">Disaster</h1>
            <h1 className="text-blue-600"> Assistance </h1>
            <GoDotFill className="text-red-700 mt-2" />
            <h1 className="text-black"> gov</h1>
          </div>
          </Link>
        </div>
      </div>
          {/* Toggle button */}
          <div className="relative block md:hidden" id="dropDownButton" ref={dropdownRef}>
            <div
              className=" mt-7 h-[50px]"
              onClick={toggleDropDown}
            >
              <span className="material-symbols-outlined text-black pr-4">
                <div className="text-4xl">menu</div>
              </span>
            </div>

            {isDropdownVisible && (
              <div
                className=" bg-[#002b47] p-5 top-[79px] right-[-12px] w-[200px] h-[250px] absolute"
                id="dropdown"
              >
                <div className=" pl-2 text-[20px] font-bold text-white">
                  <ul>
                    <Link to='/about'>
                      <li className=" hover:underline mb-6">About</li>
                      </Link>
                      <Link to='/faqs'>
                      <li className=" hover:underline mb-6">FAQs</li>
                      </Link>
                      <Link to="/contact-us">
                      <li className=" hover:underline">Contact Us</li>
                      </Link>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
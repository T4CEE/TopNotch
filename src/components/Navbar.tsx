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
    <nav className="">
      <div className="fixed z-30 w-full text-[10px] pl-1 pt-1 bg-gray-100">
        <div className="flex">
        <Flag className='w-9' code="US" /> <h1 className="ml-1">
      An official website of the United States government.
        </h1>
        </div>

        </div>
      <div className="fixed z-20 w-full bg-[#005288] md:h-[60px] md:pt-1 md:mt-5">
        <div className="flex flex-row  md:justify-between">
        <div className=" flex w-full my-auto px-3 md:px-14 md:pt-1">
        <div className="flex flex-row md:justify-between mt-6 md:mt-2 md:ml-12">
          <Link to='/'>
          <div className="flex font-semibold text-xl py-auto">
            <h1 className="text-white">Disaster</h1>
            <h1 className="text-blue-600"> Assistance </h1>
            <GoDotFill className="text-red-700 mt-[5px] md:mt-2" />
            <h1 className="text-white"> gov</h1>
          </div>
          </Link>
        </div>
        <div className="hidden md:block">
        <div className=" flex pl-2 text-[16px] font-bold text-white gap-x-6 pt-3  ml-14">
                    <Link to='/about'>
                      <h1 className=" hover:underline mb-6">About</h1>
                      </Link>
                      <Link to='/faqs'>
                      <h1 className=" hover:underline mb-6">FAQs</h1>
                      </Link>
                      <Link to="/contact-us">
                      <h1 className=" hover:underline">Contact Us</h1>
                      </Link>
                </div>
        </div>
      </div>
          {/* Toggle button */}
          <div className="relative block md:hidden" id="dropDownButton" ref={dropdownRef}>
            <div
              className=" mt-7 h-[50px]"
              onClick={toggleDropDown}
            >
              <span className="material-symbols-outlined text-white pr-4 mt-2">
                <div className="text-[35px]">menu</div>
              </span>
            </div>

            {isDropdownVisible && (
              <div
                className=" bg-[#002b47] p-5 top-[79px] right-[-12px] w-[200px] h-[680px] absolute"
                id="dropdown"
              >
                <div className=" pl-2 text-[20px] font-bold text-white">
                  <ul onClick={toggleDropDown}>
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
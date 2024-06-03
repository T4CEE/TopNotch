// import { useEffect, useRef, useState } from "react";
import TopNotchLogo from "@/assets/TopNotchLogo.png";
import { Button } from "@/components/ui/button"
// import DropDown from '@/components/DownOne'
// import DropDownTwo from '@/components/DownTwo'

const Navbar = () => {
  // const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  // const dropdownRef = useRef<HTMLDivElement>(null);

  // function toggleDropDown() {
  //   setIsDropdownVisible(!isDropdownVisible);
  // }

  // useEffect(() => {
  //   // Close dropdown when clicking outside of it
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
  //       setIsDropdownVisible(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [dropdownRef]);

  return (
    <nav>
      <div className="fixed z-20 w-full bg-[#0D0D2B] md:h-[120px] px-4 md:px-14 md:pt-1">
        <div className="flex flex-row  md:justify-between">
          <div className="flex">
            <img
              src={TopNotchLogo}
              alt=""
              className=" mr-[100px] md:mr-0 w-[130px] md:w-[364px] h-[90px] md:h-[118px] object-contain md:mt-1"
            />
            {/* <div className="ml-10 my-auto hidden md:block">
              <DropDown/>
            </div>
            <div className="ml-3 my-auto hidden md:block">
              <DropDownTwo />
            </div> */}
          </div>
          <div className="flex my-auto ">
            <h1 className=" text-white md:mr-8 md:mt-2 hidden md:block"> Log in</h1>
            <a href="https://wa.me/2349169711302">
              <Button variant="ghost" className="text-white text-xs md:mr-20 p-2 md:p-0 md:px-3 py-1 border-r-[0.5px] ring-[#FDEA02] ring-[0.5px] w-auto">Create an account</Button>
            </a>
          </div>
          {/* Toggle button */}
          {/* <div className="relative block md:hidden" id="dropDownButton" ref={dropdownRef}>
            <div
              className=" mt-7 h-[50px]"
              onClick={toggleDropDown}
            >
              <span className="material-symbols-outlined text-white ">
                <div className="text-2xl">menu</div>
              </span>
            </div>

            {isDropdownVisible && (
              <div
                className=" bg-[#0D0D2B] p-5 top-[90px] right-[-12px] w-[200px] h-[250px] absolute"
                id="dropdown"
              >
                <div className=" pl-2 text-[20px] font-bold text-white">
                  <ul>
                      <li className=" hover:underline mb-6">Product</li>
                      <li className=" hover:underline">Company</li>
                  </ul>
                </div>
              </div>
            )}
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

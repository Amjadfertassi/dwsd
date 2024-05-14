import { useState } from "react";
import { close, logo, FlexLogo3 , menu , Flex_logo , FlexDOK_V2 } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex justify">
      <nav className="w-full flex py-8 justify-between items-center navbar">
        {/* Flex Dok logo */}
        <img src={FlexDOK_V2} alt="Flex_Dok_Logo" className="w-[144px] h-[72px] mt-1" />

        <ul className="list-none lg:flex ml-10 hidden justify-center items-center flex-1">
          {/* Hidden Menu in mobile Screen size */}
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`http://${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          
          {/* Get Started button */}
          <li className="font-poppins font-normal cursor-pointer text-[16px] ml-10">
            <a href="#get-started" className="bg-blue-700 text-white px-6 py-3 rounded-md">Get Started</a>
          </li>
        </ul>

        {/* Just for Mobile Screen */}
        <div className="lg:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-7" : "mb-4"}`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              {/* Get Started button */}
              <li className="font-poppins font-medium cursor-pointer text-[16px]">
                <a href="#" target="blank" className="bg-lightblue text-white px-6 py-3 rounded-md">Get Started</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

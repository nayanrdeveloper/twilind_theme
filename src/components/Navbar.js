import React from "react";
import userIcon from "../assets/image_5.png";
import SmileHateIcon from "../assets/hate_icon.png";
import Logo from "../assets/RN.png";
import LogoDesktop from "../assets/ayan.png";

export default function Navbar() {
  return (
    <nav className="w-screen p-4 background_image border-b-2 border-grey" id="home">
      <div className="px-2 flex flex-wrap justify-between items-center w-full h-full mx-auto">
        <div className="flex item-center justify-center">
          <div className="flex item-center justify-center mt-2 border-r-2 border-grey">
            <img className="w-10 h-8" src={Logo} alt="" />
            <img className="w-10 h-8 mt-2 mr-2" src={LogoDesktop} alt="" />
          </div>
          <ul className="flex flex-wrap navbar-list text-grey ml-2">
            <li className="cursor-pointer p-4 hover:nav-user-btn">Portfolio</li>
            <li className="cursor-pointer p-4 hover:nav-user-btn">About</li>
            <li className="cursor-pointer p-4 hover:nav-user-btn">Positions</li>
            <li className="cursor-pointer p-4 hover:nav-user-btn">Interest</li>
            <li className="cursor-pointer p-4 hover:nav-user-btn">Contact Us</li>
          </ul>
        </div>
        <div className="flex pr-4 justify-center text-center">
          <button className="flex border-none p-3 rounded-full text-center justify-center mt-1  text-white mr-4 nav-user-btn">
            <img src={SmileHateIcon} alt="" className="mr-1" />
            nayanr008
            <svg
              className="ml-1 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button className="flex border-none p-4 bg-black2 rounded-full text-center justify-center  text-white mr-4 hover:nav-user-btn">
            <img src={userIcon} alt="" className="mr-1" />
            Aval...Mainnet
          </button>
          <button className="border-none w-10 h-10 bg-black2 rounded-full text-center text-white mt-2">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

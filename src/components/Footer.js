import React from "react";

export default function Footer() {
  return (
    <footer className="container w-screen px-10 py-5 absolute bottom-0 left-0" id="home">
      <div className="px-2 flex flex-wrap justify-between items-center w-full h-full mx-auto">
        <div className="flex item-center">
          <span className="self-center whitespace-nowrap mr-4 p-1 text-grey">
          © 2021 Project Name All Rights Reserved
          </span>
          <ul className="flex flex-wrap navbar-list text-grey">
            <li className="cursor-pointer p-4 hover:text-white">Whitepaper</li>
            <li className="cursor-pointer p-4 hover:text-white">Contat us</li>
            <li className="cursor-pointer p-4 hover:text-white">Join Community</li>
          </ul>
        </div>
        <div className="flex pr-4 justify-center text-center">
          <button className="flex border-none p-3 footer-feedback-btn rounded-full text-center justify-center  text-white mr-4 hover:shadow-xl">Share Feedback</button>
        </div>
      </div>
    </footer>
  );
}

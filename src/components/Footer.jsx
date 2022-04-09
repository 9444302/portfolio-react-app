import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Footer = () => {
    return (
      <div className="bottom-0 grid grid-cols-2 h-[40px] justify-center py-2 px-4 bg-[#0a192f] text-gray-300">
        <div>
          <div className="grid grid-cols-4">
            <a
              className="flex justify-between items-center w-full hover:text-pink-600"
              href="/"
            >
              <FaLinkedin />
            </a>
            <a
              className="flex justify-between items-center w-full hover:text-pink-600"
              href="/"
            >
              <FaGithub />
            </a>
            <a
              className="flex justify-between items-center w-full hover:text-pink-600"
              href="/"
            >
              <HiOutlineMail />
            </a>
            <a
              className="flex justify-between items-center w-full hover:text-pink-600"
              href="/"
            >
              <BsFillPersonLinesFill />
            </a>
          </div>
        </div>
        <div className="text-right">
          <a className="underline hover:text-pink-600" href="">
            Open Source Code
          </a>
        </div>
      </div>
    );
}

export default Footer

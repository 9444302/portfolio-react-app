import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
    return (
      <div className="bottom-0 grid grid-cols-2 h-[40px] justify-center py-2 px-4 bg-[#0a192f] text-gray-300">
        <div>
          <div className="grid grid-cols-4">
            <a
              rel="noreferrer"
              target="_blank"
              className="flex justify-between items-center w-full hover:text-pink-600"
              href="https://www.linkedin.com/in/tori-pitts-914085224"
            >
              <FaLinkedin />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              className="flex justify-between items-center w-full hover:text-pink-600"
              href="https://github.com/9444302"
            >
              <FaGithub />
            </a>
            <a
              className="flex justify-between items-center w-full hover:text-pink-600"
              href="mailto: toripittsb@gmail.com"
            >
              <HiOutlineMail />
            </a>
          </div>
        </div>
        <div className="text-right">
          <a
            className="underline hover:text-pink-600"
            href="https://github.com/9444302/portfolio-react-app"
          >
            Open Source Code
          </a>
        </div>
      </div>
    );
}

export default Footer

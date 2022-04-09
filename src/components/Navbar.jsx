import React, {useState} from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/t.png';
import {Link} from 'react-scroll' 

const Navbar = () => {
    const [nav, setNave] = useState(false);
    const handleClick = () => setNave(!nav);

    return (
      <div>
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4  bg-[#0a192f] text-gray-300">
          <img src={Logo} alt="logo" style={{ width: "50px" }} />

          {/* menu */}
          <ul className="hidden md:flex">
            <li>
              <Link
                className="hover:text-pink-600"
                to="home"
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-pink-600"
                to="about"
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-pink-600"
                to="skills"
                smooth={true}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-pink-600"
                to="work"
                smooth={true}
                duration={500}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-pink-600"
                to="contact"
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* hamburger */}
          <div
            onClick={handleClick}
            className="md:hidden z-10 hover:text-pink-600"
          >
            {!nav ? <FaBars /> : <FaTimes />}
          </div>

          {/* mobile menu */}
          <ul
            className={
              !nav
                ? "hidden"
                : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
            }
          >
            <li className="py-6 text-4xl">
              <Link
                className="hover:text-pink-600"
                onClick={handleClick}
                to="home"
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="py-6 text-4xl">
              <Link
                className="hover:text-pink-600"
                onClick={handleClick}
                to="about"
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="py-6 text-4xl">
              <Link
                className="hover:text-pink-600"
                onClick={handleClick}
                to="skills"
                smooth={true}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li className="py-6 text-4xl">
              <Link
                className="hover:text-pink-600"
                onClick={handleClick}
                to="work"
                smooth={true}
                duration={500}
              >
                Work
              </Link>
            </li>
            <li className="py-6 text-4xl">
              <Link
                className="hover:text-pink-600"
                onClick={handleClick}
                to="contact"
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* social icons */}
          <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
            <ul>
              <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0C66C2]">
                <a
                  className="flex justify-between items-center w-full text-gray-300"
                  href="/"
                >
                  Linkedin <FaLinkedin />
                </a>
              </li>
              <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2DA042]">
                <a
                  className="flex justify-between items-center w-full text-gray-300"
                  href="/"
                >
                  Github <FaGithub />
                </a>
              </li>
              <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-purple-900">
                <a
                  className="flex justify-between items-center w-full text-gray-300"
                  href="/"
                >
                  Email <HiOutlineMail />
                </a>
              </li>
              <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700">
                <a
                  className="flex justify-between items-center w-full text-gray-300"
                  href="/"
                >
                  Resume <BsFillPersonLinesFill />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Navbar

import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from "react-scroll";

const Home = () => {
    return (
      <div name="home" className="w-full h-screen bg-[#0a192f]">
        <div className="max-w-[800px] mx-auto px-8 flex flex-col justify-center h-full">
          <p className="text-pink-600">Hi, my name is</p>
          <h1
            className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]
                "
          >
            Tori Pitts
          </h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
            Front-End Developer
          </h2>
          <p className="text-[#8892b0] py-4 max-w-[700px]">
            I'm a front end developer that specializes in building responsive web pages with React.
          </p>
          <div>
            <Link to="work" smooth={true} duration={500}>
              <button
                className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600"
              >
                View Work
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
}

export default Home

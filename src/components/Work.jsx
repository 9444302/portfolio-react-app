import React from 'react'
import Dictionary from '../assets/dictionary-app.png'
import Weather from '../assets/weather-app.png'


const Work = () => {
    return (
      <div
        name="work"
        className="w-full md:h-screen bg-[#0a192f] text-gray-300"
      >
        <div className="max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Work
            </p>
            <p className="py-4">Check out my latest work</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div
              style={{ backgroundImage: `url(${Weather})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  React JS aplication
                </span>
                <div className="pt-8 text-center">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://priceless-shirley-dcefde.netlify.app"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600">
                      Demo
                    </button>
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/9444302/weather-react"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${Dictionary})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  React JS aplication
                </span>
                <div className="pt-8 text-center">
                  <a
                    rel="noreferrer"
                    href="https://goofy-varahamihira-08354f.netlify.app"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600">
                      Demo
                    </button>
                  </a>
                  <a
                    rel="noreferrer"
                    href="https://github.com/9444302/dictionary-project"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Work

import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-[#0a192f] text-gray-300 flex justify-center items-center pt-[70px] "
    >
      <div className="max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Contact
          </p>
          <p className="my-4">
            Submit the form below or shoot me and email -{" "}
            <a
              className="underline hover:text-pink-600"
              href="mailto: toripittsb@gmail.com"
            >
              toripittsb@gmial.com
            </a>
          </p>
        </div>
        <form
          method="POST"
          action="https://getform.io/f/1257a118-f1e8-4204-b7e0-03bcad968952"
          className="flex flex-col w-full mb-[80px]"
        >
          <input
            className="my-4 p-2 bg-[#f1f3fa] text-black"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-[#f1f3fa] text-black"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="my-4 p-2 bg-[#f1f3fa] text-black"
            name="message"
            rows="10"
            placeholder="Message"
          ></textarea>
          <div>
            <button
              type="submit"
              className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-10 py-3 my-8 mx-auto flex items-center"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

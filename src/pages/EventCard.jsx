import React from "react";
import img from "../assets/EventBackground.png"

const EventCard = () => {
  return (
    <div 
      className="flex justify-center items-center text-white min-h-screen w-full p-4"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto flex justify-center items-center w-full bg-opacity-70  rounded-lg">
        <div className="w-full rounded-lg shadow-lg flex flex-wrap items-center">
          
          {/* Left Section */}
          <div className="w-full md:w-1/2 p-4 flex justify-center">
            <div className="relative bg-gray-300 p-1 rounded-lg shadow-md border border-gray-600 w-full max-w-[400px]">
              <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHx8fDA%3D"
                alt="Event"
                className="rounded-lg w-full h-auto"
              />
              <div className="absolute top-2 right-2p-1 rounded-full">
                <span className="text-white text-xs">🔘</span>
              </div>
            </div>
          </div>
          
          {/* Right Section */}
          <div className="w-full text-center md:w-1/2 p-4">
            <h2 className="text-6xl max-sm:text-4xl font-bold">Event Name</h2>
            <p className="mt-4 text-gray-300 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam.
            </p>
            <button className="mt-6 bg-gray-600 hover:bg-gray-500 text-white py-2 px-6 rounded-full text-lg transition-colors duration-300">
              Register
            </button>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default EventCard;

import React from "react";
import { useParams } from "react-router-dom";
import { events } from "../data/eventsData";
import img from "../assets/EventBackground.png";

const EventCard = () => {
  const { id } = useParams();
  const event = events.find(e => e.id === parseInt(id));

  if (!event) return <div className="text-white text-center p-8">Event not found</div>;

  return (
    <div 
      className="flex justify-center items-center text-white min-h-screen w-full p-4"
      style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}
    >
      <div className="mx-auto flex justify-center items-center w-full max-w-6xl bg-black bg-opacity-70 rounded-lg p-8">
        <div className="w-full flex flex-wrap items-center">
          <div className="w-full md:w-1/2 p-4">
            <div className="relative bg-gray-300 rounded-lg shadow-md border border-gray-600">
              <img
                src={event.image}
                alt="Event"
                className="rounded-lg w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 p-4 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">{event.title}</h2>
            <p className="text-gray-300 text-lg mb-8">
              {event.details}
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-full text-lg transition-colors duration-300">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
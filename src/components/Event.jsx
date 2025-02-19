import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { Link } from "react-router-dom";
import TiltedCard from "./TitleCard";
import Particles from "./Particles";
import { events } from "../data/eventsData";

function Event() {
  return (
    <ParallaxProvider>
      <div className="app bg-black relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <Particles
            particleColors={["#5f20d4", "#ffffff"]}
            particleCount={150}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={200}
          />
        </div>

        <div className="relative z-10">
          <div className="pt-12 pb-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-10 mb-0 pb-10">EVENTS</h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8 pb-12 my-7 mx-[1.5rem]">
            {events.map((event) => (
              <Link to={`/event/${event.id}`} key={event.id} className="p-2 sm:p-4">
                <TiltedCard
                  imageSrc={event.image}
                  altText={event.title}
                  captionText={event.title}
                  containerHeight="400px"
                  imageHeight="400px"
                  rotateAmplitude={15}
                  scaleOnHover={1.05}
                  overlayContent={
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-white">{event.title}</h3>
                      <p className="text-gray-200 text-sm line-clamp-3">{event.description}</p>
                    </div>
                  }
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default Event;
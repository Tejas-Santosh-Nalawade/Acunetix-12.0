import React from 'react';

const SchedulePage = () => {
  const days = [
    {
      day: 1,
      events: [
      { name: 'Timescape', time: '10:00 AM', description: 'Virtual Reality Experience' },
      { name: 'Dpl', time: '2:00 PM', description: 'Design Prototyping Lab' },
      { name: 'Brainiac', time: '4:30 PM', description: 'Quiz Competition' }
      ]
    },
    {
      day: 2,
      events: [
      { name: 'Ctrl Alt Del', time: '9:30 AM', description: 'Coding Challenge' },
      { name: 'Treasure Trove', time: '1:00 PM', description: 'Scavenger Hunt' },
      { name: 'Cinema Eyes Lens', time: '3:30 PM', description: 'Short Film Festival' }
      ]
    },
    {
      day: 3,
      events: [
      { name: 'Game Storm', time: '11:00 AM', description: 'Esports Tournament' },
      { name: 'Code of Lies', time: '2:30 PM', description: 'Programming Puzzle' },
      { name: 'Code-o-Fiesta', time: '5:00 PM', description: 'Final Coding Showdown' }
      ]
    }
    ];

  return (
    <div className="min-h-screen bg-black py-8 px-4 sm:px-6 lg:px-8">
    {/* ... (keep header same) */}
    <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center mt-20 mb-20 md:mb-12 text-transparent">
    Schedule
    </h1>

    <div className="max-w-5xl mx-auto flex flex-col lg:grid lg:grid-cols-3 gap-6 md:gap-8">
    {days.map((day) => (
    <div 
      key={day.day}
      className="w-full mb-6 lg:mb-0 lg:group perspective-1000"
    >
      {/* 3D Container */}
      <div className="relative preserve-3d transition-all duration-500 lg:hover:rotate-x-12 lg:hover:rotate-y-12 h-full">
      {/* Tilted Card Body */}
      <div className="lg:absolute inset-0 bg-gray-800 rounded-lg lg:rounded-2xl shadow-xl transform transition-all duration-500 
      hover:shadow-2xl hover:shadow-purple-500/30
      lg:hover:-translate-y-2 lg:hover:translate-z-10 h-full flex flex-col"
      >
      <div className="p-4 md:p-6 space-y-4 md:space-y-6 flex-grow">
      {/* Day Header */}
      <h2 className="text-2xl md:text-3xl font-bold text-purple-400 mb-3 md:mb-4 border-b border-purple-500/50 pb-2 text-center">
        Day {day.day}
      </h2>
      
      {/* Events Container */}
      <div className="space-y-3 md:space-y-4">
        {day.events.map((event) => (
        <div 
        key={event.name}
        className="transform transition-all duration-300 hover:scale-[1.02] 
        lg:hover:translate-z-5 lg:hover:-translate-y-1"
        >
        {/* Centered Event Card for Mobile */}
        <div className="bg-gray-700/40 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 
        border border-gray-600/20 shadow-lg
        relative before:absolute before:inset-0 before:bg-gradient-to-r 
        before:from-purple-500/10 before:to-pink-500/10 before:rounded-lg
        before:opacity-0 hover:before:opacity-100 before:transition-opacity
        flex flex-col items-center text-center md:text-left md:block">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-2 w-full">
          <h3 className="text-base md:text-lg font-semibold text-red-500">
          {event.name}
          </h3>
          <span className="text-xs md:text-sm text-cyan-300 bg-gray-800 px-2 py-1 rounded-full">
          {event.time}
          </span>
        </div>
        <p className="text-xs md:text-sm text-gray-300 mt-1 md:mt-2 text-center md:text-left">
          {event.description}
        </p>
        </div>
        </div>
        ))}
      </div>
      </div>
      </div>
      </div>
    </div>
    ))}
    </div>

    {/* ... (keep particles same) */}
    <div className="absolute inset-0 pointer-events-none">
    {[...Array(20)].map((_, i) => (
    <div
    key={i}
    className="absolute w-0.5 h-0.5 md:w-1 md:h-1 bg-purple-500 rounded-full animate-float"
    style={{
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`
    }}
    />
    ))}
    </div>
    </div>
  );
};

export default SchedulePage;
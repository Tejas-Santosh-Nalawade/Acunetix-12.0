import React, { useState } from 'react';
import { Users, Trophy, Gamepad2, Swords, Target, Skull, DollarSign } from 'lucide-react';

const GameStormHero = () => {
  const [isHovered, setIsHovered] = useState(false);

  const games = [
    { icon: <Target className="w-6 h-6" />, text: "PUBG", description: "Battle Royale" },
    { icon: <Skull className="w-6 h-6" />, text: "Free Fire", description: "Survival Shooter" },
    { icon: <Swords className="w-6 h-6" />, text: "Valorant", description: "Tactical Shooter" }
  ];

  const teamMembers = [
    { name: "Player 1", role: "Team Captain" },
    { name: "Player 2", role: "Team Member" }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-4 bg-black">
      {/* Header Section */}
      <div className="text-center mb-12 relative">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 mb-4">
          GameStorm
        </h1>
        <p className="text-gray-400 text-xl">Ultimate Gaming Tournament</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column - Event Info */}
        <div className="space-y-6">
          {/* Games List */}
          <div className="bg-gray-900 rounded-xl p-6 space-y-4">
            <h2 className="text-2xl font-bold text-white mb-4">Featured Games</h2>
            {games.map((game, index) => (
              <div 
                key={index}
                className="group flex items-center space-x-4 p-4 bg-gray-800 rounded-lg 
                  transition-all duration-300 hover:bg-gray-700 hover:scale-105"
              >
                <div className="text-red-500 group-hover:text-red-400 transition-colors">
                  {game.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold">{game.text}</h3>
                  <p className="text-gray-400 text-sm">{game.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Team Members Card */}
          <div className="bg-gray-900 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Team Setup</h2>
            <div className="space-y-4">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">{member.name}</h3>
                    <p className="text-gray-400 text-sm">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Column - Event Poster */}
        <div 
          className="relative group lg:col-span-1"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={`
            relative overflow-hidden rounded-xl shadow-2xl transform transition-all duration-500
            ${isHovered ? 'scale-105' : 'scale-100'}
          `}>
            <div className="aspect-w-3 aspect-h-4 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-6">
              <div className="absolute inset-0 bg-black/50 z-10"></div>
              <div className="relative z-20 h-full flex flex-col items-center justify-center text-center space-y-6">
                <Gamepad2 className="w-20 h-20 text-red-500 animate-pulse" />
                <div>
                  <h2 className="text-5xl font-bold text-white mb-2">GameStorm</h2>
                  <p className="text-xl text-gray-300">2025</p>
                </div>
                <div className="flex space-x-4">
                  <Target className="w-8 h-8 text-purple-500 animate-bounce" />
                  <Skull className="w-8 h-8 text-red-500 animate-pulse" />
                  <Swords className="w-8 h-8 text-yellow-500 animate-bounce delay-150" />
                </div>
                <div className="text-gray-300">
                  <p className="text-xl">March 20-23</p>
                  <p>Portland, OR</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Prize & Entry */}
        <div className="space-y-6">
          {/* Prize Pool Card */}
          <div className="bg-gray-900 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Prize Pool</h2>
            <div className="relative p-6 bg-gray-800 rounded-lg overflow-hidden">
              <div className="relative z-10">
                <DollarSign className="w-12 h-12 text-yellow-500 mb-2" />
                <div className="text-4xl font-bold text-white mb-2">$10,000</div>
                <p className="text-gray-400">Total Prize Pool</p>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl"></div>
            </div>
            <div className="mt-4 space-y-2 text-sm text-gray-400">
              <div className="flex justify-between">
                <span>1st Place</span>
                <span className="text-yellow-500">$5,000</span>
              </div>
              <div className="flex justify-between">
                <span>2nd Place</span>
                <span className="text-gray-300">$3,000</span>
              </div>
              <div className="flex justify-between">
                <span>3rd Place</span>
                <span className="text-gray-300">$2,000</span>
              </div>
            </div>
          </div>

          {/* Entry Fee Card */}
          <div className="bg-gray-900 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Entry Details</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-800 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">Team Entry Fee</span>
                  <span className="text-white font-bold">$100</span>
                </div>
                <div className="text-sm text-gray-500">Per team of 2 players</div>
              </div>
              <button 
                className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-red-600 text-white rounded-lg font-semibold 
                  shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl 
                  focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameStormHero;
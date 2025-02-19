// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const sponsors = [
//   {
//     name: "Google",
//     image: "https://storage.googleapis.com/gd-prod/images/a910d418-7123-4bc4-aa3b-ef7e25e74ae6.60c498c559810aa0.webp",
//     description: "Google is a global technology leader, specializing in internet-related services and products.",
//   },
//   {
//     name: "Microsoft",
//     image: "https://blogs.microsoft.com/wp-content/uploads/prod/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen-1024x376.jpg",
//     description: "Microsoft is a multinational technology company known for its software, hardware, and cloud services.",
//   },
//   {
//     name: "Amazon",
//     image: "https://img.freepik.com/premium-vector/amazon-logotype-white-background-logo-internet-service-sale-goods-online-store-platform-arrow-free-shipping-worldwide-shopping-editorial_661108-8065.jpg",
//     description: "Amazon is a global e-commerce and cloud computing giant, revolutionizing online shopping and technology.",
//   },
//   {
//     name: "Facebook",
//     image: "https://cdn.pixabay.com/photo/2021/11/11/12/41/facebook-6786210_1280.png",
//     description: "Facebook is a social media and technology company connecting billions of people worldwide.",
//   },
// ];

// export default function Sponsors() {
//   const [selectedSponsor, setSelectedSponsor] = useState(sponsors[0]);
//   const [hoveredSponsor, setHoveredSponsor] = useState(null);

//   return (
//     <div className="flex flex-col h-screen bg-black text-white p-8 items-center justify-center relative overflow-hidden">
//       {/* Background Glow Effect */}
//       <div className="absolute inset-0 bg-gradient-radial from-purple-900/50 to-black/0 pointer-events-none" />

//       {/* Heading */}
//       <motion.h1
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
//       >
//         OUR SPONSORS
//       </motion.h1>

//       <div className="flex flex-col md:flex-row w-full items-center justify-center gap-8">
//         {/* Left Side - Sponsors List */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="w-full md:w-1/4 flex flex-col space-y-4 border-b md:border-b-0 md:border-r border-gray-700 pb-4 md:pb-0 pr-0 md:pr-4 text-center md:text-left"
//         >
//           {sponsors.map((sponsor) => (
//             <motion.button
//               key={sponsor.name}
//               onClick={() => setSelectedSponsor(sponsor)}
//               onMouseEnter={() => setHoveredSponsor(sponsor)}
//               onMouseLeave={() => setHoveredSponsor(null)}
//               whileHover={{ scale: 1.05, backgroundColor: "#3f3f46" }}
//               whileTap={{ scale: 0.95 }}
//               className={`p-3 rounded-lg transition-all duration-300 font-semibold ${
//                 selectedSponsor?.name === sponsor.name
//                   ? "bg-gray-700 shadow-lg shadow-purple-500/20"
//                   : "bg-gray-800 hover:shadow-lg hover:shadow-purple-500/10"
//               }`}
//             >
//               {sponsor.name}
//             </motion.button>
//           ))}
//         </motion.div>

//         {/* Right Side - Image Frame */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="w-full md:w-3/4 flex flex-col justify-center items-center mt-4 md:mt-0"
//         >
//           {(hoveredSponsor || selectedSponsor) && (
//             <motion.div
//               key={(hoveredSponsor || selectedSponsor).name}
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5 }}
//               className="relative group"
//             >
//               {/* Sponsor Image */}
//               <motion.img
//                 src={(hoveredSponsor || selectedSponsor).image}
//                 alt={(hoveredSponsor || selectedSponsor).name}
//                 whileHover={{ scale: 1.05 }}
//                 className="rounded-lg shadow-lg w-full md:w-3/4 h-auto object-cover border border-gray-700"
//               />

//               {/* Sponsor Description */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileHover={{ opacity: 1, y: 0 }}
//                 className="absolute bottom-0 left-0 right-0 p-4 bg-black/80 backdrop-blur-sm rounded-b-lg text-sm text-gray-300"
//               >
//                 {(hoveredSponsor || selectedSponsor).description}
//               </motion.div>
//             </motion.div>
//           )}
//         </motion.div>
//       </div>

//       {/* Floating Particles Animation */}
//       <div className="absolute inset-0 pointer-events-none">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-purple-500 rounded-full animate-float"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";

const sponsors = [
  {
    id: 1,
    name: "TechCorp",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop",
    description: "Leading technology solutions provider",
    website: "https://example.com",
  },
  {
    id: 2,
    name: "InnovateLabs",
    logo: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=200&h=200&fit=crop",
    description: "Innovation at its finest",
    website: "https://example.com",
  },
  {
    id: 3,
    name: "FutureTech",
    logo: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=200&h=200&fit=crop",
    description: "Shaping the future of technology",
    website: "https://example.com",
  },
  {
    id: 4,
    name: "CodeMasters",
    logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200&h=200&fit=crop",
    description: "Excellence in software development",
    website: "https://example.com",
  },
  {
    id: 5,
    name: "DataDynamics",
    logo: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=200&h=200&fit=crop",
    description: "Data-driven solutions for tomorrow",
    website: "https://example.com",
  },
  {
    id: 6,
    name: "CloudPeak",
    logo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&h=200&fit=crop",
    description: "Cloud computing excellence",
    website: "https://example.com",
  },
];

const SponsorCard = ({ sponsor }) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateY = useTransform(mouseX, [0, 300], [-15, 15]);
  const rotateX = useTransform(mouseY, [0, 300], [15, -15]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  return (
    <motion.div
      className="relative perspective-1000 group"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        rotateY,
        rotateX,
        transformPerspective: 1000,
      }}
    >
      <motion.div
        className="bg-black rounded-2xl p-8 relative overflow-hidden border border-gray-700/50 shadow-2xl transform-gpu"
        style={{
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Card content */}
        <div className="relative z-10">
          <motion.div
            className="relative w-48 h-48 mx-auto mb-8 transform-gpu"
            style={{
              transform: "translateZ(30px)",
            }}
          >
            <motion.img
              src={sponsor.logo}
              alt={sponsor.name}
              className="w-full h-full object-contain rounded-lg"
              style={{
                filter: isHovered ? "grayscale(0) brightness(1.1) drop-shadow(0 0 12px rgba(192,132,252,0.4))" : "grayscale(100%) brightness(0.7)",
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute inset-0 bg-black/90 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center p-8 transform-gpu"
                style={{ transform: "translateZ(40px)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-900 to-cyan-900 bg-clip-text text-transparent mb-4">
                  {sponsor.name}
                </h3>
                <p className="text-gray-400 text-center mb-6 max-w-xs">
                  {sponsor.description}
                </p>
           
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Sponsors = () => {
  return (
    <section className="relative bg-black min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-purple-950 to-cyan-900 rounded-full"
            initial={{
              x: Math.random() * 100 - 50 + "vw",
              y: Math.random() * 100 - 50 + "vh",
              opacity: 0.3,
            }}
            animate={{
              x: ["0%", Math.random() * 100 - 50 + "%", "0%"],
              y: ["0%", Math.random() * 100 - 50 + "%", "0%"],
              transition: {
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "mirror",
              },
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r text-white bg-clip-text text-transparent mb-6">
            Our Sponsors
          </h2>
          <p className="text-gray-900 max-w-2xl mx-auto text-lg md:text-xl">
            Visionary organizations powering our journey through innovation and collaboration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.4 }}
            >
              <SponsorCard sponsor={sponsor} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
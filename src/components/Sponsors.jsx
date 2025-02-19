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
        className="bg-transparent rounded-2xl p-8 relative overflow-hidden border border-slate-700/50 shadow-2xl transform-gpu"
        style={{
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-500/20 to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

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
                <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
                  {sponsor.name}
                </h3>
                <p className="text-gray-200 text-center mb-6 max-w-xs">
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
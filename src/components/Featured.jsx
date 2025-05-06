import React, { useState } from "react";
import { motion } from "framer-motion";

function Featured() {
  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);

  const textVariants = {
    initial: {
      y: "100%",
      opacity: 0,
    },
    hover: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1],
        staggerChildren: 0.035,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-500 pb-20">
        <h1 className='text-6xl font-["Neue Montreal"] tracking-tight'>
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div
            className="relative cardcontainer w-1/2 h-[75vh]"
            onMouseEnter={() => setIsHovering1(true)}
            onMouseLeave={() => setIsHovering1(false)}
          >
            <div className="card absolute left-full text-[#CDEA68] -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] font-[Founders Grotesk] leading-none whitespace-nowrap tracking-tighter text-7xl">
              <h1 className="absolute flex right-full text-[#CDEA68] overflow-hidden translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] font-[Founders Grotesk] leading-none whitespace-nowrap tracking-tighter text-7xl">
                {"SALIENCE LABS".split("").map((item, index) => (
                  <motion.span
                    key={index}
                    variants={textVariants}
                    initial="initial"
                    animate={isHovering1 ? "hover" : "initial"}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
            </div>
            <div className="card w-full h-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png"
              />
            </div>
          </div>
          <div
            className="relative cardcontainer w-1/2 h-[75vh]"
            onMouseEnter={() => setIsHovering2(true)}
            onMouseLeave={() => setIsHovering2(false)}
          >
            <h1 className="absolute right-full text-[#CDEA68] translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] font-[Founders Grotesk] leading-none whitespace-nowrap tracking-tighter text-7xl overflow-hidden">
              {"CARDBOARD SPACESHIP".split("").map((item, index) => (
                <motion.span
                  key={index}
                  variants={textVariants}
                  initial="initial"
                  animate={isHovering2 ? "hover" : "initial"}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;

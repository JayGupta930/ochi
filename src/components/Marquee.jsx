import React from "react";
import { motion } from "motion/react";

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed = '.2' className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004d43]">
      <div className="text border-t-2 border-b-2 border-zinc-300 overflow-hidden flex whitespace-nowrap">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className='text-[14vw] leading-none font-["Founders Grotesk"] font-semibold uppercase mb-8 pt-8 pr-20'
        >
          {" "}
          We are ochi{" "}
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className='text-[14vw] leading-none font-["Founders Grotesk"] font-semibold uppercase mb-8 pt-8 pr-20'
        >
          {" "}
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className='text-[14vw] leading-none font-["Founders Grotesk"] font-semibold uppercase mb-8 pt-8 pr-20'
        >
          {" "}
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;

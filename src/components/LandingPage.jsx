import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div data-scroll data-scroll-speed = "-.3" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "6vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1}}
                    className="mr-[0.1vw] w-[7.5vw] h-[4.5vw] relative -top-[0.01vw] bg-green-500 rounded-sm"
                  ></motion.div>
                )}
                <h1 className='uppercase text-[6vw] leading-[5vw] tracking-tighter font-["Founders Grotesk"] font-medium'>
                  {" "}
                  {item}{" "}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-2 border-zinc-700 mt-32 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] rounded-full border-zinc-500 font-light text-md uppercase">
            {" "}
            start the project{" "}
          </div>
          <div className="w-10 h-10 border-[1px] border-zinc-500 flex items-center justify-center rounded-full ">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

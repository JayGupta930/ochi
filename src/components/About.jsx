import React from "react";

function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className='font-["Neue Montreal"] text-[4vw] leading-[4.5vw] tracking-tighter'>
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>
      <div className="w-full flex gap-5 pt-10 border-t-[1px] mt-20 border-[#a1b562]">
        <div className="w-1/2 ">
            <h1 className="text-5xl">Our Approach:</h1>
            <button className="flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 rounded-full mt-10 text-white">Read More
                <div className="w-2.5 h-2.5 bg-zinc-100 rounded-full"></div>
            </button>
        </div>
        <div className="w-[70vh] h-[70vh] rounded-2xl bg-[#b0c859]"></div>
      </div>
    </div>
  );
}

export default About;

import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-900 flex items-center gap-5 p-10">
      <div className="cardcontainer w-1/2 h-[50vh]">
        <div className="relative card w-full h-full bg-[#004d43] rounded-2xl flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          />
          <button className="absolute px-5 py-1 border-2 left-10 bottom-10 rounded-full">
            &copy;2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
        <div className="relative card w-1/2 h-full bg-[#0f1111] rounded-2xl flex items-center justify-center">
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" />
          <button className="absolute px-5 py-1 border-2 left-10 bottom-10 rounded-full">
            RATING 5.0 IN CLUTCH
          </button>
        </div>
        <div className="relative card w-1/2 h-full bg-[#0f1111] rounded-2xl flex items-center justify-center">
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" />
            <button className="absolute px-5 py-1 border-2 left-10 bottom-10 rounded-full">
                BUSINESS BOOTCAMP ALUMINI 
            </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;

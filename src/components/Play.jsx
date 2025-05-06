import React, { useEffect, useState } from "react";

function Play() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      const radius = 25;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const normalizedX = (deltaX / distance) * Math.min(distance, radius);
      const normalizedY = (deltaY / distance) * Math.min(distance, radius);

      const rotationAngle = Math.atan2(deltaY, deltaX) * (10 / Math.PI);

      setPosition({ x: normalizedX, y: normalizedY });
      setRotation(rotationAngle);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="eyes w-full h-screen overflow-hidden bg-zinc-900">
      <div data-scroll data-scroll-section data-scroll-speed='-.6' className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
            <div
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: "transform 0.1s ease-out",
              }}
              className="relative w-2/3 h-2/3 rounded-full bg-zinc-900"
            >
              <div
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                  transition: "transform 0.1s ease-out",
                }}
                className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="w-7 h-7 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
            <div
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: "transform 0.1s ease-out",
              }}
              className="relative w-2/3 h-2/3 rounded-full bg-zinc-900"
            > 
              <div
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                  transition: "transform 0.1s ease-out",
                }}
                className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              > 
                <div className="w-7 h-7 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Play;

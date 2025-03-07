import React, { useState, useEffect } from "react";

const images = [
  "https://placehold.co/600x400?text=Slide+1",
  "https://placehold.co/600x400?text=Slide+2",
  "https://placehold.co/600x400?text=Slide+3"
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row border border-gray-400 overflow-hidden">
      
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">BEST</p>
          </div>

          <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed">HandMade Picks</h1>

          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">Just For You</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>

      {/* Hero Right Side (Sliding Banner) */}
      <div className="w-full sm:w-1/2 relative overflow-hidden">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <img key={index} className="w-full shrink-0" src={img} alt={`Slide ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;

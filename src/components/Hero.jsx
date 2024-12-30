import React from "react";
import Title from "./Title";

function Hero() {
  return (
    <section className="px-10 h-[510px] w-full">
      <div className="border h-full w-full flex">

        {/* Hero Left */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">Our Bestseller</p>
          </div>
          <h1 className="text-3xl lg:text-5xl leading-relaxed sm:py-3 font-prata">
            Latest Arivalls
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">Shop Now</p>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      <img src='https://i.pinimg.com/1200x/63/2e/1d/632e1df5d7d84a11f94d4c3685536bc4.jpg' className="w-full sm:w-1/2 object-cover object-center" alt="" />
      </div>
    </section>
  );
}

export default Hero;

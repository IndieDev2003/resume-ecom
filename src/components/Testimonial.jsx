import React from "react";
import { testimonialImg } from "../assets";

function Testimonial() {
  return (
    <section className=" w-full sm:px-10 px-2 my-10">
      <div
        className="py-10 h-[450px] w-full border rounded-3xl flex flex-col items-start justify-center px-3 sm:px-10 bg-right-top sm:bg-center"
        style={{
          backgroundImage: `url(${testimonialImg})`,
          backgroundSize: "cover",
          // backgroundPosition: "center",
        }}
      >
        <h2 className="text-2xl text-gray-200">What people said</h2>
        <div className="sm:w-1/3">
          <h3 className="text-5xl">Love the way they handle the order</h3>
          <p className="text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
            numquam ipsum sint illum? Eum repellendus quas, perspiciatis dolorem
            laborum modi optio voluptatibus quod totam dolorum veritatis odit!
            Beatae maxime, dolores quam deleniti accusantium molestias
          </p>
          <div className="mt-3">
            <p className="text-xl">Samantha Williams</p>
            <p className="text-gray-200">Fashion Enthusiast</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;

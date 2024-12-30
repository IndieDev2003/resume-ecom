import React from "react";
import { arrowTop, inspire1, inspire2 } from "../assets";

function Inspiration() {
  return (
    <section className="sm:h-[250px] min-h-[240px] w-full flex gap-2 items-center justify-between px-2 sm:px-10 my-14 sm:my-4 relative overflow-hidden ">
      {/* Text Box */}
      <div className="min-h-[250px]  flex flex-col gap-2 items-start justify-end w-full sm:w-[25%] p-5 rounded-3xl">
        <h3 className="text-6xl sm:text-4xl">Casual Inspirations</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          explicabo
        </p>
        <button className=" border border-black w-fit px-10 py-2 rounded-full">
          Browse Inspiration
        </button>
      </div>

      {/* Image Box  */}
      <div className="h-full  w-[75%]  hidden sm:flex items-center justify-between gap-2 text-white ">
        {/* Image Box 1 */}
        <div
          className="flex-shrink-0 h-full min-w-[50%] w-1/2 bg-cover bg-center flex items-end p-5 justify-between rounded-3xl border"
          style={{ backgroundImage: `url(${inspire1})` }}
        >
          <h2 className="text-5xl">
            Say it <br /> with Shirt
          </h2>
          <img src={arrowTop} className="h-10" alt="" />
        </div>

        {/* image box 2 */}
        <div
          className=" flex-shrink-0 h-full w-1/2 bg-cover bg-top flex items-end p-5 justify-between rounded-3xl border"
          style={{ backgroundImage: `url(${inspire2})` }}
        >
          <h2 className="text-5xl">
            Funky never
            <br /> gets old
          </h2>
          <img src={arrowTop} className="h-10" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Inspiration;

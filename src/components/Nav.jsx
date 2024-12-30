import React from "react";
import { crossSvg, menuSvg } from "../assets";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Nav() {
  const { contextSafe } = useGSAP();

  const openMobileMenu = contextSafe(() => {
    const tl = gsap.timeline();
    tl.set(".mobile-menu", { display: "flex" })
      .to(".mobile-menu", { x: 0, duration: 1 })
      .fromTo(
        ".mobile-menu li",
        {
          x: "100%",
          opacity: 0,
        },
        {
          x: "0%",
          y: 10,
          opacity: 1,
          duration: 1.,
          stagger: 0.2,
          
        }
      )
      .fromTo(
        ".mobile-menu input",
        {
          x: "100%",
          opacity: 0,
        },
        {
          x: "0%",
          y: 10,
          opacity: 1,
        }
      )
      .from(".mobile-menu button", {
        y: -10,
        opacity: 0,
        duration: 0.9,
        // ease: "power3.inOut",
      });
  });

  const closeMobileMenu = contextSafe(() => {
    const tl = gsap.timeline();
    tl.to(".mobile-menu button", { y: -10, opacity: 0, })
      .to(".mobile-menu input", { x: "100%", opacity: 0 })
      .to(".mobile-menu li", {
        x: "100%",
        y: -10,
        opacity: 0,
        stagger: 0.3,
        ease: "power3.inOut",
      })
      .to(".mobile-menu", { x: "100%", duration: 1 })
      .set(".mobile-menu", { display: "none" });
  });

  return (
    <header className="min-h-14 flex items-center justify-between px-2 sm:px-10 nav relative">
      <h2 className="text-3xl">Logo Here</h2>
      <ul className="sm:flex items-center justify-center gap-10 hidden nav-li">
        <li>Home</li>
        <li>Collections</li>
        <li>Contact Us</li>
      </ul>
      <div className="flex items-center justify-center">
        <p className="text-xl">Github</p>
        <img
          src={menuSvg}
          onClick={openMobileMenu}
          className="h-10  cursor-pointer sm:hidden"
          alt=""
        />
      </div>

      {/* Mobile Menu */}
      <nav className="absolute w-full h-screen backdrop-blur-lg top-0 px5 hidden flex-col items-start mobile-menu">
        <img
          src={crossSvg}
          onClick={closeMobileMenu}
          className="h-12 mt-3 rotate-45 cursor-pointer"
          alt="Close Menu"
        />
        <ul className="mt-3 px-5">
          <li className="text-2xl my-2 cursor-pointer">All Products</li>
          <li className="text-2xl my-2 cursor-pointer">About Us</li>
          <li className="text-2xl my-2 cursor-pointer">Contact Us</li>
          <li className="text-2xl my-2 cursor-pointer">Github</li>
        </ul>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-5 items-center justify-center w-full mt-20"
        >
          <input
            type="email"
            className="px-8 py-3 rounded-lg bg-gray-300 text-white w-[90%]"
            placeholder="Enter your email...."
          />
          <button className="px-10 py-2 bg-black text-white rounded-lg">
            Subscribe
          </button>
        </form>
      </nav>
    </header>
  );
}

export default Nav;

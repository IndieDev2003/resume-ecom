import React from "react";

function Footer() {


    const onSubmitHandler = (e) => {
        e.preventDefault();   
    }

  return (
    <footer className="h-max sm:h-[50vh] w-full px-2 sm:px-10 py-10 gap-10 bg-black  text-white grid sm:grid-cols-[1.5fr_1fr_1fr] items-center">
      <div>
        <h2 className="text-3xl">E Commerce Gagan Suman</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ipsam.
          Assumenda repellendus nisi molestias expedita soluta maxime ea,
          aliquam porro! Mollitia voluptatem ipsam velit debitis.
              </p>
              <form onSubmit={onSubmitHandler} className="flex flex-col sm:flex-row gap-2 mt-8 px-2 sm:px-0">
                  <input className="px-8 py-2 border rounded-full bg-transparent placeholder:text-gray-300" type="email" name="" id="" placeholder="Type your email address..." />
                  <button className="px-8 py-2 border rounded-full text-black bg-white w-fit">Submit</button>
              </form>
          </div>
          <div className="flex  gap-10">
               {/* Popular Links */}
          <ul>
              <h3 className="text-4xl">Popular</h3>
              <li>Shoes</li>
              <li>Hats</li>
              <li>T-Shirts</li>
              <li>Jackets</li>
              <li>Accesories</li>
          </ul>

          {/* Menu */}
          <ul>
              <h2 className="text-3xl">Menu</h2>
              <li>All Categories</li>
              <li>Gift Cards</li>
              <li>Special Events</li>
              <li>Testimonials</li>
              <li>Blog</li>
          </ul>
         </div>

          {/* Othe Links */}
          <ul>
              <h2 className="text-3xl">Other</h2>
              <li>Tracking Package</li>
              <li>FAQ</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Terms and Conditions</li>
              <li>Github</li>
          </ul>
    </footer>
  );
}

export default Footer;

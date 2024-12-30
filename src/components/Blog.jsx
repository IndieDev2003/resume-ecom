import React from "react";
import BlogItem from "./Elements/BlogItem";
import { blogImg } from "../assets";

function Blog() {
  return (
    <section className="px-2 sm:px-10  my-10 sm:my-20 sm:h-[450px]">
          <h3 className="text-4xl">From the Blog</h3>
          <div className="h-full py-5 sm:py-12 ">
              <BlogItem blogImg={blogImg}/>
          </div>
    </section>
  );
}

export default Blog;

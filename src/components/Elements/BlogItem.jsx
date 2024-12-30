import React from "react";

function BlogItem({ blogTitle = "", blogDescription = "",blogImg }) {
  const dummyTitle =
    "How to combine your daily outfit to looks  fresh and cool.";
  const dummyDescription =
    "Maybe you don’t need to buy new clothes to have nice, cool, fresh looking outfit everyday. Maybe what you need is to combine your clothes collections. Mix and match is the key.";
 
  const dummyBlogImg = 'https://i.pinimg.com/1200x/7b/61/79/7b617939e5866c1ab534d0473e9a00cc.jpg'
 
 
  return (
    <div className="flex flex-col sm:flex-row h-full w-full justify-between gap-5 sm:gap-10">
      <img
        src={!blogImg?dummyBlogImg:blogImg}
        className="object-cover object-center sm:w-1/2  h-[300px] rounded-3xl"
        alt=""
      />
      <div className="sm:w-1/2">
        <h2 className="text-3xl sm:text-5xl">{!blogTitle ? dummyTitle : blogTitle}</h2>
        <p className="text-base sm:text-lg my-3 text-gray-500">
          {!blogDescription ? dummyDescription : blogDescription}
              </p>
              <button className="border border-black px-10 py-2 rounded-full">Read More</button>
      </div>
    </div>
  );
}

export default BlogItem;

import React, { useState } from "react";
import ProductItem from "./Elements/ProductItem";
import { shoes } from "../assets/products";

function TrendingProducts() {
  const [btnActive, setBtnActive] = useState("shorts");

  return (
    <section className="w-screen px-2 sm:px-10 my-10 py-10 ">
      {/* Sorting */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-2 relative">
        <h3 className="text-2xl">Trending Products</h3>
        <div className="w-full sm:w-fit flex-shrink-0 flex items-center gap-3 overflow-x-scroll">
          <button
            onClick={() => setBtnActive("shorts")}
            className={`${
              btnActive === "shorts" ? "bg-black text-white" : ""
            } px-8 py-2 border border-black rounded-full`}
          >
            Shorts
          </button>
          <button
            onClick={() => setBtnActive("hats")}
            className={`${
              btnActive === "hats" ? "bg-black text-white" : ""
            } px-8 py-2 border border-black rounded-full`}
          >
            Hats
          </button>
          <button
            onClick={() => setBtnActive("jackets")}
            className={`${
              btnActive === "jackets" ? "bg-black text-white" : ""
            } px-8 py-2 border border-black rounded-full`}
          >
            Jackets
          </button>
          <button
            onClick={() => setBtnActive("shoes")}
            className={`${
              btnActive === "shoes" ? "bg-black text-white" : ""
            } px-8 py-2 border border-black rounded-full`}
          >
            Shoes
          </button>
          <button
            onClick={() => setBtnActive("t-shirt")}
            className={`${
              btnActive === "t-shirt" ? "bg-black text-white" : ""
            } px-8 py-2 border border-black rounded-full w-fit flex-shrink-0`}
          >
            T-Shirt
          </button>
        </div>
      </div>

      {/* Product Listing */}
      <div className="mt-4 w-full flex flex-col h-max gap-2">
        {/* Listing Upper */}
        <div className="h-max w-full flex flex-col sm:flex-row gap-2">
          <div className="flex gap-2 sm:w-1/2">
            <ProductItem
              productImage={shoes[0].image}
              productName={shoes[0].name}
              productPrice={shoes[0].price}
            />
            <ProductItem
              productImage={shoes[1].image}
              productName={shoes[1].name}
              productPrice={shoes[1].price}
            />
          </div>
          <div className="sm:w-1/2">
            <ProductItem
              productImage={shoes[2].image}
              productName={shoes[2].name}
              productPrice={shoes[2].price}
            />
          </div>
        </div>

        {/* Listing Bottom */}

        <div className="h-max w-full flex sm:flex-row flex-col-reverse gap-2">
          <div className="sm:w-1/2">
            <ProductItem
              productImage={shoes[3].image}
              productName={shoes[3].name}
              productPrice={shoes[3].price}
            />
          </div>
          <div className="flex gap-2 sm:w-1/2">
            <ProductItem
              productImage={shoes[4].image}
              productName={shoes[4].name}
              productPrice={shoes[4].price}
            />
            <ProductItem
              productImage={shoes[5].image}
              productName={shoes[5].name}
              productPrice={shoes[5].price}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrendingProducts;

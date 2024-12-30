import React from "react";
import ColorSelectItem from "./Elements/ColorSelectItem";

function SelectByColor() {
  const productColors = [
    {
      title: "Green",
      color: "green",
    },
    {
      title: "Blue",
      color: "blue",
    },
    {
      title: "Red",
      color: "red",
    },
    {
      title: "Black",
      color: "black",
    },
    {
      title: "Yellow",
      color: "yellow",
    },
    {
      title: "Purple",
      color: "purple",
    },
    {
      title: "Pink",
      color: "pink",
    },
    {
      title: "Brown",
      color: "brown",
    },
    {
      title: 'Lime Green',
      color: 'limegreen',
    },
  ];

  return (
    <section className="min-h-[150px] flex flex-col sm:flex-row gap-10 sm:items-center justify-start sm:px-10 px-2 my-10 ">
      <h2 className="text-5xl">
        Explore
        <br />
        by Colors
      </h2>
      <div className="sm:ml-20 sm:w-[60%] flex flex-row flex-wrap gap-2 ">
        {productColors.map((color) => (
          <ColorSelectItem
            key={color.title}
            colorName={color.title}
            color={color.color}
          />
        ))}
      </div>
    </section>
  );
}

export default SelectByColor;

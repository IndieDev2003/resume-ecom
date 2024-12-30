import React from "react";

function ColorSelectItem({ color = "", colorName = "" }) {
  return (
    <button className="w-fit inline-flex px-2 pr-3 py-2 border border-black justify-between items-center gap-2 rounded-full  text-lg">
      <div style={{backgroundColor:color}} className={`h-7 w-7 ${!color?'bg-red-500':''}   rounded-full`}></div>{!colorName?'enter name ':colorName}
    </button>
  );
}

export default ColorSelectItem;

import React from "react";

function WhyUsItem({ whyUsTitle = "", whyUsPara = "", whyUsImg }) {
  const dummyText =
    "lorem ipsum dolor sit amlorem ipsum dolor sit amlorem ipsum dolor sit amlorem ipsum dolor sit amlorem ipsum dolor sit am dolor sit amlorem ipsum dolor sit amlorem ipsum dolor sit am dolor sit amlorem ipsum dolor sit amlorem ipsum dolor sit am";
  const placeholderImage =
    "https://i.pinimg.com/1200x/98/8d/d5/988dd506876e3aa909715b1e4e493c9e.jpg";
  return (
    <div className="min-h-[300px] sm:w-[32%] flex flex-col justify-evenly gap-2 border p-4 rounded-3xl shadow-lg drop-shadow-lg">
      <img
        src={!whyUsImg ? placeholderImage : whyUsImg}
        className="w-14 sm:w-20 h-14 sm:h-20 object-cover rounded-full"
        alt=""
      />
      <div className="">
        <h4 className="text-3xl sm:text-5xl text-start">
          {!whyUsTitle ? "Enter Prop Title" : whyUsTitle}
        </h4>
        <p className="text-sm">{!whyUsPara ? dummyText : whyUsPara}</p>
      </div>
    </div>
  );
}

export default WhyUsItem;

import React from "react";
import WhyUsItem from "./Elements/WhyUsItem";
import { heartSvg, phoneSvg, refundSvg } from "../assets";

function WhyUs() {
  const whyUsArray = [
    {
      title: "Take Care With Love",
      img: heartSvg,
      para: "We take care your package with full of attention and of course full of love. We want to make sure you’ll receive your package like you receive your birthday gift.",
    }, {
      title: "Secure and Reliable",
      img: refundSvg,
      para: "We're committed to providing a secure and reliable experience for our customers. We use the best payment methods and always make sure your money is safe and secure.",
    },
    {
      title: "24/7 Support",
      img: phoneSvg,
      para: "We're here to help you. We're always ready to answer your questions or to help you find the perfect gift for your loved one. We're here to make sure you're happy with your purchase.",
    }
  ];

  return (
    <div className="px-2 sm:px-10 flex flex-col gap-2">
      <h2 className="text-5xl sm:text-6xl sm:max-w-[45%]">
        Why you'll love to shop on our website
      </h2>
      <div className="my-10 flex flex-col sm:flex-row items-center justify-between gap-2">
        {
          whyUsArray.map((item, index) => (
            <WhyUsItem key={index} whyUsImg={item.img} whyUsPara={item.para} whyUsTitle={item.title} />
          ))
        }
      </div>
    </div>
  );
}

export default WhyUs;

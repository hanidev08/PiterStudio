import React from "react";
import { Bounded } from "./Bounded";

export const NavBar = () => {
  return (
    <Bounded className="pt-3 sm:pt-5">
      <div className="flex md:grid md:grid-cols-12 justify-between text-xl leading-[23px]">
        <div className=" uppercase font-display sm:col-span-2 ">
          PiterStudio
        </div>
        <div className=" font-display md:hidden">Menu</div>

        <div className="sm:col-span-4 font-display max-md:hidden">
          Creative Studio
        </div>

        <div className=" sm:col-span-2 font-display flex flex-col max-md:hidden ">
          <span>Work</span>
          <span>Studio</span>
          <span>Contact</span>
        </div>

        <div className=" sm:col-span-2 font-display max-md:hidden">
          Creative Direction & Personal Moving Images & Photo
        </div>
        <div className=" sm:col-start-12 max-md:hidden  font-display text-[15px]">
          Paris 06:18 AM{" "}
        </div>
      </div>
      <div className=" text-[21px] leading-6 grid grid-cols-4 md:grid-cols-12  mt-[150px] md:mt-[61px]">
        <div className=" col-span-2 md:col-start-7 md:col-end-8 font-display flex  flex-col ">
          <span>Gallery</span>
          <span className=" opacity-50">Index</span>
        </div>

        <div className=" col-span-2 md:hidden font-display ">
          Creative Direction & Personal Moving Images & Photo
        </div>
      </div>
    </Bounded>
  );
};

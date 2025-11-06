"use client";
import React from "react";
import { Bounded } from "./Bounded";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavBar = () => {
  const pathname = usePathname();
  return (
    <Bounded className="pt-3 sm:pt-5">
      {pathname === "/" ? (
        <div className="flex md:grid md:grid-cols-12 justify-between text-xl leading-[23px]">
          <Link href="/" className=" uppercase font-display md:col-span-3 ">
            PiterStudio
          </Link>
          <div className=" font-display md:hidden">Menu</div>

          <div className="md:col-span-3 font-display max-md:hidden">
            Creative Studio
          </div>

          <div className=" md:col-span-2 font-display flex flex-col max-md:hidden ">
            <span>Work</span>
            <span>Studio</span>
            <span>Contact</span>
          </div>

          <div className=" md:col-span-3 font-display max-md:hidden flex  flex-col">
            <span>Gallery</span>
            <span className=" opacity-50">Index</span>
          </div>

          <div className=" md:col-span-1 max-md:hidden  font-display flex  justify-end">
            Contact
          </div>
        </div>
      ) : (
        <Link
          href={"/"}
          className=" z-50 uppercase text-xl leading-[23px] absolute right-5 max-md:right-3 font-display"
        >
          Close
        </Link>
      )}
    </Bounded>
  );
};

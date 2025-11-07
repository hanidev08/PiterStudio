"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const links = [
  {
    title: "Aztech Mountain,",
    src: "img1.png",
  },
  {
    title: "Bastide,",
    src: "img2.png",
  },
  {
    title: "Bravo Sierra,",
    src: "img3.png",
  },
  {
    title: "Brown Harris Stevens,",
    src: "img4.png",
  },
];

const blur = {
  initial: {
    opacity: 1,
  },
  open: {
    opacity: 0.4,
    transition: { duration: 0.3 },
  },
  closed: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

export const Links = () => {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <div>
      <div className="grid grid-cols-12 max-md:hidden">
        <div className=" col-start-4 col-end-6 mt-[125px] relative max-w-[245px] w-[17vw] aspect-5/5">
          <Image
            src={`/${links[selectedLink.index].src}`}
            alt=""
            fill
            className=" object-cover"
          />
        </div>
      </div>

      <div className=" grid grid-cols-1 items-start md:grid-cols-12 mt-[100px] md:mt-[125px] max-md:gap-y-10 font-display text-xl leading-[23px]">
        <div className=" col-span-1 md:col-span-3 uppercase aboutStudio ">
          Client
        </div>
        <div className="col-span-1 md:col-span-9  font-sans clientStudio">
          {links.map((link, index) => {
            const { title } = link;
            return (
              <div key={`l_${index}`} className="inline-flex">
                <motion.p
                  className=" cursor-pointer"
                  onMouseOver={() => {
                    setSelectedLink({ isActive: true, index });
                  }}
                  onMouseLeave={() => {
                    setSelectedLink({ isActive: false, index });
                  }}
                  variants={blur}
                  animate={
                    selectedLink.isActive && selectedLink.index != index
                      ? "open"
                      : "closed"
                  }
                >
                  {title}
                </motion.p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

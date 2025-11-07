"use client";
import React, { useState } from "react";
import { Bounded } from "./Bounded";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 0.35 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.35 },
  },
};

const height = {
  initial: {
    height: 0,
  },
  enter: {
    height: "100vh",
    transition: { duration: 0.5 },
    ease: [0.76, 0, 0.24, 1],
  },
  exit: {
    height: 0,
    transition: { duration: 0.5 },
    ease: [0.76, 0, 0.24, 1],
  },
};

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "Studio",
    href: "/studio",
  },

  {
    title: "Contact",
    href: "/contact",
  },
];

const translate = {
  initial: {
    y: "100%",
  },
  enter: {
    y: 0,
    transition: { duration: 0.5, delay: 0.7 },
  },
  exit: {
    y: "100%",
    transition: { duration: 0.5 },
  },
};
export const NavBar = () => {
  const pathname = usePathname();
  const lastSegment = pathname.split("/").pop();

  const [isActive, setIsActive] = useState(false);

  const getChars = (word: string) =>
    word.split("").map((char, i) => (
      <motion.span
        variants={translate}
        initial="initial"
        animate="enter"
        exit="exit"
        key={char + i}
      >
        {char}
      </motion.span>
    ));

  return (
    <Bounded className="pt-3 sm:pt-5">
      {pathname === `/image/${lastSegment}` ? (
        <Link
          href={"/"}
          className=" z-50 uppercase text-xl leading-[23px] fixed right-5 max-md:right-3 font-display"
        >
          Close
        </Link>
      ) : (
        <>
          <div className="flex md:grid md:grid-cols-12 justify-between text-xl leading-[23px]">
            <Link href="/" className=" uppercase font-display md:col-span-3 ">
              PiterStudio
            </Link>
            <div
              onClick={() => {
                setIsActive(!isActive);
              }}
              className=" font-display md:hidden relative flex items-center justify-center"
            >
              <motion.p
                variants={opacity}
                animate={!isActive ? "open" : "closed"}
              >
                Menu
              </motion.p>
              <motion.p
                variants={opacity}
                animate={isActive ? "open" : "closed"}
                className=" absolute opacity-0 text-white z-50"
              >
                Close
              </motion.p>
            </div>

            <div className="md:col-span-3 font-display max-md:hidden">
              Creative Studio
            </div>

            <div className=" md:col-span-2 font-display flex flex-col max-md:hidden ">
              <Link
                href="/studio"
                style={{
                  opacity: `${lastSegment === "studio" ? "" : "50%"}`,
                }}
              >
                Studio
              </Link>
              <Link
                href="/contact"
                style={{
                  opacity: `${lastSegment === "contact" ? "" : "50%"}`,
                }}
              >
                Contact
              </Link>
            </div>

            <div className=" md:col-span-3 font-display max-md:hidden flex  flex-col">
              <span>Gallery</span>
              <span className=" opacity-50">Index</span>
            </div>

            <div className=" md:col-span-1 max-md:hidden  font-display flex  justify-end">
              Contact
            </div>
          </div>
          <AnimatePresence mode="wait">
            {isActive && (
              <>
                <motion.nav
                  variants={height}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  className=" px-3 bg-black absolute top-0 left-0  text-white w-full z-40"
                >
                  <div className=" flex items-start justify-center flex-col h-full overflow-hidden">
                    {links.map((link, index) => {
                      const { title, href } = link;
                      return (
                        <Link
                          key={`l_${index}`}
                          href={href}
                          onClick={() => {
                            setIsActive(false);
                          }}
                        >
                          <motion.p className=" text-5xl font-sans overflow-hidden flex ">
                            {getChars(title)}
                          </motion.p>
                        </Link>
                      );
                    })}
                  </div>
                </motion.nav>
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </Bounded>
  );
};

{
  /* {settings.data.navigation_link.map((link) => (
                    <PrismicNextLink key={link.key} field={link} />
                  ))} */
}

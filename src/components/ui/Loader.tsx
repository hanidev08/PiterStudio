"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "../../../lib/utils";
import React, { useRef } from "react";
import "./style.scss";

interface LoaderProps {
  className?: string;
  onComplete?: () => void;
  backgroundColor?: string;
}
export const Loader: React.FC<LoaderProps> = ({
  className = "",
  onComplete,
  backgroundColor = "#000",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const progressNumberRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        onComplete: () => {
          onComplete?.();
        },
      });

      tl.to(progressRef.current, {
        scaleX: 1,
        duration: 5,
        ease: "power3.inOut",
      })
        .to(
          progressNumberRef.current,
          {
            x: "100vw",
            duration: 5,
            ease: "power3.inOut",
          },
          "<"
        )
        .to(
          progressNumberRef.current,
          {
            textContent: "100%",
            duration: 5,
            roundProps: "textContent",
          },
          "<"
        )
        .to(progressNumberRef.current, {
          y: 24,
          autoAlpha: 0,
        })
        .to(
          containerRef.current,
          {
            y: "-100%",
            duration: 0.8,
            ease: "power2.inOut",
            delay: 0.3,
          },
          "-=0.2"
        );
    },
    { scope: containerRef }
  );
  return (
    <div
      ref={containerRef}
      className={cn(" fixed inset-0 z-50 overflow-hidden", className)}
      style={{ backgroundColor }}
    >
      <div className=" absolute bottom-0 left-0 h-[5vh] w-full z-30">
        <div
          className="w-full h-full bg-white scale-x-0 origin-left"
          ref={progressRef}
        ></div>
        <span
          className=" font-display absolute -left-[10vw] top-1/2 -translate-y-1/2 z-40 whitespace-nowrap text-black text-xl leading-[23px]"
          ref={progressNumberRef}
        >
          0
        </span>
      </div>
    </div>
  );
};

// import React from "react";
// import { words } from "../../../data";
// import "./style.scss";

// export const Loader = () => {
//   return (
//     <div className=" relative h-full w-full  inset-0 overflow-hidden">
//       <div className=" absolute bottom-0 left-0 h-[5vh] w-full z-30">
//         <div className=" w-full h-full bg-black --scale-x-0 origin-left"></div>
//         <span className=" absolute -left-[5vw] top-1/2 -translate-y-1/2 z-40 whitespace-nowrap text-white text-[3.2rem]">
//           0
//         </span>
//       </div>
//       <div className="loader w-full h-full flex justify-center items-center flex-col bg-white z-20">
//         <div className=" relative overflow-hidden h-[41.8rem]">
//           <div className="overlay  absolute inset-0 h-full z-20"></div>
//           <div className="">
//             {words.map((word, index) => {
//               return (
//                 <span key={index} className=" block text-[1.2rem]">
//                   {word}
//                 </span>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

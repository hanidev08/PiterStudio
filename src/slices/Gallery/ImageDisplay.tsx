import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import React from "react";

type ImageDisplayProps = {
  id: string;
};
export const ImageDisplay = async ({ id }: ImageDisplayProps) => {
  const client = createClient();
  const image = await client.getByID<Content.ImageDocument>(id);
  return (
    <div className="col-span-4 md:col-span-3">
      <div className="flex flex-col gap-y-[15px] md:gap-y-2.5 ">
        <div className=" relative aspect-7/5 w-full max-w-3xl md:w-[23.5vw] md:max-w-[352px]">
          <PrismicNextImage
            field={image.data.image}
            fill
            alt=""
            className="object-cover"
          />
        </div>
        <div className=" font-display">
          <PrismicRichText field={image.data.title} />
        </div>
      </div>
    </div>
  );
};
